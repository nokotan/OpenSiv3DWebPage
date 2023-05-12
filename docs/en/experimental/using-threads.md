---
title: Multithread
permalink: "/experimental/using-threads"
sitemap: 'false'
---

## Overview

OpenSiv3D for Web provides an experimental multi-threaded version using emscripten's pthread support. By using the multi-thread compatible version instead of the normal version, you will be able to use functions that are not available in the normal version, such as asynchronous processing using `AsyncTask` .

> In order to use multi-threading in WebGL apps built with OpenSiv3D for Web, server-side settings for delivering assets are required. Please refer to the link below to configure the server side. The following contents are not supported by OpenSiv3D for Web.
>
> - [Requirements for using SharedArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
> - [COOP header](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
> - [COEP header](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) {:.warn}

## Visual Studio

### Download OpenSiv3D for Web multi-threaded version

Download <code>OpenSiv3D-Installer-wasm-mt.exe</code> from <a>GitHub Releases</a> and execute it.

### Add Build Options

On the project opened in Visual Studio, open project options and add `-pthread` to compiler and linker options.

## Visual Studio Code

### Download OpenSiv3D for Web multi-threaded version

Download `OpenSiv3D-wasm-mt.tgz` from [GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) and extract it to a suitable folder.

Copy all the folders under the extracted folder `Package` to the folder `OpenSiv3D` and overwrite it.

### Add Build Options

Add `-pthread` to both `.vscode/Compile.rsp` and `.vscode/Link.rsp` .
