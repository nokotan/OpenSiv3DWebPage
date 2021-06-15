---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 実行とデバッグ (Visual Studio)
permalink: /ja/building/running-code-with-visualstudio
---

## コードの実行

作成した OpenSiv3D for Web のプロジェクトはすでに、ビルド、ローカルサーバの立ち上げができるように構成されています。
[|> Windows ローカルデバッガ \] をクリックすると、プロジェクトがビルドされ、ローカルサーバとブラウザが立ち上げられます。

## デバッグ

Visual Studio では、デバッグ中のブレークポイントと変数ウォッチが利用できません。

その代わり、ブラウザの開発ツール上でブレークポイントを設置することができます。

Chrome DWARF 支援を使って、Chrome の開発ツール上で変数ウォッチを利用することができます。
詳しくは、[Debugging WebAssembly with modern tools (英語のページ)](https://developer.chrome.com/blog/wasm-debugging-2020/)を参照してください。
