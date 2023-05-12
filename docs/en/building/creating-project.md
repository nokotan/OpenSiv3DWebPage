---
title: Creating Project
permalink: /building/creating-project
---

## Creating Project

Launch Visual Studio from Windows menu.

![LaunchVisualStudio.png](/assets/img/building/creating-project/LaunchVS.png)

After launched, Click `Create New Project` in the Visual Studio starting window,
and the list of available project templates will be shown.

![VisualStudio0.png](/assets/img/building/creating-project/VisualStudio0.png)

Select the project template named as `OpenSiv3D(0.6.6)Web`, and click the **Next** button.

![VisualStudio1.png](/assets/img/building/creating-project/VisualStudio1.png)

Determine the project name as you like, and click the **Create** button.

![VisualStudio2.png](/assets/img/building/creating-project/VisualStudio2.png)

After determining the project name, the text editor of the source code `Main.cpp` will be shown.

![VisualStudio3.png](/assets/img/building/creating-project/VisualStudio3.png)

## Registration emscripten Toolchain

Open the project configuration window, and fill `Emscripten Install Folder` (found in [General] > [emscripten toolchain] in Visual Studio 2017) in the project configuration with the folder that contains **emcc.bat**.

![VisualStudio4.png](/assets/img/building/creating-project/VisualStudio4.png)
