---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio
permalink: /building/setup-visualstudio
---

## Install Extension

Install Visual Studio Extension **Emscripten Extension Pack for Visual Studio** so that Visual Studio can handle the compilation of WebGL application with EMCC (Emscripten Compiler Front-End)

Download the .vsix Package from [Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-extensions)[^install-via-extension-manager].

![VisualStudioExtensionInstaller0_en.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller0_en.png)

Execute the downloaded .vsix package, and click the **Modify** button in the shown window that confirms installed features.

![VisualStudioExtensionInstaller1_en.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller1_en.png)

Check that installation of **Emscripten Debugger for Visual Studio** and **Emscripten Build Support** has been completed, and click the **Close** button to finish setup.

![VisualStudioExtensionInstaller2_en.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller2_en.png)

[^install-via-extension-manager]: You can also install this Extension via **Extensions Manager** (found in [Tools] > [Extensions...]), with searching for `Emscripten Extension Pack for Visual Studio`.

    ![setup-vs-ext-1.png](/assets/img/building/setup-visualstudio/setup-vs-ext-1.png)
    ![VisualStudioExtensionManager0.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionManager0.png)

## Download OpenSiv3D for Web

The OpenSiv3D for Web Installer is available in the [Download](/download) page.
This Installer will configure following settings in your develop environment.

- Placement of OpenSiv3D for Web Headers and Static Libraries.
- Registration of OpenSiv3D for Web Project Template.
- Registration Environment Variable of the Placement Path

Smart Screen may prevents launching The OpenSiv3D for Web Installer, click \[detail\] and \[run\] button will be shown.

![SmartScreen1](/assets/img/building/setup-visualstudio/smart-screen-guard-1.png)
![SmartScreen2](/assets/img/building/setup-visualstudio/smart-screen-guard-2.png)

Click the **OK** button in the window that selecting the language used during setup.

![OpenSiv3DforWebInstaller0_en.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller0_en.png)

Select the destination folder as you like where assets are installed in, and click the **Next** button.

![OpenSiv3DforWebInstaller1_en.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller1_en.png)

Click the **Install** button in the window that confirms the installation options.

![OpenSiv3DforWebInstaller2_en.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller2_en.png)

The window will be shown when the installation has been completed, and click the **Finish** button to terminate the installation process.

![OpenSiv3DforWebInstaller4_en.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller4_en.png)

## Creating Project

Launch Visual Studio, click `Create New Project` in the Visual Studio starting window,
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
