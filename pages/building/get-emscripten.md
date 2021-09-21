---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Install Emscripten
permalink: /building/get-emscripten
---

We can use **"emscripten SDK (emsdk)"** in order to install emscripten to your develop environment. **Python must be installed** to use commands included in **"emscripten SDK (emsdk)"**, which is written in Python script.

## Install Python

Follow instructions in [Using Python on Windows - Installation steps](https://docs.python.org/3/using/windows.html#installation-steps)[^custom-python]. When installing, make sure that `Add python into PATH` is checked.

[^custom-python]: Enable `pip` and `Add python into PATH` if you want to customize python instalation

![スクリーンショット 2020-09-20 13.46.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4d64cf59-fc85-eeee-b118-a34946b7abb1.png)

## Download emscripten SDK (emsdk)

Follow link to [GitHub - emscripten-core/emsdk](https://github.com/emscripten-core/emsdk/), then Click `Code` button in green and `Download ZIP` button in this order[^emsdk-git].

[^emsdk-git]: You can use `git clone https://github.com/emscripten-core/emsdk.git` instead of downloading zip, if git is available in your environment.

![InstallEMSDK1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/4b923473-ecf0-0266-950e-e5a8044ec60f.png)

## Install Emscripten

Open Explorer, and move directory to the folder you have downloaded emsdk, then type `cmd` into the address bar.

![launch-cmd](/assets/img/building/get-emscripten/launch-cmd.png)

After launching command prompt, type these commands:

```bat
emsdk install 2.0.22-upstream
emsdk activate 2.0.22-upstream --permanent
```

`emsdk install 2.0.22-upstream` will install emscripten and its dependencies (clang, node.js, java) to your develop environment.
`emsdk activate 2.0.22-upstream --permanent` will perform setup for these tools.

## Next Step

Check out [Setup Visual Studio Code](setup-vscode) or [Setup Visual Studio](setup-visualstudio)!
