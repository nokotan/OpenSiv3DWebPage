---
title: Web-specific functions
permalink: "/ja/trouble-shooting/web-specific-functions"
---

## Get URL parameters

You can get URL parameters in the form of `HashTable<String, String>` .

```cpp
  //
// If the page is opened with the URL `siv3d.app.com?launched_via=twitter`...
//
auto params = Platform::Web::System::GetURLParameters();

if (auto it = params.find(U"launched_via"); it != params.end())
{
Console << U"You launched this app via: {}"_fmt(it->second);
}
```

## web notifications

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

## Download files from virtual file system

```cpp
  image.save(U"a.png");

// Download the 'a.png' file in the virtual filesystem with the name 'a.png'.
Platform::Web::DownloadFile(U"a.png");
```

## Download additional assets from the server

```cpp
  // additionally download 'windmill.png' from the server'
Platform::Web::FetchFile(U"example/windmill.png");
```

## Functions that can use AsyncTask

Some features, such as AudioDecoding and Clipboard, can block the main loop for a few seconds. You can prevent the main loop from blocking by using a platform-specific function that returns an `AsyncTask` .

### Wait for AsyncTask

```cpp
  //
// writing that may block for a few seconds
//
// Audio audio { U"/example/test.mp3" };
Audio audio;
AsyncTask<Wave> audioTask = s3d::Platform::Web::AudioDecoder::DecodeFromFile(U"/example/test.mp3");

// synchronously wait until the audioTask is ready
if (auto resolvedAudio = s3d::Platform::Web::System::WaitForFutureResolved(audioTask))
{
audio = *resolvedAudio;
}
```

### Decoding audio files

`s3d::Platform::Web::AudioDecoder::DecodeAudioFromFile` returns `AsyncTask<Wave>` .

<!-- TODO: hungs with asyncify -->

```cpp
  //
// Writing that may block for a few seconds
//
// Audio audio { U"/example/test.mp3" };
Audio audio;
AsyncTask<Wave> audioTask = s3d::Platform::Web::AudioDecoder::DecodeFromFile(U"/example/test.mp3");

// check if decoding is finished
if (audioTask.isReady())
{
audio = Audio{ audioTask.get() };
}
```

### File open dialog

`s3d::Platforms::Web::Dialog::Open**` returns `AsyncTask<**>` .

```cpp
  //
// Writing that may block for a few seconds
//
// Audio audio = Dialog::OpenAudio();
Audio audio;
AsyncTask<Audio> audioTask = s3d::Platforms::Web::Dialog::OpenAudio();

// user selects file, check if decoding finished
if (audioTask.isReady())
{
audio = audioTask.get();
}
```

### clipboard

Only text copy and paste is supported. (And in FireFox this feature is disabled.)

`s3d::Platforms::Web::Clipboard::GetText` returns `AsyncTask<String>` . ( `s3d::Clipboard::SetText` can be used normally.)

```cpp
  //
// writing that may block for a few seconds
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

// ask if the text was pasted
if (textTask.isReady())
{
text = textTask.get();
}
```
