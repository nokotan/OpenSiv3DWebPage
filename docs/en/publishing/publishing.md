# Publishing WebGL apps

## 1. Files needed to publish a WebGL app

The files that make up a WebGL application are exported to `Emscripten/Release` . This folder contains the following files:

- (project name).html
- (project name).js
- (project name).wasm
- (project name).data

![FolderImage](/assets/img/publishing/uploaded-files.png)

By placing these files from your web server with the https:// protocol, you can publish your WebGL app.

## 2. Publish your WebGL app using a hosting service

### 2.1 GitHub Pages

[Publish your own web page on the Internet!](https://prog-8.com/docs/github-pages) See [:material-open-in-new:.](https://prog-8.com/docs/github-pages)

### 2.2 Limitations of GitHub Pages

- GitHub Pages cannot be used for commercial purposes
- Files larger than 50MB per file cannot be uploaded. `git-lfs` is not available

If you'd like to learn more about GitHub Pages limits and references, check out the following links:

- [About GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages).
- [About large files on GitHub](https://docs.github.com/ja/repositories/working-with-files/managing-large-files/about-large-files-on-github).

## 3. Reduce output file size

### 3.1 Reduction in asset size

1. By default, web builds include all files in `engine/` and `example/` in the final output, so the total size of the final output file is large, tens of MB even in Release builds. If such an application is published on the web, users who access it will take a long time to download the files, so when actually publishing the application, it is necessary to delete unnecessary files (Reference: [Tutorial 41 | public](https://zenn.dev/reputeless/books/siv3d-documentation/viewer/tutorial-release#41.9-%E5%90%8C%E6%A2%B1%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%8C%E7%84%A1%E3%81%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB) ).

### 3.2 Reducing WebAssembly size

You can reduce the output file size of the web version by removing unnecessary libraries from "Additional dependencies" in the Emscripten linker settings.

1. If you don't use the functionality of Siv3D Script, you can exclude `libSiv3DScript.a` from the linked library.

    ??? info "Procedure in Visual Studio"

    ```
     Open the project settings from Project &gt; Properties. Remove `Siv3DScript` from the project settings, [Emscripten Linker] &gt; [Input] &gt; [Additional Dependencies].

    ![preload-files-on-visual-studio.png](/assets/img/building/web-specific-notes/preload-files-on-visual-studio.png)
    ```

    ??? info "Instructions in Visual Studio Code"

    ```
     Open `.vscode/Link.Debug.rsp` or `.vscode/Link.Release.rsp` and remove the line `-lSiv3DScript`.
    ```
