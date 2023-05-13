# Windows + Visual Studio で Siv3D for Web プログラミングを始める

Web 版 Siv3D を試験的な機能として提供しています。Web 版はいくつか注意点があるため、Siv3D の使用に慣れた中級者以上を対象としています。利用にあたって困ったことがあれば Siv3D Discord サーバの `#web` チャンネルで質問してください。

## 1. システム要件

### 1.1 開発者システム要件

Visual Studio で OpenSiv3D v0.6.9 プログラミングをするのに必要な開発環境です。

|  |  |
|--|--|
| OS | Windows 10 (64-bit) /  Windows 11 |
| CPU | Intel または AMD 製の CPU |
| 映像出力 | モニタなど、何らかの映像出力装置があること |
| 音声出力 | 何らかの音声出力装置があること |
| 開発環境 | emscripten compiler frontend 3.1.20 |
| ブラウザ | <ul><li>Google Chrome 85.0 以降</li><li>Microsoft Edge 85.0 以降</li><li>Google Chrome 85.0 以降</li><li>Mozilla FireFox 78.0 以降</li><li>Safari 15.1 以降</li></ul> |

??? summary "Visual Studio のエディションについて"
	Windows 10, Windows 11 のパソコンで Siv3D プログラミングをする場合は**「Visual Studio Community 2022（ビジュアル・スタジオ・コミュニティ 2022）」**を使うのが便利です。これは世界中のプロフェッショナルのソフトウェア開発者が使う「Visual Studio」という統合開発環境の無料版です。学生、個人、少規模の開発であれば、Visual Studio の有料版と同じ機能を無料で使えます。

??? summary "Visual Studio のインストール手順について"
	[Visual Studio ダウンロードページ :material-open-in-new:](https://visualstudio.microsoft.com/ja/downloads/) から**「Visual Studio 2022 コミュニティ」**のインストーラをダウンロードし実行します。
	インストーラを実行すると、インストールするプログラミング言語や開発ツールを選択する次のような画面が出てきます。インストール項目の選択画面から**「C++ によるデスクトップ開発」**を選択します（右側の「インストールの詳細」に表示される項目は Visual Studio のバージョンによって異なるため、気にする必要はありません）。
	![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/windows/vs_installer_desktop.png)
	そのまま右下の 「インストール」 ボタンを押せば、C++ プログラミングに必要なツールのインストールがはじまります。

### 1.2 アプリ動作システム要件

OpenSiv3D v0.6.6 Web 版を使って開発されたアプリケーションを実行するのに必要な環境です。ゲームやアプリを配布するときの説明書に記載すると良いでしょう。

|  |  |
|--|--|
| OS | Windows 7 SP1 (64-bit) / Windows 8.1 (64-bit) / Windows 10 (64-bit) / macOS Monterey 以降 / Ubuntu 20.04 LTS / Ubuntu 22.04 LTS |
| CPU | Intel または AMD 製の CPU |
| 映像出力 | モニタなど、何らかの映像出力装置があること |
| 音声出力 | 何らかの音声出力装置があること |
| ブラウザ | <ul><li>Google Chrome 85.0 以降</li><li>Microsoft Edge 85.0 以降</li><li>Mozilla FireFox 78.0 以降</li><li>Safari 15.1 以降</li></ul> |

## 2. 開発環境のセットアップ

### 2.1 コンパイラのインストール

1. **[emscripten 3.1.20 Installer](//github.com/nokotan/EmscriptenInstaller/releases/download/v0.1.2/EmscriptenOffline.exe)** をダウンロードして実行します

### 2.2 Visual Studio 拡張機能のインストール

1. **[Visual Studio MarkerPlace :material-open-in-new:](//marketplace.visualstudio.com/items?itemName=KamenokoSoft.emscripten-build-support)** から .vsix パッケージをダウンロードして実行します

### 2.3 SDK のインストール

1. **[OpenSiv3D v0.6.6 Installer for Web](//github.com/nokotan/OpenSiv3D/releases/download/v0.6.6r1/OpenSiv3D-Installer-wasm.exe)** をダウンロードして実行します

1. 実行時に「Windows によって PC が保護されました」と表示された場合は、**詳細情報**を押して**実行**を押します

??? summary "インストーラが自動的に行うこと"
	- SDK の配置（デフォルトではドキュメントフォルダ）
	- SDK を配置したパスへのユーザ環境変数の設定
	- Siv3D プロジェクト用の Visual Studio プロジェクトテンプレートのコピー (通常は `ドキュメント/Visual Studio 2022/Templates/ProjectTemplates/`)
	- アンインストーラの登録

??? summary "インストールした OpenSiv3D SDK を削除するには"
	OpenSiv3D SDK は、通常のアプリケーションと同様、Windows の「設定」からアンインストールします。

	![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/windows/uninstall.png)

## 3. Siv3D プロジェクトの作成

<video src="https://github.com/Siv3D/siv3d.site.resource/blob/main/v6/download/windows/create_project.mp4?raw=true" autoplay loop muted></video>

1. Visual Studio のスタート画面で **新しいプロジェクトの作成** をクリックします
1. プロジェクト テンプレートの項目から **OpenSiv3D(0.6.6)Web** を選択し、**次へ** を押します
1. プロジェクト名と保存場所を入力し（任意）、**作成** を押します


## 4. Siv3D アプリのビルド

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/windows/hellosiv3d.png)

1. プロジェクトを作成すると、サンプルプログラム (Main.cpp) が最初から用意されています
1. **ビルド** メニューからプロジェクトをビルドします。初回のビルドではエラーメッセージが表示されることがありますが、もう一度ビルドすると正常にビルドできます。
1. **デバッグ** メニューの **デバッグの開始** でビルドしたプログラムを実行します
1. 実行中のプログラムは、++esc++ を押すか、ブラウザタブを閉じると終了します

## 5. その他の注意事項

1. Web 版のシーンのリサイズモードはデフォルトで `ResizeMode::Virtual` であるため、ブラウザの拡大縮小に応じてシーンのサイズが変化します。これを防ぐには `Scene::SetResizeMode(ResizeMode::Keep);` と `Scene::Resize(width, height);` でシーンサイズを固定します
