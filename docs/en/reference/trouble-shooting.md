---
title: When things go wrong
---

## build error

### intellisense error

#### case

```log
You must include <typeinfo> before using typeid
```

#### Countermeasure

These errors can be ignored as long as the build using emcc succeeds.

### UnicodeDecodeError

#### case

```log
UnicodeDecodeError: 'cp932' codec can't decode byte 0x83 in position 99080
```

#### 対処策

- Set environment variable `PYTHONUTF8=1`

??? info "Set environment variables"

```
1. Open "Windows Settings" and enter "environment variables" in the search field. Click on the search result for "Edit Environment Variables".

![envvar0](/assets/img/building/trouble-shooting/envvar0.png)

1. A window titled "Environment Variables" will appear. Click "New (_N_)...".

![envvar1](/assets/img/building/trouble-shooting/envvar1.png)

1. A window titled "Edit user environment variables" will be displayed. Enter "PYTHONUTF8" (single-byte alphabetic characters, lowercase letters are not allowed) for the variable name and "1" (single-byte number) for the variable value.

![envvar2](/assets/img/building/trouble-shooting/envvar2.png)
```

### Build error with Emscripten ports

#### case

```log
cache:INFO: generating port: libz.a... (this will be cached in "C:\...\cache\sysroot\lib\wasm32-emscripten\libz.a" for subsequent builds)
shared : error : C:\...\cache\wasm\ports-builds\zlib\adler32.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\adler32.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\compress.c.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\compress.c.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\deflate.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\deflate.c" was expected to be an input file, based on the commandline arguments provided)
...
system_libs : error : a problem occurred when using an emscripten-ports library.  try to run `emcc --clear-ports` and then run this command again
```

#### 対処策

- Open the folder `%EMSDK%/upstream/emscripten/cache/ports` in Explorer and expand zlib.zip on the spot.

    ![folder layout](/assets/img/building/trouble-shooting/emscripten-cache.png)

    ??? info "Extract Zip File"

    ```
      1. Right-click the zip file and click **Extract All...**.

    ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all.png)

    1. A window titled Extract Compressed (ZIP Format) Folder will appear, click **Extract**.

    ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all2.png)
    ```

- Add the folder `%EMSDK%/upstream/emscripten/cache` to your antivirus software's scan exclusion folders.

### Build error when generating .tlog

#### 症例

```log
FileTracker : error FTK1011: Could not create new file tracking log file: C:\..\..\(some file).tlog. I have a file.
```

#### Countermeasure

- Build the project again.
    - This phenomenon always occurs on the first build.

### I get the warning Asyncify Addlist Contained a Non-matching Pattern

#### 症例

```log
EMSCRIPTENLINK : warning : Asyncify addlist contained a non-matching pattern: s3d::Clipboard::GetText(\*) (s3d::Clipboard::GetText\28\*\29)
```

#### Countermeasure

- This warning is intentional.

## runtime error

### Gamepad State is null

#### 症例

```log
Uncaught TypeError: GLFW.lastGamepadState is null
```

#### 対処策

- Serve WebGL apps over a secure context (https://).

### A message box of -1 is displayed

#### 症例

```log
-1
```

#### 対処策

- Please enable debug build
    - Error messages are optimized away in release builds.
