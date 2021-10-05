---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio
permalink: /building/setup-visualstudio
---

## Install Extension

Install Visual Studio Extension **Emscripten Extension Pack for Visual Studio** so that Visual Studio can handle the compilation of WebGL application with EMCC (Emscripten Compiler Front-End)

Download the .vsix Package from [Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-extensions).
You can also install this Extension via **Extensions Manager** (found in [Tools] > [Extensions...]), with searching for `Emscripten Extension Pack for Visual Studio`

![VSExtMgr0.png](/assets/img/building/setup-visualstudio/setup-vs-ext-1.png)

![VSExtMgr1.png](/assets/img/building/setup-visualstudio/setup-vs-ext-2.png)

## Download OpenSiv3D for Web

The OpenSiv3D for Web Installer is available in [Download](/download) page.
This Installer will configure following settings in your develop environment.

- Placement of OpenSiv3D for Web Headers and Static Libraries.
- Registration of OpenSiv3D for Web Project Template.
- Registration Environment Variable of the Placement Path

Smart Screen may prevents launching The OpenSiv3D for Web Installer, click \[detail\] and \[run\] button will be shown.

![SmartScreen1](/assets/img/building/setup-visualstudio/smart-screen-guard-1.png)
![SmartScreen2](/assets/img/building/setup-visualstudio/smart-screen-guard-2.png)

## Creating Project

Launch Visual Studio, click `Create New Project` in the Visual Studio starting window,
and the list of available project templates will be shown.

Then, select the project template named as `OpenSiv3D(0.6.0)Web`.

![Siv3DWebProjectMake1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/825bb82c-823f-8f7d-48da-a472a7c55a59.png)

After determining the project name, the text editor of the source code `Main.cpp` will be shown.
Please don't forget to switch the project platform configuration to `Emscripten` (surrounded by the red rectangle in the following figure)

![Siv3DWebProjectMake2.png](/assets/img/building/setup-visualstudio/setup-vs-platform.png)

## Registration emscripten Toolchain

Open the project configuration window, and fill `Emscripten Install Folder` (found in [General] > [emscripten toolchain]) in the project configuration with the folder that contains **emcc.bat**.

![Siv3DWebProjectMake3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/74993f9c-8ff4-e500-3521-8f0e7748a403.png)

## Next Step

Check out [Writing First Code](writing-code)!
