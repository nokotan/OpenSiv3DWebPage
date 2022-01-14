---
title: うまくいかないときは (Visual Studio)
permalink: /ja/building/trouble-shooting
---

## もくじ

{% include toc.html %}

## ビルドエラー

### UnicodeDecodeError

#### 症例

```log
UnicodeDecodeError: 'cp932' codec can't decode byte 0x83 in position 99080
```

#### 対処策

- 環境変数 `PYTHONUTF8=1` を設定する

  1. 「Windows の設定」を開き、検索欄に「環境変数」と入力する。すると、「環境変数の編集」という検索結果が出るので、それをクリックする。

        ![envvar0](/assets/img/building/trouble-shooting/envvar0.png)

  2. 「環境変数」というタイトルのウィンドウが表示されるので、「新規(_N_)...」をクリックする。

        ![envvar1](/assets/img/building/trouble-shooting/envvar1.png)

  3. 「ユーザ環境変数の編集」というタイトルのウィンドウが表示されるので、変数名に「PYTHON_UTF8」(半角英字、小文字不可)と、変数値に「1」(半角数字)と入力する。

        ![envvar2](/assets/img/building/trouble-shooting/envvar2.png)

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
- フォルダ `%EMSDK%/upstream/emscripten/cache` を、お使いのウイルス対策ソフトウェアのスキャン除外フォルダに追加する。

### .tlog 生成時のビルドエラー

#### 症例

```log
```

#### 対処策

- 再度プロジェクトをビルドする。

### Undefined Symbol `__stack_chk_fail` という警告が出る

#### 症例

```log
EMSCRIPTENLINK : warning: undefined symbol: __stack_chk_fail (referenced by top-level compiled C/C++ code)
```

#### 対処策

- この警告は意図されたものです。(emscripten に `__stack_chk_fail` のサポートがありません。)

## 実行時エラー

### Gamepad State is null

#### 症例

```log
Uncaught TypeError: GLFW.lastGamepadState is null
```

#### 対処策

- WebGL アプリをセキュアコンテキスト (https://) 上で配信する。

### メッセージボックス [object XMLHttpRequestProgressEvent] が表示される

#### 症例

```log
[object XMLHttpRequestProgressEvent]
```

#### 対処策

- ローカルサーバ経由で、該当する HTML ファイルを開いてください
  - HTML ファイルをダブルクリックして、WebGL アプリを起動しようとすると、このエラーが発生します。
