---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web 版固有の関数
permalink: /ja/building/web-specific-functions
---

## URL パラメータの取得

`HashTable<String, String>` の形式で、URL パラメータを取得できます。

```cpp
  //
  // ページが `siv3d.app.com?launched_via=twitter` という URL で開かれたら...
  //
  auto params = Platform::Web::System::GetURLParameters();

  if (auto it = params.find(U"launched_via"); it != params.end())
  {
    Console << U"You launched this app via: {}"_fmt(it->second);
  }
```

## Web 通知

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

## 仮想ファイルシステムからファイルをダウンロードする

```cpp
  image.save(U"a.png");

  // 仮想ファイルシステム中の 'a.png' ファイルを 'a.png' という名前でダウンロードする。
  Platform::Web::DownloadFile(U"a.png");
```

## AsyncTask を使うことのできる機能

AudioDecoding やクリップボードなどの、一部の機能は、数秒の間メインループをブロックする可能性があります。
`AsyncTask` を返り値にもつ、プラットフォーム固有の関数を使うことで、メインループがブロックされないようにすることができます。

### 音声ファイルのデコード

`s3d::Platform::Web::AudioProcessing::DecodeAudioFromFile` が `AsyncTask<Wave>` を返します。

<!-- TODO: hungs with asyncify -->

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
  //
  // Audio audio { "/example/test.mp3" };
  Audio audio;
  AsyncTask<Wave> audioTask = s3d::Platform::Web::AudioDecoder::DecodeFromFile(U"/example/test.mp3");

  // デコードが終わったかチェック
  if (audioTask.isReady())
  {
    audio = Audio{ audioTask.get() };
  }
```

### ファイルを開くダイアログ

`s3d::Platforms::Web::Dialog::Open**` が `AsyncTask<**>` を返します。

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
  //
  // Audio audio = Dialog::OpenAudio();
  Audio audio;
  AsyncTask<Audio> audioTask = s3d::Platforms::Web::Dialog::OpenAudio();

  // ユーザーがファイルを選択し、デコードが終わったかチェック
  if (audioTask.isReady())
  {
    audio = audioTask.get();
  }
```

### クリップボード

テキストのコピーと貼り付けのみサポートされています。
(そして、FireFox ではこの機能は無効化されています。)

`s3d::Platforms::Web::Clipboard::GetText` が `AsyncTask<String>` を返します。
(`s3d::Clipboard::SetText` は通常通り使えます。)

```cpp
  // 
  // 数秒間ブロックする可能性のある書き方
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

  // テキストが貼り付けられたか問い合わせる
  if (textTask.isReady())
  {
    text = textTask.get();
  }
```
