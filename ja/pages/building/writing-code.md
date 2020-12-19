---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ja/default
title: はじめてのコード
permalink: /ja/building/writing-code
---

OpenSiv3D のサンプルアプリケーションは、[OpenSiv3D 公式サイト](https://siv3d.github.io/sample/game/) にあります。

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

## Web 固有の注意点

### ゲームループの設計

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

### ファイルシステム

OpenSiv3D Web版では、**ユーザのファイルシステムにアクセスすることができません**。

実行時に必要なファイルは、emscirpten の `--preload` オプションを使って、**ビルド時にあらかじめバンドルする必要**があります。
バンドルされたファイルは、起動時に仮想ファイルシステムに読み込まれ、通常のファイルアクセス関数で読み書きができるようになります。

### サポートされる機能

OpenSiv3D Web版では、OpenSiv3D Linux版で使用できる関数 (Linux版専用の関数を除く) が使用できます。
詳細は [実装状況](/ja/status) を確認してください。
