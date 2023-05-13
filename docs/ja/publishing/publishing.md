# WebGL アプリの公開

## 1. WebGL アプリの公開に必要なファイル

WebGL アプリケーションを構成するファイルは、`Emscripten/Release` に出力されます。このフォルダには、次のファイルが含まれています。

- (プロジェクト名).html
- (プロジェクト名).js
- (プロジェクト名).wasm
- (プロジェクト名).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

これらのファイルを Web サーバから https:// プロトコルで配置することで、WebGL アプリを公開することができます。

## 2. ホスティングサービスを使って WebGL アプリを公開する

### 2.1 GitHub Pages

[自分で作ったWebページをインターネット上に公開しよう！ :material-open-in-new:](https://prog-8.com/docs/github-pages) を参照します。

### 2.2 GitHub Pages の制限

- GitHub Pages は商用目的で利用することはできません
- 1ファイルあたり 50MB を超えるファイルはアップロードできません。`git-lfs` は使用できません

GitHub Pages のそのほかの制限やリファレンスについて知りたい場合は、次のリンクを確認します。

- [About GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/ja/repositories/working-with-files/managing-large-files/about-large-files-on-github).

## 3. 出力ファイルサイズの削減

### 3.1 アセットサイズの縮小

1. Web 版のビルドでは、デフォルトで `engine/` と `example/` のすべてのファイルを最終出力に同梱するため、最終出力ファイルのサイズは Release ビルドでも合計数十 MB と大きくなります。そうしたアプリケーションを Web で公開すると、アクセスした利用者がファイルのダウンロードに時間がかかってしまうため、実際にアプリケーションを公開する際は、不要なファイルを削除する必要があります（参考: [チュートリアル 41 | アプリの公開](https://zenn.dev/reputeless/books/siv3d-documentation/viewer/tutorial-release#41.9-%E5%90%8C%E6%A2%B1%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%8C%E7%84%A1%E3%81%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB))。

### 3.2 WebAssembly サイズの縮小

Emscripten リンカの設定において「追加の依存ファイル」から不要なライブラリを削除することで、Web 版の出力ファイルのサイズをコンパクトにできます。

1. Siv3D Script の機能を使わない場合、`libSiv3DScript.a` をリンクされるライブラリから除外することができます。

    ??? info "Visual Studio での手順"

        [プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[Emscripten リンカ] > [入力] > [追加の依存ファイル] から、`Siv3DScript` を削除します。

        ![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

    ??? info "Visual Studio Code での手順"

        `.vscode/Link.Debug.rsp` または `.vscode/Link.Release.rsp` を開き、`-lSiv3DScript` の一行を削除します。
