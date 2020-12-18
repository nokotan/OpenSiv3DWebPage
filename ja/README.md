# OpenSiv3D for Web プロジェクトサイト

プロジェクトサイトは <https://siv3d.kamenokosoft.com> で運用中です。

## プロジェクトサイトのビルド

このサイトでは、ビルド環境に [**jekyll**](https://jekyllrb.com) と [**jekyll-task-i18n**](https://github.com/ruby-gettext/jekyll-task-i18n) を、CSS フレームワークに [**milligram**](https://milligram.io) と [**Pure.css**](https://purecss.io) を使っています。

- [jekyll インストールガイド](https://jekyllrb.com/docs/)
- [jekyll-task-i18n GitHub リポジトリ](https://github.com/ruby-gettext/jekyll-task-i18)
- [milligram プロジェクトサイト](https://milligram.io)
- [Pure.css プロジェクトサイト](https://purecss.io)

### 依存関係の解決

```sh
% gem install bundler
% bundle install
```

### 翻訳パッチの作成

```sh
# 翻訳パッチを生成
% rake
# そして、 _po/**/*.edit.po を編集します
# *.edit.po を編集した後に、再び `rake` コマンドを実行することで、翻訳パッチが適用されます
% rake
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

### \_po

- `_po` フォルダに、翻訳パッチがあります。
- 詳細は [jekyll-task-i18n GitHub リポジトリ](https://github.com/ruby-gettext/jekyll-task-i18n) を確認してください。

### pages

- `pages` フォルダに、主となる記事があります。
- ナビゲーションメニューは、手動で更新しています。ナビゲーションメニューの内容の定義は `_data/ja/nav.yml` にあります。
