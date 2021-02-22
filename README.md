# 使用cit命令快速创建组件/页面/Model/Services

## 使用介绍
- 1. `npm install -g cit` 全局安装cit命令
- 2. `cit addComponent <CpnName>` 添加组件(默认会在src/components文件夹下添加), 配合命令 -nf -d 使用
- 3. `cit addPage <PageName>` 添加page(会在src/pages下新建页面, 并且在src/models下新建model文件, 在src/services下新建services文件)

## 命令介绍
- -d 写入文件的位置 例如添加一个组件 `cit addComponent Slider -d src/pages/Warehouse/Component`
- -nf 写入文件的时候时候需要外层城包装一个文件夹 例如 `cit adComponent <PageName> -nf` 创建文件的时候会在外层包装一个文件夹 里层使用index.jsx文件
- 注意: -d -nf命令只在addComponent的时候有用
