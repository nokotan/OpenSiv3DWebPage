---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Writing First Code
permalink: /building/writing-code
---

Good first OpenSiv3D app samples are found in [OpenSiv3D Official Project Site](https://siv3d.github.io/sample/game/).

```c++:Main.cpp
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
  // Set background color to aqua blue
  Scene::SetBackground(ColorF(0.8, 0.9, 1.0));
  
  // Create font which size is 60
  const Font font(60);
  
  // Create cat texture
  const Texture cat(Emoji(U"🐈"));
  
  // Cat position
  Vec2 catPos(640, 450);

  SetMainLoop([&]()
  {
    System::Update();

    // Draw text at the center of the shown window
    font(U"Hello, Siv3D!🐣").drawAt(Scene::Center(), Palette::Black);
    
    // Draw a cat animating its size
    cat.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(catPos);
    
    // Draw a transparent red circle that follows the cursor
    Circle(Cursor::Pos(), 40).draw(ColorF(1, 0, 0, 0.5));
    
    // if key 'A' is pressed down
    if (KeyA.down())
    {
      // Add 'Hello!' to debug draw
      Print << U"Hello!";
    }
    
    // if the button is pressed down
    if (SimpleGUI::Button(U"Move the cat", Vec2(600, 20)))
    {
      // Move a cat to random position within the window
      catPos = RandomVec2(Scene::Rect());
    }
  });
}
```
