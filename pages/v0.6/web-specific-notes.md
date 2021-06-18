---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web Specific Notes
permalink: /building/web-specific-notes
---

## GameLoop Design

**Let a browser handle JavaScript events**, or the browser hangs up because of infinite loop.
Therefore, **make a function that includes logics that should be processed regularly**,
and **register the function as a callback** which is called at the start of an animation frame.

```cpp
# include <Siv3D.hpp>

void Main()
{
  // initializations here...

  Platform::Web::System::SetMainLoop([&]()
  {
    System::Update();
    // more tasks on each frames..
  });
}
```

## File Systems

Your WebGL apps **cannot access any files on users' file system**.

Those files required on running your WebGL apps, **can be bundled on building** with emcc's `--preload` option.
These bundled files are loaded into a virtual file system; then you can access these files on ordinal way.

## Supported Features

With "OpenSiv3D for Web," you can use the almost features which is supported in OpenSiv3D for Linux.
For details, check out [Implementation Status](/status)

## Features that Differs Other Platforms

### Audio Decoding

Decoding .mp3 and .aac with Audio constructor is not supported.
Use `s3d::Platforms::Web::AudioProcessing::DecodeAudioFromFile` that returns `AsyncTask<Audio>`.

```cpp
  // 
  // Not supported in Web.
  //
  // Audio audio { "/example/test.mp3" };
  Audio audio;
  AsyncTask<Audio> audioTask = s3d::Platforms::Web::AudioDecoder::DecodeFromFile("/example/test.mp3");

  // check if audio decoding has been finished
  if (audioTask.isReady())
  {
    audio = audioTask.get();
  }
```

### File Open Dialog

`s3d::Dialog::Open**` will always return empty object.
Use `s3d::Platforms::Web::Dialog::Open**` that returns `AsyncTask<**>`.

```cpp
  // 
  // Not supported in Web.
  //
  // Audio audio = Dialog::OpenAudio();
  Audio audio;
  AsyncTask<Audio> audioTask = s3d::Platforms::Web::Dialog::OpenAudio();

  // check if user has been selected file and decoding audio is finished
  if (audioTask.isReady())
  {
    audio = audioTask.get();
  }
```

### File Save Dialog

`s3d::Dialog::Save` will always return "/dev/save" pseudo device,
which means that you cannot query users which file format they want to download.

### Clipboard

Only test copying and pasting are supported.
(and in FireFox, this feature is disallowed.)

Use `s3d::Platforms::Web::Clipboard::GetText` that returns `AsyncTask<String>`.
(You can use `s3d::Clipboard::SetText` in ordinal way.)

```cpp
  // 
  // Not supported in Web.
  //
  // String text;
  // 
  // if (Clibboard::GetText(text))
  // {
  //
  // }
  AsyncTask<String> textTask;
  String text;

  textTask = Platforms::Web::Clipboard::GetText();

  // check if text has been pasted from clipboard
  if (textTask.isReady())
  {
    text = textTask.get();
  }
```