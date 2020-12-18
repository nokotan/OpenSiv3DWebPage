---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ja/default
title: OpenSiv3D for Web
permalink: /ja/index
css: 
  - /assets/css/gallary.css
postScript: 
  - /assets/BasicSample/BasicSample.js
  - /assets/js/playground.js
---

{% include playground.html image="https://github.com/Siv3D/OpenSiv3D/raw/master/doc/images/demo.gif" name="BasicSample" %}

OpenSiv3D for Web は WebGL アプリケーションを C/C++ で開発するためのライブラリです。

## はじめる

{% include button.html url="download" text="OpenSiv3D for Web をダウンロード" %}

OpenSiv3D for Web をブラウザ上で試すこともできます。

{% include outline-button.html url="//webassembly-studio.kamenokosoft.com" text="WebAssembly Studio 上で試す" %}

![Siv3DonWebAssemblyStudio.jpeg](/assets/img/Siv3DonWebAssemblyStudio.jpeg)

## ギャラリー

{% include gallary.html list=site.data.ja.gamelist %}

## 最新版ビルドの状態

- 安定版ブランチ (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg)
- 開発版ブランチ (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg?branch=web_develop)
