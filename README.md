# OpenSiv3D for Web Project Site

The project site is running on <https://siv3d.kamenokosoft.com>

## Building Site

This site uses [**jekyll**](https://jekyllrb.com) and [**jekyll-task-i18n**](https://github.com/ruby-gettext/jekyll-task-i18n).

- [jekyll Installation Guild](https://jekyllrb.com/docs/)
- [jekyll-task-i18n](https://github.com/ruby-gettext/jekyll-task-i18n)

### Installing Gem Dependencies

```sh
% gem install bundler
% bundle install
```

### Create Translation Patch

```sh
# Generate translation patch files
% rake
# Then, edit _po/**/*.edit.po
# Command `rake` after editing *.edit.po will apply translation patch
% rake
```

### Generate Pages

```sh
% jekyll build
# or, `jekyll serve` will launch local server
```
