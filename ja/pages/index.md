---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: OpenSiv3D for Web
permalink: /ja/index
css: 
  - /assets/css/playground.css
  - /assets/css/gallary.css
---

![play ground alternative](https://raw.githubusercontent.com/Siv3D/File/master/v6/screenshot/hello-siv3d.gif)

<iframe width=640px height=510px allow="fullscreen" src="https://siv3d-v6-apps.kamenokosoft.com/Main/Main.html"></iframe>

OpenSiv3D for Web はインタラクティブな WebGL アプリケーションを C++20 で開発するためのライブラリです。

## はじめる

{% include button.html url="download" text="OpenSiv3D for Web をダウンロード" %}

```cpp
# include <Siv3D.hpp>

void Main()
{
  // 背景を水色にする
  Scene::SetBackground(ColorF{ 0.8, 0.9, 1.0 });

  // 通常のフォントを作成
  const Font font{ 60 };
  
  // 絵文字用フォントを作成
  const Font emojiFont{ 60, Typeface::ColorEmoji };
  
  // `font` が絵文字用フォントも使えるようにする
  font.addFallback(emojiFont);

  // 画像ファイルからテクスチャを作成
  const Texture texture{ U"example/windmill.png" };

  // 絵文字からテクスチャを作成
  const Texture emoji{ U"🐈"_emoji };

  // 絵文字を描画する座標
  Vec2 emojiPos{ 300, 150 };

  // テキストを画面にデバッグ出力
  Print << U"Push [A] key";

  while (System::Update())
  {
    // テクスチャを描く
    texture.draw(200, 200);

    // テキストを画面の中心に描く
    font(U"Hello, Siv3D!🚀").drawAt(Scene::Center(), Palette::Black);

    // サイズをアニメーションさせて絵文字を描く
    emoji.resized(100 + Periodic::Sine0_1(1s) * 20).drawAt(emojiPos);

    // マウスカーソルに追随する半透明な円を描く
    Circle{ Cursor::Pos(), 40 }.draw(ColorF{ 1, 0, 0, 0.5 });

    // もし [A] キーが押されたら
    if (KeyA.down())
    {
      // 選択肢からランダムに選ばれたメッセージをデバッグ表示
      Print << Sample({ U"Hello!", U"こんにちは", U"你好", U"안녕하세요?" });
    }

    // もし [Button] が押されたら
    if (SimpleGUI::Button(U"Button", Vec2{ 640, 40 }))
    {
      // 画面内のランダムな場所に座標を移動
      emojiPos = RandomVec2(Scene::Rect());
    }
  }
}
```

## ギャラリー

{% include gallary.html list=site.data.ja.gamelist_v6 %}

## 最新版ビルドの状態

- 安定版ブランチ (Siv3D/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_master)](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml)
- 開発版ブランチ (nokotan/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_web_develop)](https://github.com/nokotan/OpenSiv3D/actions/workflows/ccpp_web.yml)
- 開発版ブランチ (Siv3D/OpenSiv3D.git): [![C/C++ CI for Web](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml/badge.svg?branch=v6_winmac_develop)](https://github.com/Siv3D/OpenSiv3D/actions/workflows/ccpp_web.yml)
