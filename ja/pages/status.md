---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 実装状況
permalink: /ja/status
---

**[プロジェクト:機能](https://github.com/nokotan/OpenSiv3D/projects/1) も確認してください。**

### 状態バッジ

| バッジ | 説明 |
| :--: | :--: |
| ✅ | 実装完了 |
| ⚠️ | 仮実装, 機能しない部分や予期しない挙動をとる部分あり |
| 🚧 | 実装中 |
| ❔ | 不明 |
| ❌ | 未実装 (将来のリリースで実装される予定) |
| 🚫 | 実装予定がありません |

## ブラウザ別サポート状況

お役立ちリンク

- [Can I use: WebGL2 (en)](https://caniuse.com/webgl2)
- [WebAssembly Roadmap (en)](https://webassembly.org/roadmap/)

### Windows

| ブラウザ名 | サポート状況 | 備考 |
| :--: | :--: | :--: |
| Internet Explorer 11 | 🚫 | **WebGL2**, **WebAssembly** のサポートがありません |
| Google Chrome | ✅ | |
| Mozilla Firefox | ✅ | `Clipboard::ReadText` が機能しません |
| Microsoft Edge | ✅ | |
| Opera | ❔ | |

### macOS

| ブラウザ名 | サポート状況 | 備考 |
| :--: | :--: | :--: |
| Safari | ⚠️ | Safari 14.0, macOS BigSur のみサポート。WebAssembly SIMD は利用不可能です |
| Google Chrome | ✅ | |
| Mozilla Firefox | ✅ | `Clipboard::ReadText` does not work |

### Linux

| ブラウザ名 | サポート状況 | 備考 |
| :--: | :--: | :--: |
| Google Chrome | ❔ | |
| Mozilla Firefox | ❔ | `Clipboard::ReadText` が機能しません |

### Android

| ブラウザ名 | サポート状況 | 備考 |
| :--: | :--: | :--: |
| Android Browser | ❔ | |
| Google Chrome | 🚧 | |
| Mozilla Firefox | 🚧 | `Clipboard::ReadText` が機能しません |
| Opera Mobile | ❔ | |

### iOS

| ブラウザ名 | サポート状況 | 備考 |
| :--: | :--: | :--: |
| Safari | 🚧 | WebAssembly SIMD は利用不可能です |
| Google Chrome | ❔ | |

## グラフィック

### 画像ファイルフォーマット

| フォーマット名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Bitmap | ✅ | |
| PNG | ✅ | |
| Jpeg | ✅ | **libturbojpeg** もサポート |
| GIF | ✅ | |
| TIFF | ✅ | |
| WebP | ✅ | |

### 動画フォーマット

| フォーマット名 | 状態 | 備考 |
| :--: | :--: | :--: |
| AVI | ⚠️ | ブラウザの動画処理に依存 |
| MP4 | ⚠️ | ブラウザの動画処理に依存 |
| Ogv | ⚠️ | ブラウザの動画処理に依存 |

### フォント

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| 組み込みフォント | ✅ | |
| 絵文字 | ✅ | |
| システムフォント | ❌ | |


## サウンド

### サウンドファイルフォーマット

| フォーマット名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Wave | ✅ | |
| MP3 | ✅ | |
| AAC | ✅ | |
| Ogg | ✅ | |
| Opus | ✅ | |

## 入力デバイス

| デバイス名 | 状態 | 備考 |
| :--: | :--: | :--: |
| キーボード | ✅ | |
| マウス | ✅ | |
| マルチタッチ | ✅ | マウス入力のエミュレーションとして機能 |
| ゲームコントローラ | ✅ | POV 入力は使用できません |
| XInput | 🚫 | |
| JoyCon | ❌ | |
| ProCon | ❌ | |

## ハードウェアの機能

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| Web カメラ | ✅ | 固定解像度のみ対応 (640x480) |
| マイク | ✅ | |
| CPU 機能検出 | 🚫 | |
| 電源状態 | 🚫 | [Battery Status API](https://developer.mozilla.org/ja/docs/Web/API/Battery_Status_API) という非推奨の API に依存 |

## ファイルシステム

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| メモリ上のファイル ([MEMFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ✅ | 再読み込み時に全てのファイルが消去されます。 (OpenSiv3D for Web の拡張機能) |
| [インデックスされたファイル](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) ([IDBFS](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs)) | ❌ | |
| ダイアログ | ✅ | `s3d::Platform::Web::Dialog` 名前関数の関数も利用可能 |
| ドラッグドロップ | 🚧 | |

## テキスト入出力

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| テクスト入力基本サポート | ✅ | |
| IME 基本サポート | ✅ | `HTMLInputElement` と同期 |
| IME 入力候補 | 🚫 | |
| テキスト読み上げ | ⚠️ | Chrome: 機能しません, Edge: 言語リストを取得できません |

## そのほか

| 機能名 | 状態 | 備考 |
| :--: | :--: | :--: |
| 通知 | ✅ | |
| メッセージボックス | ✅ | `window.alert` または `window.confirm` を呼び出し |
| クリップボード | ⚠️ | テキストのコピー及び貼り付けのみ対応; `s3d::Platform::Web::Clipboard` も利用可能 |
| Network | 🚧 | **WebSocket** に依存、P2P 通信は利用不可 |
| Siv3D Scripts | ✅ | |
| 子プロセス | ❌ | |
| NLP | ❌ | 子プロセスサポートに依存 |
