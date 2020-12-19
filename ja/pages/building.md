---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ja/default
title: はじめての WebGL アプリ
permalink: /ja/building
---

## 概要

この記事では、OpenSiv3D Web版を使った WebGL アプリの開発をするために、次の手順を説明していきます。

- [OpenSiv3D Web版に必要なライブラリ (Python, emscripten) をインストールする](#emscripten-をインストールする)
- [OpenSiv3D Web版 Visual Studio Code サンプルプログラム実行用パッケージをダウンロードする](#opensiv3d-web版-visual-studio-codeサンプルプログラム実行用パッケージをダウンロードする)
- [OpenSiv3D Web版のサンプルコードをビルドし、ブラウザで開く](#ビルドとデバッグ実行)

English version is available in [Qiita - WebGL game development with OpenSiv3D for Web (VSCode on Windows)](https://qiita.com/nokotan/items/7fdb71b39901132b4014).

## 動作検証環境

- Windows 10 Education (Version 10.0.17763.1098)
- Visual Studio Code 1.47.3
- emscripten 1.40.1

## emscripten をインストールする

emscripten をインストールするのに、emscripten SDK (emsdk) を使います。
emscripten SDK (emsdk) 自体は python スクリプトで書かれています。
そのため、emscripten SDK (emsdk) を使うために python をインストールする必要があります。

### python のインストール

<https://www.python.jp/install/windows/install_py3.html> に、Python のインストール方法が書かれています。
遷移先のサイトの指示に従って、Python をインストールしてください。[^custom-python]

[^custom-python]: python のインストールをカスタマイズする際、`pip をインストールする`と`環境変数に python のパスに追加する`設定を有効にしてください。

![PythonInstall1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/19fd629e-4652-999e-c53e-9213a288049a.png)

### emscripten SDK (emsdk) のダウンロード

[emsdk github](https://github.com/emscripten-core/emsdk/archive/master.zip)に移動し、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押してください。[^emsdk-git]
すると、リポジトリの内容が .zip ファイルでダウンロードされるので、適当なフォルダに展開してください。

[^emsdk-git]: git をインストールしている環境であれば、`git clone https://github.com/emscripten-core/emsdk.git`でダウンロードすることができます。

![InstallEMSDK1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4b923473-ecf0-0266-950e-e5a8044ec60f.png)

### emscripten のインストール

管理者権限でコマンドプロンプトを開き[^admin-cmd]、emscripten SDK (emsdk) をダウンロードしたディレクトリに移動し、次のコマンドを実行します。

[^admin-cmd]: [Windowsキー]+[X] でメニューを開き、PowerShell (管理者) をクリックしてください。

```bat
emsdk install latest
emsdk activate latest --global
```

`emsdk install latest` で、emscripten 本体と emscripten で使われる clang、node.js、javaがインストールされます。
`emsdk activate latest --global` で、インストールしたツールセットのセットアップが行われます。

## Visual Studio Code のセットアップ

### 拡張機能のインストール

Visual Studio Code の左側の拡張機能タブから、次の名前で検索し、インストールしてください。

- C/C++ VSCode Extension
- Debugger for Chrome
- Debugger for Firefox

![VSCodeExt1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/bf97ad48-9626-4898-d671-48b740ddaecc.png)

## OpenSiv3D Web版 Visual Studio Codeサンプルプログラム実行用パッケージを Visual Studio Code で開く

### OpenSiv3D Web版 Visual Studio Codeサンプルプログラム実行用パッケージをダウンロードする

[サンプルプログラム実行用パッケージのリポジトリ](https://github.com/nokotan/OpenSiv3DForWeb-VSCode) に移動し、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押してください。
すると、リポジトリの内容が .zip ファイルでダウンロードされるので、適当なフォルダに展開してください。

![InstallSiv3DWebVSCode.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/3c6d1c31-e6ff-0fb4-a00c-0086a2fafd12.png)

### OpenSiv3D Web版 Visual Studio Codeサンプルプログラム実行用パッケージを Visual Studio Codeで開く

Visual Studio Code を起動して、[ファイル] > [フォルダを開く...] でフォルダを開くためのダイアログを表示します。

ここで、先ほど展開した OpenSiv3D Web版 Visual Studio Codeサンプルプログラム実行用パッケージが含まれるフォルダを選んでください。

[^open-dialog]: `File`をクリックし、`Open Folder ...`を選択します。

  ![VSCodeOpenFolder.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/385e8dfe-3f3a-431f-a8ed-63e2d491723c.png)

## ソースコードを書く

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。

ただし、イベント処理のために定期的にブラウザに制御を戻す必要があります。そのため、**メインループ部分を関数に切り出し**、その関数を**フレーム開始時に呼ばれるコールバック関数として登録**する必要があります。

```c++:Main.cpp
# include <Siv3D.hpp> // OpenSiv3D v0.4.3
# include <emscripten.h>

void RunMainLoop(void* arg)
{
  static_cast<const std::function<void()>*>(arg)->operator()();
}

void SetMainLoop(std::function<void()> mainLoop)
{
  emscripten_set_main_loop_arg(RunMainLoop, reinterpret_cast<void*>(&mainLoop), 0, 1);
}

void Main()
{
  // 背景を水色にする
  Scene::SetBackground(ColorF(0.8, 0.9, 1.0));
  
  // 大きさ 60 のフォントを用意
  const Font font(60);
  
  // 猫のテクスチャを用意
  const Texture cat(Emoji(U"🐈"));
  
  // 猫の座標
  Vec2 catPos(640, 450);

  SetMainLoop([&]()
  {
    System::Update();

    // テキストを画面の中心に描く
    font(U"Hello, Siv3D!🐣").drawAt(Scene::Center(), Palette::Black);
    
    // 大きさをアニメーションさせて猫を表示する
    cat.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(catPos);
    
    // マウスカーソルに追従する半透明の赤い円を描く
    Circle(Cursor::Pos(), 40).draw(ColorF(1, 0, 0, 0.5));
    
    // [A] キーが押されたら
    if (KeyA.down())
    {
      // Hello とデバッグ表示する
      Print << U"Hello!";
    }
    
    // ボタンが押されたら
    if (SimpleGUI::Button(U"Move the cat", Vec2(600, 20)))
    {
      // 猫の座標を画面内のランダムな位置に移動する
      catPos = RandomVec2(Scene::Rect());
    }
  });
}
```

## ビルドとデバッグ実行

ビルドは、次の方法があります。

- [Ctrl]+[Shift]+[B] を押す
- Ctrl(Cmd)+Shift+P でタスクの実行を選んで, `Build: Debug (or Release)` を選ぶ

また、デバッグ実行は、次の方法があります。いずれも、ローカルサーバを立ち上げた上でブラウザが開きます。

- Ctrl(Cmd)+Shift+P でタスクの実行を選んで, `Run Local Server and Open Browser` を選ぶ
- 左側のデバッグタブからデバッグを開始する (拡張機能をインストールしている場合
