---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Emscripten をインストールする (手動)
permalink: /ja/vscode/install-emscripten
---

emscripten をインストールするのに、emscripten SDK (emsdk) を使います。
emscripten SDK (emsdk) 自体は python スクリプトで書かれています。
そのため、emscripten SDK (emsdk) を使うために python をインストールする必要があります。

## Python をインストールする

<https://www.python.jp/install/windows/install_py3.html> に、Python のインストール方法が書かれています。
遷移先のサイトの指示に従って、Python をインストールしてください。[^custom-python]インストールする際には、`Add python into PATH`(Python を環境変数 PATH に登録する) にチェックマークをつけることを忘れないでください。

[^custom-python]: python のインストールをカスタマイズする際、`pip をインストールする`と`環境変数に python のパスに追加する`設定を有効にしてください。

![PythonInstall1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/19fd629e-4652-999e-c53e-9213a288049a.png)

## Emscripten SDK (emsdk) をダウンロードする

[GitHub - emscripten-core/emsdk](https://github.com/emscripten-core/emsdk/)に移動し、緑色の `Code` ボタン、`Download ZIP` ボタンを順に押してください。[^emsdk-git]
すると、リポジトリの内容が .zip ファイルでダウンロードされるので、適当なフォルダに展開してください。

[^emsdk-git]: git をインストールしている環境であれば、`git clone https://github.com/emscripten-core/emsdk.git`でダウンロードすることができます。

![InstallEMSDK1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4b923473-ecf0-0266-950e-e5a8044ec60f.png)

## Emscripten をインストールする

エクスプローラを開き、emscripten SDK (emsdk) をダウンロードしたディレクトリに移動し、アドレスバーに `cmd` と入力して、コマンドプロンプトを開きます。

![launch-cmd](/assets/img/building/get-emscripten/launch-cmd.png)

![launched-cmd](/assets/img/building/get-emscripten/cmd.png)

コマンドプロンプトを開いたら、次のコマンドを実行します。

```bat
emsdk install 2.0.22-upstream
emsdk activate 2.0.22-upstream --permanent
```

`emsdk install 2.0.22-upstream` で、emscripten 本体と emscripten で使われる clang、node.js、javaがインストールされます。
`emsdk activate 2.0.22-upstream --permanent` で、インストールしたツールセットのセットアップが行われます。
