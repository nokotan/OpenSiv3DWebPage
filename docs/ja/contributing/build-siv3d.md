---
title: OpenSiv3D for Web のビルド
permalink: /ja/contributing/build-siv3d
---

以下の手順で OpenSiv3D for Web が emscripten の sysroot にインストールされます。

## Windows

### 必要要件

- [Visual Studio 2019](https://visualstudio.microsoft.com/downloads/)
  - C++ Build Tools コア機能
  - C++ CMake tools for Windows
- [Git for Windows](https://gitforwindows.org)
- [emscripten](https://siv3d.kamenokosoft.com/building/get-emscripten)

### 手順

1. OpenSiv3D リポジトリをクローンします
  
  ```cmd
  git clone https://github.com/Siv3D/OpenSiv3D.git
  cd OpenSiv3D
  ```

1. ビルドフォルダを作成します (以下の例では, `Web/Build` を作成します)
  
  ```cmd
  mkdir Web/Build
  cd Web/Build
  ```
  
1. OpenSiv3D for Web のビルドとインストールを行います
  
  ```cmd
  emcmake cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
  ninja -j4 install
  ```

## macOS

### 必要要件

- [XCode CommandLine Tools](https://apps.apple.com/jp/app/xcode/id497799835)
  - git
  - make
  - python
- [HomeBrew](https://brew.sh/index)
  - CMake
- [emsdk](https://github.com/emscripten-core/emsdk)
  - [emscripten](https://github.com/emscripten-core/emscripten)

### 手順

1. OpenSiv3D リポジトリをクローンします
  
  ```sh
  git clone https://github.com/Siv3D/OpenSiv3D.git
  cd OpenSiv3D
  ```
  
1. ビルドフォルダを作成します (以下の例では, `Web/Build` を作成します)
  
  ```sh
  mkdir Web/Build
  cd Web/Build
  ```
  
1. OpenSiv3D for Web のビルドとインストールを行います
  
  ```sh
  emcmake cmake -DCMAKE_BUILD_TYPE=Release ..
  make -j4 install
  ```

## Linux

### 必要要件

- build-essential
  - make
  - CMake
- git-core
- python3
- [emsdk](https://github.com/emscripten-core/emsdk)
  - [emscripten](https://github.com/emscripten-core/emscripten)

### 手順

1. OpenSiv3D リポジトリをクローンします
  
  ```sh
  git clone https://github.com/Siv3D/OpenSiv3D.git
  cd OpenSiv3D
  ```
  
1. ビルドフォルダを作成します (以下の例では, `Web/Build` を作成します)
  
  ```sh
  mkdir Web/Build
  cd Web/Build
  ```
  
1. OpenSiv3D for Web のビルドとインストールを行います

  ```sh
  emcmake cmake -DCMAKE_BUILD_TYPE=Release ..
  make -j4 install
  ```
