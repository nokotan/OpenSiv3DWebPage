---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Emscripten をインストールする
permalink: /ja/building/get-emscripten
---

## Emscripten インストーラをダウンロードする

Windows 向け Emscripten 3.1.8 インストーラが [GitHub Releases](https://github.com/nokotan/EmscriptenInstaller/releases/latest) からダウンロードできます。

<details markdown="block"><summary>OpenSiv3D for Web のインストーラが行う処理</summary>

インストーラは次のツールをお使いの開発環境にダウンロードします。

- Emscripten 3.1.8
- Clang Compiler Front End
- Node
- Python

</details>

Assets リスト中の `Emscripten.exe` をクリックしてダウンロードします。

![EmscriptenInstallerInGitHub](/assets/img/building/install-emscripten/emscripten-installer-github.png)

## Emscripten インストーラを起動する

インストーラのダウンロードが完了したら、インストーラをダブルクリックして起動します。

> 次の画面が出て、インストーラーが起動できない時は、\[詳細情報\] を押すと \[実行\] ボタンが表示されます。
>
> ![SmartScreen1](/assets/img/building/setup-visualstudio/smart-screen-guard-1.png)
> ![SmartScreen2](/assets/img/building/install-emscripten/smart-screen-guard-again.png)
{:.info}

セットアップに使用する言語を選択する画面では、そのまま **OK** をクリックします。

![OpenSiv3DforWebInstaller0_ja.png](/assets/img/building/setup-visualstudio/OpenSiv3DforWebInstaller0_ja.png)

インストール先を指定する画面では、そのまま **次へ** をクリックします。なお、インストールされる先のフォルダを変更しても構いません。

![OpenSiv3DforWebInstaller1_ja.png](/assets/img/building/install-emscripten/emscripten-installer-1-ja.png)

インストール準備完了の画面では、**インストール** をクリックします。

![OpenSiv3DforWebInstaller2_ja.png](/assets/img/building/install-emscripten/emscripten-installer-2-ja.png)

Emscripten のインストールには 15 分から 1 時間かかります。

セットアップが完了したら、次の画面が出てくるので、**完了** をクリックして、インストーラを閉じます。

![OpenSiv3DforWebInstaller4_ja.png](/assets/img/building/install-emscripten/emscripten-installer-3-ja.png)
