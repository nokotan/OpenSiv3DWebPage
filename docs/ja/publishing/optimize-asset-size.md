---
title: ビルドサイズの縮小
permalink: /ja/publishing/optimize-asset-size
---

## バンドルサイズの縮小

コードサンプルが正常に機能するようにするため、Siv3D プロジェクトテンプレートはすべてのファイルがバンドル対象に含まれています。

いくつかのファイルは、バンドルサイズの縮小のため省略することができます。詳しくは <https://zenn.dev/reputeless/articles/article-minimum> を参照してください。

## WebAssembly サイズの縮小

Siv3D Script の機能を使わない場合、`libSiv3DScript.a` をリンクされるファイルから除外することができます。

### Visual Studio

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[Emscripten リンカ] > [入力] > [追加の依存ファイル] から、`Siv3DScript` を削除します。

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

### Visual Studio Code

`.vscode/Link.Debug.rsp` または `.vscode/Link.Release.rsp` を開き、`-lSiv3DScript` の一行を削除します。
