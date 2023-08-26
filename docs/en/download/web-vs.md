# Start Siv3D for Web programming with Windows + Visual Studio

We are offering Siv3D for web as an experimental feature. The web version has some caveats, so it is intended for intermediate and above users who are familiar with using Siv3D. If you have any trouble using it, please ask on the `#web` channel of the Siv3D Discord server.

## 1. System requirements

### 1.1 Developer System Requirements

It is a development environment necessary for OpenSiv3D v0.6.9 programming in Visual Studio Code.

|                         |                                                          |
|-------------------------|----------------------------------------------------------|
| OS                      | Windows 10 (64-bit) /  Windows 11                        |
| CPU                     | Intel or AMD CPU                                         |
| video output            | Have some sort of video output device, such as a monitor |
| audio output            | have some kind of audio output device                    |
| Development environment | emscripten compiler frontend 3.1.20                      |
| browser                 | <ul>                                                     |
|                         | <li>Google Chrome 85.0 or higher</li>                    |
|                         | <li>Microsoft Edge 85.0 or later</li>                    |
|                         | <li>Google Chrome 85.0 or higher</li>                    |
|                         | <li>Mozilla FireFox 78.0 or higher</li>                  |
|                         | <li>Safari 15.1 or later</li>                            |
|                         | </ul>                                                    |

??? summary "Visual Studio editions" When programming Siv3D on a Windows 10 or Windows 11 computer, it is convenient to use **"Visual Studio Community 2022"**. This is a free version of the integrated development environment called "Visual Studio" used by professional software developers around the world. If you're a student, individual, or small-scale developer, you get the same functionality as the paid version of Visual Studio for free.

??? summary "How to install Visual Studio" Download <strong>and run the "Visual Studio 2022 Community" installer</strong> from <a>the Visual Studio download page: material-open-in-new:.</a> <strong>When you run the installer, the following screen for selecting programming languages ​​and development tools to be installed appears.</strong> Select "Desktop development with C++"** <strong>from the installation selection screen</strong> (the items displayed in the "Installation details" on the right side vary depending on the version of Visual Studio, so don't worry about it). <img alt=""> If you press the "Install" button on the bottom right, the installation of the tools necessary for C++ programming will start.

### 1.2 Application operating system requirements

This environment is required to run applications developed using OpenSiv3D v0.6.6 Web version. It would be a good idea to include it in the instructions when distributing the game or application.

|              |                                                                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|
| OS           | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey or later / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU          | Intel or AMD CPU                                                                                                                    |
| video output | Have some sort of video output device, such as a monitor                                                                            |
| audio output | have some kind of audio output device                                                                                               |
| browser      | <ul>                                                                                                                                |
|              | <li>Google Chrome 85.0 or higher</li>                                                                                               |
|              | <li>Microsoft Edge 85.0 or later</li>                                                                                               |
|              | <li>Mozilla FireFox 78.0 or higher</li>                                                                                             |
|              | <li>Safari 15.1 or later</li>                                                                                                       |
|              | </ul>                                                                                                                               |

## 2. Setting up the development environment

### 2.1 Installing the compiler

1. Download and run **[emscripten 3.1.20 Installer](//github.com/nokotan/EmscriptenInstaller/releases/download/v0.1.2/EmscriptenOffline.exe)**

### 2.2 Installing the Visual Studio Code extension

1. Download the .vsix package from **[Visual Studio MarkerPlace: material-open-in-new:](//marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-build-support)** and run it

### 2.3 SDK installation

1. Download and run **[OpenSiv3D v0.6.6 Installer for Web](//github.com/nokotan/OpenSiv3D/releases/download/v0.6.6r1/OpenSiv3D-Installer-wasm.exe)**

2. If it says "Windows protected your PC" when running, press **More info** and press **Run**

??? summary "What the installer does automatically" - Locating the SDK (documentation folder by default) - Setting a user environment variable to the path where you have placed the SDK - Copying the Visual Studio project template for your Siv3D project (usually`ドキュメント/Visual Studio 2022/Templates/ProjectTemplates/` ) - register uninstaller

??? summary "How to remove the installed OpenSiv3D SDK" Uninstall the OpenSiv3D SDK from Windows "Settings" like any other application.

```
![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/windows/uninstall.png)
```

## 3. Create a Siv3D project

<video src="https://github.com/Siv3D/siv3d.site.resource/blob/main/v6/download/windows/create_project.mp4?raw=true" autoplay loop muted></video>

1. Click **Create New Project** on the Visual Studio start screen
2. Select **OpenSiv3D(0.6.6)Web** from the Project Templates item and press **Next**
3. Enter a project name and save location (optional) and press **Create**

## 4. Build the Siv3D App

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/windows/hellosiv3d.png)

1. When you create a project, a sample program (Main.cpp) is prepared from the beginning
2. Build the project from **the build** menu. You may get an error message when you build the first time, but you can build successfully when you build again.
3. Execute the built program with **Start Debugging** in the **Debug** menu
4. A running program ends when you press ++esc++ or close the browser tab

## 5. Other notes

1. The web version of the scene resize mode defaults to `ResizeMode::Virtual` , so the scene resizes as the browser scales. To prevent this, fix the scene size with `Scene::SetResizeMode(ResizeMode::Keep);` and `Scene::Resize(width, height);`
