---
id: Imx6ull_uboot_kernel
title: u-boot & kernel
---

## 从零开始编译u-boot与内核
- 硬件：正点原子阿尔法开发板（Imx6ull-emmc）
- 开发环境：ubuntu22.04
- 交叉编译工具：arm-linux-gnueabihf-
---

## U-Boot

### NXP 官方u-boot编译

#### 1. 安装ncurses库
` sudo apt-get install libncurses5-dev `

#### 2. 获取u-boot
一般来说我们获得u-boot有三种途径分别是：

- u-boot官方源码：uboot是一个遵循着GPL协议的开源软件，原汁原味，但是一般不推荐，因为其支持较少，如果需要，可以在以下链接下载：
[u-boot源码](https://ftp.denx.de/pub/u-boot/)

- 芯片原厂提供：如瑞芯微、NXP、全志等芯片原厂会在u-boot源码基础上增加对自家芯片的支持，我们可以使用厂商提供的u-boot

- 第三方商家：由第三方商家制作开发板或板卡，会在厂商的基础上进一步增加对自己板卡的支持，使用更加方便

由于是以学习为目的，这里使用第二种方式，使用NXP公司提供的u-boot源码进行编译移植

这里通过原子提供的[NXP官方u-boot](https://pan.baidu.com/s/14W3WEpzOr_rNLyWaHOthHw?pwd=69ap )来进行移植和学习

将文件移动到ubuntu下，并解压缩：
` tar -vxjf uboot-imx-rel_imx_4.1.15_2.1.0_ga.tar.bz2 `


#### 3. 编译官方开发板的uboot
在uboot文件夹下的config文件里中，可以找到IMX6ULL EVK开发板对应的配置文件，也就是![](../Imx6ull/img/1.png "EVK开发板默认配置文件")

设置编译命令：  
`make ARCH=arm CROSS_PILE=arm-linux-gnueabihf- mx6ull_14x14_evk_emmc_defconfig ` 

编译：  
` make V=1 ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- `

可以看到编译成功：
![](../Imx6ull/img/2.png "官方开发板编译uboot")

#### 4. 烧录uboot

1. 从原子资料中获取imx烧写工具imxdownload，并将其放置到文件夹中(我这里把工具类都放到了一个新建文件夹为tools里)

2. 使用工具下载u-boot.bin文件到sd卡中：(这里我的u盘是sdb，要查看自己的，不一定是这个设备)

` ./imxdownload  ../uboot/u-boot.bin /dev/sdb` 
#### 5. 启动设备
1. 插上sd卡
2. 将拨码拨到sd卡启动
3. 打开串口工具，我这里使用的是mobaxterm，可以看到u-boot输出内容
![](../Imx6ull/img/3.png "uboot输出信息")

说明了官方开发板的uboot编译成功。








