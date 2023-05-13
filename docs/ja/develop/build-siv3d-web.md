# OpenSiv3D for Web のビルド

自前でライブラリのソースコードをビルドする手順を説明します。このページは次のような特殊な利用者向けの説明です。

- 開発中のバージョンの最新のコードを試したい
- Siv3D の内部を理解したい
- 内部のコードを改造したい

## 1. Windows の場合

### 1.1 追加のサードパーティ・ライブラリをダウンロードする

◆ OpenSiv3D のライブラリ本体のビルドに必要な C++ ライブラリ**「Boost」**を準備します。

[https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:](https://www.boost.org/users/history/version_1_74_0.html) から `boost_1_74_0` の圧縮されたソースコードをダウンロードし、展開します。配布されているファイル形式は `.7z` と `.zip` があります。使用しているコンピュータで `.7z` の展開ができるなら `.7z` を使ったほうが所用時間が短いです。Boost は大量のファイルから構成されるため、Windows OS 標準の ZIP 展開機能を使用すると展開の完了まで数分近く待たされます。

??? info "Boost とは"
    [Boost](https://www.boost.org/) は 20 年以上の歴史がある、C++ で最も有名なライブラリの 1 つです。様々な目的のために作られた大小さまざま、作者もさまざまなライブラリ群で構成されています。C++11 で標準ライブラリに入った `std::shared_ptr`, C++17 で標準ライブラリに入った `std::optional`, `<filesystem>` はそれぞれ Boost.SmartPtr, Boost.Optional, Boost.Fileystem ライブラリをベースに設計されました。Siv3D では、幾何問題の計算処理のために Boost.Geometry, C++17 をサポートしない環境におけるファイルシステム処理のために Boost.Filesystem, 子プロセスの作成・通信のために Boost.Process, 多倍長計算のために Boost.MultiPrecision, CSV パーサのために Boost.Tokenizer など、いくつかの Boost ライブラリの機能を使用しています。

??? info ".7z の展開ソフト"
    `.7z` の展開に使えるソフトウェアは [7-Zip :material-open-in-new:](https://sevenzip.osdn.jp/) が最も有名です。


### 1.2 OpenSiv3D の開発ブランチからソースコードを入手する

◆ OpenSiv3D の最新コードを OpenSiv3D 公式リポジトリから入手します。

[OpenSiv3D 公式リポジトリの main ブランチ :material-open-in-new:](https://github.com/Siv3D/OpenSiv3D) が最新安定版です。「Code」からリポジトリをクローンするか、ZIP ファイルでソースコードをダウンロードします（「Download ZIP」）。

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 1.3 追加のサードパーティ・ライブラリをコピーして追加する

◆ ダウンロードしたプロジェクトのフォルダに Boost の一部をコピーします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内に、`Dependencies/boost_1_74_0/` フォルダがあります。この中へ 1.1 で準備した Boost ライブラリの一部である `boost_1_74_0/boost/` フォルダ (約 120 MB) をコピーします。つまりコピー後は `Dependencies/boost_1_74_0/boost/` となります。

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/develop/boost.png)

### 1.4 開発環境のセットアップ

◆ CMake を Visual Studio インストーラからインストールします。

Visual Studio インストーラを開きます。既存の Visual Studio インストールの変更をクリックします。右側の C++ によるデスクトップの開発 のタブを開き、コンポーネント Windows 用 C++ CMake ツール にチェックマークがついた状態にして、変更を確定します。

### 1.5 OpenSiv3D ライブラリをビルドする

◆ CMake を使って OpenSiv3D ライブラリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```bat
mkdir Build
cd Build
emcmake cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
ninja -j4 install
```

### 1.6 OpenSiv3D アプリをビルドする

◆ CMake を使って OpenSiv3D アプリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web/App` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```bat
mkdir Build
cd Build
emcmake cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
ninja -j4
```

## 2. macOS の場合

### 2.1 追加のサードパーティ・ライブラリをダウンロードする

◆ OpenSiv3D のライブラリ本体のビルドに必要な C++ ライブラリ**「Boost」**を準備します。

[https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:](https://www.boost.org/users/history/version_1_74_0.html) から `boost_1_74_0` の圧縮されたソースコードをダウンロードし、展開します。

??? info "Boost とは"
    [Boost](https://www.boost.org/) は 20 年以上の歴史がある、C++ で最も有名なライブラリの 1 つです。様々な目的のために作られた大小さまざま、作者もさまざまなライブラリ群で構成されています。C++11 で標準ライブラリに入った `std::shared_ptr`, C++17 で標準ライブラリに入った `std::optional`, `<filesystem>` はそれぞれ Boost.SmartPtr, Boost.Optional, Boost.Fileystem ライブラリをベースに設計されました。Siv3D では、幾何問題の計算処理のために Boost.Geometry, C++17 をサポートしない環境におけるファイルシステム処理のために Boost.Filesystem, 子プロセスの作成・通信のために Boost.Process, 多倍長計算のために Boost.MultiPrecision, CSV パーサのために Boost.Tokenizer など、いくつかの Boost ライブラリの機能を使用しています。

### 2.2 OpenSiv3D の開発ブランチからソースコードを入手する

◆ OpenSiv3D の最新コードを OpenSiv3D 公式リポジトリから入手します。

[OpenSiv3D 公式リポジトリの main ブランチ :material-open-in-new:](https://github.com/Siv3D/OpenSiv3D) が最新安定版です。「Code」からリポジトリをクローンするか、ZIP ファイルでソースコードをダウンロードします（「Download ZIP」）。

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 2.3 追加のサードパーティ・ライブラリをコピーして追加する

◆ ダウンロードしたプロジェクトのフォルダに Boost の一部をコピーします。

2.2 で入手した OpenSiv3D プロジェクトのフォルダ内に、`Dependencies/boost_1_74_0/` フォルダがあります。この中へ 2.1 で準備した Boost ライブラリの一部である `boost_1_74_0/boost/` フォルダ (約 120 MB) をコピーします。つまりコピー後は `Dependencies/boost_1_74_0/boost/` となります。

### 2.4 開発環境のセットアップ

◆ CMake を HomeBrew からインストールします。

[HomeBrew :material-open-in-new:](https://brew.sh/index_ja) から HomeBrew をインストールします。HomeBrew がインストール出来たら、ターミナルを開いて次のコマンドを実行します。

```sh
brew install cmake
```

### 2.5 OpenSiv3D ライブラリをビルドする

◆ CMake を使って OpenSiv3D ライブラリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4 install
```

### 2.6 OpenSiv3D アプリをビルドする

◆ CMake を使って OpenSiv3D アプリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web/App` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4
```

## 3. Ubuntu の場合

### 3.1 追加のサードパーティ・ライブラリをダウンロードする

◆ OpenSiv3D のライブラリ本体のビルドに必要な C++ ライブラリ**「Boost」**を準備します。

[https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:](https://www.boost.org/users/history/version_1_74_0.html) から `boost_1_74_0` の圧縮されたソースコードをダウンロードし、展開します。

??? info "Boost とは"
    [Boost](https://www.boost.org/) は 20 年以上の歴史がある、C++ で最も有名なライブラリの 1 つです。様々な目的のために作られた大小さまざま、作者もさまざまなライブラリ群で構成されています。C++11 で標準ライブラリに入った `std::shared_ptr`, C++17 で標準ライブラリに入った `std::optional`, `<filesystem>` はそれぞれ Boost.SmartPtr, Boost.Optional, Boost.Fileystem ライブラリをベースに設計されました。Siv3D では、幾何問題の計算処理のために Boost.Geometry, C++17 をサポートしない環境におけるファイルシステム処理のために Boost.Filesystem, 子プロセスの作成・通信のために Boost.Process, 多倍長計算のために Boost.MultiPrecision, CSV パーサのために Boost.Tokenizer など、いくつかの Boost ライブラリの機能を使用しています。

### 3.2 OpenSiv3D の開発ブランチからソースコードを入手する

◆ OpenSiv3D の最新コードを OpenSiv3D 公式リポジトリから入手します。

[OpenSiv3D 公式リポジトリの main ブランチ :material-open-in-new:](https://github.com/Siv3D/OpenSiv3D) が最新安定版です。「Code」からリポジトリをクローンするか、ZIP ファイルでソースコードをダウンロードします（「Download ZIP」）。

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 3.3 追加のサードパーティ・ライブラリをコピーして追加する

◆ ダウンロードしたプロジェクトのフォルダに Boost の一部をコピーします。

2.2 で入手した OpenSiv3D プロジェクトのフォルダ内に、`Dependencies/boost_1_74_0/` フォルダがあります。この中へ 2.1 で準備した Boost ライブラリの一部である `boost_1_74_0/boost/` フォルダ (約 120 MB) をコピーします。つまりコピー後は `Dependencies/boost_1_74_0/boost/` となります。

### 3.4 開発環境のセットアップ

◆ CMake をパッケージマネージャからインストールします。

ターミナルを開いて次のコマンドを実行します。

```sh
sudo apt install cmake
```

### 3.5 OpenSiv3D ライブラリをビルドする

◆ CMake を使って OpenSiv3D ライブラリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4 install
```

### 3.6 OpenSiv3D アプリをビルドする

◆ CMake を使って OpenSiv3D アプリをビルドします。

1.2 で入手した OpenSiv3D プロジェクトのフォルダ内の `Web/App` を Visual Studio 開発者コマンドプロンプトで開きます。開いたコマンドプロンプトで、次のコマンドを一行ずつ実行します。

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4
```
