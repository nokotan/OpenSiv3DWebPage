---
title: マルチスレッド
permalink: /ja/experimental/using-threads
sitemap: false
---

## 概要

OpenSiv3D for Web では、emscripten の pthread サポートを使ったマルチスレッド対応版を試験的に提供しています。
通常版の代わりにマルチスレッド対応版を使用する事で、`AsyncTask` などの通常版では使えない非同期処理の機能を使用することができるようになります。

> OpenSiv3D for Web でビルドした WebGL アプリでマルチスレッドを使うためには、アセットを配信するサーバ側の設定が必要です。
> 以下のリンクを参考にして、サーバ側の設定を行なってください。
> なお、以下の内容に関しては、OpenSiv3D for Web のサポート外となります。
>
> - [SharedArrayBuffer を使用するための必要要件](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
> - [COOP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
> - [COEP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
{:.warn}

## Visual Studio

### OpenSiv3D for Web マルチスレッド対応版のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-Installer-wasm-mt.exe` をダウンロードし、実行します。

### ビルドオプションの追加

Visual Studio で開いたプロジェクト上で、プロジェクトオプションを開き、コンパイラオプションとリンカオプションに `-pthread` を追加します。

## Visual Studio Code

### OpenSiv3D for Web マルチスレッド対応版のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-wasm-mt.tgz` をダウンロードし、適切なフォルダに展開します。

展開して出てきたフォルダ `Package` 以下のフォルダ全てを、フォルダ `OpenSiv3D` にコピーして上書きします。

### ビルドオプションの追加

`.vscode/Compile.rsp`, `.vscode/Link.rsp` の両方に `-pthread` を追加します。
