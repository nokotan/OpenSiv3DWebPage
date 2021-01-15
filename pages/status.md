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
| 🚧 | Implementing |
| ❔ | Unknown |
| ❌ | Currently Not Implemented (will be Implemented in Feature Releases) |
| 🚫 | Will Not Implemented |

## Graphics

### Image File Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| Bitmap | ❔ | |
| PNG | ✅ | |
| Jpeg | ✅ | Also supports **libturbojpeg** |
| GIF | ❌ | |

### Fonts

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Embedded Font | ✅ | |
| Emoji | ✅ | |
| System Fonts | 🚫 | |
| Web Fonts | ❌ | (Web Extension) |

## Audio

### Audio Files Formats

| Format Name | Status | Remarks |
| :--: | :--: | :--: |
| Wave | ✅  | |
| MP3 | ❌ | |
| AAC | 🚧 | |
| Ogg | ✅  | |

## Input Devices

| Device Name | Status | Remarks |
| :--: | :--: | :--: |
| Keyboard | ✅ | |
| Mouse | ✅ | |
| Multi-touch | 🚧 | Supports as Mouse Emulation |
| GamePad | ❌ | |

## HW Features

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| WebCamera | ✅ | Restricts: Fixed Resolution (640x480) |
| Microphone | 🚧 | |
| CPU Feature Detection | 🚫 | |
| Power-Status | 🚫 | Depends Deprecated API: [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API)|

## File System

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| On-Memory Files ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | Restricts: Flushed All Files on Reload (Web Extension) |
| [Indexed DataBase](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ | |
| File Dialogs | 🚧 | |
| File Drag & Drop | ❌ | |

## Misc

| Feature Name | Status | Remarks |
| :--: | :--: | :--: |
| Notification | ❌ | |
| Text-To-Speech | ❌ | |
| MessageBox | 🚧 | Just Calls `window.alert` or `window.confirm` |
| ClipBoard | ❌ | |
| Network | ❌ | |
| Siv3D Scripts | ✅ | |
