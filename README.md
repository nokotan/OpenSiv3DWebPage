# OpenSiv3D for Web Project Site

The project site is running on <https://siv3d.kamenokosoft.com>

## Translating Site

* This site is translated with <https://gitlocalize.com/repo/8089>.

## Building Site

[**jekyll**](https://jekyllrb.com) is used as build infrastructure, [**milligram**](https://milligram.io) and [**Pure.css**](https://purecss.io) are used as CSS frameworks.

- [jekyll Installation Guild](https://jekyllrb.com/docs/)
- [milligram Project Page](https://milligram.io)
- [Pure.css Project Page](https://purecss.io)

### Installing Gem Dependencies

```sh
% gem install bundler
% bundle install
```

### Generate Pages

```sh
% jekyll build
# or, `jekyll serve` will launch local server
```

## Directories Structure

### \_data, \_layouts

- Localized versions of data files are located in `_data/[lang]` or `_layouts/[lang]`.

### \_includes

- `_includes` folder contains html components.
- It is not recommended in this repository to locate localization specific files.

### pages

- Main articles are placed in this folder.
- Navigation menu is maintained by hand; Its contents definition are found in `_data/nav.yml`.
