---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web 固有の注意点
permalink: /ja/building/web-specific-notes
---

## サポートされる機能

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。
詳細は [実装状況](/ja/status) を確認してください。

## ファイルシステム

OpenSiv3D Web版では、**ユーザのファイルシステムにアクセスすることができません**。

実行時に必要なファイルは、emscirpten の `--preload` オプションを使って、**ビルド時にあらかじめバンドルする必要**があります。
バンドルされたファイルは、起動時に仮想ファイルシステムに読み込まれ、通常のファイルアクセス関数で読み書きができるようになります。

<!-- TODO: detailed guides of each development environment -->

## ほかプラットフォームとの差異

### 通信

外部 WebSocket サーバへの接続のみサポートされています。
保護されたページ (URL が `https://` で始まる Web ページ) では、保護された WebSocket サーバにのみ接続可能です。

<!-- TODO: asyncify allows busy loop -->

```cpp
  const IPv4Address ip = IPv4Address::Localhost();
  constexpr uint16 port = 50000;

  TCPClient client;

  client.connect(ip, port);

  Point serverPlayerPos{ 0, 0 };
  const Point clientPlayerPos = Cursor::Pos();
  
  // 送信
  client.send(clientPlayerPos);

  //
  // Web 版では `client.read` を呼び出す無限ループはサポートされません。
  // ブラウザがフリーズしてしまいます。
  //
  // while (client.read(serverPlayerPos));
  //

  // 受信
  client.read(serverPlayerPos);
```

### マルチスレッド

### サポートされないテクスチャフォーマット

モバイル環境では、ハードウェアの制約上、フォーマットが `TextureFormat::R32_Float` のテクスチャを生成することができません。
代わりに、フォーマットが `TextureFormat::R16G16_Float` のテクスチャを使用してください。

### ユーザーアクションが必要な機能

以下の機能は、ユーザーアクションと同時に使用する必要があります。

* Dialog::\*
* ClipBoard::ReadText, SetText
* Window::SetFullscreen
* VideoReader (on Safari)
* System::LaunchBrowser

```cpp
//
// `Window::SetFullscreen` の呼び出した後の、最初のユーザー操作があった時にフルスクリーンになります。
// Window::SetFullscreen(true);
//

if (SimpleGUI::Button(U"Full Screen", Point{ 20, 20 }))
{
  //
  // SimpleGUI::Button()` はユーザーのクリック操作によって true を返すので、
  // `Window::SetFullscreen` の呼び出しは期待通りのタイミングで動作します。
  //
  Window::SetFullscreen(true);
}
```

## 他プラットフォームと異なる書き方ができる機能

### ゲームループ

**emscripten Asyncify** のおかげで、無限ループの中でもブラウザーが JavaScript イベントを処理できるようにできます。

```cpp
# include <Siv3D.hpp>

void Main()
{
  // 初期化...

  while (System::Update())
  {
    // 毎フレーム行う処理
  }
}
```

別の方法として、`s3d::Platform::Web::System::SetMainLoop` を使って、毎フレーム呼ばれる関数を登録することができます。

```cpp
# include <Siv3D.hpp>

void Main()
{
  // 初期化...

  Platform::Web::System::SetMainLoop([&]()
  {
    System::Update();
    // フレームごとの処理..
  });
}
```

### ファイルを保存するダイアログ

`s3d::Dialog::Save` は常に仮想デバイス "/dev/save" を返します。
これはつまり、ユーザがどの形式でファイルを保存しようとしているかを問い合わせることはできないということを意味します。

## AsyncTask を使う機能

AudioDecoding やクリップボードなどの、一部の機能は、数秒の間メインループをブロックする可能性があります。

### 音声ファイルのデコード

`s3d::Platform::Web::AudioProcessing::DecodeAudioFromFile` が `AsyncTask<Wave>` を返します。

<!-- TODO: hungs with asyncify -->

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
  //
  // Audio audio { "/example/test.mp3" };
  Audio audio;
  AsyncTask<Wave> audioTask = s3d::Platform::Web::AudioDecoder::DecodeFromFile(U"/example/test.mp3");

  // デコードが終わったかチェック
  if (audioTask.isReady())
  {
    audio = Audio{ audioTask.get() };
  }
```

### ファイルを開くダイアログ

`s3d::Platforms::Web::Dialog::Open**` が `AsyncTask<**>` を返します。

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
  //
  // Audio audio = Dialog::OpenAudio();
  Audio audio;
  AsyncTask<Audio> audioTask = s3d::Platforms::Web::Dialog::OpenAudio();

  // ユーザーがファイルを選択し、デコードが終わったかチェック
  if (audioTask.isReady())
  {
    audio = audioTask.get();
  }
```

### クリップボード

テキストのコピーと貼り付けのみサポートされています。
(そして、FireFox ではこの機能は無効化されています。)

s3d::Platforms::Web::Clipboard::GetText` が `AsyncTask<String>` を返します。
(`s3d::Clipboard::SetText` は通常通り使えます。)

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
  //
  // String text;
  // 
  // if (Clibboard::GetText(text))
  // {
  //
  // }
  AsyncTask<String> textTask;
  String text;

  textTask = Platforms::Web::Clipboard::GetText();

  // テキストが貼り付けられたか問い合わせる
  if (textTask.isReady())
  {
    text = textTask.get();
  }
```
