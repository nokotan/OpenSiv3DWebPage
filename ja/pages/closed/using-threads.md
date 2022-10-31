---
title: マルチスレッド
permalink: /ja/closed/using-threads
sitemap: false
---

## 前提知識

- サーバ上で Cross-Origin-Isolation を設定する
  - [SharedArrayBuffer を使用するための必要要件](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)です
  - [COOP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  - [COEP ヘッダ](https://developer.mozilla.org/ja-JP/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

## OpenSiv3D for Web マルチスレッド対応板のダウンロード

### インストーラを使う場合

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-Installer-wasm-mt.exe` をインストールします。

### インストーラを使わない場合

[GitHub Releases](https://github.com/nokotan/OpenSiv3D/releases) から、`OpenSiv3D-wasm-mt.tgz` をダウンロードし、適切なフォルダに展開します。
