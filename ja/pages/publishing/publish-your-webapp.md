---
title: WebGL アプリの公開
permalink: /ja/publishing/publish-your-webapp
---

WebGL アプリケーションを構成するファイルは、`Emscripten/Release` に出力されます。このフォルダには、次のファイルが含まれています。

- (プロジェクト名).html
- (プロジェクト名).js
- (プロジェクト名).wasm
- (プロジェクト名).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

これらのファイルを Web サーバに配置することで、WebGL アプリを公開することができます。

### 制限

- OpenSiv3D for Web はセキュアコンテクスト上で動作するように設計されています

## GitHub Pages

詳しくは <https://prog-8.com/docs/github-pages> を参照してください。

### 制限

- GitHub Pages は商用目的で利用することはできません
- また、アップロードされるファイルは 50MB を超えてはならず、 `git-lfs` は使用できません

次のリンクも併せて確認してください。

- [About GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/ja/repositories/working-with-files/managing-large-files/about-large-files-on-github).
