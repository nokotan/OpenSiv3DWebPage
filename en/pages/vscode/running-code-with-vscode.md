---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Running and Debugging (VSCode)
permalink: /vscode/running-code-with-vscode
---

## Building

To build sample program:

- Press [Ctrl]+[Shift]+[B]
- Press [Ctrl]+[Shift]+[P], Select "Run Task ...", then Select `Build: Debug (or Release)`

![vscode-run-task](/assets/img/building/running-code-with-vscode/vscode-run-task.png)
![vscode-run-task-2](/assets/img/building/running-code-with-vscode/vscode-run-task-2.png)

## Running Project without Debugging on VSCode

Press [Ctrl]+[Shift]+[P], Select "Run Task ...", then Select `Run Local Server and Open Browser`

![vscode-run-task-3](/assets/img/building/running-code-with-vscode/vscode-run-task-3.png)

With **Chrome DWARF Debugging**, you will be able to use variables watching in Chrome development tools.
Follow the instructions in [Debugging WebAssembly with modern tools](https://developer.chrome.com/blog/wasm-debugging-2020/).

## Running Project with Debugging on VSCode

Debugging on VSCode is supported on Chrome, FireFox.

### Chrome

Select `Launch Chrome against localhost` in the Run & Debug tab, and press `▶️`.

![start-debugging](/assets/img/building/running-code-with-vscode/start-debugging.png)

Required extension is embedded in VSCode, but only source maps of WebAssembly is supported.

If you want to use source maps and variables dump, use extension `WebAssembly on Chrome Debugger`.

### FireFox

Select `Launch FireFox against localhost` in the Run & Debug tab, and press `▶️`.