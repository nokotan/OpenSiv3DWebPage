---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 実行とデバッグ (Visual Studio)
permalink: /ja/building/running-code-with-visualstudio
---

## コードの実行

作成した OpenSiv3D for Web のプロジェクトはすでに、ビルド、ローカルサーバの立ち上げができるように構成されています。
[|> WebAssembly Debugger \] をクリックすると、プロジェクトがビルドされ、ローカルサーバとブラウザが立ち上げられます。

![RunOnVS1.png](/assets/img/building/running-code-with-visualstudio/RunOnVS1.png)

## デバッグ

**Emscripten Debugger for Visual Studio** 拡張機能のおかげで、デスクトップ向けのアプリ開発と同様に、デバッグ実行中にブレークポイントと変数ダンプが利用可能です。

ブラウザの開発ツール上でもブレークポイントを設置することができます。Chrome DWARF 支援を使って、Chrome の開発ツール上で変数ウォッチを利用することができます。
詳しくは、[Debugging WebAssembly with modern tools (英語のページ)](https://developer.chrome.com/blog/wasm-debugging-2020/)を参照してください。
