---
title: WebGL アプリの公開
---

## WebGL アプリの公開

WebGL アプリケーションを構成するファイルは、`Emscripten/Release` に出力されます。このフォルダには、次のファイルが含まれています。

- (プロジェクト名).html
- (プロジェクト名).js
- (プロジェクト名).wasm
- (プロジェクト名).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

これらのファイルを Web サーバに配置することで、WebGL アプリを公開することができます。

### 制限

- OpenSiv3D for Web はセキュアコンテクスト上で動作するように設計されています

### GitHub Pages

詳しくは <https://prog-8.com/docs/github-pages> を参照してください。

#### 制限

- GitHub Pages は商用目的で利用することはできません
- また、アップロードされるファイルは 50MB を超えてはならず、 `git-lfs` は使用できません

次のリンクも併せて確認してください。

- [About GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/ja/repositories/working-with-files/managing-large-files/about-large-files-on-github).

## ビルドサイズの縮小

### バンドルサイズの縮小

コードサンプルが正常に機能するようにするため、Siv3D プロジェクトテンプレートはすべてのファイルがバンドル対象に含まれています。

いくつかのファイルは、バンドルサイズの縮小のため省略することができます。詳しくは <https://zenn.dev/reputeless/articles/article-minimum> を参照してください。

### WebAssembly サイズの縮小

Siv3D Script の機能を使わない場合、`libSiv3DScript.a` をリンクされるファイルから除外することができます。

#### Visual Studio

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[Emscripten リンカ] > [入力] > [追加の依存ファイル] から、`Siv3DScript` を削除します。

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

#### Visual Studio Code

`.vscode/Link.Debug.rsp` または `.vscode/Link.Release.rsp` を開き、`-lSiv3DScript` の一行を削除します。
