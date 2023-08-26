# Start Siv3D for Web programming with Unix + Visual Studio Code

We are offering Siv3D for web as an experimental feature. The web version has some caveats, so it is intended for intermediate and above users who are familiar with using Siv3D. If you have any trouble using it, please ask on the `#web` channel of the Siv3D Discord server.

## 1. System requirements

### 1.1 Developer System Requirements

It is a development environment necessary for OpenSiv3D v0.6.9 programming in Visual Studio Code.

|          |                                                                                                                                     |
|----------|-------------------------------------------------------------------------------------------------------------------------------------|
| OS       | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey or later / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU      | Intel or AMD CPU                                                                                                                    |
| 映像出力 | Have some sort of video output device, such as a monitor                                                                            |
| 音声出力 | have some kind of audio output device                                                                                               |
| 開発環境 | emscripten compiler frontend 3.1.20                                                                                                 |
| ブラウザ | <ul>                                                                                                                                |
|          | <li>Google Chrome 85.0 以降</li>                                                                                                    |
|          | <li>Mozilla FireFox 78.0 以降</li>                                                                                                  |
|          | </ul>                                                                                                                               |

### 1.2 Application operating system requirements

This environment is required to run applications developed using OpenSiv3D v0.6.6 Web version. It would be a good idea to include it in the instructions when distributing the game or application.

|          |                                                                                                                                 |
|----------|---------------------------------------------------------------------------------------------------------------------------------|
| OS       | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey 以降 / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU      | Intel または AMD 製の CPU                                                                                                       |
| 映像出力 | Have some sort of video output device, such as a monitor                                                                        |
| 音声出力 | 何らかの音声出力装置があること                                                                                                  |
| ブラウザ | <ul>                                                                                                                            |
|          | <li>Google Chrome 85.0 or higher</li>                                                                                           |
|          | <li>Microsoft Edge 85.0 or later</li>                                                                                           |
|          | <li>Mozilla FireFox 78.0 or higher</li>                                                                                         |
|          | <li>Safari 15.1 or later</li>                                                                                                   |
|          | </ul>                                                                                                                           |

## 2. Setting up the development environment

### 2.1 Installing the compiler

1. Download the contents of the repository from ** [GitHub - emscripten-core/emsdk:material-open-in-new:](https://github.com/emscripten-core/emsdk/) **. Press the green `Code` button, then `Download ZIP` button. Then, the contents of the repository will be downloaded as a .zip file, so extract it to an appropriate folder.

2. Open a terminal in the folder where you extracted emsdk and run the following commands line by line.

    ```sh
    emsdk install 3.1.20
    emsdk activate 3.1.20
    ```

3. Copy the last line of the command output, paste it into the terminal, and run it. Depending on your environment, you should see a line like this:

    ```sh
    echo &#39;source &quot;&lt;folder with emsdk&gt;/emsdk/emsdk_env.sh&quot;&#39; &gt;&gt; $HOME/.bash_profile
    ```

### 2.2 Installing the Visual Studio Code extension

1. Search for and install extensions by entering the following names in the Extensions tab on the left:

- C/C++ VSCode extension
- Debugger for Firefox
- WebAssembly on Chrome Debugger

## 3. Download the project template

1. Download **[the project template from the project template repository :material-open-in-new:](https://github.com/nokotan/OpenSiv3DForWeb-VSCode)** by pressing the green `Code` button followed by `Download ZIP` button. Once downloaded, unzip the file

## 4. Building the Siv3D App

1. Open the folder with your project template in Visual Studio Code
2. A sample program (Main.cpp) is prepared from the beginning
3. Select `Launch Chrome against localhost` or `Launch Firefox against localhost` in the Run and Debug tab and press the Run button ▶️.
4. A running program ends when you press ++esc++ or close the browser tab

## 5. Other notes

1. The web version of the scene resize mode defaults to `ResizeMode::Virtual` , so the scene resizes as the browser scales. To prevent this, fix the scene size with `Scene::SetResizeMode(ResizeMode::Keep);` and `Scene::Resize(width, height);`
