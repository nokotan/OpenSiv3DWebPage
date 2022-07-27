---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio
permalink: /building/setup-visualstudio
---

## Install Visual Studio

Follow instructions in [Visual Studio Installation Procedure (written Visual Studio のインストール手順について in Japanese)](https://siv3d.github.io/download/windows/#11-system-requirements-for-development).

## Install Visual Studio Extension

Install Visual Studio Extensions, **Emscripten Build Support for Visual Studio 2022** and **Emscripten Debugger for Visual Studio**, so that Visual Studio can handle the compilation of WebGL application with EMCC (Emscripten Compiler Front-End)

### Install Emscripten Build Support for Visual Studio 2022

Download the .vsix Package from [Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-build-support).

![InstallBuildSupport1.png](/assets/img/building/setup-visualstudio/InstallBuildSupport1.png)

Execute the downloaded .vsix package by double-clicking, and click the **Install** button in the shown window that confirms installed Visual Studio edition(s).

![InstallBuildSupport2.png](/assets/img/building/setup-visualstudio/InstallBuildSupport2.png)

After installation, following message will shown, then close the install window.

![InstallBuildSupport3.png](/assets/img/building/setup-visualstudio/InstallBuildSupport3.png)

### Install Emscripten Debugger for Visual Studio

Download the .vsix Package from [Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-debugger).

![InstallDebugger1.png](/assets/img/building/setup-visualstudio/InstallDebugger1.png)

Execute the downloaded .vsix package by double-clicking, and click the **Install** button in the shown window that confirms installed Visual Studio edition(s).

![InstallDebugger1.png](/assets/img/building/setup-visualstudio/InstallDebugger2.png)

After installation, following message will shown, then close the install window.

![InstallDebugger1.png](/assets/img/building/setup-visualstudio/InstallDebugger3.png)
