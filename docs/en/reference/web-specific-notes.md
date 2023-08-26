---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web 固有の注意点
permalink: /ja/trouble-shooting/web-specific-notes
---

## 既知の制約

### サポートされる機能

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。
詳細は [実装状況](/ja/status) を確認してください。

### ファイルシステム

OpenSiv3D Web版では、`Dialog::OpenFile` などの関数を使って、ユーザが明示的に読み取りを許可したファイル以外の、**ユーザのファイルシステム上にあるファイルに対して自由にアクセスすることができません**。

実行時に必要なファイルは、emscirpten の `--preload` オプションを使って、**ビルド時にあらかじめバンドルする必要**があります。
バンドルされたファイルは、起動時に仮想ファイルシステムに読み込まれ、通常のファイルアクセス関数で読み書きができるようになります。

#### Visual Studio

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[Emscripten リンカ] > [入力] > [プリロードされるリソースファイル] に、仮想ファイルシステムに追加したいファイルまたはフォルダのパスを、`(パス)@(仮想ファイルシステム上でのフルパス)` の形式で追加します。

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

#### VSCode

`.vscode/Link.Debug.rsp` または `.vscode/Link.Release.rsp` を開き、プリロードされるファイルまたはフォルダのパスを、`--preload-file (パス)@(仮想ファイルシステム上でのフルパス)`の形式で追記します。

![preload-files-on-vscode.png](/assets/img/building/web-specific-notes/preload-files-on-vscode.png)

### ファイルを保存するダイアログ

`s3d::Dialog::SaveFile` は常に無効値を返します。
仮想ファイルシステムからファイルをダウンロードするには、`s3d::Platform::Web::DownloadFile` を使います。

```cpp
  //
  // Web 版ではサポートされない書き方
  //
  // if (auto path = Dialog::SaveFile())
  // {
  //   image.save(*path);
  // }
  //

  image.save(U"a.png");
  Platform::Web::DownloadFile(U"a.png");
```

### 最初のユーザアクションがあるまで音が鳴らない

一部のブラウザにおいて、キーボードやマウス、タッチスクリーンの入力があるまで、WebGL アプリが音を出せないように制限をかける場合があります。

### iPhone でフルスクリーンに移行できない

iPhone はフルスクリーン表示の機能がありません。

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

OpenSiv3D for Web は、シングルスレッドで動作するように設計されています。
そのため、**AsyncTask** や **std::thread** は期待した動作をしません。

```cpp
  //
  // Web 版ではサポートされない書き方
  //
  AsyncTask task
  {
    [&]
    {
      std::this_thread::sleep_for(10s);
      Console << U"Done.";
    }
  };
```

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

### ワイヤーフレーム描画

WebGL バックエンドでは、WebGL 2.0 にワイヤーフレーム描画の機能がないため、利用することができません。

```cpp
# include <Siv3D.hpp>

void Main()
{
	while (System::Update())
	{
    // Web 版では無視されます
		const ScopedRenderStates2D rasterizer{ RasterizerState::WireframeCullNone };
		
		Shape2D::Heart(200, Scene::Center()).draw(Palette::Skyblue);
	}
}
```