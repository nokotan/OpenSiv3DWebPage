---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Running and Debugging (Visual Studio)
permalink: /building/running-code-with-visualstudio
---

## Running Code

The OpenSiv3D for Web project is already configured to build, launch a local server.
Just clicking \[|> Windows Local Debugger \] will trigger building project, launch a local server and a browser.

![SmartScreen2](/assets/img/building/running-code-with-visualstudio/run-on-vs-1.png)

## Debugging

On Visual Studio, debugging with break points, variables watching is not supported.

Instead of this, you can use break points in browsers' development tools.

With **Chrome DWARF Debugging**, you will be able to use variables watching in Chrome development tools.
Follow the instructions in [Debugging WebAssembly with modern tools](https://developer.chrome.com/blog/wasm-debugging-2020/).
