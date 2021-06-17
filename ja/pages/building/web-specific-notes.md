---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web 固有の注意点
permalink: /ja/building/web-specific-notes
---

## ゲームループの設計

OpenSiv3D Web版では、OpenSiv3D デスクトップ版と同じように while 文でメインループを作ってしまうと、ブラウザがマウス入力やキーボード入力といったイベントを処理できなくなり、タブごとブラウザがフリーズしてしまいます。

そのため、**メインループ部分を関数に切り出し**、その関数をフレーム開始時に呼ばれる**コールバック関数として登録する**必要があります。

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

## ファイルシステム

OpenSiv3D Web版では、**ユーザのファイルシステムにアクセスすることができません**。

実行時に必要なファイルは、emscirpten の `--preload` オプションを使って、**ビルド時にあらかじめバンドルする必要**があります。
バンドルされたファイルは、起動時に仮想ファイルシステムに読み込まれ、通常のファイルアクセス関数で読み書きができるようになります。

## サポートされる機能

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。
詳細は [実装状況](/ja/status) を確認してください。

## ほかプラットフォームとの差異

### 音声ファイルのデコード

Audio コンストラクタを使った .mp3 と .aac ファイルのデコードはサポートされていません。
`std::future<Audio>` を返す `s3d::Platforms::Web::AudioProcessing::DecodeAudioFromFile` を使ってください。

```cpp
  // 
  // Web 版ではサポートされていない書き方
  //
  // Audio audio { "/example/test.mp3" };
  Audio audio;
  std::future<Audio> audio_future = s3d::Platforms::Web::AudioProcessing::DecodeAudioFromFile("/example/test.mp3");

  // デコードが終わったかチェック
  if (audio_future.valid() && audio_future.wait_for(0s) == std::future_status::ready)
  {
    audio = audio_future.get();
  }
```

### ファイルを開くダイアログ

`s3d::Dialog::Open**` は常に空のオブジェクトを返します。
`std::future<**>` を返す `s3d::Platforms::Web::Dialog::Open**` を使ってください。

```cpp
  // 
  // Web 版ではサポートされていない書き方
  //
  // Audio audio = Dialog::OpenAudio();
  Audio audio;
  std::future<Audio> audio_future = s3d::Platforms::Web::Dialog::OpenAudio();

  // デコードが終わったかチェック
  if (audio_future.valid() && audio_future.wait_for(0s) == std::future_status::ready)
  {
    audio = audio_future.get();
  }
```

### ファイルを保存するダイアログ

`s3d::Dialog::Save` は常に仮想デバイス "/dev/save" を返します。
これはつまり、ユーザがどの形式でファイルを保存しようとしているかを問い合わせることはできないということを意味します。

### クリップボード

テキストのコピーと貼り付けのみサポートされています。
(そして、FireFox ではこの機能は無効化されています。)

`std::future<String>` を返す `s3d::Platforms::Web::Clipboard::GetText` を使ってください。
(`s3d::Clipboard::SetText` は通常通り使えます。)

```cpp
  // 
  // Web 版ではサポートされていない書き方
  //
  // String text;
  // 
  // if (Clibboard::GetText(text))
  // {
  //
  // }
  future<String> text_future;
  String text;

  text_future = Platforms::Web::Clipboard::GetText();

  // テキストが貼り付けられたか問い合わせる
  if (text_future.valid() && text_future.wait_for(0s) == std::future_status::ready)
  {
    text = text_future.get();
  }
```
