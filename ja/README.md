# OpenSiv3D for Web プロジェクトサイト

プロジェクトサイトは <https://siv3d.kamenokosoft.com> で運用中です。

## プロジェクトサイトのビルド

このサイトでは [**jekyll**](https://jekyllrb.com) と [**jekyll-task-i18n**](https://github.com/ruby-gettext/jekyll-task-i18n) を使っています。

- [jekyll インストールガイド](https://jekyllrb.com/docs/)
- [jekyll-task-i18n インストールガイド](https://github.com/ruby-gettext/jekyll-task-i18n)

### 依存関係の解決

```sh
% gem install bundler
% bundle install
```

### 翻訳パッチの作成

```sh
# Generate translation patch files
% rake
# Then, edit _po/**/*.edit.po
# Command `rake` after editing *.edit.po will apply translation patch
% rake
```

### プロジェクトサイトの生成

```sh
% jekyll build
# or, `jekyll serve` will launch local server
```
