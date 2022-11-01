---
title: Trouble Shooting
permalink: "/trouble-shooting/trouble-shooting"
---

## Table of Contents

{% include toc.html %}

## Build Errors

### Errors on Intellisense

#### Symptoms

```log
Include <typeinfo> before using typeid
```

#### Solution

These errors can be ignored as long as the build with emcc is successful.

### UnicodeDecodeError

#### Symptoms

```log
UnicodeDecodeError: 'cp932' codec can't decode byte 0x83 in position 99080
```

#### Solution

- Specify `PYTHONUTF8=1` in the environment variables.

    <details markdown="block"><summary>Procedures</summary> </details>

    1. Open **Windows Settings** and type **environment variables** into the search box.

        ![envvar0](/assets/img/building/trouble-shooting/envvar0.png)

    2. Environment Variable Window will be shown, click **New**.

        ![envvar1](/assets/img/building/trouble-shooting/envvar1.png)

    3. Edit User Environment Variable Window will be shown, type **PYTHON_UTF8** into Name, 1 into Value.

        ![envvar2](/assets/img/building/trouble-shooting/envvar2.png)

    

### Build Failure of emscripten ports

#### Symptoms

```log
cache:INFO: generating port: libz.a... (this will be cached in "C:\...\cache\sysroot\lib\wasm32-emscripten\libz.a" for subsequent builds)
shared : error : C:\...\cache\wasm\ports-builds\zlib\adler32.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\adler32.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\compress.c.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\compress.c.c" was expected to be an input file, based on the commandline arguments provided)
shared : error : C:\...\cache\wasm\ports-builds\zlib\deflate.c: No such file or directory ("C:\...\cache\wasm\ports-builds\zlib\deflate.c" was expected to be an input file, based on the commandline arguments provided)
...
system_libs : error : a problem occurred when using an emscripten-ports library.  try to run `emcc --clear-ports` and then run this command again
```

#### Solutions

- Extract zlib.zip (located in `%EMSDK%/upstream/emscripten/cache/ports`) into the same folder.

    ![folder layout](/assets/img/building/trouble-shooting/emscripten-cache.png)

      <details markdown="block"><summary>Procedures</summary> </details>

    1. Right-click the template zip package and click **Extract All...**.

        ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all.png)

    2. A detailed extraction window will be shown, click **Extract**.

        ![ExtractZip](/assets/img/building/trouble-shooting/unzip-all2.png)

      
    

- Add `%EMSDK%/upstream/emscripten/cache` folder into the security check ingore list of your security software.

### Build Failure on .tlog creation

#### Symptoms

```log
1> FileTracker : error FTK1011: could not create the new file tracking log file: C:\..\..\(some file).tlog. The file exists.
```

#### Solution

- Rebuild your project.
    - This problems always occurs on the first time build.

### Warning Asyncify Addlist Contained a Non-matching Pattern

#### Symptoms

```log
EMSCRIPTENLINK : warning : Asyncify addlist contained a non-matching pattern: s3d::Clipboard::GetText(\*) (s3d::Clipboard::GetText\28\*\29)
```

#### Solution

- This warning is intended.

## Runtime Error

### Gamepad State is null

#### Symptoms

```log
Uncaught TypeError: GLFW.lastGamepadState is null
```

#### Solution

- Serve WebGL app in the secure context (https://)

### Messagebox -1 is shown

#### Symptoms

```log
-1
```

#### Solution

- Use debug build
    - Diagnostic messages are optimized out in Release builds.
