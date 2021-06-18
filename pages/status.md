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
| ❌ | Currently Not Implemented (will be Implemented in Feature Releases) |
| 🚫 | Will Not Implemented |

## Graphics

### Image File Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| Bitmap | ✅ | |
| PNG | ✅ | |
| Jpeg | ✅ | Also supports **libturbojpeg** |
| GIF | ✅ | |
| WebP | ✅ | |

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
| MP3 | ✅ | Use [`s3d::Platform::WebAudioProcessing::DecodeAudioFromFile`](building/web-specific-notes#Audio%20Decoding). |
| AAC | ✅ | Use [`s3d::Platform::WebAudioProcessing::DecodeAudioFromFile`](building/web-specific-notes#Audio%20Decoding). Can be enabled by building manually |
| Ogg | ✅ | |

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
| WebCamera | ✅ | Restricts: Fixed Resolution (640x480) |
| Microphone | ⚠️ | Broken emscripten's OpenAL Support |
| CPU Feature Detection | 🚫 | |
| Power-Status | 🚫 | Depends Deprecated API: [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API)|

## File System

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| On-Memory Files ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | Restricts: Flushed All Files on Reload (Web Extension) |
| [Indexed DataBase](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ | |
| File Dialogs | ✅ | Use functions in namespace [`s3d::Platform::Web::Dialog`](building/web-specific-notes#File%20Open%20Dialog) |
| File Drag & Drop | ✅ | |

## Text Input/Output

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Text Input Basic Support | ✅ | |
| IME Basic Support | ✅ | Uses Synchronization with `HTMLInputElement` |
| IME Candidate | 🚫 | |
| Text-To-Speech | 🚧 | Chrome: not working, Edge: cannot Query Language List |

## Misc

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Notification | 🚧 | |
| MessageBox | ✅ | Just Calls `window.alert` or `window.confirm` |
| ClipBoard | ✅ | Only Support Copy or Paste Texts; Use GetText in namespace [`s3d::Platform::Web::Clipboard`](building/web-specific-notes#Clipboard) instead of `Clipboard::GetText` |
| Network | ❌ | Depends on **WebSocket**, which not supports P2P communication. |
| Siv3D Scripts | ✅ | |
| ChildProcess | ❌ | |
| NLP | ❌ | Depends ChildProcess Support |
