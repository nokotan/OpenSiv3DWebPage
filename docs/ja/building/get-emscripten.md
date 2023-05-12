---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Emscripten をインストールする
permalink: /ja/building/get-emscripten
---

## Emscripten インストーラをダウンロードする

Windows 向け Emscripten 3.1.20 インストーラが [GitHub Releases](https://github.com/nokotan/EmscriptenInstaller/releases/latest) からダウンロードできます。

<details markdown="block"><summary>Emscripten 3.1.20 インストーラが行う処理</summary>

インストーラは次のツールをお使いの開発環境にダウンロードします。

- Emscripten 3.1.20
- Clang Compiler Front End
- Node
- Python

</details>

Assets リスト中の `EmscriptenOffline.exe` をクリックしてダウンロードします。
お使いのネットワークによっては、ダウンロードに10分以上かかることがあります。

![EmscriptenInstallerGitHub](/assets/img/building/install-emscripten/EmscriptenInstallerGitHub.png)

## Emscripten インストーラを起動する

インストーラのダウンロードが完了したら、インストーラをダブルクリックして起動します。

> 次の画面が出て、インストーラーが起動できない時は、\[詳細情報\] を押すと \[実行\] ボタンが表示されます。
>
> ![SmartScreen1](/assets/img/building/install-siv3d/SmartScreenGuard1.png)
> ![SmartScreen2](/assets/img/building/install-emscripten/smart-screen-guard-again.png)
{:.info}

セットアップに使用する言語を選択する画面では、そのまま **OK** をクリックします。

![EmscriptenInstaller1.png](/assets/img/building/install-emscripten/EmscriptenInstaller1.png)

インストール先を指定する画面では、そのまま **次へ** をクリックします。なお、インストールされる先のフォルダを変更しても構いません。

![EmscriptenInstaller2.png](/assets/img/building/install-emscripten/EmscriptenInstaller2.png)

インストール準備完了の画面では、**インストール** をクリックします。

![EmscriptenInstaller3.png](/assets/img/building/install-emscripten/EmscriptenInstaller3.png)

Emscripten のインストールには 15 分から 1 時間かかります。

セットアップが完了したら、次の画面が出てくるので、**完了** をクリックして、インストーラを閉じます。

![EmscriptenInstaller4.png](/assets/img/building/install-emscripten/EmscriptenInstaller4.png)

>
> インストーラを閉じた後、「Windows セキュリティが、Microsoft Defender ウイルス対策で脅威が見つかりました。」
> または「`Emscripten.exe` はセキュリティ上の脅威です。」と報告する場合があります。
> この報告は無視してください。
>
> ![EmscriptenInstaller5.png](/assets/img/building/install-emscripten/EmscriptenInstaller5.png)
>
{:.info}
