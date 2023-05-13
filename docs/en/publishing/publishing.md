---
title: Publish Your WebGL Apps
---

## Publish Your WebGL Apps

The files of WebGL apps are emitted in the `Emscripten/Release` folder, containing these files:

- (AppName).html
- (AppName).js
- (AppName).wasm
- (AppName).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

These files should be put into a Web Server in order to publish your WebGL apps.

### Limitations

- OpenSiv3D for Web is designed to work with secure context (https://).

### GitHub Pages

Dedicated explaination is available in <https://prog-8.com/docs/github-pages>.

#### Limitations

- GitHub Pages cannot be used for commecial use
- Each uploaded files cannot exceed 50MB and `git-lfs` cannot be used

Please check following official pages.

- [About GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/repositories/working-with-files/managing-large-files/about-large-files-on-github).

## Optimize Assets Size

### Shrinking Bundle Size

The Siv3D template project contains all files so that examples are got worked.

Some files can be ommited to reduce the bundle size, please follow instructions in <https://zenn.dev/reputeless/articles/article-minimum>.

### Shrinking WebAssembly Size

`libSiv3DScript.a` can be omitted from linked files if your WebGL app don't use **Siv3D Scripts** functionality.

#### Visual Studio

Open the project configuration window, and remove `Siv3DScript` from Additional Dependency Files (found in [Emscripten Linker] > [Input]) in the project configuration.

![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)

#### Visual Studio Code

Open `.vscode/Link.Debug.rsp` or `.vscode/Link.Release.rsp` and remove `-lSiv3DScript`.
