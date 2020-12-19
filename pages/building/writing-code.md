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

## Web Specific Notes

### GameLoop Design

**Let a browser handle JavaScript events**, or the browser hangs up because of infinite loop.
Therefore, **make a function that includes logics that should be processed regularly**,
and **register the function as a callback** which is called at the start of an animation frame.

```cpp:
# include <Siv3D.hpp>

# if SIV3D_PLATFORM(WEB)
#   include <emscripten.h>
# endif

void MainLoop()
{
    if (!System::Update())
    {
        emscripten_cancel_main_loop();
        return;
    }

    // more tasks on each frames..
}

void Main()
{
    emscripten_set_main_loop(&MainLoop, 0, 1);
}
```

### File Systems

Your WebGL apps **cannot access any files on users' file system**.

Those files required on running your WebGL apps, **can be bundled on building** with emcc's `--preload` option.
These bundled files are loaded into a virtual file system; then you can access these files on ordinal way.

### Supported Features

With "OpenSiv3D for Web," you can use the features which is supported in OpenSiv3D for Linux.
For details, check out [Implementation Status](/status)
