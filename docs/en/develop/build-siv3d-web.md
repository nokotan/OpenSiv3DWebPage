# Building OpenSiv3D for Web

We will explain how to build the source code of the library by yourself. This page is for special users such as:

- I want to try the latest code in the development version
- I want to understand the internals of Siv3D
- I want to modify the internal code

## 1. For Windows

### 1.1 Download additional third-party libraries

◆ Prepare the C++ library **"Boost"** required to build the OpenSiv3D library itself.

Download the <code>boost_1_74_0</code> compressed source code from <a>https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:</a> and extract it. The distributed file formats are `.7z` and `.zip` . If your computer can extract `.7z` , it will take less time to use `.7z` . Boost consists of a large number of files, so if you use the Windows OS standard ZIP extraction function, you will have to wait for several minutes to complete the extraction.

??? info "What is Boost?" [Boost](https://www.boost.org/) is over 20 years old and one of the most popular C++ libraries. It consists of a group of libraries, large and small, created for various purposes and by various authors. `std::shared_ptr` in the standard library in C++11, `std::optional` in the standard library in C++17, and `<filesystem>` are based on the Boost.SmartPtr, Boost.Optional, and Boost.Fileystem libraries respectively. was designed. Siv3D uses Boost.Geometry for computational geometry problems, Boost.Filesystem for filesystem handling in environments that do not support C++17, Boost.Process for creating and communicating with child processes, and multiple precision It uses some Boost library features such as Boost.MultiPrecision for the computation and Boost.Tokenizer for the CSV parser.

??? info ".7z decompression software" The most famous software that can be used to decompress `.7z` is [7-Zip :material-open-in-new:.](https://sevenzip.osdn.jp/)

### 1.2 Get the source code from the development branch of OpenSiv3D

◆ Get the latest OpenSiv3D code from the OpenSiv3D official repository.

[The main branch :material-open-in-new: in the OpenSiv3D official repository](https://github.com/Siv3D/OpenSiv3D) is the latest stable version. Clone the repository from "Code" or download the source code in a ZIP file ("Download ZIP").

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 1.3 Copy and Add Additional Third-Party Libraries

◆ Copy parts of Boost to the folder of the downloaded project.

Inside the OpenSiv3D project folder you got in 1.2, you will find `Dependencies/boost_1_74_0/` folder. Copy `boost_1_74_0/boost/` folder (about 120 MB), which is part of the Boost library prepared in 1.1, into this folder. So after copying it will be `Dependencies/boost_1_74_0/boost/` .

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/develop/boost.png)

### 1.4 Setting up the development environment

◆ Install CMake from the Visual Studio installer.

Open Visual Studio Installer. Click Modify existing Visual Studio installation. Open the Desktop Development with C++ tab on the right, leave the component C++ CMake Tools for Windows checked, and commit the changes.

### 1.5 Build the OpenSiv3D library

◆ Build the OpenSiv3D library using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```bat
mkdir Build
cd Build
emcmake cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
ninja -j4 install
```

### 1.6 Build an OpenSiv3D app

◆ Build OpenSiv3D apps using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```bat
mkdir Build
cd Build
emcmake cmake -GNinja -DCMAKE_BUILD_TYPE=Release ..
ninja -j4
```

## 2. For macOS

### 2.1 Download additional third-party libraries

◆ Prepare the C++ library **"Boost"** required to build the OpenSiv3D library itself.

Download the <code>boost_1_74_0</code> compressed source code from <a>https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:</a> and extract it.

??? info "What is Boost?" [Boost](https://www.boost.org/) is over 20 years old and one of the most popular C++ libraries. It consists of a group of libraries, large and small, created for various purposes and by various authors. `std::shared_ptr` in the standard library in C++11, `std::optional` in the standard library in C++17, and `<filesystem>` are based on the Boost.SmartPtr, Boost.Optional, and Boost.Fileystem libraries respectively. was designed. Siv3D uses Boost.Geometry for computational geometry problems, Boost.Filesystem for filesystem handling in environments that do not support C++17, Boost.Process for creating and communicating with child processes, and multiple precision It uses some Boost library features such as Boost.MultiPrecision for the computation and Boost.Tokenizer for the CSV parser.

### 2.2 Get the source code from the development branch of OpenSiv3D

◆ Get the latest OpenSiv3D code from the OpenSiv3D official repository.

[The main branch :material-open-in-new: in the OpenSiv3D official repository](https://github.com/Siv3D/OpenSiv3D) is the latest stable version. Clone the repository from "Code" or download the source code in a ZIP file ("Download ZIP").

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 2.3 Copy and Add Additional Third-Party Libraries

◆ Copy parts of Boost to the folder of the downloaded project.

Inside the OpenSiv3D project folder you got in 2.2, you will find `Dependencies/boost_1_74_0/` folder. Copy `boost_1_74_0/boost/` folder (about 120 MB), which is part of the Boost library prepared in 2.1, into this folder. So after copying it will be `Dependencies/boost_1_74_0/boost/` .

### 2.4 Setting up the development environment

◆ Install CMake from HomeBrew.

Install HomeBrew from [HomeBrew :material-open-in-new:](https://brew.sh/index_ja) Once HomeBrew is installed, open a terminal and run the following command:

```sh
brew install cmake
```

### 2.5 Build the OpenSiv3D library

◆ Build the OpenSiv3D library using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4 install
```

### 2.6 Build an OpenSiv3D app

◆ Build OpenSiv3D apps using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4
```

## 3. For Ubuntu

### 3.1 Download additional third-party libraries

◆ Prepare the C++ library **"Boost"** required to build the OpenSiv3D library itself.

Download the <code>boost_1_74_0</code> compressed source code from <a>https://www.boost.org/users/history/version_1_74_0.html :material-open-in-new:</a> and extract it.

??? info "What is Boost?" [Boost](https://www.boost.org/) is over 20 years old and one of the most popular C++ libraries. It consists of a group of libraries, large and small, created for various purposes and by various authors. `std::shared_ptr` in the standard library in C++11, `std::optional` in the standard library in C++17, and `<filesystem>` are based on the Boost.SmartPtr, Boost.Optional, and Boost.Fileystem libraries respectively. was designed. Siv3D uses Boost.Geometry for computational geometry problems, Boost.Filesystem for filesystem handling in environments that do not support C++17, Boost.Process for creating and communicating with child processes, and multiple precision It uses some Boost library features such as Boost.MultiPrecision for the computation and Boost.Tokenizer for the CSV parser.

### 3.2 Get the source code from the development branch of OpenSiv3D

◆ Get the latest OpenSiv3D code from the OpenSiv3D official repository.

[The main branch :material-open-in-new: in the OpenSiv3D official repository](https://github.com/Siv3D/OpenSiv3D) is the latest stable version. Clone the repository from "Code" or download the source code in a ZIP file ("Download ZIP").

![](https://raw.githubusercontent.com/Siv3D/siv3d.site.resource/main/v6/download/ubuntu/repo.png)

### 3.3 Copy and Add Additional Third-Party Libraries

◆ Copy parts of Boost to the folder of the downloaded project.

Inside the OpenSiv3D project folder you got in 2.2, you will find `Dependencies/boost_1_74_0/` folder. Copy `boost_1_74_0/boost/` folder (about 120 MB), which is part of the Boost library prepared in 2.1, into this folder. So after copying it will be `Dependencies/boost_1_74_0/boost/` .

### 3.4 Setting up the development environment

◆ Install CMake from your package manager.

Open a terminal and run the following command:

```sh
sudo apt install cmake
```

### 3.5 Build the OpenSiv3D library

◆ Build the OpenSiv3D library using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4 install
```

### 3.6 Build an OpenSiv3D app

◆ Build OpenSiv3D apps using CMake.

Open `Web` in the OpenSiv3D project folder you got in 1.2 in Visual Studio developer command prompt. In the command prompt that opens, run the following commands line by line:

```sh
mkdir Build
cd Build
emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release ..
make -j4
```
