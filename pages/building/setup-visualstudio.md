---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio
permalink: /building/setup-visualstudio
---

## Install Extension

Install **Emscripten.ProjectType Visual Studio Extension** so that Visual Studio can handle the compilation of WebGL application with EMCC (Emscripten Compiler Front-End)

Download the .vsix Package from [Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscriptenproj1).
You can also install this Extension via **Extensions Manager** (found in [Tools] > [Extensions...]), with searching for `Emscripten.ProjectType`

![VSExtMgr0.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/9ca223a1-60ef-1987-764a-cc2bb71f17a8.png)

![VSExtMgr1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/a4f195e2-2128-dd6f-7265-5da4464eb7f4.png)

## Download OpenSiv3D for Web

The OpenSiv3D for Web Installer is available in [GitHub nokotan/OpenSiv3D releases](https://github.com/nokotan/OpenSiv3D/releases/).
This Installer will configure following settings in your develop environment.

- Placement of OpenSiv3D for Web Headers and Static Libraries.
- Registration of OpenSiv3D for Web Project Template.
- Registration Environment Variable of the Placement Path

## Creating Project

Launch Visual Studio, click `Create New Project` in the Visual Studio starting window,
and the list of selecting project templates will be shown.

Then, select `OpenSiv3D(0.4.3)Web` project template.

![Siv3DWebProjectMake1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/825bb82c-823f-8f7d-48da-a472a7c55a59.png)

After determining the project name, the text editor of the source code `Main.cpp` will be shown.
Switch the project platform configuration to `Emscripten` (surrounded by the red rectangle in the following figure)

![Siv3DWebProjectMake2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/1e68903d-203f-06cb-dd2d-dc4e941b35a9.png)

## Registration emscripten Toolchain

Fill `Emscripten Install Folder` (found in [General] > [emscripten toolchain]) in the project configuration with the folder that contains **emcc.bat**.

![Siv3DWebProjectMake3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/74993f9c-8ff4-e500-3521-8f0e7748a403.png)

## Next Step

Check out [Writing First Code](writing-code)!
