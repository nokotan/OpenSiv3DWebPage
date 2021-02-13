---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Visual Studio Code のセットアップ
permalink: /ja/building/setup-vscode
---

## 拡張機能のインストール

Visual Studio Code の左側の拡張機能タブから、次の名前で検索し、インストールしてください。

- C/C++ VSCode Extension
- Debugger for Chrome
- Debugger for Firefox

![VSCodeExt1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/bf97ad48-9626-4898-d671-48b740ddaecc.png)

## インテリセンスを構成する

### 参考設定

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

## ビルドタスクを設定する

### コンパイルタスクのサンプル

```json
{
    "type": "shell",
    "label": "Build: Compile (Debug)",
    "command": "em++",
    "args": [
        // 入力
        "Main.cpp", 

        // 出力
        "-c", "-o", "Main.o",

        // 最適化とデバッグ、言語設定
        "-O0", "-std=c++17", "-g4",

        // インクルードディレクトリ
        "-IOpenSiv3D/include",  
        "-IOpenSiv3D/include/ThirdParty",  

        // em++ 固有の設定
    ],
    "group": "build"
}
```

### リンクタスクのサンプル

```json
{
    "type": "shell",
    "label": "Build: Link (Debug)",
    "command": "em++",
    "args": 
    [
        // 入力
        "Main.o",

        // 出力
        "-o", "index.html",

        // 最適化とデバッグ、言語設定
        "-O0", "-std=c++17", "-g",

        // ライブラリディレクトリ
        "-LOpenSiv3D/lib",
        "-LOpenSiv3D/lib/freetype",
        "-LOpenSiv3D/lib/harfbuzz",
        "-LOpenSiv3D/lib/opencv",

        // 依存ライブラリ
        "-lfreetype",
        "-lharfbuzz",
        "-lopencv_core", "-lopencv_imgproc", "-lopencv_objdetect", "-lopencv_photo",
        "-lSiv3D",

        // em++ 固有の設定
        "--emrun",
        "-s", "FULL_ES3=1",
        "-s", "USE_GLFW=3",
        "-s", "USE_LIBPNG=1",
        "-s", "USE_OGG=1",
        "-s", "USE_VORBIS=1",
        "-s", "ALLOW_MEMORY_GROWTH=1",
        "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",

        // パッケージング設定
        "--preload-file", "OpenSiv3D/resources@/resources",
        "--js-library", "OpenSiv3D/lib/Siv3D.js",
    ],
    "group": "build"
}
```

## 次の一歩

[はじめてのコード](writing-code) に進んでください
