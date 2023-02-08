---
title: Web Specific Notes
permalink: "/trouble-shooting/web-specific-notes"
---

## Table of Contents

{% include toc.html %}

## Known Limitations

### Supported Features

With "OpenSiv3D for Web," you can use the almost features which is supported in OpenSiv3D for Linux. For details, check out [Implementation Status](/status)

### File Systems

Your WebGL apps **cannot access any files on users' file system**.

Those files required on running your WebGL apps, **can be bundled on building** with emcc's `--preload` option. These bundled files are loaded into a virtual file system; then you can access these files on ordinal way.

#### Visual Studio

Open the project configuration window, and add preloaded file path into `Preloaded Files` (found in [Emscripten Linker] &gt; [Input]) in the project configuration.

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

#### VSCode

Open `.vscode/Link.Debug.rsp` or `.vscode/Link.Release.rsp` and add linker preloaded files option.

![preload-files-on-vscode.png](/assets/img/building/web-specific-notes/preload-files-on-vscode.png)

### File Save Dialog

`s3d::Dialog::SaveFile` always returns `None`. Please use `s3d::Platform::Web::DownloadFile` to download files that stored in the virtual file system.

```cpp
  //
  // Not Supported in Web.
  //
  // if (auto path = Dialog::SaveFile())
  // {
  //   image.save(*path);
  // }
  //

  image.save(U"a.png");
  Platform::Web::DownloadFile(U"a.png");
```

### No Sounds before User Actions

Some browser does not allow for WebGL apps to make any sounds before some user actions, such as typing keyboards, clicking, or tapping screen.

### Cannot Switch to Fullscreen on iOS devices

iOS devices have no fullscreen support.

## Features that Differs Other Platforms

### Network

Only connecting to external websocket server is supported. Make sure to use secured websocket server in secured (https://) pages.

<!-- TODO: asyncify allows busy loop -->

```cpp
  const IPv4Address ip = IPv4Address::Localhost();
  constexpr uint16 port = 50000;

  TCPClient client;

  client.connect(ip, port);

  Point serverPlayerPos{ 0, 0 };
  const Point clientPlayerPos = Cursor::Pos();
  
  // send
  client.send(clientPlayerPos);

  //
  // Not Supported that polling with `client.read`.
  // Polling will freeze the browser.
  //
  // while (client.read(serverPlayerPos));
  //

  // recv
  client.read(serverPlayerPos);
```

### Multi-Threading

OpenSiv3D for Web is designed to be run single-threaded, so **AsyncTask** or **std::thread** will not work as you expected.

```cpp
  AsyncTask task
  {
    [&]
    {
      std::this_thread::sleep_for(10s);
      Console << U"Done.";
    }
  };
```

### Unsupported Texture Format

In mobile browsers, generating textures of format `TextureFormat::R32_Float` will be failed due to the mobile hardware limitation. Consider using `TextureFormat::R16G16_Float` formatted textures instead.

### Features that Requires User Actions

Some features are required to use on user actions.

- Dialog::*
- ClipBoard::ReadText, SetText
- Window::SetFullscreen
- VideoReader (on Safari)
- System::LaunchBrowser

```cpp
//
// will enter fullscreen on first user action after invoking `Window::SetFullscreen`
// Window::SetFullscreen(true);
//

if (SimpleGUI::Button(U"Full Screen", Point{ 20, 20 }))
{
  //
  // SimpleGUI::Button()` will be true on user `click` actions,
  // invocation of `Window::SetFullscreen` will work expectedly.
  //
  Window::SetFullscreen(true);
}
```

### Wire-frame Drawing

Wire-frame Drawing is not available in the WebGL backend as WebGL 2.0 does not have wireframe drawing capabilities.

```cpp
# include <Siv3D.hpp>

void Main()
{
	while (System::Update())
	{
    // Ignored in Web
		const ScopedRenderStates2D rasterizer{ RasterizerState::WireframeCullNone };
		
		Shape2D::Heart(200, Scene::Center()).draw(Palette::Skyblue);
	}
}
```
