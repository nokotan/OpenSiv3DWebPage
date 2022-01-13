---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Visual Studio のセットアップ
permalink: /ja/building/setup-visualstudio
---

## emscripten 用のプロジェクトテンプレートをインストールする

Visual Studio が emscripten に付随する emcc を使ってコンパイルを行うようにするために、**Emscripten Extension Pack for Visual Studio** Visual Studio 機能拡張をインストールします。

[Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-extensions) から .vsix パッケージをダウンロードします[^install-via-extension-manager]。

![VisualStudioExtensionInstaller0_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller0_ja.png)

ダウンロードした .vsix パッケージを実行します。すると、インストールする拡張機能を尋ねるウィンドウが出てくるので、すべてのチェックボックスにチェックがついた状態で**Modify** と書かれたボタンをクリックします。

![VisualStudioExtensionInstaller1_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller1_ja.png)

**Emscripten Debugger for Visual Studio** と **Emscripten Build Support** のインストールが成功していることを確認して、**Close** と書かれたボタンをクリックします。

![VisualStudioExtensionInstaller2_ja.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionInstaller2_ja.png)

[^install-via-extension-manager]: Visual Studio において、[ツール] > [拡張機能と更新プログラム] から拡張機能マネージャを開いて、そこで `Emscripten Extension Pack for Visual Studio` と検索しても、この拡張機能をインストールすることができます。

    ![setup-vs-ext-1.png](/assets/img/building/setup-visualstudio/setup-vs-ext-1.png)
    ![VisualStudioExtensionManager0.png](/assets/img/building/setup-visualstudio/VisualStudioExtensionManager0.png)

## OpenSiv3D Web版をダウンロードする

OpenSiv3D for Web インストーラが、[ダウンロード](/ja/download) ページからダウンロードできます。
OpenSiv3D for Web のインストーラは次の処理を行います。

- OpenSiv3D for Web のバイナリの配置
- プロジェクトテンプレートの登録
- 環境変数の登録 (OpenSiv3D Web版の配置場所)

次の画面が出て、インストーラーが起動できない時は、\[詳細情報\] を押すと \[実行\] ボタンが表示されます。

![SmartScreen1](/assets/img/building/setup-visualstudio/smart-screen-guard-1.png)
![SmartScreen2](/assets/img/building/setup-visualstudio/smart-screen-guard-2.png)

セットアップに使用する言語を選択する画面では、そのまま **OK** をクリックします。

![OpenSiv3DforWebInstaller0_ja.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller0_ja.png)

インストール先を指定する画面では、そのまま **次へ** をクリックします。なお、インストールされる先のフォルダを変更しても構いません。

![OpenSiv3DforWebInstaller1_ja.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller1_ja.png)

インストール準備完了の画面では、**インストール** をクリックします。

![OpenSiv3DforWebInstaller2_ja.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller2_ja.png)

セットアップが完了したら、次の画面が出てくるので、**完了** をクリックして、インストーラを閉じます。

![OpenSiv3DforWebInstaller4_ja.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller4_ja.png)
