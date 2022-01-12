---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 概要
permalink: /ja/vscode/overview
---

## 対象読者

このセットアップガイドは、Windows, macOS, Linux 上で Visual Studio Code を開発環境としてお使いの方を対象にしています。

Windows 上で Visual Studio を開発環境としてお使いの方は、[Visual Studio セットアップガイド](/ja/building/overview) を参照してください。

## 内容

このセットアップガイドは次の項目で構成されています。

- emsdk を使った Emscripten のインストール
- Visual Studio Code 拡張機能のインストール
- OpenSiv3D for Web プロジェクトテンプレートのダウンロード
- Visual Studio Code 上でのプロジェクトのビルドとデバッグ

## コンパイラ

OpenSiv3D for Web では、そのコンパイルインフラストラクチャとして [**emscripten**](https://emscripten.org) を使用します。

なお、[wasi-sdk](https://github.com/WebAssembly/wasi-sdk) や [cheerp](https://leaningtech.com/cheerp/) は OpenSiv3D for Web を使った WebGL アプリケーションの作成に使うことはできません。
