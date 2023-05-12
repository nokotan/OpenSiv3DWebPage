---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Visual Studio のセットアップ
permalink: /ja/building/setup-visualstudio
---

## Visual Studio のインストール

[Visual Studio のインストール手順について](https://siv3d.github.io/download/windows/#11-system-requirements-for-development) の指示に従って、Visual Studio をインストールします。

## Visual Studio 拡張機能のインストール

Visual Studio が emscripten に付随する emcc を使ってコンパイルを行うようにするために、 Visual Studio 機能拡張 **Emscripten Build Target** をインストールします。

### Emscripten Build Target のインストール

[Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-build-support) から .vsix パッケージをダウンロードします。

![InstallBuildSupport1.png](/assets/img/building/setup-visualstudio/InstallBuildSupport1.png)

ダウンロードした .vsix パッケージをダブルクリックして実行します。すると、インストールする拡張機能を尋ねるウィンドウが出てくるので、**Install** と書かれたボタンをクリックします。

![InstallBuildSupport2.png](/assets/img/building/setup-visualstudio/InstallBuildSupport2.png)

インストールが終わったら、次の画面が表示されます。インストーラを閉じてください。

![InstallBuildSupport3.png](/assets/img/building/setup-visualstudio/InstallBuildSupport3.png)
