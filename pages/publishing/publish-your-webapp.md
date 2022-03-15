---
title: Publish Your WebGL Apps
permalink: /publishing/publish-your-webapp
---

The files of WebGL apps are emitted in the `Emscripten/Release` folder, containing these files:

- (AppName).html
- (AppName).js
- (AppName).wasm
- (AppName).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

These files should be put into a Web Server in order to publish your WebGL apps.

### Limitations

- OpenSiv3D for Web is designed to work with secure context (https://).

## GitHub Pages

Dedicated explaination is available in <https://prog-8.com/docs/github-pages>.

### Limitations

- GitHub Pages cannot be used for commecial use
- Each uploaded files cannot exceed 50MB and `git-lfs` cannot be used

Please check following official pages.

- [About GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/repositories/working-with-files/managing-large-files/about-large-files-on-github).
