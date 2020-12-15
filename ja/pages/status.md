---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: 実装状況
permalink: /ja/status
meta-title: Status
---

**[プロジェクト:機能](https://github.com/nokotan/OpenSiv3D/projects/1) も確認してください。**

### 状態バッジ

| バッジ | 説明 |
| :--: | :--: |
| ✅ | 実装完了 |
| 🚧 | 実装中 |
| ❔ | 不明 |
| ❌ | 未実装 (将来のリリースで実装される予定) |
| 🚫 | 実装予定がありません |

## グラフィック

### 画像ファイルフォーマット

| フォーマット名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Bitmap | ❔ | |
| PNG | ✅ | |
| Jpeg | ✅ | **libturbojpeg** もサポート |
| GIF | ❌ | |

### フォント

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| 組み込みフォント | ✅ | |
| 絵文字 | ✅ | |
| システムフォント | 🚫 | |
| Web フォント | ❌ | (OpenSiv3D for Web の拡張機能) |

## サウンド

### サウンドファイルフォーマット

| フォーマット名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Wave | ❔ | |
| MP3 | ❌ | |
| AAC | ❌ | |
| Ogg | ❔ | |

## 入力デバイス

| デバイス名 | 状態 | 備考 |
| :--: | :--: | :--: |
| キーボード | ✅ | |
| マウス | ✅ | |
| タッチ入力 | 🚧 | マウス入力をエミュレートします |
| ゲームコントローラ | ❌ | |

## ハードウェアの機能

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Web カメラ | ✅ | 固定解像度のみ対応 (640x480) |
| マイク | ❌ | |
| CPU 機能検出 | 🚫 | |
| 電源状態 | 🚫 | [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API) という非推奨の API に依存 |

## ファイルシステム

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| メモリ上のファイル ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | 再読み込み時に全てのファイルが消去されます。 (OpenSiv3D for Web の拡張機能) |
| [インデックスされたファイル](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ | |
| ダイアログ | ❌ | |
| ドラッグドロップ | ❌ | |

## そのほか

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| 通知 | ❌ | |
| 音声読み上げ | ❌ | |
| メッセージボックス | ✅ | `window.alert` または `window.confirm` を呼び出し |
| クリップボード | ❌ | |
| 通信機能 | ❌ | |
| Siv3D スクリプト | ✅ | |
