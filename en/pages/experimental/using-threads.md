---
title: Multithread
permalink: "/experimental/using-threads"
sitemap: 'false'
---

## Prerequisite Knowledge

- Configure Cross-Origin-Isolation on the Server
  - [Requirements for using SharedArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
  - [COOP header](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  - [COEP header](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

## Visual Studio

### Download OpenSiv3D for Web Multithread-Compatible Version

Download `OpenSiv3D-Installer-wasm-mt.exe` from [GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) and execute it.

### Add Build Options

On the project opened in Visual Studio, open project options and add `-pthread` to compiler and linker options.

## Visual Studio Code

### Download OpenSiv3D for Web Multithread-Compatible Version

Download `OpenSiv3D-wasm-mt.tgz` from [GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) and extract it to a suitable folder.

Copy all the folders under the extracted folder `Package` to the folder `OpenSiv3D` and overwrite it.

### Add Build Options

Add `-pthread` to both `.vscode/Compile.rsp` and `.vscode/Link.rsp` .
