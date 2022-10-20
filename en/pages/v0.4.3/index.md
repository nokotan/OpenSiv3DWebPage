---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: OpenSiv3D for Web
permalink: /v0.4.3/index
css: 
  - /assets/css/playground.css
  - /assets/css/gallary.css
postScript: 
  - /assets/BasicSample/BasicSample.js
  - /assets/js/playground.js
---

> This page is targeted who uses the previous version of OpenSiv3D for Web and no longer maintained.
{:.warn}

{% include playground.html image="https://github.com/Siv3D/OpenSiv3D/raw/master/doc/images/demo.gif" name="BasicSample" %}

OpenSiv3D for Web brings you to developing interactive WebGL application with C++17!

## Getting Started

{% include button.html url="download" text="Download OpenSiv3D for Web" %}
Or
{% include outline-button.html url="//webassembly-studio.kamenokosoft.com" text="Try OpenSiv3D for Web on Browser" %}

```cpp
# include <Siv3D.hpp> // OpenSiv3D v0.4.3

void Main()
{
  Scene::SetBackground(ColorF(0.8, 0.9, 1.0));
  const Font font(60);
  const Texture cat(Emoji(U"🐈"));
  
  Vec2 catPos(640, 450);

  Platform::Web::System::SetMainLoop([&]()
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

## Gallary

{% include gallary.html list=site.data.gamelist %}

## CI Status

### OpenSiv3D for Web v0.4.3

- Stable Branch: [![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp.yml/badge.svg?branch=web)](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp.yml)
- Develop Branch: [![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp.yml/badge.svg?branch=web_develop)](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp.yml)