# OpenSiv3D for Web プロジェクトサイト

プロジェクトサイトは <https://siv3d.kamenokosoft.com> で運用中です。

## プロジェクトサイトの翻訳

* このサイトは <https://gitlocalize.com/repo/8089> によって、他言語に翻訳しています。

## プロジェクトサイトのビルド

このサイトでは、ビルド環境に [**jekyll**](https://jekyllrb.com) を、CSS フレームワークに [**milligram**](https://milligram.io) と [**Pure.css**](https://purecss.io) を使っています。

- [jekyll インストールガイド](https://jekyllrb.com/docs/)
- [milligram プロジェクトサイト](https://milligram.io)
- [Pure.css プロジェクトサイト](https://purecss.io)

### 依存関係の解決

```sh
% gem install bundler
% bundle install
```

### プロジェクトサイトの生成

```sh
% jekyll build
# または、`jekyll serve` コマンドでローカルサーバを立ち上げます
```

## ディレクトリ構造

### \_data, \_layouts

- `_data/[言語]` フォルダと `_layouts/[言語]` フォルダに、翻訳したデータファイルがあります。

### \_includes

- `_includes` フォルダに、HTML の構成要素があります。
- このフォルダには、翻訳したファイルを配置しないでください。

### pages

- `pages` フォルダに、主となる記事があります。
- ナビゲーションメニューは、手動で更新しています。ナビゲーションメニューの内容の定義は `_data/ja/nav.yml` にあります。
