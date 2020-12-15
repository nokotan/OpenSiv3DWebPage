---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Building Apps
---

## Overview

This article has following explanations to develop WebGL application with **"OpenSiv3D for Web."**

- Install Prerequisites (Python, emscripten)
- Download "Sample Program for OpenSiv3D for Web"
- Build and Run Sample Program

This is English translation; original article is ["OpenSiv3D Web版を使ってブラウザで動くゲームを作る (VSCode版, Windows),"](https://qiita.com/nokotan/items/8fc8a3c0837ac2f532f4) written in Japanese.

## Tested Develop Environment

- Windows 10 Education (Version 10.0.17763.1098)
- Visual Studio Code 1.47.3
- emscripten 1.40.1

## Install Prerequisites (Python, emscripten)

We can use **"emscripten SDK (emsdk)"** in order to install emscripten to your develop environment. **Python must be installed** to use commands included in **"emscripten SDK (emsdk)"**, which is written in Python script.

### Install Python

Follow instructions in [Using Python on Windows - Installation steps](https://docs.python.org/3/using/windows.html#installation-steps)[^custom-python].

[^custom-python]: Enable `pip` and `Add python into PATH` if you want to customize python instalation

![スクリーンショット 2020-09-20 13.46.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4d64cf59-fc85-eeee-b118-a34946b7abb1.png)

### Download emscripten SDK (emsdk)

Follow link to [GitHub - emscripten-core/emsdk](https://github.com/emscripten-core/emsdk/), then Click `Code` button in green and `Download ZIP` button in this order[^emsdk-git].

[^emsdk-git]: You can use `git clone https://github.com/emscripten-core/emsdk.git` instead of downloading zip, if git is available in your environment.

![InstallEMSDK1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4b923473-ecf0-0266-950e-e5a8044ec60f.png)

### Install Emscripten

Open administrator command prompt[^admin-cmd], change directory to the folder you have downloaded emsdk, and run these commands:

[^admin-cmd]: Press [Windows]+[X], and select PowerShell (Administrator)

```bat
emsdk install latest
emsdk activate latest --global
```

`emsdk install latest` will install emscripten and its dependencies (clang, node.js, java) to your develop environment.
`emsdk activate latest --global` will perform setup for these tools.

## Set Up Visual Studio Code

### Install Extensions

Open "Extension Tab" in Visual Studio Code, search and install these extensions: 

- C/C++ VSCode Extension
- Debugger for Chrome
- Debugger for Firefox

![VSCodeExt1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/bf97ad48-9626-4898-d671-48b740ddaecc.png)

## Open "Sample Program for OpenSiv3D for Web" on Visual Studio Code

### Download "Sample Program for OpenSiv3D for Web"

Follow link to [GitHub - nokotan/OpenSiv3DForWeb-VSCode](https://github.com/nokotan/OpenSiv3DForWeb-VSCode), then Click `Code` button in green and `Download ZIP` button in this order.

![InstallSiv3DWebVSCode.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/3c6d1c31-e6ff-0fb4-a00c-0086a2fafd12.png)

### Open "Sample Program for OpenSiv3D for Web" on Visual Studio Code

Launch Visual Studio Code, open folder-selecting dialog[^open-dialog], and select the folder that includes "Sample Program for OpenSiv3D for Web" you have extracted.

[^open-dialog]: Click `File` > `Open Folder ...`

  ![VSCodeOpenFolder.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/385e8dfe-3f3a-431f-a8ed-63e2d491723c.png)

## Writing source code

With "OpenSiv3D for Web," you can use the features which is supported in OpenSiv3D  for Linux.

**You should have a browser handle JavaScript events**, or the browser hangs up because of infinite loop. Therefore, **make a function that includes logics that should be processed regularly**, and **register the function as a callback** which is called at the start of an animation frame.

```c++:Main.cpp

# include <Siv3D.hpp> // OpenSiv3D v0.4.3
# include <emscripten.h>

void RunMainLoop(void* arg)
{
	static_cast<const std::function<void()>*>(arg)->operator()();
}

void SetMainLoop(std::function<void()> mainLoop)
{
	emscripten_set_main_loop_arg(RunMainLoop, reinterpret_cast<void*>(&mainLoop), 0, 1);
}

void Main()
{
	// Set background color to aqua blue
	Scene::SetBackground(ColorF(0.8, 0.9, 1.0));
	
	// Create font which size is 60
	const Font font(60);
	
	// Create cat texture
	const Texture cat(Emoji(U"🐈"));
	
	// Cat position
	Vec2 catPos(640, 450);

	SetMainLoop([&]()
	{
		System::Update();

		// Draw text at the center of the shown window
		font(U"Hello, Siv3D!🐣").drawAt(Scene::Center(), Palette::Black);
		
		// Draw a cat animating its size
		cat.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(catPos);
		
		// Draw a transparent red circle that follows the cursor
		Circle(Cursor::Pos(), 40).draw(ColorF(1, 0, 0, 0.5));
		
		// if key 'A' is pressed down
		if (KeyA.down())
		{
			// Add 'Hello!' to debug draw
			Print << U"Hello!";
		}
		
		// if the button is pressed down
		if (SimpleGUI::Button(U"Move the cat", Vec2(600, 20)))
		{
			// Move a cat to random position within the window
			catPos = RandomVec2(Scene::Rect());
		}
	});
}
```

## Building and Debugging

To build sample program:

- Press [Ctrl]+[Shift]+[B]
- Press [Ctrl]+[Shift]+[P], Select "Run Task ...", then Select `Build: Debug (or Release)`

To debug sample program (both will launch local server and open browser):

- Press [Ctrl]+[Shift]+[P], Select "Run Task ...", then Select `Run Local Server and Open Browser`
- Start debugging in debugging tab (requires browser extension)
