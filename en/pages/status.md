---
title: Implementation Status
permalink: "/status"
---

**Also Check [Project:Features](https://github.com/nokotan/OpenSiv3D/projects/1)**

### Status Marks

Marks | Explanations
:-: | :-:
✅ | Implemented &amp; Supported
⚠️ | Implemented, maybe Broken or Feature Limited
🚧 | Implementing
❔ | Unknown
❌ | Currently Not Implemented (will be Implemented in Future Releases)
🚫 | Will Not Implemented

## Browser Support

Useful Links

- [Can I use: WebGL2](https://caniuse.com/webgl2)
- [WebAssembly Roadmap](https://webassembly.org/roadmap/)

### Windows

Browser | Supported | Remarks
:-: | :-: | :-:
Internet Explorer 11 | 🚫 | missing **WebGL2**, **WebAssembly** support
Google Chrome | ✅ |
Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work
Microsoft Edge | ✅ |
Opera | ❔ |

### macOS

Browser | Supported | Remarks
:-: | :-: | :-:
Safari | ⚠️ | works on Safari 15.0 or later, macOS Monterey ; WebAssembly SIMD is not available
Google Chrome | ✅ |
Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work

### Linux

Browser | Supported | Remarks
:-: | :-: | :-:
Google Chrome | ❔ |
Mozilla Firefox | ❔ | `Clipboard::ReadText` does not work

### Android

Device Name | Supported
:-: | :-:
Samsung Galaxy | ⚠️ Galaxy S9+ (2018, March) or later
Google Pixel | ✅
Google Nexus | 🚫
Sony Xperia | ❔ works on Xperia Z5 (2015, October)
Sharp Aquos | ❔

Browser | Supported | Remarks
:-: | :-: | :-:
Android Browser | ❔ |
Google Chrome | 🚧 |
Mozilla Firefox | 🚧 | `Clipboard::ReadText` does not work
Opera Mobile | ❔ |

### iOS

Device Name | Supported
:-: | :-:
iPhone | ⚠️ iPhone8 or later, requires iOS 15
iPad | ⚠️ requires iOS 15

Browser | Supported | Remarks
:-: | :-: | :-:
Safari | 🚧 | WebAssembly SIMD is not available
Google Chrome | ❔ |

## Graphics

### Image File Formats

Format Name | Status | Remarks
:-: | :-: | :-:
Bitmap | ✅ |
PNG | ✅ |
Jpeg | ✅ | Also supports **libturbojpeg**
GIF | ✅ |
TIFF | ✅ |
WebP | ✅ |

### Video Formats

Format Name | Status | Remarks
:-: | :-: | :-:
AVI | ⚠️ | Depends browser capability
MP4 | ⚠️ | Depends browser capability
Ogv | ⚠️ | Depends browser capability

### Fonts

Feature Name | Status | Remarks
:-: | :-: | :-:
Embedded Font | ✅ |
Emoji | ✅ |
System Fonts | ❌ |

## Audio

### Audio Files Formats

Format Name | Status | Remarks
:-: | :-: | :-:
Wave | ✅ |
MP3 | ✅ |
AAC | ✅ |
Ogg | ✅ |
Opus | ✅ |

## Input Devices

Device Name | Status | Remarks
:-: | :-: | :-:
Keyboard | ✅ |
Mouse | ✅ |
Multi-touch | ✅ | Supports as Mouse Emulation
GamePad | ✅ | No Support for POV
XInput | 🚫 |
JoyCon | ❌ |
ProCon | ❌ |

## HW Features

Feature Name | Status | Remarks
:-: | :-: | :-:
WebCamera | ✅ | Fixed Resolution (640x480)
Microphone | ✅ |
CPU Feature Detection | 🚫 |
Power-Status | 🚫 | Depends on Deprecated API: [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API)

## File System

Feature Name | Status | Remarks
:-: | :-: | :-:
On-Memory Files ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | Restricts: Flushed All Files on Reload (Web Extension)
[Indexed DataBase](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ |
File Dialogs | ✅ | `s3d::Platform::Web::Dialog` is also available
File Drag &amp; Drop | 🚧 |

## Text Input/Output

Feature Name | Status | Remarks
:-: | :-: | :-:
Text Input Basic Support | ✅ |
IME Basic Support | ✅ | Uses Synchronization with `HTMLInputElement`
IME Candidate | 🚫 |
Text-To-Speech | ⚠️ | Chrome: not working, Edge: cannot Query Language List

## Misc

Feature Name | Status | Remarks
:-: | :-: | :-:
Notification | ✅ |
MessageBox | ✅ | Just Calls `window.alert` or `window.confirm`
ClipBoard | ⚠️ | Only Support Copy or Paste Texts; `s3d::Platform::Web::Clipboard` is also available
Network | 🚧 | Depends on **WebSocket**, which not supports P2P communication.
Siv3D Scripts | ✅ |
AsyncTask | ❌ | To be implemented in a future release
ChildProcess | ❌ |
NLP | ❌ | Depends ChildProcess Support
