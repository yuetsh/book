# 🌐 网页设计与开发基础

## 📚 网站与网页的概念

- **网站**：在互联网上，根据一定的规则，使用HTML等工具制作的用于展示特定内容的相关网页的集合。网站是一种通信工具，类似于公告栏，人们可以通过网站发布信息或提供网上服务。

- **网页**：构成网站的基本元素，是承载各种网站应用的平台。网页是一个文件，存放在某台计算机中，通过网址识别与存取。网页包含文本、表格、图像、声音、视频等元素，通常分为静态网页和动态网页。

### 网站的分类

- **按主体性质**：政府网站、企业网站、商业网站、教育科研机构网站、个人网站、非营利机构网站等。
- **按内容**：资讯类、交易类、体验类、展示类、综合类。

### 网页的类型

- **静态网页**：通过网页设计工具一次性设计，手工更新信息，文件扩展名为`.html`或`.htm`。
- **动态网页**：通过网页脚本与语言自动处理，页面信息自动更新，文件扩展名为`.asp`、`.aspx`、`.php`或`.jsp`。

## 🛠️ HTML 语言基础

- **HTML**（Hypertext Markup Language，超文本标记语言）：用于创建网页等超文本文档，通过特定标记对文本、图像、链接等元素进行标注，定义文档的结构和内容。HTML5 是目前最主流的版本，引入了语义化标签（如`<header>`、`<footer>`、`<article>`等）和多媒体支持（如`<video>`、`<audio>`）。

### HTML5 的基本结构

```html
 <!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <title>网页标题</title>
 </head>
 <body>
     <!-- 网页内容 -->
 </body>
 </html>
```

### HTML 标签的类型

- **成对标签**：如`<p>`和`</p>`，定义段落。
- **自闭合标签**：如`<img>`，插入图片。

### 常用的 HTML 元素

- **结构元素**：`<html>`、`<head>`、`<body>`。
- **文本内容元素**：`<p>`、`<h1>`到`<h6>`、`<strong>`、`<em>`、`<span>`。
- **多媒体元素**：`<img>`、`<audio>`、`<video>`。
- **链接元素**：`<a>`、`<nav>`。

 

当然可以！根据笔记内容，我帮你详细总结一下HTML5的基本结构及相关知识点：

#### 一、HTML5 的基本结构

HTML5 文档的基本框架如下：

```html
 <!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">       <!-- 声明文档字符编码为UTF-8，防止乱码 -->
     <title>网页标题</title>      <!-- 网页标题，显示在浏览器标签页 -->
 </head>
 <body>
     <!-- 网页内容放这里 -->
 </body>
 </html>
```

- **`<!DOCTYPE html>`**：声明文档类型，告诉浏览器这是HTML5文档，确保浏览器以标准模式解析页面。
- **`<html>`标签**：整个网页的根元素，所有内容都包含在其中。
- **`<head>`标签**：包含网页的元数据，如字符集、标题、样式表链接、脚本等，不直接显示内容。
- **`<meta charset="utf-8">`**：设置网页字符编码，保证中文等多语言正确显示。
- **`<title>`标签**：定义网页标题，显示在浏览器标签页。
- **`<body>`标签**：网页主体内容区域，所有可见内容都放在这里。

#### 二、HTML 标签的类型

1. **成对标签** 由开始标签和结束标签组成，例如：
   - `<p>...</p>`：定义段落。
   - `<h1>...</h1>`：定义一级标题。 这类标签中间可以包含文本或其他元素。
2. **自闭合标签（单标签）** 没有结束标签，直接写一个标签即可，例如：
   - `<img>`：插入图片。
   - `<br>`：换行。
   - `<input>`：表单输入框。

#### 三、常用的HTML元素分类

1. **结构元素**
   - `<html>`：根元素。
   - `<head>`：头部信息。
   - `<body>`：主体内容。
2. **文本内容元素**
   - `<p>`：段落。
   - `<h1>`到`<h6>`：标题，h1最大，h6最小。
   - `<strong>`：加粗文本，表示强调。
   - `<em>`：斜体文本，表示强调。
   - `<span>`：行内元素，用于局部样式控制。
3. **多媒体元素**
   - `<img>`：插入图片。
   - `<audio>`：插入音频。
   - `<video>`：插入视频。
4. **链接元素**
   - `<a>`：超链接。
   - `<nav>`：导航栏，语义化标签。

#### 四、HTML5 语义化标签（笔记中有提及）

HTML5引入了更多语义化标签，提升代码可读性和搜索引擎优化（SEO），例如：

- `<header>`：头部区域。
- `<footer>`：底部区域。
- `<article>`：文章内容。
- `<section>`：章节。
- `<nav>`：导航菜单。

#### 五、示例说明

一个简单的HTML5网页示例：

```html
 <!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <title>示例网页</title>
 </head>
 <body>
     <h1>欢迎来到我的网站</h1>
     <p>这是一个段落。</p>
     <img src="images/photo.jpg" alt="示例图片" />
     <a href="https://www.example.com">访问示例网站</a>
 </body>
 </html>
```

 

## 🖥️ 网页编辑工具

### 常见的网页编辑工具

- **代码编辑器**：如Visual Studio Code、Sublime Text，适合有一定编程基础的开发者。
- **可视化网页编辑器**：如Adobe Dreamweaver、Wix，适合没有编程基础的用户。
- **在线代码编辑器**：如CodePen、JSFiddle，适合学习和调试。
- **集成开发环境（IDE）**：如HBuilder、WebStorm、IntelliJ IDEA，适合全栈开发和复杂项目。

### HBuilder 简介

HBuilder 是一款功能强大的集成开发环境（IDE），支持前端开发和多平台应用开发。它提供了丰富的HTML、CSS和JavaScript代码提示、智能补全以及语法高亮功能，内置实时预览和边改边看功能，极大提高开发效率。

## 🏗️ 网站规划与建设

### 网站规划步骤

1. **市场调研**：分析行业现状和趋势，评估网站建设的可行性和维护成本。
2. **目标定位**：明确网站的建设目的和功能定位。
3. **技术解决方案**：选择服务器、操作系统、开发策略、安全措施等。
4. **内容规划**：设计网站层级结构，规划页面内容。
5. **资源组建**：建立清晰的文件夹结构，分类存储文字、图片、视频等资源。

### 网站建设阶段

1. **网页设计与制作**：考虑目标访问群体的分布地域、年龄阶层、网络速度和阅读习惯，符合美术设计要求。
2. **网站测试与维护**：发布前进行细致周密的测试，投入使用后进行日常维护。

## 📝 任务实施

### 任务一：初探网站设计

设计一个环保主题网站，展示环保技术、产品及相关信息，提高公众环保意识与参与度。通过合理规划网站结构，运用HTML、CSS等技术实现页面布局与美化。

### 任务二：制作简单网页

掌握HTML语言的基本结构，了解网页常用元素及其定义方法。通过标签定义文本、图片及多媒体元素，构建“舌尖上的杭州”系列页面。

#### 示例：创建网页

```html
 <!DOCTYPE html>
 <html>
 <head>
     <meta charset="utf-8">
     <title>舌尖上的杭州</title>
 </head>
 <body>
     <h1>舌尖上的杭州</h1>
     <img src="img/1.jpg" alt="葱包烩" width="300" height="300">
 </body>
 </html>
```

## 📊 学习检查

| 检查内容                           | 检查结果 | 满意率          |
| ---------------------------------- | -------- | --------------- |
| 能否简述网站、网页及HTML语言的概念 | 是□ 否□  | 100%□ 70%□ 50%□ |
| 能否列举网页编辑工具，并说明其特点 | 是□ 否□  | 100%□ 70%□ 50%□ |
| 能否规划网站和设计网页             | 是□ 否□  | 100%□ 70%□ 50%□ |
| 能否使用HBuilder创建项目并预览     | 是□ 否□  | 100%□ 70%□ 50%□ |

# 🖼️ HTML 图像与超链接标签

## 图像标签 `<img>`

> **图像标签**用于在网页中插入图片，其基本格式为： `<img src="图片地址" alt="替代文本" />`

### 常用属性

| 属性     | 值             | 描述                             |
| -------- | -------------- | -------------------------------- |
| `src`    | 图像地址       | 图像的绝对路径或相对路径         |
| `alt`    | 自定义文本内容 | 规定图像无法显示时的替代文本     |
| `width`  | 像素或百分比   | 规定图像的宽度                   |
| `height` | 像素或百分比   | 规定图像的高度                   |
| `title`  | 自定义文本内容 | 规定鼠标移动到图像上的提示性文字 |

### 路径类型

1. **绝对路径**：文件或目录在硬盘中的真实路径。 例如：`src="D:/web/img/1.png"`
2. **相对路径**：相对于当前 HTML 文件的路径。
   - 同目录下：直接输入文件名，如 `src="1.jpg"`
   - 下级目录：先输入目录名称，后加“/”，再输入文件名，如 `src="img/1.jpg"`
   - 上级目录：先输入“../”，再输入目录名称和文件名，如 `src="../img/1.jpg"`

## 超链接标签 `<a>`

> **超链接标签**用于创建指向其他页面或资源的链接，其基本格式为： `<a href="路径地址">链接文本</a>`

### 常用属性

| 属性     | 值                                                | 描述                                                         |
| -------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `href`   | URL                                               | 规定链接指向的页面资源                                       |
| `target` | `_blank`、`_self`、`_parent`、`_top`、`framename` | 规定打开链接文档的方式： `_blank`：在新窗口或标签页中打开； `_self`：在当前窗口或标签页中打开（默认）； `_parent`：在父级框架中打开； `_top`：在最顶层窗口中打开； `framename`：在指定名称的框架中打开 |
| `title`  | 文本内容                                          | 当鼠标移动到链接上的提示文字                                 |

### 空链接

> **空链接**是未指定具体目标地址的链接，通常用于占位符或附加行为。 格式：`<a href="#">空链接示例</a>`

## 换行标签 `<br>`

> **换行标签**用于强制文本从下一行开始显示。 格式：`<br />` 示例：
>
> ```
>  葱包烩：春饼包裹油条、葱和甜面酱烤制而成<br />
> ```

## 版权信息与特殊符号

> **版权符号**使用 HTML 实体符号 `©` 表示。 示例：
>
> ```
>  <p>&copy;网页设计与制作组。保留所有权利。</p>
> ```

# 🎥 HTML 视频标签

## 视频标签 `<video>`

> **视频标签**用于在网页中嵌入视频，其基本格式为： `<video src="路径地址" controls width="800"></video>`

### 常用属性

| 属性       | 描述                         |
| ---------- | ---------------------------- |
| `src`      | 视频文件的绝对路径或相对路径 |
| `autoplay` | 加载完是否自动播放           |
| `controls` | 视频播放时是否显示播放器界面 |
| `loop`     | 视频是否循环播放             |
| `width`    | 设置视频画面的宽度           |
| `height`   | 设置视频画面的高度           |

# 🎯 锚记链接

## 锚记链接创建方法

1. **创建锚记**：在需要跳转到的位置，为 HTML 元素添加 `id` 属性。 示例：

   ```
    <h1 id="top">葱包烩的故事</h1>
   ```

2. **设置链接**：使用 `href="#锚记名称"` 创建指向锚记的链接。 示例：

   ```
    <a href="#top">回到顶部</a>
   ```

# 🎨 CSS 样式表基础

## CSS 规则

> **CSS 规则**由选择器和声明块组成，用于定义网页元素的样式。 语法：
>
> ```
>  选择器 { 属性1: 属性值; 属性2: 属性值; }
> ```

### 常见选择器

| 选择器类型 | 语法格式                        | 示例                                 |
| ---------- | ------------------------------- | ------------------------------------ |
| 标签选择器 | `标签名 { 属性: 值; }`          | `p { font-size: 12px; }`             |
| 类选择器   | `.类名称 { 属性: 值; }`         | `.intro { color: blue; }`            |
| ID 选择器  | `#id { 属性: 值; }`             | `#content { font-size: 14px; }`      |
| 后代选择器 | `父元素 后代元素 { 属性: 值; }` | `.food img { border-radius: 50px; }` |
| 伪类选择器 | `选择器:伪类 { 属性: 值; }`     | `a:hover { color: black; }`          |

## CSS 文本样式

### 字体属性

| 属性          | 描述               | 示例                   |
| ------------- | ------------------ | ---------------------- |
| `font-family` | 设置文本的字体     | `font-family: "楷体";` |
| `font-size`   | 设置文本的字体大小 | `font-size: 16px;`     |
| `font-weight` | 设置文本的字体粗细 | `font-weight: bold;`   |
| `font-style`  | 设置文本的字体样式 | `font-style: italic;`  |

### 文本颜色

| 属性    | 描述           | 示例          |
| ------- | -------------- | ------------- |
| `color` | 设置文本的颜色 | `color: red;` |

## CSS 边框样式

### 边框属性

| 属性            | 描述         | 示例                    |
| --------------- | ------------ | ----------------------- |
| `border-style`  | 设置边框样式 | `border-style: dotted;` |
| `border-width`  | 设置边框宽度 | `border-width: 3px;`    |
| `border-color`  | 设置边框颜色 | `border-color: red;`    |
| `border-radius` | 设置圆角边框 | `border-radius: 20px;`  |

## CSS 背景样式

### 背景属性

| 属性                | 描述                 | 示例                                  |
| ------------------- | -------------------- | ------------------------------------- |
| `background-color`  | 设置背景颜色         | `background-color: rgb(255, 87, 51);` |
| `background-image`  | 设置背景图像         | `background-image: url("image.jpg");` |
| `background-size`   | 设置背景图像大小     | `background-size: contain;`           |
| `background-repeat` | 设置背景图像平铺方式 | `background-repeat: no-repeat;`       |

## CSS 样式表优先级

> **优先级**：行内样式 > 内部样式表 > 外部样式表

# 🎨 CSS 样式应用与优先级

## 样式优先级

CSS 样式的优先级从高到低依次为：

1. **行内样式**：直接写在 HTML 元素的 `style` 属性中。
2. **内部样式**：写在 HTML 文件的 `<style>` 标签中，通常位于 `<head>` 部分。
3. **外部样式**：通过 `<link>` 标签引入的外部 `.css` 文件。

> **注意**：内部样式写在外部样式链接的下面时，内部样式的优先级高于外部样式。

## 外部样式表

### 基本语法

```html
 <link href="样式表文件的路径" type="text/css" rel="stylesheet">
```

- `href`：定义链接的样式表文件的路径。
- `type`：定义所链接文档的类型，`"text/css"` 表示为 CSS 样式表。
- `rel`：定义当前文档与被链接文档的关系，`stylesheet` 代表是一个样式文件。

### 特点

- **可重用性**：一个外部样式表可以被多个 HTML 页面引用，方便在多个页面间共享样式。
- **结构清晰**：将样式代码和 HTML 结构分开，有助于提升代码的可读性和可维护性。
- **易于维护**：修改外部样式表可以一次性影响所有引用该样式表的页面，适合大规模项目。

## 内部样式

### 基本语法

```html
 <head>
   <style type="text/css">
     选择器 { 属性1: 属性值; 属性2: 属性值; 属性3: 属性值; }
   </style>
 </head>
```

### 特点

- **局部性**：内部样式仅对当前 HTML 页面生效，不会影响其他页面。
- **嵌入性**：CSS 规则嵌入在 HTML 文件中，使得文件结构较为紧凑，但随着样式复杂度增加，可能会导致 HTML 文件难以维护。
- **适用场景**：适用于小型项目或单页应用，或者当某些页面需要与其他页面有显著不同的样式时。

## 行内样式

### 基本语法

```html
 <标签名 style="属性1: 属性值; 属性2: 属性值; 属性3: 属性值;">内容</标签名>
```

### 特点

- **局部控制**：行内样式只影响特定的 HTML 元素，适合对单个元素进行样式调整。
- **优先级高**：行内样式的优先级高于外部和内部样式表，因此它可以覆盖前两者的设置。
- **可读性差**：行内样式使得 HTML 代码变得冗长，难以维护，尤其是在样式复杂的情况下。

## 样式应用示例

### 外部样式表应用

```css
 body {
   background-color: #eee;
 }
 
 h1 {
   height: 70px;
   text-align: center;
   color: white;
   font-size: 40px;
   line-height: 70px;
   background-color: #f4af14;
 }
 
 .food {
   text-align: center;
   line-height: 48px;
   border: 4px dotted #ffb389;
   border-radius: 50px;
   font-size: 24px;
 }
 
 .food img {
   border-radius: 50px;
 }
 
 a {
   color: darkgrey;
   font-weight: bold;
   text-decoration: none;
 }
 
 a:hover {
   color: #1399d3;
 }
 
 .footer {
   height: 50px;
   text-align: center;
   line-height: 50px;
   background-color: #f4af14;
   color: white;
   font-size: 20px;
 }
```

### 内部样式应用

```html
 <head>
   <style type="text/css">
     body {
       background: url("../img/bg.png");
       background-repeat: no-repeat;
       background-position: center;
       background-color: #F7F6F2;
     }
 
     video {
       border-radius: 20px;
     }
 
     #vid {
       text-align: center;
     }
 
     h3 {
       color: #f4af14;
       font-size: 30px;
     }
 
     .step {
       font-size: 18px;
       line-height: 34px;
     }
 
     h4 {
       color: #db2b22;
     }
 
     #xts {
       line-height: 36px;
       border: 5px dotted #db2b22;
       border-radius: 10px;
     }
 
     #back {
       text-align: center;
     }
   </style>
 </head>
```

### 行内样式应用

```html
 <p class="step">
   准备春卷皮和油条：将春卷皮一张张分开，<span style="color:#377036;font-weight:bold;">避免粘连</span>。油条切成与春卷皮长度相当的段。<br>
 </p>
```

## 样式优先级示例

```html
 <p style="font-size: 12px; text-align: center;">这是一段示例文本。</p>
```

外部样式表 CSS 规则：

```css
 p {
   color: red;
   font-weight: bold;
 }
```

最终效果：字体大小 12 像素、字体颜色红色、字体加粗和水平居中。

## 总结

- **外部样式表**：适合大规模项目，便于维护和重用。
- **内部样式**：适合小型项目或单页应用，局部性强。
- **行内样式**：适合对单个元素进行样式调整，优先级最高。

通过合理使用这三种样式，可以有效地管理和应用 CSS 样式，提升网页的可维护性和可读性。

# 🎨 CSS 层叠性与继承性

## 层叠性

> "当多个CSS规则的优先级相同时，后声明的规则会覆盖先声明的规则。"

**示例：**

```css
 p {
     color: red; /* 文字颜色为红色 */
     font-weight: bold; /* 文字为粗体 */
 }
```

在图5-3-25中，如果多个规则同时作用于同一个元素，且优先级相同，则后声明的规则会生效。

## 继承性

> "子元素中与文本相关的属性会继承父元素的值。"

**示例：**

```css
 <p>
     这是段落标签内的文本。
     <span>这是span标签内的文本。</span>
 </p>
 p {
     font-family: Arial, sans-serif; /* 字体 */
     color: blue; /* 文字颜色 */
     font-size: 16px; /* 字号 */
 }
```

在图5-3-26中，`span`元素会继承`p`元素的样式。

## 优先级

> "CSS选择器的优先级决定了当多个规则应用于同一元素时，哪条规则会生效。"

| 选择器类型                 | 权重 |
| -------------------------- | ---- |
| 行内样式                   | 1000 |
| ID选择器                   | 100  |
| 类选择器、属性选择器、伪类 | 10   |
| 元素选择器、伪元素         | 1    |
| 通配符选择器、继承的样式   | 0    |

**规则：**

- 权重越高，优先级越高。
- 如果权重相同，则后定义的样式会覆盖前面的样式（就近原则）。
- 如果权重相同且声明顺序相同，则`!important`声明优先。

# 📦 盒模型

## 盒模型的组成

> "HTML元素被视为盒模型，包含内容、内边距、边框和外边距。"

| 部分              | 描述                                               |
| ----------------- | -------------------------------------------------- |
| 内容（content）   | 元素的实际内容区域，用于显示文本、图像等。         |
| 内边距（padding） | 内容区域与边框之间的空间，用于控制元素的内边距。   |
| 边框（border）    | 围绕内容区和内边距的线条，用于分离不同的HTML元素。 |
| 外边距（margin）  | 位于元素的外部空间，用于控制元素之间的距离。       |

### 内边距（padding）

**示例：**

```css
 padding-top: 15px; /* 上内边距为15px */
 padding-right: 20px; /* 右内边距为20px */
```

**简化代码：**

```css
 padding: 10px 20px 30px 40px; /* 上、右、下、左内边距分别为10px、20px、30px和40px */
 padding: 10px 20px 30px; /* 上内边距为10px，右、左内边距均为20px，下内边距为30px */
 padding: 10px 20px; /* 上、下内边距均为10px，右、左内边距均为20px */
 padding: 10px; /* 上、右、下、左内边距均为10px */
```

### 边框（border）

**示例：**

```css
 border: 1px solid #000; /* 实线边框，宽度为1px，颜色为黑色 */
 border: solid; /* 只设置边框样式，宽度和颜色使用默认值 */
 border: 2px dashed; /* 只设置边框宽度和样式，颜色使用默认值 */
 border: solid #00f; /* 只设置边框样式和颜色，宽度使用默认值 */
 border: none; /* 无边框 */
```

### 外边距（margin）

**示例：**

```css
 margin-top: 15px; /* 上外边距为15px */
 margin-left: 10px; /* 左外边距为10px */
```

**简化代码：**

```css
 margin: 10px 20px 30px 40px; /* 上、右、下和左外边距依次为10px、20px、30px和40px */
 margin: 10px 20px 30px; /* 上外边距为10px，右、左外边距为20px，下外边距为30px */
 margin: 10px 20px; /* 上、下外边距为10px，右、左外边距为20px */
 margin: 10px; /* 上、右、下、左外边距均为10px */
```

## 盒模型的尺寸

> "在CSS中，`width`和`height`属性专门用于定义元素内容区域的宽度和高度。"

**总宽度计算公式：**

$$
\text{总宽度} = \text{内容区域宽度（width）} + \text{左内边距（padding-left）} + \text{右内边距（padding-right）} + \text{左边框（border-left）} + \text{右边框（border-right）} + \text{左外边距（margin-left）} + \text{右外边距（margin-right）}
$$

 

**总高度计算公式：**

$$
\text{总高度} = \text{内容区域高度（height）} + \text{上内边距（padding-top）} + \text{下内边距（padding-bottom）} + \text{上边框（border-top）} + \text{下边框（border-bottom）} + \text{上外边距（margin-top）} + \text{下外边距（margin-bottom）}
$$

 

# 🧱 DIV+CSS 布局

## `<div>` 元素

> "`<div>`元素是一个没有特定语义的块级容器元素，常用于组合其他HTML元素并进行布局。"

**特性：**

1. 块级元素：默认从新的一行开始，占据其父容器的整个宽度。
2. 默认显示特性：默认在其前后添加换行，即在垂直方向上堆叠。
3. 容器角色：可以包含文本、图片、链接、其他容器等。
4. 可以嵌套：可以嵌套其他`<div>`元素，以及其他块级或行内元素。
5. 样式应用：可以应用CSS样式，如背景颜色、边框、内边距、外边距等。
6. 布局控制：可以通过CSS进行灵活的布局控制，例如使用浮动、定位等。

## 文档流

> "文档流是指HTML文档中元素的默认排列方式。"

**特点：**

1. 从上到下、从左到右的排列：块级元素默认占据一行或多行，行内元素在同一行内从左到右排列。
2. 元素的自然排列：元素会按照HTML代码中的顺序依次排列，不会发生重叠或交错。

## 浮动属性

> "浮动属性（float）用于控制元素的排列方式和位置，常用于多列布局的设计。"

**基本语法：**

```
 选择器 { float: 属性值; }
```

**常用属性值：**

| 值    | 描述                   |
| ----- | ---------------------- |
| left  | 使元素向左浮动         |
| right | 使元素向右浮动         |
| none  | 使元素不浮动，为默认值 |

**清除浮动：**

```
 选择器 { clear: 属性值; }
```

**常用属性值：**

| 值    | 描述                             |
| ----- | -------------------------------- |
| left  | 清除左侧浮动的影响               |
| right | 清除右侧浮动的影响               |
| both  | 同时清除左、右两侧浮动元素的影响 |

## 响应式布局

> "响应式布局是指网页能够自动适应不同屏幕尺寸、分辨率和方向，确保用户在任何设备上都能获得最佳浏览体验。"

**基本格式：**

```css
 @media (条件) {
     CSS-Code; /* 当条件满足时应用的CSS规则 */
 }
```

**常用媒体查询条件：**

| 设备视口宽度             | 媒体查询条件                                | 描述           |
| ------------------------ | ------------------------------------------- | -------------- |
| 视口宽度 ≤ 768px         | `max-width: 768px`                          | 适用于手机设备 |
| 769px ≤ 视口宽度 ≤ 991px | `(min-width: 769px) and (max-width: 991px)` | 适用于平板设备 |
| 视口宽度 ≥ 992px         | `min-width: 992px`                          | 适用于电脑设备 |

**示例：**

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
 @media (max-width: 768px) {
     img {
         width: 30%; /* 手机样式 */
     }
 }
 @media (min-width: 768px) and (max-width: 991px) {
     img {
         width: 50%; /* 平板样式 */
     }
 }
 @media (min-width: 992px) {
     img {
         width: 100%; /* 电脑样式 */
     }
 }
```

 # 🖥️ 网页制作与CSS布局

 ## 1. 创建网页并定义通用样式

 ### 1.1 创建项目
 - 打开HBuilder，选择“基本HTML 项目”创建项目“保护濒危动物”。
 - 将素材中的图片文件复制到项目中的“img”文件夹。
 - 在“CSS”文件夹中新建CSS文件，命名为“style.css”。

 ### 1.2 设置网页标题并引入CSS
 ```html
 <!doctype html>
 <html>
 <head>
 <meta charset="UTF-8">
 <title>保护濒危动物</title>
 <link rel="stylesheet" href="css/style.css">
 </head>
 <body>
 ```

### 1.3 清除默认样式并设置背景颜色

```html
 * {
     padding: 0px; /* 内边距0像素 */
     margin: 0px; /* 外边距0像素 */
 }
 body {
     background-color: #FCF7E2; /* 设置页面背景颜色为#FCF7E2 */
 }
```

## 2. 制作头部区域

### 2.1 添加头部`<div>`元素

```html
 <body>
 <div class="header"></div>
 </body>
```

### 2.2 定义头部CSS样式

```css
 .header {
     width: 1000px; /* 宽度1000像素 */
     height: 60px; /* 高度60像素 */
     margin: 0px auto; /* 设置当前div水平居中 */
     background-image: url("../images/header.jpg"); /* 设置背景图片header.jpg */
 }
```

### 2.3 知识链接：`margin`元素

- `margin: 0px auto`中，`0px`表示上下外边距为0像素，`auto`表示浏览器自动计算左右外边距，使元素水平居中。

### 2.4 知识链接：通配符选择器

- `*`是通配符选择器，表示选中文档中的所有元素。例如：`* { margin:0; padding:0; }`用于消除不同浏览器默认样式之间的差异。

## 3. 制作横幅图片区域

### 3.1 添加横幅`<div>`元素

```html
 <div class="header"></div>
 <div class="banner"></div>
```

### 3.2 定义横幅CSS样式

```css
 .banner {
     width: 1000px; /* 宽度1000像素 */
     height: 320px; /* 高度320像素 */
     margin: 0px auto; /* 设置当前div水平居中 */
     background-image: url("../images/banner.jpg"); /* 设置背景图片banner.jpg */
 }
```

## 4. 制作主体区域

### 4.1 添加主体`<div>`元素

```html
 <div class="banner"></div>
 <div class="main"></div>
```

### 4.2 定义主体CSS样式

```css
 .main {
     width: 1000px; /* 宽度1000像素 */
     margin: 0px auto; /* 设置当前div水平居中 */
 }
```

### 4.3 添加标题`<div>`元素

```html
 <div class="main">
 <div class="title"></div>
 </div>
```

### 4.4 定义标题CSS样式

```css
 .title {
     width: 1000px; /* 宽度1000像素 */
     height: 60px; /* 高度60像素 */
     background-image: url("../images/title.jpg"); /* 设置背景图片title.jpg */
 }
```

### 4.5 添加内容`<div>`元素

```html
 <div class="main">
 <div class="title"></div>
 <div class="box1"></div>
 <div class="box2"></div>
 <div class="box3"></div>
 <div class="box4"></div>
 </div>
```

### 4.6 定义内容CSS样式

```css
 .box1, .box2, .box3, .box4 {
     width: 490px; /* 宽度490像素 */
     height: 360px; /* 高度360像素 */
 }
 .box1 { background-image: url("../images/box1.jpg"); }
 .box2 { background-image: url("../images/box2.jpg"); }
 .box3 { background-image: url("../images/box3.jpg"); }
 .box4 { background-image: url("../images/box4.jpg"); }
```

## 5. 运用浮动属性调整布局

### 5.1 设置左浮动

```css
 .box1, .box2, .box3, .box4 {
     float: left; /* 设置左浮动 */
 }
```

### 5.2 设置右外边距

```css
 .box1, .box3 {
     margin-right: 20px; /* 设置右外边距20像素 */
 }
```

## 6. 制作底部区域

### 6.1 添加底部`<div>`元素

```html
 <div class="main"></div>
 <div class="footer"></div>
```

### 6.2 定义底部CSS样式

```css
 .footer {
     width: 1000px; /* 宽度1000像素 */
     height: 80px; /* 高度80像素 */
     margin: 0px auto; /* 设置当前div水平居中 */
     background-image: url("../images/footer.jpg"); /* 设置背景图片footer.jpg */
     clear: both; /* 清除浮动 */
 }
```

## 7. 制作菜单栏

### 7.1 修改头部样式

```css
 .header {
     background-color: rgba(113,113,113,0.78); /* 设置背景颜色 */
     line-height: 60px; /* 行高60像素，实现垂直居中 */
 }
```

### 7.2 添加`<span>`元素

```html
 <div class="header">
 <span class="logo">动物保护协会</span>
 </div>
```

### 7.3 定义`<span>`样式

```css
 .logo {
     color: #FFF; /* 字体颜色#FFF */
     font-size: 24px; /* 字体大小24像素 */
     margin-left: 20px; /* 左外边距20像素 */
     margin-right: 270px; /* 右外边距270像素 */
     font-weight: bold; /* 字体加粗 */
 }
```

### 7.4 添加超链接

```html
 <div class="header">
 <span class="logo">动物保护协会</span>
 <a href="index.html">首页</a>
 <a href="#">濒危物种</a>
 <a href="#">生存现状</a>
 <a href="#">保护行动</a>
 <a href="#">联系我们</a>
 </div>
```

### 7.5 定义超链接样式

```css
 .header a {
     color: #FFF; /* 字体颜色#FFF */
     text-decoration: none; /* 无下划线 */
     margin-right: 45px; /* 右外边距45像素 */
 }
 .header a:hover {
     color: #2E2E2E; /* 鼠标悬停时，字体颜色#2E2E2E */
 }
```

## 8. 制作图文混排

### 8.1 修改`<div>`样式

```css
 .box1 {
     width: 448px; /* 宽度448像素 */
     height: 300px; /* 高度300像素 */
     padding: 20px; /* 内边距20像素 */
     margin-top: 20px; /* 上边距20像素 */
     margin-right: 20px; /* 右边距20像素 */
     border: 1px solid rgba(135,135,135,1.00); /* 边框 */
     float: left; /* 左浮动 */
 }
```

### 8.2 添加图片和文字

```html
 <div class="box1">
 <img src="images/tu1.jpeg" alt="">
 <h3>藏羚羊</h3>
 <p>主要生活在高山草原和高寒荒漠地带，善于奔跑，被称为“高原精灵”。</p>
 </div>
```

### 8.3 定义图片和文字样式

```css
 .box1 img {
     width: 200px; /* 宽度200像素 */
     height: 300px; /* 高度300像素 */
     margin-right: 20px; /* 右边距20像素 */
     float: left; /* 左浮动 */
 }
 .box1 p {
     text-indent: 2em; /* 首行缩进2em */
     font-size: 16px; /* 字体大小16像素 */
     line-height: 1.5; /* 行高1.5倍 */
 }
```