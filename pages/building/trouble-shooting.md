---
title: Trouble Shooting on Visual Studio
permalink: /building/trouble-shooting
---

## Build Errors

### UnicodeDecodeError

#### Symptons

```log
UnicodeDecodeError: 'cp932' codec can't decode byte 0x83 in position 99080
```

#### Solution

- Specify `PYTHONUTF8=1` in the environment variables.

### Build Failure of emscripten ports

#### Symptons

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
  ![folder layout](https://camo.qiitausercontent.com/c92692163f156e6a5d5647c1866a350c81fac5d7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3135383531342f63613539653636362d663234622d333565312d623166312d6635343165613136373933352e706e67)
- Add `%EMSDK%/upstream/emscripten/cache` folder into the security check ingore list of your security software.

### Build Failure on .tlog creation

#### Symptons

```log
```

#### Solution

- Rebuild your project.

## Runtime Error

### Gamepad State is null

#### Symptons

```log
Uncaught TypeError: GLFW.lastGamepadState is null
```

#### Solution

- Serve WebGL app in the secure context (https://)
