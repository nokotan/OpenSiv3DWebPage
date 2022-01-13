---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Setup Visual Studio Code
permalink: /vscode/setup-vscode
---

## Install Extensions

Open "Extension Tab" in Visual Studio Code, search and install these extensions:

- C/C++ VSCode Extension
- Debugger for Firefox (Optional)
- WebAssembly on Chrome Debugger (Optional)

![VSCodeExt1.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/bf97ad48-9626-4898-d671-48b740ddaecc.png)

## Create Project from Template

Follow link to [GitHub - nokotan/OpenSiv3DForWeb-VSCode](https://github.com/nokotan/OpenSiv3DForWeb-VSCode),
then Click `Code` button in green and `Download ZIP` button in this order.

This template is configured and ready to use ..

- Intellisense Configurations
  - Include Directories
  - Macro Definitions
- Build & Debug Task Definitions

Completed downloading this template, extract zip into a folder.

![InstallSiv3DWebVSCode.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/3c6d1c31-e6ff-0fb4-a00c-0086a2fafd12.png)

Launch Visual Studio Code, open folder-selecting dialog[^open-dialog], and select the folder that includes "Sample Program for OpenSiv3D for Web" you have extracted.

[^open-dialog]: Click `File` > `Open Folder ...`

![VSCodeOpenFolder.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/158514/385e8dfe-3f3a-431f-a8ed-63e2d491723c.png)

![OpenedProject](/assets/img/building/setup-vscode/opened-project-on-vscode.png)
