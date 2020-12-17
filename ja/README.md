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
