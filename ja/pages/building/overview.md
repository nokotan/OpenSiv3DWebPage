---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 概要
permalink: /ja/building/overview
---

## 対象読者

このセットアップガイドは、Windows 上で Visual Studio を開発環境としてお使いの方を対象にしています。

お使いの OS が Windows でない場合、または、Visual Studio Code を開発環境としてお使いの方は、[Visual Studio Code セットアップガイド](/ja/vscode/overview) を参照してください。

## 内容

このセットアップガイドは次の項目で構成されています。

- Windows インストーラを使った Emscripten のインストール
- Emscripten を Visual Studio で使えるようにするための、拡張機能のインストール
- OpenSiv3D for Web のインストール
- Visual Studio 上でのプロジェクトのビルドとデバッグ

## コンパイラ

OpenSiv3D for Web では、そのコンパイルインフラストラクチャとして [**emscripten**](https://emscripten.org) を使用します。

なお、[wasi-sdk](https://github.com/WebAssembly/wasi-sdk) や [cheerp](https://leaningtech.com/cheerp/) は OpenSiv3D for Web を使った WebGL アプリケーションの作成に使うことはできません。
