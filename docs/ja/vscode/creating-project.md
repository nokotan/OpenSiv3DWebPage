---
title: プロジェクトの作成
permalink: /ja/vscode/creating-project
---

## プロジェクトテンプレートをダウンロードする

[サンプルプログラム実行用パッケージのリポジトリ](https://github.com/nokotan/OpenSiv3DForWeb-VSCode) に移動し、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押してください。

<details markdown="block"><summary>テンプレートに含まれている内容</summary>

このテンプレートは、次の部分の構成が行われています。

- インテリセンス構成
  - インクルードディレクトリ
  - マクロ定義
- ビルドタスク、デバッグタスクの定義

</details>

![InstallSiv3DWebVSCode.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/3c6d1c31-e6ff-0fb4-a00c-0086a2fafd12.png)

ダウンロードが終わったら、Zip ファイルを右クリックして、**すべて展開(T)...** をクリックします。
すると、圧縮 (ZIP 形式) フォルダーの展開という名前のウィンドウが表示されるので、**展開** をクリックします。

![ExtractZip](/assets/img/building/trouble-shooting/unzip-all.png)

![ExtractZip](/assets/img/building/trouble-shooting/unzip-all2.png)

## テンプレートからプロジェクトを作成する

Visual Studio Code を起動して、[ファイル] > [フォルダを開く...] でフォルダを開くためのダイアログを表示します。

ここで、先ほど展開した OpenSiv3D Web版 Visual Studio Codeサンプルプログラム実行用パッケージが含まれるフォルダを選んでください。

[^open-dialog]: Click `File` > `Open Folder ...`

![VSCodeOpenFolder.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/385e8dfe-3f3a-431f-a8ed-63e2d491723c.png)

![OpenedProject](/assets/img/building/setup-vscode/opened-project-on-vscode.png)
