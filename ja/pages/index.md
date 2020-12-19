---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ja/default
title: OpenSiv3D for Web
permalink: /ja/index
css: 
  - /assets/css/playground.css
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

```cpp
# include <Siv3D.hpp> // OpenSiv3D v0.4.3
# include <emscripten.h>

void RunMainLoop(void* arg)
{
  static_cast<const std::function<void()>*>(arg)->operator()();
}

void SetMainLoop(std::function<void()> mainLoop)
{
  emscripten_set_main_loop_arg(RunMainLoop, reinterpret_cast<void*>(&mainLoop), 0, 1);
}

void Main()
{
  Scene::SetBackground(ColorF(0.8, 0.9, 1.0));
  const Font font(60);
  const Texture cat(Emoji(U"🐈"));
  
  Vec2 catPos(640, 450);

  SetMainLoop([&]()
  {
    System::Update();

    font(U"Hello, Siv3D!🐣").drawAt(Scene::Center(), Palette::Black);
    cat.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(catPos);
    Circle(Cursor::Pos(), 40).draw(ColorF(1, 0, 0, 0.5));
    
    if (KeyA.down())
    {
      Print << U"Hello!";
    }
    
    if (SimpleGUI::Button(U"Move the cat", Vec2(600, 20)))
    {
      catPos = RandomVec2(Scene::Rect());
    }
  });
}
```

## ギャラリー

{% include gallary.html list=site.data.ja.gamelist %}

## 最新版ビルドの状態

- 安定版ブランチ (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg)
- 開発版ブランチ (v0.4.3): ![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/workflows/C/C++%20CI%20for%20Web/badge.svg?branch=web_develop)
