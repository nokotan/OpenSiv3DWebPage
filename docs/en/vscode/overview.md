---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
permalink: /vscode/overview
---

## Target

This setup guide is targeted who uses Visual Studio Code on any OSes.

Please refer [setup guide for Visual Studio](/building/overview) if you want to use Visual Studio on Windows as the develop environment.

## Contents

This setup guide includes these contents.

- Emscripten installation with emsdk
- Installing Visual Studio Code extension for the projects with Emscripten
- Downloading OpenSiv3D for Web project template
- Build and debug your projects on Visual Studio Code

## Compiler

OpenSiv3D for Web uses [**emscripten**](https://emscripten.org) as its compiler backend.

Building OpenSiv3D for Web apps on [wasi-sdk](https://github.com/WebAssembly/wasi-sdk) or [cheerp](https://leaningtech.com/cheerp/) is not supported.
