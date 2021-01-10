---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Web 固有の注意点
permalink: /ja/building/web-specific-notes
---

## ゲームループの設計

OpenSiv3D Web版では、OpenSiv3D デスクトップ版と同じように while 文でメインループを作ってしまうと、ブラウザがマウス入力やキーボード入力といったイベントを処理できなくなり、タブごとブラウザがフリーズしてしまいます。

そのため、**メインループ部分を関数に切り出し**、その関数をフレーム開始時に呼ばれる**コールバック関数として登録する**必要があります。

```cpp:
# include <Siv3D.hpp>

# if SIV3D_PLATFORM(WEB)
#   include <emscripten.h>
# endif

void MainLoop()
{
    if (!System::Update())
    {
        emscripten_cancel_main_loop();
        return;
    }

    // 毎フレーム行われる処理
}

void Main()
{
    emscripten_set_main_loop(&MainLoop, 0, 1);
}
```

## ファイルシステム

OpenSiv3D Web版では、**ユーザのファイルシステムにアクセスすることができません**。

実行時に必要なファイルは、emscirpten の `--preload` オプションを使って、**ビルド時にあらかじめバンドルする必要**があります。
バンドルされたファイルは、起動時に仮想ファイルシステムに読み込まれ、通常のファイルアクセス関数で読み書きができるようになります。

## サポートされる機能

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。
詳細は [実装状況](/ja/status) を確認してください。
