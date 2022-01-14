---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio
permalink: /building/setup-visualstudio
---

## Install Visual Studio

Follow instructions in [Installing Visual Studio (Windows)](https://zenn.dev/reputeless/books/siv3d-documentation-en/viewer/requirements#3.1-installing-visual-studio-(windows)).

## Install Visual Studio Extension

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
