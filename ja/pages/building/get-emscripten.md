---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ja/default
title: Emscripten をインストールする
permalink: /ja/building/get-emscripten
---

emscripten をインストールするのに、emscripten SDK (emsdk) を使います。
emscripten SDK (emsdk) 自体は python スクリプトで書かれています。
そのため、emscripten SDK (emsdk) を使うために python をインストールする必要があります。

## Python をインストールする

<https://www.python.jp/install/windows/install_py3.html> に、Python のインストール方法が書かれています。
遷移先のサイトの指示に従って、Python をインストールしてください。[^custom-python]

[^custom-python]: python のインストールをカスタマイズする際、`pip をインストールする`と`環境変数に python のパスに追加する`設定を有効にしてください。

![PythonInstall1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/19fd629e-4652-999e-c53e-9213a288049a.png)

## Emscripten SDK (emsdk) をダウンロードする

[emsdk github](https://github.com/emscripten-core/emsdk/archive/master.zip)に移動し、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押してください。[^emsdk-git]
すると、リポジトリの内容が .zip ファイルでダウンロードされるので、適当なフォルダに展開してください。

[^emsdk-git]: git をインストールしている環境であれば、`git clone https://github.com/emscripten-core/emsdk.git`でダウンロードすることができます。

![InstallEMSDK1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4b923473-ecf0-0266-950e-e5a8044ec60f.png)

## Emscripten をインストールする

管理者権限でコマンドプロンプトを開き[^admin-cmd]、emscripten SDK (emsdk) をダウンロードしたディレクトリに移動し、次のコマンドを実行します。

[^admin-cmd]: [Windowsキー]+[X] でメニューを開き、PowerShell (管理者) をクリックしてください。

```bat
emsdk install 2.0.4:upstream
emsdk activate 2.0.4:upstream --global
```

`emsdk install 2.0.4:upstream` で、emscripten 本体と emscripten で使われる clang、node.js、javaがインストールされます。
`emsdk activate 2.0.4:upstream --global` で、インストールしたツールセットのセットアップが行われます。

## 次の一歩

[Visual Studio Code をセットアップする](setup-vscode) に進んでください。
