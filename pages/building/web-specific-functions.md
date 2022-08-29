---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web Specific Functions
permalink: /building/web-specific-functions
---

## Obtaining URL parameters

You can obtain url parameters as `HashTable<String, String>`.

```cpp
  //
  // if the app launched with the parameter `siv3d.app.com?launched_via=twitter` ...
  //
  auto params = Platform::Web::System::GetURLParameters();

  if (auto it = params.find(U"launched_via"); it != params.end())
  {
    Console << U"You launched this app via: {}"_fmt(it->second);
  }
```

## Web Notification

```cpp
  AsyncTask<bool> requestResult;
  
  if (Platform::Web::Notification::IsAvailable())
  {
    requestResult = Platform::Web::Notification::RequestPermission();
  }

  while (System::Update())
  {
    if (requestResult.isReady() and requestResult.get())
    {
      ToastNotificationItem item {
        .title = U"Siv3D for Web",
        .message = U"Hello, Siv3D!"
      };

      Platform::Web::Notification::Show(item);
    }
  }
```

## Download Files from Virtual File System

```cpp
  image.save(U"a.png");

  // Download 'a.png' in the virtual file system with the name 'a.png'
  Platform::Web::DownloadFile(U"a.png");
```

## Features that uses AsyncTask

Some features, such as AudioDecoding or Clipboard, blocks the main loop for several seconds.
Using platform-specific functions that returns `AsyncTask` can keep the main thread from being blocked.

### Audio Decoding

`s3d::Platform::Web::AudioDecoder::DecodeAudioFromFile` returns `AsyncTask<Wave>`.

<!-- TODO: hungs with asyncify -->

```cpp
  // 
  // Maybe blocks for several seconds
  //
  // Audio audio { U"/example/test.mp3" };
  Audio audio;
  AsyncTask<Wave> audioTask = s3d::Platform::Web::AudioDecoder::DecodeFromFile(U"/example/test.mp3");

  // check if audio decoding has been finished
  if (audioTask.isReady())
  {
    audio = Audio{ audioTask.get() };
  }
```

### File Open Dialog

`s3d::Platforms::Web::Dialog::Open**` returns `AsyncTask<**>`.

```cpp
  // 
  // Maybe blocks for several seconds
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

### Clipboard

Only test copying and pasting are supported.
(and in FireFox, this feature is disallowed.)

`s3d::Platforms::Web::Clipboard::GetText` returns `AsyncTask<String>`.
(You can use `s3d::Clipboard::SetText` in ordinal way.)

```cpp
  // 
  // Maybe blocks for several seconds
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
