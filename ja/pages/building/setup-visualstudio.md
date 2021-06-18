---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Visual Studio のセットアップ
permalink: /ja/building/setup-visualstudio
---

## emscripten 用のプロジェクトテンプレートをインストールする

Visual Studio が emscripten に付随する emcc を使ってコンパイルを行うようにするために、emscripten 用のプロジェクトテンプレートをインストールします。

[Visual Studio Market Place](https://marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscriptenproj1) からダウンロードできる .vsix パッケージから拡張機能をインストールしてください。または、Visual Studio において、[ツール] > [拡張機能と更新プログラム] から拡張機能マネージャを開いて、そこで Emscripten.ProjectType を検索しても、この拡張機能をインストールすることができます。

![VSExtMgr0.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/9ca223a1-60ef-1987-764a-cc2bb71f17a8.png)

![VSExtMgr1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/a4f195e2-2128-dd6f-7265-5da4464eb7f4.png)

## OpenSiv3D Web版をダウンロードする

OpenSiv3D Web版のインストーラは [nokotan/OpenSiv3D releases](https://github.com/nokotan/OpenSiv3D/releases/) からダウンロードできます。OpenSiv3D Web版のインストーラは次の処理を行います。

- OpenSiv3D Web版のバイナリの配置
- プロジェクトテンプレートの登録
- 環境変数の登録 (OpenSiv3D Web版の配置場所)

次の画面が出て、インストーラーが起動できない時は、\[詳細情報\] を押すと \[実行\] ボタンが表示されます。

![SmartScreen1](/assets/img/building/setup-visualstudio/smart-screen-guard-1.png)
![SmartScreen2](/assets/img/building/setup-visualstudio/smart-screen-guard-2.png)

## プロジェクトを作成する

Visual Studio 2019 のスタート画面から、[新しいプロジェクトの作成] をクリックすると、以下のようなプロジェクトテンプレートを選択する画面が出てきます。

そこで、OpenSiv3D(0.4.3)Web を選択してください。

![Siv3DWebProjectMake1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/825bb82c-823f-8f7d-48da-a472a7c55a59.png)

プロジェクト名を決めると、以下のようなソースファイルの編集画面が出てきます。このとき、構成 (赤枠で囲んだところ) を Emscripten に切り替えてください。

![Siv3DWebProjectMake2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/1e68903d-203f-06cb-dd2d-dc4e941b35a9.png)

## emscripten ツールチェインの登録

[プロジェクト] > [プロパティ] から、プロジェクト設定を開きます。プロジェクト設定の、[全般] > [emscripten ツールチェイン] > [emscripten インストールディレクトリ] に、インストールした emscripten のフォルダ (emcc.bat ファイルが存在するフォルダ) へのパスを入力します。

![Siv3DWebProjectMake3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/74993f9c-8ff4-e500-3521-8f0e7748a403.png)

## 次の一歩

[はじめてのコード](writing-code) に進んでください
