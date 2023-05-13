# Windows + Visual Studio Code で Siv3D for Web プログラミングを始める

Web 版 Siv3D を試験的な機能として提供しています。Web 版はいくつか注意点があるため、Siv3D の使用に慣れた中級者以上を対象としています。利用にあたって困ったことがあれば Siv3D Discord サーバの `#web` チャンネルで質問してください。

## 1. システム要件

### 1.1 開発者システム要件

Visual Studio Code で OpenSiv3D v0.6.9 プログラミングをするのに必要な開発環境です。

|  |  |
|--|--|
| OS | Windows 10 (64-bit) / Windows 11 |
| CPU | Intel または AMD 製の CPU |
| 映像出力 | モニタなど、何らかの映像出力装置があること |
| 音声出力 | 何らかの音声出力装置があること |
| 開発環境 | emscripten compiler frontend 3.1.20 |
| ブラウザ | <ul><li>Google Chrome 85.0 以降</li><li>Mozilla FireFox 78.0 以降</li></ul> |

### 1.2 アプリ動作システム要件

OpenSiv3D v0.6.6 Web 版を使って開発されたアプリケーションを実行するのに必要な環境です。ゲームやアプリを配布するときの説明書に記載すると良いでしょう。

|  |  |
|--|--|
| OS | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey 以降 / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU | Intel または AMD 製の CPU |
| 映像出力 | モニタなど、何らかの映像出力装置があること |
| 音声出力 | 何らかの音声出力装置があること |
| ブラウザ | <ul><li>Google Chrome 85.0 以降</li><li>Microsoft Edge 85.0 以降</li><li>Mozilla FireFox 78.0 以降</li><li>Safari 15.1 以降</li></ul> |

## 2. 開発環境のセットアップ

### 2.1 コンパイラのインストール

1. **[emscripten 3.1.20 Installer](//github.com/nokotan/EmscriptenInstaller/releases/download/v0.1.2/EmscriptenOffline.exe)** をダウンロードして実行します

### 2.2 Visual Studio Code 拡張機能のインストール

1. 左側の拡張機能タブに次の名前を入力して拡張機能を検索し、インストールします。

  - C/C++ VSCode 拡張
  - Debugger for Firefox
  - WebAssembly on Chrome Debugger

## 3. プロジェクトテンプレートのダウンロード

1. **[プロジェクトテンプレートのリポジトリ :material-open-in-new:](https://github.com/nokotan/OpenSiv3DForWeb-VSCode)** から、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押して、プロジェクトテンプレートをダウンロードします。ダウンロードができたら、ファイルを展開します

## 4. Siv3D アプリのビルド

1. プロジェクトテンプレートがあるフォルダを Visual Studio Code で開きます
1. サンプルプログラム (Main.cpp) が最初から用意されています
1. 実行とデバッグタブで `Launch Chrome against localhost` または `Launch Firefox against localhost` を選択して、実行ボタン ▶️ を押します。
1. 実行中のプログラムは、++esc++ を押すか、ブラウザタブを閉じると終了します

## 5. Web 版の出力ファイルサイズの削減とその他の注意事項

1. Web 版のビルドでは、デフォルトで `engine/` と `example/` のすべてのファイルを最終出力に同梱するため、最終出力ファイルのサイズは Release ビルドでも合計数十 MB と大きくなります。そうしたアプリケーションを Web で公開すると、アクセスした利用者がファイルのダウンロードに時間がかかってしまうため、実際にアプリケーションを公開する際は、不要なファイルを削除する必要があります（参考: [チュートリアル 41 | アプリの公開](https://zenn.dev/reputeless/books/siv3d-documentation/viewer/tutorial-release#41.9-%E5%90%8C%E6%A2%B1%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%8C%E7%84%A1%E3%81%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB))。また、Emscripten リンカの設定において「追加の依存ファイル」から不要なライブラリを削除することで、Web 版の出力ファイルのサイズは、**最小で数 MB 程度** までコンパクトにできます。詳しくは Siv3D Discord サーバの `#web` チャンネルでご相談ください
1. Web 版のシーンのリサイズモードはデフォルトで `ResizeMode::Virtual` であるため、ブラウザの拡大縮小に応じてシーンのサイズが変化します。これを防ぐには `Scene::SetResizeMode(ResizeMode::Keep);` と `Scene::Resize(width, height);` でシーンサイズを固定します
