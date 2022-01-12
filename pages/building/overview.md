---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
permalink: /building/overview
---

## Target

This setup guide is targeted who uses Visual Studio on Windows.

Please refer [setup guide for VSCode](/vscode/overview) if your OS is not Windows or you want to use VSCode as the develop environment.

## Contents

This setup guide includes these contents.

- Emscripten installation with Windows installer
- Installing Visual Studio extension for the projects with Emscripten
- Installing OpenSiv3D for Web with Windows installer
- Build and debug your projects on Visual Studio

## Compiler

OpenSiv3D for Web uses [**emscripten**](https://emscripten.org) as its compiler backend.

Building OpenSiv3D for Web apps on [wasi-sdk](https://github.com/WebAssembly/wasi-sdk) or [cheerp](https://leaningtech.com/cheerp/) is not supported.
