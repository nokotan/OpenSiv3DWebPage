---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web Specific Notes
permalink: /building/web-specific-notes
---

## GameLoop Design

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

## File Systems

Your WebGL apps **cannot access any files on users' file system**.

Those files required on running your WebGL apps, **can be bundled on building** with emcc's `--preload` option.
These bundled files are loaded into a virtual file system; then you can access these files on ordinal way.

## Supported Features

With "OpenSiv3D for Web," you can use the features which is supported in OpenSiv3D for Linux.
For details, check out [Implementation Status](/status)
