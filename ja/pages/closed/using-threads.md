---
title: マルチスレッド
permalink: /ja/closed/using-threads
sitemap: false
---

## 前提知識

- サーバ上で Cross-Origin-Isolation を設定する
  - [SharedArrayBuffer を使用するための必要要件](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
  - [COOP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  - [COEP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

## Visual Studio

### OpenSiv3D for Web マルチスレッド対応板のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-Installer-wasm-mt.exe` をインストールし、実行します。

### ビルドオプションの追加

Visual Studio で開いたプロジェクト上で、プロジェクトオプションを開き、コンパイラオプションとリンカオプションに `-pthread` を追加します。

## Visual Studio Code

### OpenSiv3D for Web マルチスレッド対応板のダウンロード

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-wasm-mt.tgz` をダウンロードし、適切なフォルダに展開します。

展開して出てきたフォルダ `Package` 以下のフォルダ全てを、フォルダ `OpenSiv3D` にコピーして上書きします。

### ビルドオプションの追加

`.vscode/Compile.rsp`, `.vscode/Link.rsp` の両方に `-pthread` を追加します。
