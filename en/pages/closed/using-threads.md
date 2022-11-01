---
title: マルチスレッド
permalink: "/closed/using-threads"
sitemap: 'false'
---

## Prerequisite Knowledge

- サーバ上で Cross-Origin-Isolation を設定する
    - [SharedArrayBuffer を使用するための必要要件](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
    - [COOP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
    - [COEP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

## Visual Studio

### Download OpenSiv3D for Web Multithread-Compatible Version

Download `OpenSiv3D-Installer-wasm-mt.exe` from [GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) and execute it.

### Add Build Options

Visual Studio で開いたプロジェクト上で、プロジェクトオプションを開き、コンパイラオプションとリンカオプションに `-pthread` を追加します。

## Visual Studio Code

### Download OpenSiv3D for Web Multithread-Compatible Version

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-wasm-mt.tgz` をダウンロードし、適切なフォルダに展開します。

展開して出てきたフォルダ `Package` 以下のフォルダ全てを、フォルダ `OpenSiv3D` にコピーして上書きします。

### Add Build Options

Add `-pthread` to both `.vscode/Compile.rsp` and `.vscode/Link.rsp` .
