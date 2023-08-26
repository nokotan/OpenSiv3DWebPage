---
title: Web-specific notes
permalink: "/ja/trouble-shooting/web-specific-notes"
---

## known limitations

### Features supported

In OpenSiv3D Web version, you can use the functions available in OpenSiv3D Linux version (excluding functions for Linux version). Please check [the implementation status](/status) for details.

### file system

In OpenSiv3D Web version, **it is not possible to freely access files on the user's file system** , except for files that the user has explicitly permitted to read using functions such as `Dialog::OpenFile` .

Files required at runtime <strong>must be pre-bundled at build time</strong> using the <code>--preload</code> option of emscirpten. The bundled files are loaded into the virtual file system at boot time and can be read and written with normal file access functions.

??? info "Procedure in Visual Studio"

```
Open the project settings from Project > Properties. In the project settings, [Emscripten Linker] > [Input] > [Preloaded resource files], specify the path of the file or folder you want to add to the virtual file system as `(path)@(full path on the virtual file system)` Add in the form of

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)
```

??? info "Instructions in VSCode"

```
Open `.vscode/Link.Debug.rsp` or `.vscode/Link.Release.rsp` and change the path of the preloaded file or folder to `--preload-file (path)@(on the virtual file system full path)` format.

![preload-files-on-vscode.png](/assets/img/building/web-specific-notes/preload-files-on-vscode.png)
```

### dialog to save file

`s3d::Dialog::SaveFile` always returns invalid value. To download a file from the virtual file system use `s3d::Platform::Web::DownloadFile` .

```cpp
//
// Style not supported in web version
//
// if (auto path = Dialog::SaveFile())
// {
// image.save(*path);
// }
//

image.save(U"a.png");
Platform::Web::DownloadFile(U"a.png");
```

### No sound until first user action

Some browsers may restrict WebGL apps from producing sound until there is keyboard, mouse, or touchscreen input.

### Can't go full screen on iPhone

iPhone does not have full screen display function.

## Differences from other platforms

### communication

Only connections to external WebSocket servers are supported. A protected page (a web page whose URL starts with `https://` ) can only connect to a protected WebSocket server.

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
// The web version does not support infinite loops calling `client.read`.
// My browser freezes.
//
// while (client.read(serverPlayerPos));
//

// receive
client.read(serverPlayerPos);
```

### Multithread

OpenSiv3D for Web is designed to run single-threaded. Therefore, **AsyncTask** and **std::thread** do not work as expected.

```cpp
//
// Style not supported in web version
//
AsyncTask tasks
{
[&]
{
std::this_thread::sleep_for(10s);
Console << U"Done.";
}
};
```

### unsupported texture format

In the mobile environment, due to hardware limitations, it is not possible to generate textures with the format `TextureFormat::R32_Float` . Use textures with format `TextureFormat::R16G16_Float` instead.

### Features requiring user action

The following functions must be used in conjunction with user actions.

- Dialog::*
- ClipBoard::ReadText, SetText
- Window::SetFullscreen
- VideoReader (on Safari)
- System::LaunchBrowser

```cpp
//
// Go fullscreen on first user interaction after calling `Window::SetFullscreen`.
// Window::SetFullscreen(true);
//

if (SimpleGUI::Button(U"Full Screen", Point{ 20, 20 }))
{
//
//Since SimpleGUI::Button()` returns true by user's click operation,
// Calls to `Window::SetFullscreen` work as expected.
//
Window::SetFullscreen(true);
}
```

### wireframe drawing

The WebGL backend is not available as WebGL 2.0 does not have wireframe drawing capabilities.

```cpp
# include <Siv3D.hpp>

void Main()
{
while (System::Update())
{
// ignored in web version
const ScopedRenderStates2D rasterizer{ RasterizerState::WireframeCullNone };

Shape2D::Heart(200, Scene::Center()).draw(Palette::Skyblue);
}
}
```

### Exception handling

Exceptions that occur during execution cannot be caught anywhere, they are all caught within the Siv3D library code.

```cpp
# include <Siv3D.hpp>

void Main()
{
    try
    {
        throw std::exception();
    }
    catch (std::exception e)
    {
        // Web 版では実行されない行
        Console << U"Catched!";
    }
}
```

### Limitations of using Asyncify

OpenSiv3D Web version uses [Asyncify](https://emscripten.org/docs/porting/asyncify.html) to handle asynchronous processing in JavaScript as synchronous processing in C++ code. Functions that call the following functions must be registered with `ASYNCIFY_ADD` in the build options. Functions that call that function also need to be registered recursively

- s3d::System::Update()
- s3d::AACDecoder::decode(*) const
- s3d::MP3Decoder::decode(*) const
- s3d::AudioDecoder::Decode(*)
- s3d::Wave::Wave(*)
- s3d::Audio::Audio(*)
- s3d::GenericDecoder::decode(*) const
- s3d::Image::Image(*)
- s3d::Texture::Texture(*)
- s3d::ImageDecoder::Decode(*)
- s3d::ImageDecoder::GetImageInfo(*)
- s3d::Model::Model(*)
- s3d::Clipboard::GetText(*)

If the function that calls the next function is indirectly called by a function pointer or virtual function, the function that calls the function pointer or virtual function must be registered with `ASYNCIFY_ADD` in the build options. Functions that call that function also need to be registered recursively

- s3d::SimpleHTTP::Save(*)
- s3d::SimpleHTTP::Load(*)
- s3d::SimpleHTTP::Get(*)
- s3d::SimpleHTTP::Post(*)
- s3d::VideoReader::VideoReader(*)
- s3d::VideoReader::open(*)
- s3d::Platform::Web::FetchFile(*)
- s3d::Platform::Web::AwaitAsyncTask(*)
