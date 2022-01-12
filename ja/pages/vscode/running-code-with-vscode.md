---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: 実行とデバッグ (VSCode)
permalink: /ja/vscode/running-code-with-vscode
---

## ビルド

ビルドは、次の方法があります。

- [Ctrl]+[Shift]+[B] を押す
- Ctrl(Cmd)+Shift+P でタスクの実行を選んで, `Build: Debug (or Release)` を選ぶ

![vscode-run-task](/assets/img/building/running-code-with-vscode/vscode-run-task.png)
![vscode-run-task-2](/assets/img/building/running-code-with-vscode/vscode-run-task-2.png)

## VScode でのデバッグなしでプロジェクトを実行する

Ctrl(Cmd)+Shift+P でタスクの実行を選んで, `Run Local Server and Open Browser` を選びます。

![vscode-run-task-3](/assets/img/building/running-code-with-vscode/vscode-run-task-3.png)

Chrome DWARF 支援を使って、Chrome の開発ツール上で変数ウォッチを利用することができます。
詳しくは、[Debugging WebAssembly with modern tools (英語のページ)](https://developer.chrome.com/blog/wasm-debugging-2020/)を参照してください。

## プロジェクトを実行し、VScode でデバッグする

VScode でのデバッグは、Chrome と FireFox でのみ有効です。

### Chrome

実行とデバッグ タブで `Launch Chrome against localhost` を選択して、`▶️` を押します。

![start-debugging](/assets/img/building/running-code-with-vscode/start-debugging.png)

必要な拡張機能は、VSCode に組み込まれていますが、ソースマップのみ有効です。

ソースマップと変数ダンプの両方が必要な場合は、拡張機能 `WebAssembly on Chrome Debugger`を使用することをお勧めします。

### FireFox

実行とデバッグ タブで `Launch Chrome against localhost` を選択して、`▶️` を押します。
