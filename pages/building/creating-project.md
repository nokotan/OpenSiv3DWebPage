---
title: Creating Project
permalink: /building/creating-project
---

## Creating Project

Launch Visual Studio from Windows menu.

![LaunchVisualStudio.png](/assets/img/building/creating-project/launch-vs.png)

After launched, Click `Create New Project` in the Visual Studio starting window,
and the list of available project templates will be shown.

![VisualStudio0.png](/assets/img/building/setup-visualstudio/VisualStudio0.png)

Select the project template named as `OpenSiv3D(0.6.0)Web`, and click the **Next** button.

![VisualStudio1.png](/assets/img/building/setup-visualstudio/VisualStudio1.png)

Determine the project name as you like, and click the **Create** button.

![VisualStudio2.png](/assets/img/building/setup-visualstudio/VisualStudio2.png)

After determining the project name, the text editor of the source code `Main.cpp` will be shown.
Please don't forget to switch the project platform configuration to `Emscripten` (surrounded by the red rectangle in the following figure)

![Siv3DWebProjectMake2.png](/assets/img/building/setup-visualstudio/setup-vs-platform.png)

## Registration emscripten Toolchain

Open the project configuration window, and fill `Emscripten Install Folder` (found in [General] > [emscripten toolchain] in Visual Studio 2017) in the project configuration with the folder that contains **emcc.bat**.

![Siv3DWebProjectMake3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/74993f9c-8ff4-e500-3521-8f0e7748a403.png)
