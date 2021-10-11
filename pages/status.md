---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Implementation Status
permalink: /status
---

**Also Check [Project:Features](https://github.com/nokotan/OpenSiv3D/projects/1)**

### Status Marks

| Marks | Explanations |
| :--: | :--: |
| ✅ | Implemented & Supported |
| ⚠️ | Implemented, maybe Broken or Feature Limited |
| 🚧 | Implementing |
| ❔ | Unknown |
| ❌ | Currently Not Implemented (will be Implemented in Future Releases) |
| 🚫 | Will Not Implemented |

## Browser Support

Useful Links

- [Can I use: WebGL2](https://caniuse.com/webgl2)
- [WebAssembly Roadmap](https://webassembly.org/roadmap/)

### Windows

| Browser | Supported | Remarks |
| :--: | :--: | :--: |
| Internet Explorer 11 | 🚫 | missing **WebGL2**, **WebAssembly** support |
| Google Chrome | ✅ | |
| Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work |
| Microsoft Edge | ✅ | |
| Opera | ❔ | |

### macOS

| Browser | Supported | Remarks |
| :--: | :--: | :--: |
| Safari | ⚠️ | works on Safari 14.0, macOS BigSur; requires experimental **WebGL2** support |
| Google Chrome | ✅ | |
| Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work |

### Linux

| Browser | Supported | Remarks |
| :--: | :--: | :--: |
| Google Chrome | ❔ | |
| Mozilla Firefox | ❔ | `Clipboard::ReadText` does not work |

### Android

| Browser | Supported | Remarks |
| :--: | :--: | :--: |
| Android Browser | ❔ | |
| Google Chrome | 🚧 | |
| Mozilla Firefox | 🚧 | `Clipboard::ReadText` does not work |
| Opera Mobile | ❔ | |

### iOS

| Browser | Supported | Remarks |
| :--: | :--: | :--: |
| Safari | 🚧 | requires experimental **WebGL2** support |
| Google Chrome | ❔ | |

## Graphics

### Image File Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| Bitmap | ✅ | |
| PNG | ✅ | |
| Jpeg | ✅ | Also supports **libturbojpeg** |
| GIF | ✅ | |
| TIFF | ✅ | |
| WebP | ✅ | |

### Video Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| AVI | ⚠️ | Depends browser capability |
| MP4 | ⚠️ | Depends browser capability |
| Ogv | ⚠️ | Depends browser capability |

### Fonts

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Embedded Font | ✅ | |
| Emoji | ✅ | |
| System Fonts | ❌ | |

## Audio

### Audio Files Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| Wave | ✅ | |
| MP3 | ✅ | |
| AAC | ✅ | |
| Ogg | ✅ | |
| Opus | ✅ | |

## Input Devices

| Device Name | Status | Remarks |
| :--: | :--: | :--: |
| Keyboard | ✅ | |
| Mouse | ✅ | |
| Multi-touch | ✅ | Supports as Mouse Emulation |
| GamePad | ✅ | No Support for POV |
| XInput | 🚫 | |
| JoyCon | ❌ | |
| ProCon | ❌ | |

## HW Features

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| WebCamera | ✅ | |
| Microphone | ✅ | |
| CPU Feature Detection | 🚫 | |
| Power-Status | 🚫 | Depends on Deprecated API: [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API)|

## File System

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| On-Memory Files ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | Restricts: Flushed All Files on Reload (Web Extension) |
| [Indexed DataBase](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ | |
| File Dialogs | ✅ | `s3d::Platform::Web::Dialog` is also available |
| File Drag & Drop | 🚧 | |

## Text Input/Output

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Text Input Basic Support | ✅ | |
| IME Basic Support | ✅ | Uses Synchronization with `HTMLInputElement` |
| IME Candidate | 🚫 | |
| Text-To-Speech | ⚠️ | Chrome: not working, Edge: cannot Query Language List |

## Misc

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Notification | ✅ | |
| MessageBox | ✅ | Just Calls `window.alert` or `window.confirm` |
| ClipBoard | ⚠️ | Only Support Copy or Paste Texts; `s3d::Platform::Web::Clipboard` is also available |
| Network | 🚧 | Depends on **WebSocket**, which not supports P2P communication. |
| Siv3D Scripts | ✅  | |
| ChildProcess | ❌ | |
| NLP | ❌ | Depends ChildProcess Support |
