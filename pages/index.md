---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: OpenSiv3D for Web
permalink: /index
css: /assets/css/gallary.css
postScript: 
  - /assets/BasicSample/BasicSample.js
  - /assets/js/playground.js
---

{% include playground.html image="https://github.com/Siv3D/OpenSiv3D/raw/master/doc/images/demo.gif" name="BasicSample" %}

OpenSiv3D for Web brings you to developing WebGL application with C/C++!

## Getting Started

{% include button.html url="download" text="Download OpenSiv3D for Web" %}

You can try OpenSiv3D for Web without any local installation.

{% include outline-button.html url="//webassembly-studio.kamenokosoft.com" text="Try on WebAssembly Studio" %}

![Siv3DonWebAssemblyStudio.jpeg](/assets/img/Siv3DonWebAssemblyStudio.jpeg)

## Gallary

{% include gallary.html list=site.data.gamelist %}

## CI Status

- Stable Branch (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg)
- Develop Branch (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg?branch=web_develop)
