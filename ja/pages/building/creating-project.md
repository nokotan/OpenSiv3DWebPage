---
title: プロジェクトの作成
permalink: /ja/building/creating-project
---

## プロジェクトを作成する

左下の Windows ボタンをクリックして、Windows メニューを開きます。
左側のアプリケーション一覧から **Visual Studio** を探してクリックし、Visual Studio を起動します。

![LaunchVisualStudio.png](/assets/img/building/creating-project/LaunchVS.png)

Visual Studio を起動したら、 画像のようなスタート画面が表示されます。[新しいプロジェクトの作成] をクリックすると、以下のようなプロジェクトテンプレートを選択する画面が出てきます。

![VisualStudio0.png](/assets/img/building/creating-project/VisualStudio0.png)

`OpenSiv3D(0.6.6)Web` という名前のテンプレートを選択し、**次へ** をクリックします。

![VisualStudio1.png](/assets/img/building/creating-project/VisualStudio1.png)

プロジェクト名を自由に決めて、**作成** をクリックします。

![VisualStudio2.png](/assets/img/building/creating-project/VisualStudio2.png)

プロジェクト名を決めると、以下のようなソースファイルの編集画面が出てきます。

![VisualStudio3.png](/assets/img/building/creating-project/VisualStudio3.png)

## emscripten ツールチェインの登録

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[全般] > [emscripten ツールチェイン] > [emscripten インストールディレクトリ] に、インストールした emscripten のフォルダ (emcc.bat ファイルが存在するフォルダ) へのパスを入力します。

![VisualStudio4.png](/assets/img/building/creating-project/VisualStudio4.png)
