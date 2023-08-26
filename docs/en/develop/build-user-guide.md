# OpenSiv3D for Web project site

The project site is in operation at [https://siv3d.kamenokosoft.com](https://siv3d.kamenokosoft.com) .

## Project site translation

- This site is translated into other languages ​​by [https://gitlocalize.com/repo/8089](https://gitlocalize.com/repo/8089) .

## Build the project site

This site uses [**jekyll**](https://jekyllrb.com) as the build environment and [**milligram**](https://milligram.io) and [**Pure.css**](https://purecss.io) as CSS frameworks.

- [jekyll installation guide](https://jekyllrb.com/docs/)
- [milligram project site](https://milligram.io)
- [Pure.css project site](https://purecss.io)

### Dependency resolution

```sh
% gem install bundler
% bundle install
```

### Generate project site

```sh
% jekyll build
# Or start a local server with the `jekyll serve` command
```

## directory structure

### _data, _layouts

- `_data/[language]` and `_layouts/[language]` folders contain the translated data files.

### _includes

- In the `_includes` folder are the HTML constructs.
- Do not place translated files in this folder.

### pages

- `pages` folder contains the main articles.
- The navigation menu is manually updated. The definition of the navigation menu content is in `_data/ja/nav.yml` .
