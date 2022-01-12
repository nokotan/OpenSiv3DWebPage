---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: OpenSiv3D for Web
permalink: /index
css: 
  - /assets/css/playground.css
  - /assets/css/gallary.css
---

![play ground alternative](https://raw.githubusercontent.com/Siv3D/File/master/v6/screenshot/hello-siv3d.gif)

OpenSiv3D for Web brings you to developing interactive WebGL applications with C++20!

## Getting Started

These develop environment are recommended while creating WebGL applications with OpenSiv3D for Web.
Please follow the link to the setup guide of your develop environment.

{% include table.html %}

<iframe width=640px height=510px allow="fullscreen" src="https://siv3d-v6-apps.kamenokosoft.com/Main/Main.html"></iframe>

```cpp
# include <Siv3D.hpp>

void Main()
{
  // Set background color to sky blue
  Scene::SetBackground(ColorF{ 0.8, 0.9, 1.0 });

  // Create a new font
  const Font font{ 60 };
  
  // Create a new emoji font
  const Font emojiFont{ 60, Typeface::ColorEmoji };
  
  // Set emojiFont as a fallback
  font.addFallback(emojiFont);

  // Create a texture from an image file
  const Texture texture{ U"example/windmill.png" };

  // Create a texture from an emoji
  const Texture emoji{ U"🐈"_emoji };

  // Coordinates of the emoji
  Vec2 emojiPos{ 300, 150 };

  // Print a text
  Print << U"Push [A] key";

  while (System::Update())
  {
    // Draw a texture
    texture.draw(200, 200);

    // Put a text in the middle of the screen
    font(U"Hello, Siv3D!🚀").drawAt(Scene::Center(), Palette::Black);

    // Draw a texture with animated size
    emoji.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(emojiPos);

    // Draw a red transparent circle that follows the mouse cursor
    Circle{ Cursor::Pos(), 40 }.draw(ColorF{ 1, 0, 0, 0.5 });

    // When [A] key is down
    if (KeyA.down())
    {
      // Print a randomly selected text
      Print << Sample({ U"Hello!", U"こんにちは", U"你好", U"안녕하세요?" });
    }

    // When [Button] is pushed
    if (SimpleGUI::Button(U"Button", Vec2{ 640, 40 }))
    {
      // Move the coordinates to a random position in the screen
      emojiPos = RandomVec2(Scene::Rect());
    }
  }
}
```

## Gallary

{% include gallary.html list=site.data.gamelist_v6 %}

## CI Status

- Stable Branch (Siv3D/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_master)](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml)
- Develop Branch (nokotan/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_web_develop)](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp_web.yml)
- Develop Branch (Siv3D/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_winmac_develop)](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml)
