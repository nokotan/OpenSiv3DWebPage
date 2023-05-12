---
title: Web Specific Notes
permalink: "/v0.4.3/web-specific-notes"
---

> This page is targeted who uses the previous version of OpenSiv3D for Web and no longer maintained. {:.warn}

## GameLoop Design

<strong>Let a browser handle JavaScript events</strong>, or the browser hangs up because of infinite loop.

Therefore, **make a function that includes logics that should be processed regularly**, and **register the function as a callback** which is called at the start of an animation frame.

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

Those files required on running your WebGL apps, **can be bundled on building** with emcc's `--preload` option. These bundled files are loaded into a virtual file system; then you can access these files on ordinal way.

## Supported Features

With "OpenSiv3D for Web," you can use the almost features which is supported in OpenSiv3D for Linux. For details, check out [Implementation Status](/status)

## Features that Differs Other Platforms

### Audio Decoding

Decoding .mp3 and .aac with Audio constructor is not supported. Use `s3d::Platforms::Web::AudioProcessing::DecodeAudioFromFile` that returns `std::future<Audio>`.

```cpp
  //
  // Not supported in Web.
  //
  // Audio audio { "/example/test.mp3" };
  Audio audio;
  std::future<Audio> audio_future = s3d::Platforms::Web::AudioProcessing::DecodeAudioFromFile("/example/test.mp3");

  // check if audio decoding has been finished
  if (audio_future.valid() && audio_future.wait_for(0s) == std::future_status::ready)
  {
    audio = audio_future.get();
  }
```

### File Open Dialog

`s3d::Dialog::Open**` will always return empty object. Use `s3d::Platforms::Web::Dialog::Open**` that returns `std::future<**>`.

```cpp
  //
  // Not supported in Web.
  //
  // Audio audio = Dialog::OpenAudio();
  Audio audio;
  std::future<Audio> audio_future = s3d::Platforms::Web::Dialog::OpenAudio();

  // check if user has been selected file and decoding audio is finished
  if (audio_future.valid() && audio_future.wait_for(0s) == std::future_status::ready)
  {
    audio = audio_future.get();
  }
```

### File Save Dialog

`s3d::Dialog::Save` will always return "/dev/save" pseudo device, which means that you cannot query users which file format they want to download.

### Clipboard

Only test copying and pasting are supported. (and in FireFox, this feature is disallowed.)

Use `s3d::Platforms::Web::Clipboard::GetText` that returns `std::future<String>`. (You can use `s3d::Clipboard::SetText` in ordinal way.)

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
  future<String> text_future;
  String text;

  text_future = Platforms::Web::Clipboard::GetText();

  // check if text has been pasted from clipboard
  if (text_future.valid() && text_future.wait_for(0s) == std::future_status::ready)
  {
    text = text_future.get();
  }
```
