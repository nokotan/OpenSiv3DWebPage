# マルチスレッド

OpenSiv3D for Web では、emscripten の pthread サポートを使ったマルチスレッド対応版を試験的に提供しています。
通常版の代わりにマルチスレッド対応版を使用する事で、`AsyncTask` を使った非同期処理など、通常版では使えない機能を使用することができるようになります。

!!! サーバ側の設定

    OpenSiv3D for Web でビルドした WebGL アプリでマルチスレッドを使うためには、アセットを配信するサーバ側の設定が必要です。
    以下のリンクを参考にして、サーバ側の設定を行なってください。
    なお、以下の内容に関しては、OpenSiv3D for Web のサポート外となります。

    - [SharedArrayBuffer を使用するための必要要件](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
    - [COOP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
    - [COEP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

## 1. アプリ動作システム要件

OpenSiv3D v0.6.6 Web マルチスレッド対応版を使って開発されたアプリケーションを実行するのに必要な環境です。ゲームやアプリを配布するときの説明書に記載すると良いでしょう。

|  |  |
|--|--|
| OS | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey 以降 / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU | Intel または AMD 製の CPU |
| 映像出力 | モニタなど、何らかの映像出力装置があること |
| 音声出力 | 何らかの音声出力装置があること |
| ブラウザ | <ul><li>Google Chrome 85.0 以降</li><li>Microsoft Edge 85.0 以降</li><li>Mozilla FireFox 79.0 以降</li><li>Safari 15.2 以降</li></ul> |

## 2. Visual Studio のセットアップ方法

### 2.1 OpenSiv3D for Web マルチスレッド対応版のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-Installer-wasm-mt.exe` をダウンロードし、実行します。

### 2.2 ビルドオプションの追加

Visual Studio で開いたプロジェクト上で、プロジェクトオプションを開き、コンパイラオプションとリンカオプションに `-pthread` を追加します。

## 3. Visual Studio Code のセットアップ方法

### 3.1 OpenSiv3D for Web マルチスレッド対応版のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-wasm-mt.tgz` をダウンロードし、適切なフォルダに展開します。

展開して出てきたフォルダ `Package` 以下のフォルダ全てを、フォルダ `OpenSiv3D` にコピーして上書きします。

### 3.2 ビルドオプションの追加

`.vscode/Compile.rsp`, `.vscode/Link.rsp` の両方に `-pthread` を追加します。
