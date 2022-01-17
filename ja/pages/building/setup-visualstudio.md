---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Visual Studio のセットアップ
permalink: /ja/building/setup-visualstudio
---

## Visual Studio のインストール

[Visual Studio のインストール (Windows)](https://zenn.dev/reputeless/books/siv3d-documentation/viewer/requirements#3.1-visual-studio-のインストール-(windows)) の指示に従って、Visual Studio 2022 をインストールします。

## Visual Studio 拡張機能のインストール

Visual Studio が emscripten に付随する emcc を使ってコンパイルを行うようにするために、**Emscripten Extension Pack for Visual Studio** Visual Studio 機能拡張をインストールします。

[Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-extensions) から .vsix パッケージをダウンロードします[^install-via-extension-manager]。

![VisualStudioExtensionInstaller0_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller0_ja.png)

ダウンロードした .vsix パッケージをダブルクリックして実行します。すると、インストールする拡張機能を尋ねるウィンドウが出てくるので、すべてのチェックボックスにチェックがついた状態で **Modify** と書かれたボタンをクリックします。

![VisualStudioExtensionInstaller1_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller1_ja.png)

**Emscripten Debugger for Visual Studio** と **Emscripten Build Support** のインストールが成功していることを確認して、**Close** と書かれたボタンをクリックします。

![VisualStudioExtensionInstaller2_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller2_ja.png)

[^install-via-extension-manager]: Visual Studio において、[ツール] > [拡張機能と更新プログラム] から拡張機能マネージャを開いて、そこで `Emscripten Extension Pack for Visual Studio` と検索しても、この拡張機能をインストールすることができます。

    ![setup-vs-ext-1.png](/assets/img/building/setup-visualstudio/setup-vs-ext-1.png)
    ![VisualStudioExtensionManager0.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionManager0.png)
