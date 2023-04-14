---
title: うまくいかないときは
permalink: /ja/trouble-shooting/trouble-shooting
---

## もくじ

{% include toc.html %}

## ビルドエラー

### インテリセンス上のエラー

#### 症例

```log
typeid を使用する前に <typeinfo> をインクルードする必要があります
```

#### 対処策

emcc を使ったビルドが成功する限り、これらのエラーは無視できます。

### UnicodeDecodeError

#### 症例

```log
UnicodeDecodeError: 'cp932' codec can't decode byte 0x83 in position 99080
```

#### 対処策

- 環境変数 `PYTHONUTF8=1` を設定する

  <details markdown="block"><summary>手順</summary>

  1. 「Windows の設定」を開き、検索欄に「環境変数」と入力する。すると、「環境変数の編集」という検索結果が出るので、それをクリックする。

      ![envvar0](/assets/img/building/trouble-shooting/envvar0.png)

  2. 「環境変数」というタイトルのウィンドウが表示されるので、「新規(_N_)...」をクリックする。

      ![envvar1](/assets/img/building/trouble-shooting/envvar1.png)

  3. 「ユーザ環境変数の編集」というタイトルのウィンドウが表示されるので、変数名に「PYTHONUTF8」(半角英字、小文字不可)と、変数値に「1」(半角数字)と入力する。

      ![envvar2](/assets/img/building/trouble-shooting/envvar2.png)

  </details>

### Emscripten ports に関するビルドエラー

#### 症例

```log
cache:INFO: generating port: libz.a... (this will be cached in "C:\...\cache\sysroot\lib\wasm32-emscripten\libz.a" for subsequent builds)
shared : error : C:\...\cache\wasm\ports-builds\zlib\adler32.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\adler32.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\compress.c.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\compress.c.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\deflate.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\deflate.c" was expected to be an input file, based on the commandline arguments provided)
...
system_libs : error : a problem occurred when using an emscripten-ports library.  try to run `emcc --clear-ports` and then run this command again
```

#### 対処策

- フォルダ `%EMSDK%/upstream/emscripten/cache/ports` をエクスプローラで開き、 zlib.zip をその場で展開する。


    ![folder layout](/assets/img/building/trouble-shooting/emscripten-cache.png)

    <details markdown="block"><summary>手順</summary>

    1. Zip ファイルを右クリックして、**すべて展開(T)...** をクリックします。

        ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all.png)

    2. 圧縮 (ZIP 形式) フォルダーの展開という名前のウィンドウが表示されるので、**展開** をクリックします。

        ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all2.png)

    </details>

- フォルダ `%EMSDK%/upstream/emscripten/cache` を、お使いのウイルス対策ソフトウェアのスキャン除外フォルダに追加する。

### .tlog 生成時のビルドエラー

#### 症例

```log
FileTracker : error FTK1011: 新しいファイル追跡ログ ファイルを作成できませんでした: C:\..\..\(何らかのファイル).tlog。ファイルがあります。
```

#### 対処策

- 再度プロジェクトをビルドする。
  - この現象は1回目のビルドで必ず発生します。

### Asyncify Addlist Contained a Non-matching Pattern という警告が出る

#### 症例

```log
EMSCRIPTENLINK : warning : Asyncify addlist contained a non-matching pattern: s3d::Clipboard::GetText(\*) (s3d::Clipboard::GetText\28\*\29)
```

#### 対処策

- この警告は意図されたものです。

## 実行時エラー

### Gamepad State is null

#### 症例

```log
Uncaught TypeError: GLFW.lastGamepadState is null
```

#### 対処策

- WebGL アプリをセキュアコンテキスト (https://) 上で配信する。

### メッセージボックス -1 が表示される

#### 症例

```log
-1
```

#### 対処策

- デバッグビルドを有効にしてください
  - エラーメッセージはリリースビルドでは最適化によって省略されてしまいます。
