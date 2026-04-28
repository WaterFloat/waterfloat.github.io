# 可在Win 98/ME系统下搭配KernelEx运行的应用程序清单

![os_tan_98se](./9x-kex-software-list.jpg)

我发现关于KernelEx 9x上Windows NT系列应用程序的相关文档十分匮乏。即便维基百科上的相关内容，也或多或少差强人意，因此我也整理了一份Windows 98/ME与KernelEx的兼容性清单。此外，各款应用程序的具体兼容性情况会在另一篇博客中详细说明。

本清单收录的均为能正常运行并实现其核心功能的程序。旧版本KernelEx上可运行的程序，理论上也能在当前版本的KernelEx中运行。作为一项预防措施，建议仅使用软件的便携版本，以避免对系统造成潜在损坏。

**务必安装适用于Windows 9x系统的非官方版Visual C++ 2008运行库（下载地址：http://www.mdgx.com/files/VC_R_9X.EXE），以获得最佳兼容性！VC++ 6.0运行库和DirectX 9也同样是必不可少的！**

**使用的设置：**
- KernelEx 4.5.2 + KernelEx 24个更新补丁
- Kstub822
- Visual C++ 2008运行库
- .NET Framework 2.0
- DirectX 9

**相关教程：**

[如何为KernelEx安装所有推荐的更新补丁](https://retrosystemsrevival.blogspot.com/p/kernelex-extensions-plus.html)

**补充说明：** Windows 2000和XP系统的DLL文件通常可在Windows 98SE/ME系统中使用，用于解决依赖项缺失问题。ReactOS系统的文件偶尔也能适用，但效果不稳定。

## 微软官方文件

- MSPAINT.EXE 5.1.2600.5918
- MSXML3.DLL 8.100.1052.0
- QUARTZ.DLL 6.5.1.914
~~- NOTEPAD.EXE 5.1.2600.5512~~
- VC_R_9X.EXE（Visual C++ 2008运行库）
- WORDPAD.EXE 5.00.2195.7155
- USBVIEW.EXE 2.0.1.0
- 来自Windows XP的字符映射表

## 反恶意软件和反病毒软件

- Avast 4.8（KernelEx 4.0rc2）
- SUPERAntiSpyware免费版（2013年或更早版本）（KernelEx 4.5.2，XP模式）

## 音频编辑器

- Goldwave 5.52（KernelEx 4.5.2）- 帮助菜单会崩溃
- 赛博力量音频编辑实验室 14.0.1

## 备份工具

- SyncBack 3.2.21.0

## 二进制对比工具

- AptDiff - 1.6.1版本尚未测试

## CAD软件

（无相关内容）

## 云存储与FTP工具

- FileZilla 2.2.22
- Mozilla Thunderbird 3.1.20（KernelEx 4.5.2）- 尝试打印或打印预览时会崩溃，其余功能运行正常

## 编程语言

（无相关内容）

## 编解码器

- LAVFilters-0.66.0-10（KernelEx 4.5.2019.24；Windows XP SP3模式）
- Cole2k媒体编解码器包 8.0.6高级版（KernelEx 4.5.2019.24；Windows XP SP3模式）
- K-Lite解码包 5.9.0（KernelEx 4.5.2，Windows XP SP2模式）- 安装耗时极长（在物理奔腾M处理器的电脑上测试）

  **更高版本虽能运行，但会出现错误。**

- Cole2k媒体编解码器包 7.9.0（KernelEx 4.0）
- DC-Bass音频源滤镜 1.2（KernelEx 4.5.2）- 1.3版本未测试
- FFDShow MPEG-4视频解码器 1.1.3943（KernelEx 4.5.1，XP系统）
- Haali媒体拆分器 1.13？
- XP-Codec编码包 2.5.0（KernelEx 4.0rc2）

**注意：** 使用编解码器时，务必为播放器调整兼容性设置。即便播放器原生支持Windows 98/ME系统，也需如此操作，因为许多播放器可能无法识别各类编解码器程序。

## 编译器

（无相关内容）

## 文档创建器（PDF）
- I2pdf 1.020 - 最新版本未测试

## 文档查看器（PDF、Epub等）
- 海海软件PDF阅读器 1.5.7.0（KernelEx 4.5.2019.24；Windows XP SP3模式）
- SumatraPDF 1.1便携版
- SumatraPDF 2.2.1便携版 - 无法更改阅读器视图类型，其余功能运行正常
- SumatraPDF 3.1.2便携版

  **SumatraPDF 0.9及更高版本无法打印。如需实现打印功能，需安装KernelEx存根程序（参考链接：http://kernelex.sourceforge.net/wiki/Sumatra_PDF）。**

  **1.2版本之后的SumatraPDF需要GDIPLUS.DLL文件，可从非官方2008 C++运行库获取（下载链接：http://retrosystemsrevival.blogspot.com/2020/04/visual-c-2008-98me.html）！**

  **3.x版本的SumatraPDF需要Windows XP系统的额外系统文件（参考链接：http://kernelex.sourceforge.net/wiki/Sumatra_PDF）。**

- PDF Xchange查看器 2.5.203（KernelEx 4.5.2；Windows 2000 SP4）
- STDU查看器 1.6.171便携版 - 推荐使用便携版本
- 福昕阅读器 4.3.1（KernelEx 4.5.2）- 更高版本需要额外文件（参考链接：http://kernelex.sourceforge.net/wiki/Foxit_Reader）
- 福昕阅读器 5.4.5.0124（KernelEx 4.5.2）- 需要MSXML4 SP2和GDIPLUS.DLL文件
- Adobe Acrobat Reader 7.0.9（KernelEx 4.5，Windows 2000 SP4）- 安装前需备份MSVCRT.DLL文件
- STDU查看器 1.5.647 - 查看功能可能存在漏洞

## 下载管理器/加速器

- 下载大师 5.7.5
- DownThemAll 2.0.x（KernelEx 4.5）

## 日记工具

- 全能文本容器（KernelEx 4.5，Windows 2000模式）

## 磁盘/光盘刻录软件

- Burnaware Free 2.4.2（KernelEx 4.0）- **需从安装文件夹中删除WnASPI32.dll文件！**
- 红外记录仪 0.50（KernelEx 4.0）
- Nero Burning ROM 7

## 数字艺术软件
- GIMP 2.2.17（KernelEx 4.5.2）
- Adobe Photoshop CS（KernelEx 4.5.2）
- ArtRage 2.5
- ArtWeaver 0.5.7（KernelEx 4.0）
- Corel照片画笔专业版 X
- Kerkythea（2013年或更早版本）- 需重新测试
- Pixelformer 0.9.6.3
- Starry Night CASP 6
- Wings3D 1.0

## 防火墙
- ZoneAlarm Pro 4.0（KernelEx 4.0rc2）

## 加密工具
- 苏菲斯免费加密 2.40.0（KernelEx 4.0）

## 文件压缩/解压缩软件
- 简易7-Zip 0.9.6
- 通用提取器 1.6测试版

## 集成开发环境（IDE）
- Visual C++工具包 2003

## 图片调整工具
- 液体调整大小 0.67

## 图像查看器
- IrfanView 4.54便携版（KernelEx 4.5.2019.24；Windows XP SP3模式）
- 谷歌Picasa 3
- PhotoCreator SE（2013年或更早版本）- 仅提供日文版本

## 图文转换器（光学字符识别/OCR）
- TopOCR 2.6（KernelEx 4.0）

## Post Script查看器
（无相关内容）

## 隔离软件
（无相关内容）

## 数学工具
- Calcplus

## 媒体转换器
（无相关内容）

## 媒体播放器
- 媒体播放器经典家庭影院 1.5.0.2827（KernelEx 4.5.2019.24，增强版基础）- 安装时仅将兼容模式设置为Windows XP SP3，安装完成后改回增强版基础（API修复+扩展）！同时需将MP4格式的DirectShow视频设置为默认值！运行需依赖编解码器！
- VLC播放器 1.1.1 - 个人推荐版本
- VLC播放器 2.0.5（KernelEx 4.5.2019.24；基础增强功能）- 若设置为XP模式会频繁崩溃，后续版本需执行额外步骤（参考链接：http://kernelex.sourceforge.net/wiki/VLC_Media_Player）。 **3.0版本可配合本页面顶部提供的额外KernelEx文件运行，这得益于Blackwingcat从其Windows 2000 KernelEx中提取的ntdll文件。;)** 
- VLC播放器 3.0.0 - 运行需要额外的DLL文件！
- ZoomPlayer 12.5（KernelEx 4.5.2019.24；基础增强）- 必须以传统模式安装，且需启用KernelEx才能通过编解码器播放视频。安装过程中会报错，但仍可正常使用。

  **ZoomPlayer 14.5存在编解码器检测问题，无法正常运行。**

- 海海软件万能播放器 1.5.8.0（KernelEx 4.5.2019.24）- 存在一个漏洞：退出程序后进程未终止；播放大体积视频时可能出现卡顿。
- SMPlayer 14.3.0便携版（KernelEx 4.5.2019.24；基础增强版）- **滑动条无法使用，视频无法暂停，按下停止键会导致播放器崩溃。**
- UMPlayer 0.98便携版（KernelEx 4.5.2019.24）- **滑动条无法使用，操作完成后播放器会崩溃。旧版本似乎也存在此问题。**
- AlShow 1.7（KernelEx 4.0）
- KMPlayer 4.0.4.6（KernelEx 4.5.2，XP系统）
- PotPlayer - 兼容版本待定
- MPlayerWW（2014年初版本）（KernelEx 4.5.2）- 兼容版本待定（下载链接：https://sourceforge.net/projects/mplayer-ww/）
- Kool Playa（2014年初或更早版本）（KernelEx 4.5.2）- 兼容版本待定
- Sherpya版MPlayer svn-r36443（KernelEx 4.5.2）- 更高版本需要Windows UPX（v3.91命令行版本）（下载链接：https://code.google.com/archive/p/mplayer-for-windows/downloads）
- Redxii版MPlayer（下载链接：https://code.google.com/archive/p/mplayer-for-windows/downloads）
- mplayer2 2.0
- Quicktime Alternative 2.9.0（KernelEx 4.0）
- Realtime Alternative 2.0.1（KernelEx 4.0）

***个人建议：在Windows 9x系统的电脑上播放MP4文件时，改用TCPMP播放器。该播放器能在配置极低的电脑上流畅渲染MP4文件，且无需安装KernelEx。***

## 挂载/镜像软件
（无相关内容）

## MP3/音乐播放器
- foobar2000 0.9.4.x - 需修改注册表：将[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion]路径下的CurrentVersion项值设为5.1，安装完成后改回原值。
- Winamp Pro 5.541（KernelEx 4.5.1，XP模式）

## 网络工具
（无相关内容）

## 记事本程序
（无相关内容）

## 办公套件
- OpenOffice 3.2.1（KernelEx 4.5.2）- 需安装Internet Explorer 5.5
- 金山演示 8.1.0.3030（KernelEx 4.5.2）
- AbiWord 2.8.6（KernelEx 4.5.2）
- WordPerfect X3
- TextMaker Viewer 2010 - Word文件查看器；尝试打开HTML文件时可能崩溃
- TextMaker 2008 -（KernelEx 4.5.2，Windows XP SP2模式）

## 密码管理器
- 奥丁密码安全管理器 6.5.2

## 分区软件
（无相关内容）

## 安全工具
- Eraser 5.8.2修订版3（KernelEx 4.5.2）
- Passwordfolder 1.0b

## 屏幕截图工具
- Siteshoter 1.38（KernelEx 4.0）

## 屏幕录制器
- Super2009版本36（KernelEx 4.0）

## 屏幕保护程序
- MSN壁炉（KernelEx 4.5.2019.24，增强版基础）- 务必为位于C:\Windows\System目录下的屏幕保护程序本体启用KernelEx！

## 社交媒体客户端
（无相关内容）

## 系统分析器
- PC-Wizard 2010.1.95 - 部分信息显示不正确

## 系统工具
（无相关内容）

## 文本编辑器
- Notepad++ 6.3.1（KernelEx 4.5.1）

## 文本转语音软件
- Textaloud 2.303

## 种子下载客户端
- uTorrent 2.0.4（KernelEx 4.5.2）- **稳定性推荐版本**；需安装扩展包以正常显示图标，更高版本存在不稳定问题。
- BitTorrent 6.4（KernelEx 4.5）

## 视频编辑器
- AviDemux 2.5.2（KernelEx 4.0）- 音量调节功能无法使用

## 游戏引擎
（无相关内容）

## 虚拟化/模拟软件
- BOCHS PC模拟器 2.5（KernelEx 4.5.1，XP系统）- 后续版本未测试
- QEMU PC模拟器 0.13.0（KernelEx 4.5.1，XP模式）

## VPN软件
（无相关内容）

## VST软件/插件
- BlueCat VST和DirectX音频插件（2011版本）- 仅测试过免费插件包
- Triple Cheese（2013年或更早版本）
- Voxengo VST插件（2013年或更早版本）- 仅测试过免费插件
- Melda Productions出品的VST插件（2013年或更早版本）
- 需要Pluggo运行环境的VST插件（2013年或更早版本）

## 无线客户端
（无相关内容）

## 网页浏览器
- [火狐浏览器 48.0.2](https://www.youtube.com/watch?v=o-p-R8zxuCQ)
  
  **务必按照视频中的所有操作步骤进行！**
  **需要支持SSE2指令集的CPU！**
  **如需解决字体问题，将系统默认字体改为Tahoma即可。**

- [火狐 31.8esr便携版](https://mega.nz/file/q9p2iaoK#L6JJss1Get9pvDWyCq430BxvevH3Fpnvw2TjslIDTqk)（镜像链接：https://webmail.freenet.de/Cloud/?shareToken=830044aa7ddd7cf46cefa9c390ecedd7d102c61a8d412cd7a8939bb481abf685）（KernelEx 4.5.2019.24）
- Opera 12.02
- QtWeb 3.2 - 推荐版本
- Qupzilla 1.1.5（KernelEx 4.5.2019.24）- 可启动但运行极卡顿，因证书问题和协议不支持无法加载网页
- 火狐 3.6.28（KernelEx 4.5.2）
- 苍月浏览器 3.6.26
- 火狐 9（KernelEx 4.5.2）- **为保证稳定性，建议使用该版本**，有反馈称火狐10频繁死机
- Mozilla Seamonkey 2.1 alpha 3（KernelEx 4.5.2）
- Flock 3.5.3.4641 - 基于Firefox的复刻版
- Roytam1版苍月浏览器27（无SSE2版本）- 据反馈可运行，但速度极慢
- Roytam1修复版火狐8 - 支持TLS 1.2
- [火狐 24](https://msfn.org/board/topic/181424-firefox-24-for-me-and-98/) - 需要额外扩展组件，请遵循该主题下的操作说明！

## 网页插件
- Adobe Flash Player 11.2（KernelEx 4.5.2）
- Adobe Shockwave Player 10.2.0.23（KernelEx 4.5.2）
- Java运行环境 6更新31（KernelEx 4.5.2）

## Windows自定义工具
- types 1.9.3（KernelEx 4.5.1，Windows 2000 SP4）

## Windows外壳程序
- bbLean 1.17.1

## Windows补丁程序
（无相关内容）

## 卸载程序
- Zsoft卸载工具 2.5（KernelEx 4.5.2）

## USB数据检测工具
- H2testw 1.4（KernelEx 4.5.1）

## 其他工具
- Graphviz 2.28（KernelEx 4.5.2）
- AM-Deadlinks 3.3
- Audio-Con 1.0（KernelEx 4.0）
- xCHM（已测试2013年或更早版本）- 一款优秀的CHM文件查看器
- HOLMImpulse（2013年或更早版本）- 需使用最新版KernelEx重新测试
- IrfanView Kadmos OCR插件
- KnobMan和SkinMan（2013年或更早版本）
- LeaderTask个人信息管理软件（2013年或更早版本）
- SISContents 1.57 - 可能存在故障

## 游戏
（无相关内容）

## 无法运行的程序
- VisualBoyAdvance M
- 海海软件Epub阅读器 1.0.0.1 - 缺少WINHTTP.DLL文件
- KMPlayer 3.1及以上版本 - 视频无法播放（早期未知版本可正常播放）
- Epsxe 2.0.0及更高版本
- PCSX-Reloaded 1.9.92 - 配置界面无法接受任何选项
- HUPlayer
- PotPlayer 1.7.7145
- 1964（N64模拟器）
- GomPlayer 2.1.47.5133
- 解锁工具
- 清理大师 2.0
