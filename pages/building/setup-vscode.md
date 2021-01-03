---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio Code
permalink: /building/setup-vscode
---

## Install Extensions

Open "Extension Tab" in Visual Studio Code, search and install these extensions:

- C/C++ VSCode Extension
- Debugger for Chrome
- Debugger for Firefox

![VSCodeExt1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/bf97ad48-9626-4898-d671-48b740ddaecc.png)

## Setting up Intellisense

### Sample Configulation

```json
{
    "name": "Emscripten",
    "includePath": [
        "${workspaceFolder}/**",
        "${workspaceFolder}/OpenSiv3D/include",
        "${workspaceFolder}/OpenSiv3D/include/ThirdParty",
        "${env:EMSDK}/upstream/emscripten/system/include",
        "${env:EMSDK}/upstream/emscripten/system/include/libc",
        "${env:EMSDK}/upstream/emscripten/system/include/libcxx"
    ],
    "defines": [
        "_DEBUG",
        "EMSCRIPTEN",
        "__EMSCRIPTEN__"
    ],
    "cStandard": "c11",
    "cppStandard": "c++17",
    "intelliSenseMode": "clang-x86"
}
```

## Setting up Build Task

### Compile Task Sample

```json
{
    "type": "shell",
    "label": "Build: Compile (Debug)",
    "command": "em++",
    "args": [
        // Input
        "Main.cpp", 

        // Output
        "-c", "-o", "Main.o",

        // Compiler Flags
        "-O0", "-std=c++17", "-g4",

        // Include Directory
        "-IOpenSiv3D/include",  
        "-IOpenSiv3D/include/ThirdParty",  

        // em++ Specific Configurations
    ],
    "group": "build"
}
```

### Link Task Sample

```json
{
    "type": "shell",
    "label": "Build: Link (Debug)",
    "command": "em++",
    "args": 
    [
        // Input
        "Main.o",

        // Output
        "-o", "index.html",

        // Compiler Flags
        "-O0", "-std=c++17", "-g",

        // Library Directory
        "-LOpenSiv3D/lib",
        "-LOpenSiv3D/lib/freetype",
        "-LOpenSiv3D/lib/harfbuzz",
        "-LOpenSiv3D/lib/opencv",

        // Dependent Libraries
        "-lfreetype",
        "-lharfbuzz",
        "-lopencv_core", "-lopencv_imgproc", "-lopencv_objdetect", "-lopencv_photo",
        "-lSiv3D",

        // em++ Specific Configurations
        "--emrun",
        "-s", "FULL_ES3=1",
        "-s", "USE_GLFW=3",
        "-s", "USE_LIBPNG=1",
        "-s", "USE_OGG=1",
        "-s", "USE_VORBIS=1",
        "-s", "ALLOW_MEMORY_GROWTH=1",
        "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",

        // Packaging Configurations
        "--preload-file", "OpenSiv3D/resources@/resources",
        "--js-library", "OpenSiv3D/lib/Siv3D.js",
    ],
    "group": "build"
}
```
