---
title: Implementation status
permalink: "/en/status"
---

**Also check [Project:Features](https://github.com/nokotan/OpenSiv3D/projects/1) .**

### state badge

badge | explanation
:-: | :-:
✅ | Implementation complete
⚠️ | Temporary implementation, some parts do not work or behave unexpectedly
🚧 | Under implementation
❔ | Not clear
❌ | Not implemented (to be implemented in a future release)
🚫 | No plans to implement

## Support status by browser

Useful links

- [Can I use: WebGL2 (en)](https://caniuse.com/webgl2)
- [WebAssembly Roadmap](https://webassembly.org/roadmap/)

### Windows

browser name | Support status | remarks
:-: | :-: | :-:
Internet Explorer 11 | 🚫 | No support for **WebGL2** , **WebAssembly**
Google Chrome | ✅ | with hardware acceleration enabled
Mozilla Firefox | ✅ | `Clipboard::ReadText` doesn't work
Microsoft Edge | ✅ | with hardware acceleration enabled
Opera | ❔ |

### macOS

browser name | Support status | remarks
:-: | :-: | :-:
Safari | ⚠️ | Support Safari 15.0, macOS Monterey. WebAssembly SIMD not available
Google Chrome | ✅ | with hardware acceleration enabled
Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work

### Linux

browser name | Support status | remarks
:-: | :-: | :-:
Google Chrome | ❔ | with hardware acceleration enabled
Mozilla Firefox | ❔ | `Clipboard::ReadText` doesn't work

### Android

device name | Support status
:-: | :-:
Samsung Galaxy | ⚠️ Galaxy S9+ (2018, March) and newer
Google Pixel | ✅
Google Nexus | 🚫
Sony Xperia | ❔ Operation confirmed on Xperia Z5 (2015, October)
Sharp Aquos | ❔

browser name | Support status | remarks
:-: | :-: | :-:
Android Browser | ❔ |
Google Chrome | 🚧 | with hardware acceleration enabled
Mozilla Firefox | 🚧 | `Clipboard::ReadText` doesn't work
Opera Mobile | ❔ |

### iOS

device name | Support status
:-: | :-:
iphone | ⚠️ iPhone8 or later, iOS 15 required
iPad | ⚠️ Requires iOS 15

browser name | Support status | remarks
:-: | :-: | :-:
Safari | 🚧 | WebAssembly SIMD not available
Google Chrome | ❔ |

## graphic

### image file format

format name | situation | remarks
:-: | :-: | :-:
Bitmap | ✅ |
PNG | ✅ |
Jpegs | ✅ | Also supports **libturbojpeg**
GIFs | ✅ |
TIFF | ✅ |
WebP | ✅ |

### video format

format name | situation | remarks
:-: | :-: | :-:
AVI | ⚠️ | Depends on browser's video processing
MP4 | ⚠️ | Depends on browser's video processing
Ogv | ⚠️ | Depends on browser's video processing

### font

Function name | situation | remarks
:-: | :-: | :-:
built-in font | ✅ |
Emoji | ✅ |
system font | ❌ |

## sound

### sound file format

format name | situation | remarks
:-: | :-: | :-:
Wave | ✅ |
MP3 | ✅ |
AAC | ✅ |
Ogg | ✅ |
Opus | ✅ |

## input device

device name | situation | remarks
:-: | :-: | :-:
keyboard | ✅ |
mouse | ✅ |
Multi-touch | ✅ | Acts as an emulation of mouse input
game controller | ✅ | POV input not available
XInput | 🚫 |
JoyCon | ❌ |
ProCon | ❌ |

## Hardware features

Function name | situation | remarks
:-: | :-: | :-:
webcam | ✅ | Fixed Resolution (640x480)
microphone | ✅ |
CPU feature detection | 🚫 |
power state | 🚫 | Relies on a deprecated API called [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API)

## file system

Function name | situation | remarks
:-: | :-: | :-:
File in memory ( [MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs) ) | ✅ | All files will be cleared on reload. (Extension of OpenSiv3D for Web)
[Indexed file](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ( [IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs) ) | ❌ |
dialog | ✅ | Functions for `s3d::Platform::Web::Dialog` name functions are also available
Drag and Drop | 🚧 |

## text input/output

Function name | situation | remarks
:-: | :-: | :-:
Basic text input support | ✅ |
Basic IME support | ✅ | Synchronize with `HTMLInputElement`
IME input suggestions | 🚫 |
text-to-speech | ⚠️ | Chrome: doesn't work, Edge: can't get language list

## others

Function name | situation | remarks
:-: | :-: | :-:
notification | ✅ |
message-box | ✅ | call `window.alert` or `window.confirm`
clipboard | ⚠️ | Only text copy/paste supported; `s3d::Platform::Web::Clipboard` is also available
Network | 🚧 | Depends on **WebSocket** , P2P communication is not available
Siv3D Scripts | ✅ |
AsyncTask | ❌ | To be implemented in a future release
child process | ❌ |
NLP | ❌ | depends on child process support
