---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 概要
permalink: /ja/building/overview
---

## コンパイラ

OpenSiv3D for Web は、そのコンパイルインフラストラクチャとして [**emscripten**](https://emscripten.org) を使用します。

[wasi-sdk](https://github.com/WebAssembly/wasi-sdk) や [cheerp](https://leaningtech.com/cheerp/) は OpenSiv3D for Web を使った WebGL アプリケーションの作成に使うことはできません。

emscripten のセットアップは [Emscripten をインストールする](/ja/building/get-emscripten) を参照してください。

## 使用できる開発環境

OpenSiv3D for Web を使った WebGL アプリケーションの作成に当たって、次の開発環境が利用可能です。
使用する開発環境のリンクをクリックして、開発環境のセットアップガイドを参照します。

- [Visual Studio 2019 (Windows)](/ja/building/setup-visualstudio)
- [Visual Studio Code (Windows, macOS, Linux, WSL)](/ja/building/setup-vscode)
