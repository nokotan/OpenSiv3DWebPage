---
title: Optimize Assets Size
permalink: /publishing/optimize-asset-size
---

## Shrinking Bundle Size

The Siv3D template project contains all files so that examples are got worked.

Some files can be ommited to reduce the bundle size, please follow instructions in <https://zenn.dev/reputeless/articles/article-minimum>.

## Shrinking WebAssembly Size

`libSiv3DScript.a` can be omitted from linked files if your WebGL app don't use **Siv3D Scripts** functionality.

### Visual Studio

Open the project configuration window, and remove `Siv3DScript` from Additional Dependency Files (found in [Emscripten Linker] > [Input]) in the project configuration.

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

### Visual Studio Code

Open `.vscode/Link.Debug.rsp` or `.vscode/Link.Release.rsp` and remove `-lSiv3DScript`.
