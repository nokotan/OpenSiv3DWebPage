---
title: プロジェクトの作成
permalink: /ja/building/creating-project
---

## プロジェクトを作成する

Visual Studio 2019 のスタート画面から、[新しいプロジェクトの作成] をクリックすると、以下のようなプロジェクトテンプレートを選択する画面が出てきます。

![VisualStudio0.png](/assets/img/building/setup-visualstudio/VisualStudio0.png)

`OpenSiv3D(0.6.0)Web` という名前のテンプレートを選択し、**次へ** をクリックします。

![VisualStudio1.png](/assets/img/building/setup-visualstudio/VisualStudio1.png)

プロジェクト名を自由に決めて、**作成** をクリックします。

![VisualStudio2.png](/assets/img/building/setup-visualstudio/VisualStudio2.png)

プロジェクト名を決めると、以下のようなソースファイルの編集画面が出てきます。このとき、構成 (赤枠で囲んだところ) を Emscripten に切り替えてください。

![Siv3DWebProjectMake2.png](/assets/img/building/setup-visualstudio/setup-vs-platform.png)

## emscripten ツールチェインの登録

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[全般] > [emscripten ツールチェイン] > [emscripten インストールディレクトリ] に、インストールした emscripten のフォルダ (emcc.bat ファイルが存在するフォルダ) へのパスを入力します。

![Siv3DWebProjectMake3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/74993f9c-8ff4-e500-3521-8f0e7748a403.png)
