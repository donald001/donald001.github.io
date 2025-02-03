import{i as C,E as p,F as T,a as l,g as A,f as E,h as v,c as q,r as k,w,o as D,T as O,I as P,L as N,M,N as j,O as x,P as b,U as L,Q as R}from"./index-BOghHSTH.js";import{g as U,d as F}from"./scroll-DS1qFNtJ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={position:{type:String,default:"bottom-right",validator:r=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(r)},offset:{type:Array,validator:r=>r.length===2},expand:Boolean};function H(){const{props:r,proxy:{$q:s}}=A(),a=C(T,p);if(a===p)return console.error("QPageSticky needs to be child of QLayout"),p;const i=l(()=>{const e=r.position;return{top:e.indexOf("top")!==-1,right:e.indexOf("right")!==-1,bottom:e.indexOf("bottom")!==-1,left:e.indexOf("left")!==-1,vertical:e==="top"||e==="bottom",horizontal:e==="left"||e==="right"}}),n=l(()=>a.header.offset),c=l(()=>a.right.offset),o=l(()=>a.footer.offset),t=l(()=>a.left.offset),g=l(()=>{let e=0,d=0;const u=i.value,y=s.lang.rtl===!0?-1:1;u.top===!0&&n.value!==0?d=`${n.value}px`:u.bottom===!0&&o.value!==0&&(d=`${-o.value}px`),u.left===!0&&t.value!==0?e=`${y*t.value}px`:u.right===!0&&c.value!==0&&(e=`${-y*c.value}px`);const m={transform:`translate(${e}, ${d})`};return r.offset&&(m.margin=`${r.offset[1]}px ${r.offset[0]}px`),u.vertical===!0?(t.value!==0&&(m[s.lang.rtl===!0?"right":"left"]=`${t.value}px`),c.value!==0&&(m[s.lang.rtl===!0?"left":"right"]=`${c.value}px`)):u.horizontal===!0&&(n.value!==0&&(m.top=`${n.value}px`),o.value!==0&&(m.bottom=`${o.value}px`)),m}),f=l(()=>`q-page-sticky row flex-center fixed-${r.position} q-page-sticky--${r.expand===!0?"expand":"shrink"}`);function h(e){const d=E(e.default);return v("div",{class:f.value,style:g.value},r.expand===!0?d:[v("div",d)])}return{$layout:a,getStickyContent:h}}const $=q({name:"QPageScroller",props:{...I,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{...I.offset,default:()=>[18,18]}},emits:["click"],setup(r,{slots:s,emit:a}){const{proxy:{$q:i}}=A(),{$layout:n,getStickyContent:c}=H(),o=k(null);let t;const g=l(()=>n.height.value-(n.isContainer.value===!0?n.containerHeight.value:i.screen.height));function f(){return r.reverse===!0?g.value-n.scroll.value.position>r.scrollOffset:n.scroll.value.position>r.scrollOffset}const h=k(f());function e(){const S=f();h.value!==S&&(h.value=S)}function d(){r.reverse===!0?t===void 0&&(t=w(g,e)):u()}w(n.scroll,e),w(()=>r.reverse,d);function u(){t!==void 0&&(t(),t=void 0)}function y(S){const B=U(n.isContainer.value===!0?o.value:n.rootRef.value);F(B,r.reverse===!0?n.height.value:0,r.duration),a("click",S)}function m(){return h.value===!0?v("div",{ref:o,class:"q-page-scroller",onClick:y},c(s)):null}return d(),D(u),()=>v(O,{name:"q-transition--fade"},m)}}),W=q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:s}){const{proxy:{$q:a}}=A(),i=C(T,p);if(i===p)return console.error("QPage needs to be a deep child of QLayout"),p;if(C(P,p)===p)return console.error("QPage needs to be child of QPageContainer"),p;const c=l(()=>{const t=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof r.styleFn=="function"){const g=i.isContainer.value===!0?i.containerHeight.value:a.screen.height;return r.styleFn(t,g)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-t+"px":a.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":a.screen.height-t+"px"}}),o=l(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:o.value,style:c.value},E(s.default))}}),V=`## Quasar 简介\r
\r
1. [Quasar](https://quasar.dev)基于谷歌 Material Design 设计\r
2. 浏览器兼容性好\r
3. 支持的模式：SPA, SSR, PWA, Mobile app, Desktop app\r
4. 自动化程度高，几乎不用写 css\r
5. VUE 官方文档唯一推荐的全平台 UI 框架[链接](https://cn.vuejs.org/v2/guide/ssr.html)\r
\r
## Node 与 NPM\r
\r
1. 官网安装 node: https://nodejs.org/\r
\r
\`\`\`\r
cd /opt\r
mkdir /opt/nodejs\r
cd nodejs\r
wget https://nodejs.org/dist/v13.6.0/node-v13.6.0-linux-x64.tar.xz\r
xz -d node-v13.6.0-linux-x64.tar.xz\r
tar -xvf node-v13.6.0-linux-x64.tar\r
cd node-v13.6.0-linux-x64/bin\r
./node -v #看下版本号\r
\`\`\`\r
\r
2. Linux 需要将 node 加到环境变量里：\r
\r
\`\`\`\r
sudo chmod 666 /etc/profile\r
vi /etc/profile #下面2行粘到profile文件里\r
export NODE_HOME=/opt/nodejs/node-v13.6.0-linux-x64\r
export PATH=$NODE_HOME/bin:$PATH\r
:wq\r
source /etc/profile\r
\`\`\`\r
\r
3. 安装国内 npm 并设置淘宝源：\`npm install -g cnpm --registry=https://registry.npm.taobao.org\`\r
4. 安装 Yarn \`cnpm install -g yarn\`\r
5. Yarn 淘宝源：\r
\r
\`\`\`\r
yarn config set registry https://registry.npm.taobao.org -g\r
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\r
\`\`\`\r
\r
## Quasar\r
\r
### 初始化\r
\r
1. 安装 quasar cli \`cnpm install -g @quasar/cli\`\r
2. 创建项目\`quasar create 项目名\`\r
3. 入口为 router 目录下的 index.js\r
\r
### 常用命令\r
\r
\`\`\`\r
quasar d(dev) 以node来启动项目，支持改动及时生效\r
quasar b(build) 生成dist目录下的文件\r
quasar c(clean) 清除dist目录下的文件\r
quasar n(new) p(page)/l(layout)/c(component)/b(boot)/s(store) 名字 新建页面/布局/部件\r
quasar m(mode) [add|remove pwa|ssr|cordova|electron] 添加框架支持\r
\r
\`\`\`\r
\r
### 国际化 i18n\r
\r
[Quasar 支持的所有语言](https://github.com/quasarframework/quasar/tree/dev/ui/lang)\r
\r
1. 在 UMD 模式下：\r
\r
\`\`\`\r
#需要在body里的quasar下面引入\r
<script src="../../static/js/quasar.umd.min.js"><\/script>\r
<script src="https://cdn.jsdelivr.net/npm/quasar@v1.0.0/dist/lang/zh-hans.umd.min.js"><\/script>\r
#并在js中写上\r
Quasar.lang.set(Quasar.lang.zhHans);\r
\`\`\`\r
\r
[工具](https://quasar.dev/start/umd)\r
\r
2. Quasar CLI 模式下的 quasar.conf.js 文件中\`framework: {lang: 'zhHans'}\`\r
\r
### CSS 样式\r
\r
1. css 间距\r
\r
\`\`\`\r
q-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]\r
    T       D                   S\r
\r
T - type\r
  - values: p (padding), m (margin)\r
\r
D - direction\r
  - values:\r
      t (top), r (right), b (bottom), l (left),\r
      a (all), x (both left & right), y (both top & bottom)\r
\r
S - size\r
  - values:\r
      none,\r
      auto (ONLY for specific margins: q-ml-*, q-mr-*, q-mx-*),\r
      xs (extra small),\r
      sm (small),\r
      md (medium),\r
      lg (large),\r
      xl (extra large)\r
<!-- medium margin to top, small margin to right -->\r
<q-card class="q-mt-md q-mr-sm">...</q-card>\r
\`\`\`\r
\r
### 布局\r
\r
1. 12 列响应式布局，和 bootstrap 差不多\r
\r
\`\`\`\r
 <div class="row">\r
      <div class="col-12 col-md-8">col-12 col-md-8</div>\r
      <div class="col-12 col-md-4">col-12 col-md-4</div>\r
    </div>\r
\`\`\`\r
\r
2. 间距设置 gutter\r
   所有方向间距\`q-gutter-xs\`,水平\`q-gutter-x-md\`,垂直水平\`q-gutter-y-md\`\r
\r
\`\`\`\r
<div class="q-gutter-xs">\r
      <q-btn color="brown" label="Button" v-for="n in 7" :key="\`xs-\${n}\`" />\r
</div>\r
\`\`\`\r
\r
3. Flex 布局[工具](https://quasar.dev/layout/grid/flex-playground)\r
4. 九宫格页面结构（Header, Footer, Left, Right）\r
   [工具](https://quasar.dev/layout-builder)\r
5. [现成的布局](https://quasar.dev/layout/gallery)\r
\r
### 组件\r
\r
#### 按钮\r
\r
\`\`\`\r
<q-btn color="white" text-color="black" label="Standard" icon="mail"  round size="lg"/>\r
\`\`\`\r
\r
带状态按钮\r
\r
\`\`\`\r
 <q-btn round :loading="loading6" color="black" @click="simulateProgress(6)" icon="camera_rear">\r
      <template v-slot:loading>\r
        <q-spinner-gears />\r
      </template>\r
    </q-btn>\r
\`\`\`\r
\r
切换按钮\r
\r
\`\`\`\r
<q-btn-toggle        v-model="model"  toggle-color="primary"\r
        :options="[{label: 'One', value: 'one'},\r
          {label: 'Two', value: 'two'},\r
          {label: 'Three', value: 'three'}]"      />\r
\`\`\`\r
\r
#### 表单控件\r
\r
1. 输入框\r
   样式：filled outlined rounded rounded standout\r
\r
\`\`\`\r
 <q-input color="grey-3" label-color="green" bg-color="lime" standout  bottom-slots v-model="text"  label="标题" counter clearable fill-mask unmasked-value\r
             mask="(###) ### - ####"  :rules="[ val => val.length <= 8 || '最多输入8个 ']">\r
      <template v-slot:prepend>\r
        <q-icon name="place" />\r
      </template>\r
      <template v-slot:append>\r
        <q-icon name="favorite" />\r
      </template>\r
      <template v-slot:hint>\r
        长度\r
      </template>\r
    </q-input>\r
\`\`\`\r
\r
- bottom-slots：显示底部的东西（counter:右下角显示长度，hint 槽：提示文本）; clearable：增加清空按钮\r
- 支护 type 类型 text password textarea email search tel file number url time date\r
- Mask 掩码\r
\r
| 符号 | 意义                                               |\r
| ---- | -------------------------------------------------- |\r
| #    | Numeric                                            |\r
| S    | Letter, a to z, case insensitive                   |\r
| N    | Alphanumeric, case insensitive for letters         |\r
| A    | Letter, transformed to uppercase                   |\r
| a    | Letter, transformed to lowercase                   |\r
| X    | Alphanumeric, transformed to uppercase for letters |\r
| x    | Alphanumeric, transformed to lowercase for letters |\r
\r
\`mask="(###) ### - ####"\`以什么形式显示， fill-mask：在页面上显示掩码 unmasked-value：将掩码值以原值的形式保存，reverse-fill-mask：由右向左输入\r
\r
- 用 rules 校验输入\r
  语法：\`value => condition || errorMessage\`，如\`:rules="[ val => val.length <= 3 || '最大输入3个字符']"\`；\r
\r
2. 文件\r
\r
\`\`\`\r
 <q-file\r
        v-model="filesMaxSize" accept=".jpg, image/*"\r
        outlined\r
        label="最大 (2k)" clearable\r
        multiple  max-files="3" counter use-chips\r
        :max-file-size="2048000"\r
        style="max-width: 300px"\r
      >\r
       <template v-slot:prepend>\r
          <q-icon name="attach_file" />\r
        </template>\r
    </q-file>\r
\`\`\`\r
\r
| 标签          | 意义             |\r
| ------------- | ---------------- |\r
| accept        | 文件类型限制     |\r
| multiple      | 允许多选         |\r
| max-files     | 多选时最大文件数 |\r
| counter       | 显示数量和大小   |\r
| use-chips     | 多选时以条状显示 |\r
| max-file-size | 文件最大限制     |\r
\r
3. 其他表单组件\r
   Radio, checkbox, toggle, slider, range, date, time\r
\r
### Markdown 渲染\r
\r
1. 安装插件（quasar CLI）\`quasar ext add @quasar/qmarkdown\`。如果是 UMD 模式需要如下引入\r
\r
\`\`\`html\r
<head>\r
  <!-- AFTER the Quasar stylesheet tags: -->\r
  <link\r
    href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.min.css"\r
    rel="stylesheet"\r
    type="text/css"\r
  />\r
</head>\r
<body>\r
  <!-- at end of body, AFTER Quasar script(s): -->\r
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.umd.min.js"><\/script>\r
</body>\r
\`\`\`\r
\r
2. 使用(比如 md 文件存在于 markdown/calendar.md)\r
\r
\`\`\`js\r
import calendar from '../markdown/calendar.md'\r
\r
export default {\r
  data () {\r
    return {\r
      cal: calendar\r
    }\r
  },\r
\`\`\`\r
\r
\`\`\`html\r
<q-markdown :src="cal" />\r
\`\`\`\r
`,G=`## 常用\r
\r
关机：\r
\r
\`\`\`\r
sync 将数据由内存同步到硬盘中。\r
shutdown 关机指令，你可以man shutdown 来看一下帮助文档。例如你可以运行如下命令关机：\r
shutdown –h 10 ‘This server will shutdown after 10 mins’ 这个命令告诉大家，计算机将在10分钟后关机，并且会显示在登陆用户的当前屏幕中。\r
shutdown –h now 立马关机\r
shutdown –h 20:25 系统会在今天20:25关机\r
shutdown –h +10 十分钟后关机\r
shutdown –r now 系统立马重启\r
shutdown –r +10 系统十分钟后重启\r
reboot 就是重启，等同于 shutdown –r now\r
halt 关闭系统，等同于shutdown –h now 和 poweroff\r
hutdown -c 取消即将进行的关机\r
\`\`\`\r
\r
#### Linux 文件基本属性 ls -l\r
\r
- 当为[ d ]则是目录\r
- 当为[ - ]则是文件；\r
- 若是[ l ]则表示为链接文档(link file)；\r
- 若是[ b ]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；\r
- 若是[ c ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。\r
- \`chmod u=rwx,g=rx,o=r test1\` // 修改 test1 权限\r
- \`chmod a-x test1\` 要拿掉全部人的可执行权限\r
- pwd: print working directory -P 参数为 physical（非链接）\r
- mkdir rmdir(必须为空目录) rm（非空） cp mv（可重命名）\r
- mkdir -p(parents 递归建，适用于 rmdir) -m 711(mode 指定)\r
\r
#### 文件浏览：\r
\r
1. less: /reg 向下搜正则，?reg 向上正则 n 查找下一个, N 查找上一个\r
2. tail -n 20\r
\r
#### 用户管理\r
\r
1. useradd [cdgGsu] 名\r
2. userdel [-r] 名 (删除记录)\r
3. usermod [cdgGsuo] 名\r
4. passwd [ludfe] 名 lock/unlock/direct/force/expire\r
\r
#### 组管理\r
\r
groupadd 名，groupdel 名， groupmod -n 新名 旧名，\r
\r
#### 磁盘管理\r
\r
1. df [-akmhHTi][目录] k:KB, m: MB, h：自动，H 以 1000 而不是 1024 对齐\r
2. mkfs [-t 格式] 装置\r
   mkfs 按 2 次 tab 显示支持哪些文件格式。\r
\r
\`\`\`\r
将分区 /dev/hdc6（可指定你自己的分区） 格式化为 ext3 文件系统：  mkfs -t ext3 /dev/hdc6\r
\`\`\`\r
\r
3. fsck [选项] 装置名\r
\r
- -A : 对/etc/fstab 中所有列出来的分区做检查；s:串行，p:并行（加-A 时）；-a 自动修复 -r 手动确认修复，-y 自动答复\r
\r
4. umount [-f] 挂载点\r
\r
## Shell\r
\r
### 变量\r
\r
\`\`\`sh\r
for skill in Ada Coffe Action Java; do\r
    echo "I am good at \${skill}Script"\r
done\r
myUrl="http://www.google.com"\r
readonly myUrl\r
unset 变量\r
\r
string="abcd"\r
echo \${#string} #输出 4（长度）\r
echo \${string:1:4} # 从第2个取，取4个子串\r
array_name=(value0 value1 value2 value3) #数组定义：注意空格是分隔符，不是逗号\r
echo \${array_name[1]} #才是输出第二个元素，\r
echo $array_name[1] #输出value0[1]\r
echo \${array_name[@]} # @可取所有元素 *也可以\r
echo \${#array_name[@]} # 数组长度\r
echo \${#array_name[n]} #第n-1个元素的长度\r
:<<EOF\r
注释内容...\r
注释内容...\r
注释内容...\r
EOF  #多行注释\r
\`\`\`\r
\r
- 单引号原样输出，双引号可有变量可转义\r
\r
### 传参\r
\r
- 脚本内获取参数的格式为：\\$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推…… 0 代表当前文件名\r
\r
| 参数处理 | 说明                                                                                                                    |\r
| -------- | ----------------------------------------------------------------------------------------------------------------------- |\r
| \\$#      | 传递到脚本的参数个数                                                                                                    |\r
| \\$\\*     | 以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。                   |\r
| \\$\\$     | 脚本运行的当前进程 ID 号                                                                                                |\r
| \\$!      | 后台运行的最后一个进程的 ID 号                                                                                          |\r
| \\$@      | 与$*相同，但是使用时加引号，并在引号中返回每个参数，如"$@"用「"」括起来的情况、以"$1" "$2" … "\\$n" 的形式输出所有参数。 |\r
| \\$-      | 显示 Shell 使用的当前选项，与 set 命令功能相同。                                                                        |\r
| \\$?      | 显示最后命令的退出状态。0 表示没有错误，其他任何值表明有错误。                                                          |\r
\r
### 中括号\r
\r
1. 算术：-eq, -ne, -gt, -lt, -ge, -le, -a(与) -o（或），！（非）\`[ $var1 -ne 0 -a $var2 -gt 2 ] # 使用逻辑与\`\r
2. 关系：==, !=, 没有大于小于号（重定向）\r
3. 文件系统：\`[ -e $fpath ]; #文件存在\` -f(is file), -rwx 三属性, -d(is directory)，-c/b/p 字符/块设备/pipe， -L 是符号链接, -s 文件不为空返回 true, -S 是否为 socket\r
4. 字符串比较\`[[ $str1 != $str2 ]]\` 加逻辑时不是-a,-o 而是&&与|| \`if [[ -n $str1 ]] && [[ -z $str2 ]];\` str1 非空而 str2 为空\r
5. 用 test 可以避免使用过多的括号 \`if test $var -eq 0; then echo "True"; fi\`\r
\r
### 运算\r
\r
估值\r
\r
\`\`\`\r
val=\`expr 2 + 2\`\r
val=\`expr $a \\* $b\` #乘号(*)前边必须加反斜杠(\\)才能实现乘法运算；\r
#在 MAC 中 shell 的 expr 语法是：$((表达式))，此处表达式中的 "*" 不需要转义符号 "\\" 。\r
\`\`\`\r
\r
### echo 命令\r
\r
单引号时原样输出，撇号为执行命令，双引号可省略\r
\r
\`\`\`\r
read name #read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量\r
echo "$name It is a test"\r
echo -e "OK! \\n" # -e 开启转义\\n可换行 \\c不换行\r
echo "It is a test" > myfile #显示结果定向至文件\r
echo \`date\`\r
\`\`\`\r
\r
### 流程控制\r
\r
\`\`\`\r
#判断\r
if condition1\r
then\r
    command1\r
elif condition2\r
then\r
    command2\r
else\r
    commandN\r
fi\r
#For循环1\r
for var in item1 item2 ... itemN\r
do\r
    command1\r
    command2\r
    ...\r
    commandN\r
done\r
#写成一行\r
for var in item1 item2 ... itemN; do command1; command2… done;\r
#For循环2\r
for((i=1;i<=5;i++));do\r
    echo "这是第 $i 次调用";\r
done;\r
#in列表是可选的，如果不用它，for循环使用命令行的位置参数。\r
#while\r
while condition\r
do\r
    command\r
done\r
#switch case\r
read aNum\r
    case $aNum in\r
        1|2|3|4|5) echo "你输入的数字为 $aNum!"\r
        ;;\r
        *) echo "你输入的数字不是 1 到 5 之间的!"\r
            continue\r
            echo "游戏结束"\r
        ;;\r
    esac\r
\`\`\`\r
\r
### 函数\r
\r
和 C 语言不同，shell 语言中函数返回 0 代表 true，0 以外的值代表 false。\r
\r
\`\`\`\r
funWithReturn(){\r
    read aNum\r
    read anotherNum\r
    echo "第一个参数为 $1 !"\r
    echo "参数总数有 $# 个!"\r
    return $(($aNum+$anotherNum)) # 或return \`expr $a + $b\`\r
}\r
funWithReturn 1 2 2\r
echo "输入的两个数字之和为 $? !" #函数返回值在调用该函数后通过 $? 来获得。\r
\r
\`\`\`\r
\r
### 输入/出\r
\r
\`\`\`\r
command 2 > file # stderr 重定向到 file\r
command > file 2>&1 #将 stdout 和 stderr 合并后重定向到 file\r
command < file1 >file2 #希望对 stdin 和 stdout 都重定向\r
wc -l << EOF\r
    欢迎来到\r
    菜鸟教程\r
    www.runoob.com\r
EOF    # hereDoc << 输出结果为 3 行\r
command > /dev/null #禁止输出\r
command > /dev/null 2>&1 #屏蔽 stdout 和 stderr\r
\`\`\`\r
\r
### 文件 include\r
\r
\`\`\`\r
. filename   # 注意点号(.)和文件名中间有一空格  或\r
source filename\r
\`\`\`\r
\r
## 文件\r
\r
### 指令\r
\r
\`\`\`\r
cat /dev/null > test.txt  #清空test.txt\r
-n 或 --number：由 1 开始对所有输出的行数编号。\r
-b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。\r
-s 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。\r
-v 或 --show-nonprinting：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。\r
-E 或 --show-ends : 在每行结束处显示 $。\r
-T 或 --show-tabs: 将 TAB 字符显示为 ^I。\r
-A, --show-all：等价于 -vET。\r
-e：等价于"-vE"选项；\r
-t：等价于"-vT"选项；\r
\`\`\`\r
\r
#### chattr\r
\r
\`chattr [-RV][-v<版本编号>][+/-/=<属性>][文件或目录...]\`\r
\r
\`\`\`\r
　-R 递归处理，将指定目录下的所有文件及子目录一并处理。\r
　　-v<版本编号> 设置文件或目录版本。\r
　　-V 显示指令执行过程。\r
　　+<属性> 开启文件或目录的该项属性。\r
　　-<属性> 关闭文件或目录的该项属性。\r
　　=<属性> 指定文件或目录的该项属性。\r
属性有\r
a：文件只能往里面追加数据，但不能删除\r
b：不更新文件或目录的最后存取时间。\r
c：将文件或目录压缩后存放。\r
d：将文件或目录排除在倾倒操作之外。\r
i：不得任意更动文件或目录。\r
s：保密性删除文件或目录。\r
S：即时更新文件或目录。\r
u：预防意外删除。\r
chattr +i /etc/resolv.conf\r
lsattr /etc/resolv.conf #显示\r
chattr +a /var/log/messages\r
\`\`\`\r
\r
#### 不常用\r
\r
\`\`\`\r
chgrp -v bin log2012.log #将log组归为bin组，并显示执行过程\r
chgrp --reference=log2012.log log2013.log #参考\r
chmod ugo+r file1.txt #将文件 file1.txt 设为所有人皆可读取\r
chmod ug+w,o-w file1.txt file2.txt #将文件 file1.txt 与 file2.txt 设为该文件拥有者，与其所属同一个群体者可写入，但其他以外的人则不可写入\r
chmod -R a+r * #将目前目录下的所有文件与子目录皆设为任何人可读取 :\r
chown -R runoob:runoobgroup * #目前目录下的所有文件与子目录的拥有者皆设为 runoob，群体的使用者 runoobgroup:\r
cksum testfile1   #显示 校验码 字节数 文件名\r
cmp prog.o.bak prog.o\r
file -b install.log #返回UTF-8 Unicode text\r
file -bi install.log  #text/plain; charset=utf-8\r
ln -s log2013.log link2013\r
\`\`\`\r
\r
#### Find\r
\r
\`\`\`\r
find . -name "*.c" #将目前目录及其子目录下所有延伸档名是 c 的文件列出来\r
find /var/log -type f -mtime +7 -ok rm {} \\; #查找/var/log目录中更改时间在7日以前的普通文件，并在删除之前询问：\r
find . -type f -perm 644 -exec ls -l {} \\; #查找前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件：\r
find / -type f -size 0 -exec ls -l {} \\; #查找系统中所有文件长度为0的普通文件，并列出它们的完整路径：\r
\`\`\`\r
\r
查一个软件装哪了\`rpm -qa | grep java\` 再\`rpm -ql 全名\`\r
\r
\`\`\`\r
yum list installed | grep php\r
yum remove php\r
yum remove php-*\r
\`\`\`\r
`,J=`它会监视你对代码的改动，并自动重启 \`Node.js： npm install -g\` supervisor。接下来，使用 supervisor 命令启动而不是 node\r
\r
\`\`\`\r
var http=require('http');\r
http.createServer(function(req,res){\r
    res.writeHead(200,{'content-type':'text/html'});\r
    res.write("<h2>NodeJsResponsed</h2>")\r
    res.end("hello1")\r
}).listen(3000);\r
\`\`\`\r
\r
文件操作：\r
\r
\`\`\`\r
var fs=require('fs')\r
fs.readFile('c:/abc.txt','utf-8',function(err,data){\r
    if(err){\r
        console.error(err)\r
    }else{\r
        console.info(data)\r
    }\r
})\r
\`\`\`\r
\r
Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口， require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。\r
\r
\`\`\`\r
exports.setName = function(thyName) {\r
    name = thyName;\r
};\r
\`\`\`\r
\r
如果引出的是一个对象：\`exports.Hello = Hello;\`通过 require('./singleobject').Hello 来获取 Hello 对象。简单点\`module.exports = Hello;\`就可以\`var Hello = require('./hello');\`引用了。\r
exports 本身仅仅是一个普通的空对象，即 {} ，它专门用来声明接口\r
\r
- Node.js 对包的要求并没有这么严格，只要顶层目录下有 package.json。\r
- Node.js 在调用某个包时,会首先检查包中 package.json 文件的 main 字段,将其作为包的接口模块,如果 package.json 或 main 字段不存在,会尝试寻找 index.js 或 index.node 作为包的接口.\r
- 通过使用==npm init==可以根据交互式问答产生一个==符合标准==的 package.json\r
- 一个完全符合 CommonJS 规范的 package.json 示例\r
\r
\`\`\`\r
{\r
	"name": "mypackage",\r
	"description": "Sample package for CommonJS. This package demonstrates the required\r
	elements of a CommonJS package.",\r
	"version": "0.7.0",\r
	"keywords": [\r
		"package",\r
		"example"\r
	],\r
	"maintainers": [{\r
			"name": "Bill Smith",\r
			"email": "bills@example.com",\r
		}\r
	],\r
	"contributors": [{\r
			"name": "BYVoid",\r
			"web": "http://www.byvoid.com/"\r
		}\r
	],\r
	"bugs": {\r
		"mail": "dev@example.com",\r
		"web": "http://www.example.com/bugs"\r
	},\r
	"licenses": [{\r
			"type": "GPLv2",\r
			"url": "http://www.example.org/licenses/gpl.html"\r
		}\r
	],\r
	"repositories": [{\r
			"type": "git",\r
			"url": "http://github.com/BYVoid/mypackage.git"\r
		}\r
	],\r
	"dependencies": {\r
		"webkit": "1.2",\r
		"ssl": {\r
			"gnutls": ["1.0", "2.0"],\r
			"openssl": "0.9.8"\r
		}\r
	}\r
}\r
\r
\`\`\`\r
\r
- 默认情况下我们使用 npm install 命令就是采用本地模式,即把包安装到当前目录的 node_modules 子目录下.Node.js 的 require 在加载模块时会尝试搜寻 node_modules 子目录,因此使用 npm 本地模式安装的包可以直接被引用。\r
- npm 还有另一种不同的安装模式被成为全局模式,使用方法为：\`npm [install/i] -g [package_name]\`。全局时才会注册 PATH 环境变量，但不能被直接 require 使用。\r
- 使用 npm link 可以使全局包被 require 使用，但此命令不支持 windows\r
- 在发布前,我们还需要获得一个账号用于今后维护自己的包,使用\`npm adduser\`根据提示输入用户名、密码、邮箱,等待账号创建完成.完成后可以使用\`npm whoami\`测验是否已经取得了账号.接下来,在 package.json 所在目录下运行\`npm publish\`,稍等片刻就可以完成发布了.可以使用\`npm unpublish\`命令来取消发布。\r
- 访问 http://search.npmjs.org/ 就可以找到自己刚刚发布的包了。\r
- 所有全局变量（除了 global 本身以外）都是 global 对象的属性\r
- process.argv 是命令行参数数组，第一个元素是 node， 第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。\r
- process.stdout 是标准输出流，通常我们使用的 console.log() 向标准输出打印字符，而 process.stdout.write() 函数提供了更底层的接口。\r
- process.stdin 是标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数。\r
\r
\`\`\`\r
process.stdin.resume();\r
process.stdin.on('data', function(data) {\r
    process.stdout.write('read from console: ' + data.toString());\r
});\r
\`\`\`\r
\r
process.nextTick(callback) 的功能是为事件循环设置一项任务，Node.js 会在下次事件循环调响应时调用 callback 。\r
\r
\`\`\`\r
function doSomething(args, callback) {\r
    somethingComplicated(args);\r
    process.nextTick(callback); //异步式操作callback\r
}\r
doSomething(function onEnd() {\r
    compute();\r
});\r
\`\`\`\r
\r
我们探讨了 process 对象常用的几个成员,除此之外 process 还展示了 process.platform 、process.pid 、 process.execPath 、 process.memoryUsage() 等方法,以及 POSIX 进程信号响应机制.\r
\r
#### util 是一个 Node.js 核心模块，提供常用函数的集合。\`var util=require('util');\`\r
\r
\`util.inherits(子类，父类)\`：将且仅使子类继承父类用.prototype=...声明的函数。\r
\r
- \`util.inspect(object,[showHidden],[depth],[colors])\`是一个将任意对象转换\r
  为字符串的方法，通常用于调试和错误输出。\r
- ， util 还提供了 util.isArray() 、 util.isRegExp() 、util.isDate() 、 util.isError() 四个类型测试工具，\r
\r
#### events 是 Node.js 最重要的模块\`var events = require('events');\`\r
\r
\`\`\`\r
var events=require('events');\r
var emitter=new events.EventEmitter()\r
emitter.on('se',function(arg){console.log(arg)})\r
emitter.on('se',function(arg){console.log(arg+3)})\r
emitter.emit('se',1991)\r
emitter.once('seo',function(){}) #监听器最多只会触发一次，触发后立刻解除该监听器\r
emitter.removeListener('se',function(){})\r
\`\`\`\r
\r
- 我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。\r
\r
#### HTTP 服务端\r
\r
\`\`\`\r
var http = require('http');\r
var server = new http.Server();\r
server.on('request', function(req, res) {\r
    res.writeHead(200, {'Content-Type': 'text/html'});\r
    res.write('<h1>Node.js</h1>');\r
    res.end('<p>Hello World</p>');\r
});\r
server.listen(3000);\r
\`\`\`\r
\r
- req 对象有三个可以 on 的事件：\r
\r
1. data ：当请求体数据到来时，该事件被触发。该事件提供一个参数 chunk ，表示接收到的数据。\r
2. end ：当请求体数据传输完成时，该事件被触发，此后将不会再有数据到来。\r
3. close ： 用户当前请求结束时，该事件被触发。\r
\r
- 对于 req 对象其属性有：complete, httpVersion, method, url, headers, connection(当前 http 的 net.Socket 实例，同 socket), client\r
- 对于 url 可以用 url.parse 去解析对象\r
\r
\`\`\`\r
var http = require('http');\r
var url = require('url');\r
var util = require('util');\r
http.createServer(function(req, res) {\r
    res.writeHead(200, {'Content-Type': 'text/plain'});\r
    res.end(util.inspect(url.parse(req.url, true)));\r
}).listen(3000);\r
\`\`\`\r
\r
Node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。\r
\r
- res 对象有三个成员函数：\r
\r
1. response.writeHead(statusCode, [headers]) ：向请求的客户端发送响应头。如果不调用，则会==自动==生成一个响应头。\r
2. response.write(data, [encoding]) ：向请求的客户端发送响应内容。编码方式，==默认是 utf-8==\r
3. response.end([data], [encoding]) ：结束响应，告知客户端所有发送已经完成。该函数==必须==被调用一次\r
\r
#### HTTP 客户端\r
\r
1. 最基本客户端：\r
\r
\`\`\`\r
var http=require('http')\r
var queryString=require('querystring')\r
var contents=queryString.stringify({\r
    name:'donald',\r
    id:11\r
})\r
var options={\r
    host:'localhost',\r
    port:3000,\r
    method:'POST',\r
    path:'/',\r
    headers:{\r
        'Content-type':'application/x-www-form-urlencoded'\r
    }\r
}\r
var req=http.request(options,function(res){\r
    res.setEncoding('utf-8');\r
    res.on('data',function(data){console.log(data)})\r
})\r
req.write(contents);\r
req.end();\r
\`\`\`\r
\r
http.get(options, callback) http 模块还提供了一个更加简便的方法用于处理 GET 请求： http.get .它是 http.request 的简化版,唯一的区别在于 http.get 自动将请求方法设为了 GET 请求,同时不需要手动调用 req.end() .\r
\r
\`\`\`\r
var http=require('http')\r
http.get({host:localhost},function(res){\r
    res.setEncoding('utf-8');\r
    res.on('data',function(data){console.log(data)})\r
})\r
\`\`\`\r
\r
## 也可以分开上面代码：先.get()返回一个 req 对象，再 req.on('response',function(res){...}\r
\r
http.ClientResponse 与 http.ServerRequest 相似，提供了三个事件 data 、 end 和 close ，分别在数据到达、传输结束和连接结束时触发，其中 data 事件传递一个参数 chunk ，表示接收到的数据。http.ClientResponse 也提供了一些属性:statusCode, httpVersion, headers。函数：pause(), resume()\r
\r
### Express 框架（V4）：\r
\r
v3 差别较大。\r
\`npm install -g express\`\r
\`npm install -g express-generator\`必须装！！！\r
\`express -e microblog\`：在 microblog 下以 ejs 为模板建站\r
按命令提示装插件启动命令为：\`SET DEBUG=microblog:* & npm start\`\r
\r
- 无参数的 npm install 的功能就是检查当前目录下的 package.json，并自动安装所有指定的依赖。\r
-\r
\r
\`\`\`\r
npm install express          # 本地安装将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录）\r
npm install express -g   # 全局安装 放在 /usr/local 下或者你 node 的安装目录\r
npm config set proxy null #如果遇到连接错误，执行此。\r
\`\`\`\r
\r
#### 淘宝 NPM 镜像\r
\r
\`\`\`\r
 npm install -g cnpm --registry=https://registry.npm.taobao.org\r
 cnpm install 名字\r
\`\`\`\r
\r
- Buffer 类用来创建一个专门存放二进制数据的缓存区（因为在 JS 中只有字符串）from 方法为其构造器。\r
- \`const buf = Buffer.from('runoob', 'ascii'); console.log(buf.toString('hex'));\`\r
\r
#### Node.js 目前支持的字符编码包括\r
\r
- ascii : 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。\r
- utf8 : 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF8 。\r
- utf16le : 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。\r
- ucs2 : utf16le 的别名。\r
- base64 : Base64 编码。\r
- latin1 : 一种把 Buffer 编码成一字节编码的字符串的方式。\r
- binary : latin1 的别名。\r
- hex : 将每个字节编码为两个十六进制字符。\r
\r
#### Buffer 提供了以下 API 来创建 Buffer 类：\r
\r
- Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0\r
- Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据\r
- Buffer.allocUnsafeSlow(size)\r
- Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）\r
- Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。\r
- Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例\r
- Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例\r
\r
###### 其他：\r
\r
- 写入 Node 缓冲区的语法\`buf.write(string[, offset[, length]][, encoding])\`返回实际写入的大小。\r
- 读取 Node 缓冲区数据的语法 \`buf.toString([encoding[, start[, end]]])\`\r
- Node 缓冲区合并的:Buffer.concat(list[, totalLength]);\r
- buf.compare(otherBuffer);\r
- Node 缓冲区拷到：buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])\r
- 裁剪 buf.slice([start[, end]])\r
- 长度计算：buf.length;\r
\r
## Stream 抽象接口\r
\r
- Stream 有四种流类型：\r
  Readable。Writable。Duplex - 可读可写操作.Transform - 操作被写入数据，然后读出结果。\r
- 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：data,end,error,finish - 所有数据已被写入到底层系统时触发。\r
\r
\`\`\`js\r
var fs = require("fs");\r
var data = "";\r
var readerStream = fs.createReadStream("input.txt"); // 创建可读流\r
readerStream.setEncoding("UTF8");\r
readerStream.on("data", function(chunk) {\r
  data += chunk;\r
});\r
readerStream.on("end", function() {\r
  console.log(data);\r
});\r
readerStream.on("error", function(err) {\r
  console.log(err.stack);\r
});\r
\`\`\`\r
\r
\`\`\`js\r
var fs = require("fs");\r
var data = "菜鸟教程官网地址：www.runoob.com";\r
var writerStream = fs.createWriteStream("output.txt"); // 创建一个可以写入的流\r
writerStream.write(data, "UTF8");\r
writerStream.end(); // 标记文件末尾\r
writerStream.on("finish", function() {\r
  console.log("写入完成。");\r
});\r
writerStream.on("error", function(err) {\r
  console.log(err.stack);\r
});\r
\`\`\`\r
\r
- \`readerStream.pipe(writerStream);\` 复制\r
\r
\`\`\`js\r
var fs = require("fs");\r
var zlib = require("zlib");\r
\r
// 压缩 input.txt 文件为 input.txt.gz\r
fs.createReadStream("input.txt")\r
  .pipe(zlib.createGzip())\r
  .pipe(fs.createWriteStream("input.txt.gz"));\r
// 解压 input.txt.gz 文件为 input.txt\r
fs.createReadStream("input.txt.gz")\r
  .pipe(zlib.createGunzip())\r
  .pipe(fs.createWriteStream("input.txt"));\r
\`\`\`\r
\r
- 一个 Node.js 文件就是一个模块,可以 module.exports = 名，或者 exports.名 = function() {}\r
- HTTP 中 \`require("url").parse(request.url).pathname\`返回路径，.query 返回查询对象。\r
\r
## Node.js 全局对象\r
\r
- \`__filename\` 表示当前正在执行的脚本的全路径和文件名。\r
- \`__dirname\` 表示当前执行脚本所在的目录。\r
- setTimeout, clearnTimeout, setInterval, clearInterval, console, process\r
- process 的事件：exit, beforeExit, uncaughtExeption, Signal(POSIX)\r
\r
\`\`\`js\r
process.on("exit", function(code) {\r
  console.log("退出码为:", code);\r
});\r
\`\`\`\r
\r
- process 的属性: stdout, stderr, stdin, argv(数组), execPath, execPath, env(当前 shell 的环境变量的对象), exitCode, version, versions(包含了 node 的版本和依赖),config, pid, titile, arch, platform, mainModule\r
\r
\`\`\`js\r
process.argv.forEach(function(val, index, array) {\r
  console.log(index + ": " + val);\r
});\r
\`\`\`\r
\r
- process 的方法：abort(), chdir(), cwd(), exit([code]), getgid(), setgid(id), setuid, getuid, getgroups(), setgroups(), kill(pid[signal]), memoryUsage()(返回 node 内存占用对象), nextTick(callback)(一旦当前事件结束，调用)， umask(), uptime()(node 已经运行秒数), hrtime()(返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组。它是相对于过去的任意事件。)\r
\r
## 常用工具：\r
\r
- require('util').inherits(子,父)\r
- util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法。\r
- util.isArray, isRegExp, isDate(), isError, isFunction\r
\r
## 文件系统 require('fs');\r
\r
- fs.readFile('名',function(err,data){})\r
- fs.writeFile(file, data[, options], callback)\r
- options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'\r
\r
### 打开文件\`fs.open(path, flags[, mode], callback)\`\r
\r
- flag 有 r,w,a。文件如果不存在 a 和 w 会创建，但如果加了 x 不存在会失败。如 wx+, a+\r
- mode 默认 0666\r
- callback：回调函数，带有两个参数如：callback(err, fd)。其中 fd 为读取文件用。\r
\r
#### 异步模式下读取文件 fs.read(fd, buffer, offset, length, position, callback)\r
\r
- callback:回调函数，有三个参数 err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。\r
\r
\`\`\`js\r
var fs = require("fs");\r
var buf = new Buffer.alloc(1024);\r
console.log("准备打开已存在的文件！");\r
fs.open("input.txt", "r+", function(err, fd) {\r
  if (err) {\r
    return console.error(err);\r
  }\r
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {\r
    if (err) {\r
      console.log(err);\r
    }\r
    console.log(bytes + "  字节被读取");\r
    if (bytes > 0) {\r
      // 仅输出读取的字节\r
      console.log(buf.slice(0, bytes).toString());\r
    }\r
  });\r
  fs.close(fd, function(err) {\r
    if (err) {\r
      console.log(err);\r
    }\r
    console.log("文件关闭成功");\r
  });\r
});\r
\`\`\`\r
\r
### 获取文件信息: fs.stat(path, callback)\r
\r
\`\`\`\r
fs.stat('/Users/lfs.js', function (err, stats) {\r
    console.log(stats.isFile());         //true\r
})\r
\`\`\`\r
\r
- stats 对象的常用方法：isFile(), isDirectory(), isBlockDevice(), isCharacterDevice(), isSymbolicLink(), isFIFO(), isSocket()\r
\r
### 截取文件:fs.ftruncate(fd, len, callback)\r
\r
### 删除文件:fs.unlink(path, callback)\r
\r
### 创建目录:fs.mkdir(path[, options], callback)\r
\r
- options 为 json 对象是：recursive - 是否以递归的方式创建目录，默认为 false。mode - 设置目录权限，默认为 0777。\r
\r
### 读取目录：fs.readdir(path, callback(err, files))\r
\r
\`\`\`js\r
fs.readdir("/tmp/", function(err, files) {\r
  if (err) {\r
    return console.error(err);\r
  }\r
  files.forEach(function(file) {\r
    console.log(file);\r
  });\r
});\r
\`\`\`\r
\r
### 删除目录 fs.rmdir(path, callback)\r
\r
- fs.rename(oldPath, newPath, callback)\r
- fs.ftruncate(fd/path, len, callback)/ftruncateSync(fd, len)\r
- fs.[f/l]chown(path, uid, gid, callback)/[f/l]chownSync(path, uid, gid)\r
- fs.[f/l]chmod(path, mode, callback)[Sync]\r
- fs.[f]utimes(path/fd, atime, mtime, callback)修改文件时间戳\r
- fs.[un]watchFile(filename[, options], listener)\r
  查看文件的修改。\r
\r
## 网络\r
\r
- \`require('url').parse(req.url, true).query.name;\`取&name=xxx\r
\r
\`\`\`\r
 req.on('end', function () {\r
    // 解析参数\r
    body = require('querystring').parse(body);\r
    // 设置响应头部信息及编码\r
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});\r
    if(body.name && body.url) { // 输出提交的数据\r
        res.write("网站名：" + body.name);\r
        res.write("<br>");\r
        res.write("网站 URL：" + body.url);\r
    } else {  // 输出表单\r
        res.write(postHTML);\r
    }\r
    res.end();\r
  });\r
\`\`\`\r
\r
### require("os")系统操作函数\r
\r
- os.tmpdir(), os.endianness():返回 BE 或 LE。os.hostname(), os.type(), os.platform(), arch(), release(), uptime(), loadavg(), totalmem(), freemem(), cpus(), networkInterfaces()\r
- 属性 os.EOL: 定义了操作系统的行尾符的常量。\r
\r
### require("path")路径操作：\r
\r
- path.normalize(p), join([p][,q]...), .resolve([from ...], to)(定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径),\r
- path.isAbsolute(path), path.dirname(p)\r
  返回路径中代表文件夹的部分, path.basename(p[, ext]), path.extname(p)\r
- path.parse(pathString)与 path.format(pathObject)相反\r
- 属性： path.sep：\`'\\\\' 或 '/'\`, path.delimiter\r
\r
## Node 创建 Web 客户端\r
\r
\`\`\`\r
var http = require('http');\r
// 向服务端发送请求\r
var req = http.request({host: 'localhost',port: '8080',path: '/index.html'}, function(response){\r
   var body = '';\r
   response.on('data', function(data) {      body += data;   });\r
   response.on('end', function() { console.log(body);   });\r
});\r
req.end();\r
\`\`\`\r
\r
## Express 框架 \`cnpm install express --save\`\r
\r
\`\`\`sh\r
$ cnpm install body-parser --save\r
$ cnpm install cookie-parser --save\r
$ cnpm install multer --save\r
\`\`\`\r
\r
Express 基本操作\r
\r
\`\`\`js\r
var express = require("express");\r
var app = express();\r
app.use(express.static("public")); //将public目录映射为静态资源\r
app.get("/", function(req, res) {\r
  //路径可用正则匹配\r
  res.send("Hello World");\r
});\r
app.get("/getJson", function(req, res) {\r
  // 输出 JSON 格式\r
  var response = {\r
    first_name: req.query.first_name,\r
    last_name: req.query.last_name\r
  };\r
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });\r
  res.end(JSON.stringify(response));\r
});\r
app.get("/:id", function(req, res) {\r
  // 那么它也会拦截其他的请求，凶险\r
  console.info(req.params.id);\r
});\r
var server = app.listen(8081, function() {\r
  var host = server.address().address;\r
  var port = server.address().port;\r
  console.log("应用实例，访问地址为 http://%s:%s", host, port);\r
});\r
\`\`\`\r
\r
###### Request 对象\r
\r
- req.app：当 callback 为外部文件时，用 req.app 访问 express 的实例\r
- req.baseUrl：获取路由当前安装的 URL 路径\r
- req.body / req.cookies：获得「请求主体」/ Cookies\r
- req.fresh / req.stale：判断请求是否还「新鲜」\r
- req.hostname / req.ip：获取主机名和 IP 地址\r
- req.originalUrl：获取原始请求 URL\r
- req.params：获取路由的 parameters\r
- req.path：获取请求路径\r
- req.protocol：获取协议类型\r
- req.query：获取 URL 的查询参数串\r
- req.route：获取当前匹配的路由\r
- req.subdomains：获取子域名\r
- req.accepts()：检查可接受的请求的文档类型\r
- req.acceptsCharsets / req.acceptsEncodings /\r
- req.acceptsLanguages：返回指定字符集的第一个可接受字符编码\r
- req.get()：获取指定的 HTTP 请求头\r
- req.is()：判断请求头 Content-Type 的 MIME 类型\r
\r
###### Response 对象\r
\r
- res.app：同 req.app 一样\r
- res.append()：追加指定 HTTP 头\r
- res.set()在 res.append()后将重置之前设置的头\r
- res.cookie(name，value [，option])：设置 Cookie opition: domain / expires / httpOnly / maxAge / path / secure / signed\r
- res.clearCookie()：清除 Cookie\r
- res.download()：传送指定路径的文件\r
- res.get()：返回指定的 HTTP 头\r
- res.json()：传送 JSON 响应\r
- res.jsonp()：传送 JSONP 响应\r
- res.location()：只设置响应的 Location HTTP 头，不设置状态码或者 close response\r
- res.redirect()：设置响应的 Location HTTP 头，并且设置状态码 302\r
- res.render(view,[locals],callback)：渲染一个 view，同时向 callback 传递渲染后的字符串，如果在渲染过程中有错误发生 next(err)将会被自动调用。callback 将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。\r
- res.send()：传送 HTTP 响应\r
- res.sendFile(path [，options][，fn])：传送指定路径的文件 -会自动根据文件 extension 设定 Content-Type\r
- res.set()：设置 HTTP 头，传入 object 可以一次设置多个头\r
- res.status()：设置 HTTP 状态码\r
- res.type()：设置 Content-Type 的 MIME 类型\r
\r
###### 对于 post 表单请求：\r
\r
\`\`\`js\r
var bodyParser = require("body-parser"); //解析post表单字段\r
var multer = require("multer"); //解析上传文件\r
// 创建 application/x-www-form-urlencoded 编码解析\r
var urlencodedParser = bodyParser.urlencoded({ extended: false });\r
app.post("/process_post", urlencodedParser, function(req, res) {\r
  console.log(req.body.first_name);\r
});\r
//也可以\r
app.use(bodyParser.urlencoded({ extended: false }));\r
app.use(multer({ dest: "/tmp/" }).array("image"));\r
app.post("/file_upload", function(req, res) {\r
  console.log(req.files[0]); // 上传的文件信息\r
  var des_file = __dirname + "/" + req.files[0].originalname;\r
  fs.readFile(req.files[0].path, function(err, data) {\r
    fs.writeFile(des_file, data, function(err) {\r
      if (err) {\r
        console.log(err);\r
      }\r
      res.end("Finished upload");\r
    });\r
  });\r
});\r
\`\`\`\r
\r
###### Cookies 读取\r
\r
\`\`\`js\r
var express = require("express");\r
var cookieParser = require("cookie-parser");\r
var util = require("util");\r
var app = express();\r
app.use(cookieParser());\r
app.get("/", function(req, res) {\r
  console.log("Cookies: " + util.inspect(req.cookies));\r
});\r
app.listen(8081);\r
\`\`\`\r
\r
## 多进程 require('child_process');\r
\r
- exec：使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。\r
- spawn :使用指定的命令行参数创建新进程。\r
- fork:是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与 spawn 方法不同的是，fork 会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。\r
\r
#### child_process.exec(command[, options], callback):返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容。\r
\r
###### 关于 options\r
\r
| options 命名 | 含义                                                                                                        |\r
| ------------ | ----------------------------------------------------------------------------------------------------------- |\r
| cwd          | 字符串，子进程的当前工作目录                                                                                |\r
| env          | 对象 环境变量键值对                                                                                         |\r
| encoding     | 字符串，字符编码（默认： 'utf8'）                                                                           |\r
| shell        | 字符串，将要执行命令的 Shell（默认: 在 UNIX 中为/bin/sh                                                     | 在 Windows 中为 cmd.exe | Shell 应当能识别 -c 开关在 UNIX 中，或 /s /c 在 Windows 中。 在 Windows 中，命令行解析应当能兼容 cmd.exe） |\r
| timeout      | 数字，超时时间（默认： 0）                                                                                  |\r
| maxBuffer    | 数字， 在 stdout 或 stderr 中允许存在的最大缓冲（二进制），如果超出那么子进程将会被杀死 （默认: 200\\*1024） |\r
| killSignal   | 字符串，结束信号（默认：'SIGTERM'）                                                                         |\r
| uid          | 数字，设置用户进程的 ID                                                                                     |\r
| gid          | 数字，设置进程组的 ID                                                                                       |\r
\r
\`\`\`js\r
//使用exec\r
const fs = require("fs");\r
const child_process = require("child_process");\r
for (var i = 0; i < 3; i++) {\r
  var workerProcess = child_process.exec("node support.js " + i, function(\r
    error,\r
    stdout,\r
    stderr\r
  ) {\r
    if (error) {\r
      console.log(error.stack);\r
      console.log("Error code: " + error.code);\r
      console.log("Signal received: " + error.signal);\r
    }\r
    console.log("stdout: " + stdout);\r
    console.log("stderr: " + stderr);\r
  });\r
  workerProcess.on("exit", function(code) {\r
    console.log("子进程已退出，退出码 " + code);\r
  });\r
}\r
\`\`\`\r
\r
#### child_process.spawn(command[, args][, options]):方法返回流 (stdout & stderr), 在进程返回大量数据时使用。进程一旦开始执行时 spawn() 就开始接收响应。\r
\r
- command： 将要运行的命令,\r
- args： Array 字符串参数数组\r
\r
| options  | 意义                                   |\r
| -------- | -------------------------------------- |\r
| cwd      | String 子进程的当前工作目录            |\r
| env      | Object 环境变量键值对                  |\r
| stdio    | Array                                  | String 子进程的 stdio 配置 |\r
| detached | Boolean 这个子进程将会变成进程组的领导 |\r
| uid      | Number 设置用户进程的 ID               |\r
| gid      | Number 设置进程组的 ID                 |\r
\r
#### child_process.fork(modulePath[, args][, options])：返回的对象除了拥有 ChildProcess 实例的所有方法，还有一个内建的通信信道。\r
\r
- modulePath： String，将要在子进程中运行的模块\r
- args： Array 字符串参数数组\r
\r
| option   | 意义                                                                                                                      |\r
| -------- | ------------------------------------------------------------------------------------------------------------------------- |\r
| cwd      | String 子进程的当前工作目录                                                                                               |\r
| env      | Object 环境变量键值对                                                                                                     |\r
| execPath | String 创建子进程的可执行文件                                                                                             |\r
| execArgv | Array 子进程的可执行文件的字符串参数数组（默认： process.execArgv）                                                       |\r
| silent   | Boolean 如果为 true，子进程的 stdin，stdout 和 stderr 将会被关联至父进程，否则，它们将会从父进程中继承。（默认为：false） |\r
| uid      | Number 设置用户进程的 ID                                                                                                  |\r
| gid      | Number 设置进程组的 ID                                                                                                    |\r
\r
\`\`\`js\r
const fs = require("fs");\r
const child_process = require("child_process");\r
\r
for (var i = 0; i < 3; i++) {\r
  var worker_process = child_process.fork("support.js", [i]);\r
\r
  worker_process.on("close", function(code) {\r
    console.log("子进程已退出，退出码 " + code);\r
  });\r
}\r
\`\`\`\r
\r
## MySQL require("mysql")\r
\r
- cnpm install mysql\r
\r
\`\`\`js\r
var mysql = require("mysql");\r
var connection = mysql.createConnection({\r
  host: "localhost",\r
  user: "root",\r
  password: "123456",\r
  database: "test"\r
});\r
connection.connect();\r
connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {\r
  if (error) throw error;\r
  console.log("The solution is: ", results[0].solution);\r
});\r
//也可以用带参con.query(sql, sqlParamsArray, function(err,rs){})\r
\`\`\`\r
\r
连接参数可以有：port(3306), charset("UTF8_GENERAL_CI"), localAddress(TCP 连接时)， socketPath, timezone, connectTtimout, stringifyObject(是否序列号对象),\r
typeCast(是否转化为本地 js 类型,true), queryFormat(格式化)，\r
supportBigNumbers（数据库支持 bigint 或 decimal 类型列时设为 ture）,\r
dateStrings(强制 timestamp,datetime,data 类型以字符串类型返回)。\r
\r
- 对于非查询，可以 rs.affectedRows 看改了几行。\r
-\r
`,z=`# Web RESTful\r
\r
1. 主要依赖\r
\r
\`\`\`xml\r
<dependency>\r
        <groupId>org.springframework.boot</groupId>\r
        <artifactId>spring-boot-starter-web</artifactId>\r
 </dependency>\r
\`\`\`\r
\r
2. 最简 Controller\r
\r
\`\`\`js\r
@RestController\r
public class HelloWorldController {\r
    @RequestMapping("/hello")\r
    public String index() {\r
        return "Hello World";\r
    }\r
}\r
\`\`\`\r
\r
3. 测试\r
\r
\`\`\`js\r
@RunWith(SpringJUnit4ClassRunner.class)\r
@SpringApplicationConfiguration(classes = MockServletContext.class)\r
@WebAppConfiguration\r
public class HelloWorldControlerTests {\r
    private MockMvc mvc;\r
    @Before\r
    public void setUp() throws Exception {\r
        mvc = MockMvcBuilders.standaloneSetup(new HelloWorldController()).build();\r
    }\r
    @Test\r
    public void getHello() throws Exception {\r
    mvc.perform(MockMvcRequestBuilders.get("/hello").accept(MediaType.APPLICATION_JSON))\r
                .andExpect(MockMvcResultMatchers.status().isOk())\r
                .andDo(MockMvcResultHandlers.print())\r
                .andReturn();\r
    }\r
}\r
\`\`\`\r
\r
4. 我们常常在项目中会使用 filters 用于录调用日志、排除有 XSS 威胁的字符、执行权限验证等等。Spring Boot 自动添加了 OrderedCharacterEncodingFilter 和 HiddenHttpMethodFilter，并且我们可以自定义 Filter。两个步骤：\r
\r
- 实现 Filter 接口，实现 Filter 方法\r
- 添加\`@Configuration\` 注解，将自定义 Filter 加入过滤链\r
\r
\`\`\`js\r
@Configuration\r
public class WebConfiguration {\r
    @Bean\r
    public RemoteIpFilter remoteIpFilter() {\r
        return new RemoteIpFilter(); //系统自带\r
    }\r
    @Bean\r
    public FilterRegistrationBean testFilterRegistration() {\r
        FilterRegistrationBean registration = new FilterRegistrationBean();\r
        registration.setFilter(new MyFilter());\r
        registration.addUrlPatterns("/*");\r
        registration.addInitParameter("paramName", "paramValue");\r
        registration.setName("MyFilter");\r
        registration.setOrder(1);\r
        return registration;\r
    }\r
    public class MyFilter implements Filter {\r
		@Override\r
		public void destroy() {			// TODO Auto-generated method stub		}\r
		@Override\r
		public void doFilter(ServletRequest srequest, ServletResponse sresponse, FilterChain filterChain)				throws IOException, ServletException {\r
			// TODO Auto-generated method stub\r
			HttpServletRequest request = (HttpServletRequest) srequest;\r
			System.out.println("this is MyFilter,url :"+request.getRequestURI());\r
			filterChain.doFilter(srequest, sresponse);\r
		}\r
		@Override\r
		public void init(FilterConfig arg0) throws ServletException {// TODO }\r
    }\r
}\r
\`\`\`\r
\r
配置文件在 application.properties 中，引用为：\`@Value("\${com.neo.title}")\`\r
\r
# Web MVC\r
\r
1. SpringMVC 的定制配置需要我们的配置类继承一个 WebMvcConfigurerAdapter 类，并在此类使用＠EnableWebMvc 注解，来开启对 SpringMVC 的配置支持，这样我们就可以重写这个类的方法，完成我们的常用配置。\r
2. ＠EnableWebMvc 注解会开启一些默认配置，如一些 ViewResolver 或者 MessageConverter 等\r
\r
- ①WebApplicationlnitializer 是 Spring 提供用来配置 Servlet3.0 ＋配置的接口，从而实现了替代 web.xml 的位置。实现此接口将会自动被 SpringServletContainerlnitializer（用来启动 Serviet3.0 容器）获取到。\r
- ② 新建 WebApplicationContext，注册配置类，并将其和当前 servletContext 关联。\r
- ③ 注册 SpringMVC 的 DispatcherServlet\r
- 在声明普通 Bean 的时候，使用＠Component、＠Service、＠Repository 和@Controller 是等同的，因为＠Service、＠Repository、＠Controller 都组合了＠Compoment 元注解；但在 SpringMVC 声明控制器 Bean 的时候，只能使用＠Controller\r
\r
3.  @RestController 下面的产生 xml 和产生 json 的方法：\r
\r
\`\`\`js\r
@RequestMapping(value = "/getjson",\r
			produces={"application/json;charset=UTF-8"})\r
@RequestMapping(value = "/getxml",\r
			produces={"application/xml;charset=UTF-8"})\r
\`\`\`\r
\r
- 直接返回对象， 对象会自动转换成 json 或 xml\r
\r
4.  在配置类中指定静态资源如 img, js：\r
\r
\`\`\`js\r
@Override\r
	public void addResourceHandlers(ResourceHandlerRegistry registry) {\r
		registry.addResourceHandler("/assets/**").addResourceLocations(\r
				"classpath:/assets/");\r
	}\r
\`\`\`\r
\r
5. Thymeleaf [参考](https://www.tianmaying.com/tutorial/using-thymeleaf)\r
\r
\`\`\`html\r
<a th:href="@{http://www.thymeleaf.org}">Thymeleaf</a>\r
<a th:href="@{/login}" th:unless="\${session.user" !="null}">Login</a>\r
<tr th:each="prod : \${prods}">\r
  <td th:text="\${prod.name}">Onions</td>\r
  <td th:text="\${prod.price}">2.41</td>\r
  <td th:text="\${prod.inStock}? #{true} : #{false}">yes</td>\r
</tr>\r
\`\`\`\r
\r
- 静态页加入：\`<html xmlns:th="http://wwww.thymeleaf.org">\`\r
- 使用\`<span th:text="\${singlePerson.name}"></span>\`访问 model 中的 singlePerson 的 name 属性。注意：需要处理的动态内容需要加上“th：”前缀。\r
- 使用 th:each 来做循环迭代·\`th:each="person:\${people}"\`，person 作为迭代元素来使用，然后像上面一样访问迭代元素中的属性。\r
  \`<div th:if="{not #lists.isEmpty(people)}"></div>\`\r
- 根据默认原则，脚本样式、图片等静态文件应放置在\`src/main/resources/static\`下,页面应放置在\`src/main/resources/templates\`下。在\`src/main/resources/templates\`下新建 index.html\r
  脚本引入方式：\`<script th:src="@{jquery-...js}" type="text/javascript"/>\` \`@{}\`会自动找 static 目录下的资源。\r
\r
6. 拦截器配置\r
\r
- 通过＠ControllerAdvice，我们可以将对于控制器的全局配置放置在同一个位置，注解了@Controller 的类的方法可使用＠ExceptionHandler、＠InitBinder、＠ModelAttribute 注解到方法上，这对所有注解了＠RequestMapping 的控制器内的方法有效。\r
- @ExceptionHandler：用于全局处理控制器里的异常。\r
- @InitBinder:用来设置 WebDataBinder,WebDataBinder 用来绑定前台请求参数到 Model 中。\r
- @ModelAttribute:@ModelAttribute 本来的作用是绑定键值对到 model 里，此处让全局的＠RequestMapping 都能获得在此处设置的 KV 对。\r
\r
# spring data\r
\r
1. 依赖\r
\r
\`\`\`xml\r
<dependency>\r
        <groupId>org.springframework.boot</groupId>\r
        <artifactId>spring-boot-starter-data-jpa</artifactId>\r
    </dependency>\r
     <dependency>\r
        <groupId>mysql</groupId>\r
        <artifactId>mysql-connector-java</artifactId>\r
    </dependency>\r
\`\`\`\r
\r
2. 配置文件\r
\r
\`\`\`properties\r
spring.datasource.url=jdbc:mysql://localhost:3306/test\r
spring.datasource.username=root\r
spring.datasource.password=root\r
spring.datasource.driver-class-name=com.mysql.jdbc.Driver\r
# spring.jpa.properties.hibernate.hbm2ddl.auto=update\r
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect\r
spring.jpa.show-sql= true\r
spring.jackson.serialization.indent_output=true #美化输出SQL\r
\`\`\`\r
\r
其中 hibernate.hbm2ddl.auto 参数的作用主要用于：自动创建|更新|验证数据库表结构,有四个值：\r
\r
- create： 每次加载 hibernate 时都会删除上一次的生成的表，然后根据你的 model 类再重新来生成新表，哪怕两次没有任何改变也要这样执行，这就是导致数据库表数据丢失的一个重要原因。\r
- create-drop ：每次加载 hibernate 时根据 model 类生成表，但是 sessionFactory 一关闭,表就自动删除。\r
- update：最常用的属性，第一次加载 hibernate 时根据 model 类会自动建立起表的结构（前提是先建立好数据库），以后加载 hibernate 时根据 model 类自动更新表结构，即使表结构改变了但表中的行仍然存在不会删除以前的行。要注意的是当部署到服务器后，表结构是不会被马上建立起来的，是要等 应用第一次运行起来后才会。\r
- validate ：每次加载 hibernate 时，验证创建数据库表结构，只会和数据库中的表进行比较，不会创建新表，但是会插入新值。\r
\r
3. 实体类\r
\r
\`\`\`js\r
@Entity\r
public class User implements Serializable {\r
	private static final long serialVersionUID = 1L;\r
	@Id\r
	@GeneratedValue\r
	private Long id;\r
	@Column(nullable = false, unique = true)\r
	private String userName;\r
	//省略getter settet方法、构造方法\r
}\r
\`\`\`\r
\r
4. DAO 只要继承\`JpaRepository\`类就可以，几乎可以不用写方法，还有一个特别有尿性的功能非常赞，就是可以根据方法名来自动的生产 SQL，比如\`findByUserName\` 会自动生产一个以 userName 为参数的查询方法，比如 \`findAlll\` 自动会查询表里面的所有数据，比如自动分页等等。。\r
\r
- Entity 中不映射成列的字段得加\`@Transient\` 注解，不加注解也会映射成列\r
\r
\`\`\`js\r
public interface UserRepository extends JpaRepository<User, Long> {\r
    User findByUserName(String userName);\r
    User findByUserNameOrEmail(String username, String email);\r
}\r
\`\`\`\r
\r
- 方法名关键字自动生成：\r
  其中 findBy 可以用 find、read、readBy、 query、 queryBy、get、getBy 来代替。\r
\r
| 关键字           | 查询关键字                                              | 同功能 JPQL                                |\r
| ---------------- | ------------------------------------------------------- | ------------------------------------------ |\r
| And              | findByLastnameAndFirstname                              | where x.lastname = 1 and x.firstname = ?2  |\r
| Or               | findByLastnameOrFirstname                               | where x.lastname = ?1 or x.firstname == ?2 |\r
| ls,Equals        | findByFirstname,findByFirstnamels,findByFristnameEquals | where x.firstname = 1?                     |\r
| Between          | findByStartDateBetween                                  | where x.startDate between 1? and ?2        |\r
| LessThan         | findByAge Less Than                                     | where x.age < ?1                           |\r
| LessThanEqual    | findByAgeLessThanEqual                                  | where x.age <= ?1                          |\r
| GreaterThan      | findByAgeGreaterThan                                    | where x.age > ?1                           |\r
| GreaterThanEqual | findByAgeGreaterThanEqual                               | where x.age >= ?1                          |\r
| After            | findByStartDateAfter                                    | where x.startDate > ? 1                    |\r
| Before           | findByStartDateBefore                                   | where x.startDate < ?1                     |\r
| IsNull           | findByAgelsNull                                         | where x.age is null                        |\r
| IsNotNull        | findByAge(ls)NotNull                                    | where x.age not null                       |\r
| Like             | findByFirstnameLike                                     | where x.firstname like ?1                  |\r
| NotLike          | findByFirstnameN otLike                                 | where x.firstname not like ?1              |\r
| Starting With    | findByFirstnameStartingWith                             | where x.firstname like ?1 （参数前面加%）  |\r
| Ending With      | findByFirstnameEndingWith                               | where x.firstname like ?1 （参数后面加%）  |\r
| Containing       | findByFirstnameContaining                               | where x.firstname like ?1 （参数两边加%）  |\r
| Order By         | findByAgeOrderByLastnameDesc                            | where x.age = ?1 order by x.lastname desc  |\r
| Not              | findByLastnameNot                                       | where x.lastname <> ? 1                    |\r
| In               | findByAgeln(Collection<Age> ages)                       | where x.age in ?1                          |\r
| No tin           | findByAgeNotln(Collection<Age> age)                     | where x.age not in ?1                      |\r
| TRUE             | findByActive True()                                     | where x.active == true                     |\r
| FALSE            | findByActiveFalse( )                                    | where x.active == false                    |\r
| lgnoreCase       | findByFirstnamelgnoreCase                               | where UPPER(x.firstname)=UPPER(?1)         |\r
\r
- 结果数量是用 top 和自 first 关键字来实现限制的， 例如：\`List<Person> findFirst10ByName(String name); findTop30ByName\`\r
- 如果要重写默认的关键字对应的 sql，用 NamedQuery。如：\r
\r
\`\`\`js\r
@Entity //1\r
@NamedQuery(name = "Person.findByName",\r
query = "select p from Person p where p.name=?1")\r
public class Person {private String name;}\r
public interface PersonRepository extends JpaRepository<Person, Long> {\r
List<Person> findByName(String name); //这里就用的NamedQuery而不是方法名查询。\r
}\r
\`\`\`\r
\r
- 用＠Query 注解在接口的方法上手写 sql 实现查询，如：\r
\r
\`\`\`js\r
@Query("select p from Person p where p.name= ?1)\r
List<Person> findByName(String name);\r
//或者：\r
@Query("select p from Person p where p.name=  :name)\r
List<Person> findByName(@Param("name") String name);\r
\`\`\`\r
\r
其中更新的时候加上@Modifying 如：\r
\r
\`\`\`js\r
@Modifying@Transactional@Query("update person p set p.name= ?1")\r
int setName(String name); //返回值为更新的条数\r
\`\`\`\r
\r
5. 排序与分页\r
\r
\`\`\`js\r
//在repository接口中定义：\r
List<Person> findByName(String name, Sort sort);\r
Page<Person> findByName(String name, Pageable pageable);\r
//使用的时候：\r
List<Person> people=repository.findByName("xx", new Sort(Direction.ASC, "age"));\r
Page<Person> p2=repository.findByName("xx", new PageRequest(0,10));\r
\`\`\`\r
\r
- 其中 Page 接口’可以获得当前页面的记录、总页数、总记录数、是否有上一页或下一页等。\r
  且 SpringBoot 自动开启了对 SpringDataJPA 的支持，即我们无须在配置类显式声明@EnableJpaRepositories\r
- 我们在 SpringBoot 下使用 SpringDataJPA，在项目的 Maven 依赖里添加 spring-boot-stater-data-jpa，然后只需定义 DataSource、实体类和数据访问层，并在需要使用数据访问的地方注入数据访问层的 Bean 即可，无须任何额外自己置。\r
\r
- @Id @GeneratedValue 注解默认使用主键生成方式为自增，hibernate 会为我们自动生成一个名为 HIBERNATE_SEQUENCE 的序列\r
- @Column 是用来映射属性名和字段名，不注解的时候 hibernate 会自动根据属性名生成数据表的字段名。如属性名 name 映射成字版 NAME；多字母属性如 testName 会自动映射为 TEST_NAME。表名射规则也如此。\r
  对于 OracleDB 示例:\r
\r
\`\`\`js\r
@Entity\r
@Table(name="T_MGMT")\r
public class MgmtEntity {\r
    @Id\r
    @SequenceGenerator(name="T_MGMTFEE_ID_GENERATOR", sequenceName="SEQ_MGMT", allocationSize = 1)\r
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="T_MGMTFEE_ID_GENERATOR")\r
    private Long id;\r
    @Column(name="MONTH")\r
    private Date month;\r
}\r
\`\`\`\r
\r
- 批量设置 saveAll：\r
\r
\`\`\`properties\r
spring.jpa.properties.hibernate.jdbc.batch_size=500\r
spring.jpa.properties.hibernate.jdbc.batch_versioned_data=true\r
spring.jpa.properties.hibernate.order_inserts=true\r
spring.jpa.properties.hibernate.order_updates =true\r
\`\`\`\r
\r
# Spring data rest\r
\r
1. 增加依赖 spring-boot-starter-data-jpa，spring-boot-starter-data-rest\r
\r
\`\`\`js\r
@RepositoryRestResource(path = "people")\r
public interface PersonRepository extends JpaRepository<Person, Long> {\r
	@RestResource(path = "nameStartsWith", rel = "nameStartsWith")\r
	Person findByNameStartsWith(@Param("name")String name);\r
}\r
\`\`\`\r
\r
2. 对于实体中如果某个属性不想被显示则加： @JsonIgnore\r
   此时我们不希望 DELETE 的提交方式生效，可以添加@RestResource 注解，并设置 exported=false，即可屏蔽 Spring Data REST 的自动化方法\r
\r
\`\`\`\r
http://localhost:8080/people/search/nameStartsWith?name=汪 #查找以汪打头的人\r
http://localhost:8080/persons/?page=1&size=2    #自动分页\r
localhost:8080/persons/?sort = age,desc   #排序\r
127.0.0.1:8080/user?page=1&size=3&sort=age,desc  #分页加排序\r
\`\`\`\r
\r
rest 的访问地址前缀配置：如在 appliacation.properties 文件中：\`spring.data.rest.base-path=/api\`\r
对于非 spring boot 环境：\r
依赖包中加入：spring-data-rest-webmvc\r
Spring Data REST 的配置定义在 RepositoryRestMvcConfiguration 类中，其中定义了 Spring Data REST 的默认配置，在 Spring MVC 中可以采用继承或者使用@import 导入的方式导入 Spring Data REST 的默认配置，如果需要自定义配置，则需要实现 RepositoryRestConfigurer 接口 或者继承 RepositoryRestConfigurerAdapter 然后重写你自己所需要的方法即可\r
\r
3. 事务\r
   在配置类中注明＠EnableTransactionManagement，Spring 容器会自动扫描注解＠Transactional 的方法和类，但在 SpringBoot 中，无须显示开启使用＠EnableTransactionManagement 注解\r
   SpringDataJPA 对所有的默认方法都开启了事务支持，且查询类事务默认启用 readOnly=true 属性。\r
\r
4. 测试\r
\r
\`\`\`js\r
@RunWith(SpringJUnit4ClassRunner.class)\r
@SpringApplicationConfiguration(Application.class)\r
public class UserRepositoryTests {\r
	@Autowired\r
	private UserRepository userRepository;\r
	@Test\r
	public void test() throws Exception {\r
		Date date = new Date();\r
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG);\r
		String formattedDate = dateFormat.format(date);\r
		userRepository.save(new User("aa1", "aa@126.com", "aa", "aa123456",formattedDate));\r
		userRepository.save(new User("bb2", "bb@126.com", "bb", "bb123456",formattedDate));\r
		userRepository.save(new User("cc3", "cc@126.com", "cc", "cc123456",formattedDate));\r
		Assert.assertEquals(9, userRepository.findAll().size());\r
		Assert.assertEquals("bb", userRepository.findByUserNameOrEmail("bb", "cc@126.com").getNickName());\r
		userRepository.delete(userRepository.findByUserName("aa1"));\r
	}\r
}\r
\`\`\`\r
\r
# 一些 Aware 接口：\r
\r
- BeanNameAware:作用：让 Bean 获取自己在 BeanFactory 配置中的名字\r
- ApplicationContextAware\r
- MessageSourceAware\r
- ApplicationEventPublisherAware\r
- ResourceLoaderAware\r
- SpringAware 的目的是为了让 Bean 获得 Spring 容器的服务。因为 ApplicationContext 接口集成了 MessageSource 接口、ApplicationEventPublisher 接口和 ResourceLoader 接口，所以 Bean 继承 ApplicationContextAware 可以获得 Spring 容器的所有服务，但原则上我们还是用到什么接口，就实现什么接口。\r
\r
# 多线程\r
\r
1. 使用 ThreadPoolTaskExecutor 可实现一个基于线程池的 TaskExecutor。而实际开发中任务一般是非阻碍的，即异步的，所以我们要在配置类中通过\`@EnableAsync\`开启对异步任务的支持，并通过在实际执行的 Bean 的方法中使用\`@Async\`注解来声明其是一个异步任务。\r
2. 一个接口按条件返回实现类：\r
   在 Config 类中写 2 个返回该接口的方法,这 2 个方法加上@Bean@Conditional("实现 Condition 接口的类")，在方法体中返回具体实现类。\r
\r
- ① 利用@EnableAsync 注解开启异步任务支持。\r
- ② 配置类实现 AsyncConfigurer 接口并重写 getAsyncExecutor 方法，并返回一个 ThreadPoolTaskExecutor，这样我们就获得了一个基于线程池 TaskExecutor\r
\r
\`\`\`js\r
@Configuration\r
@ComponentScan("com.wisely.highlight_spring4.ch3.taskexecutor")\r
@EnableAsync //1\r
public class TaskExecutorConfig implements AsyncConfigurer{//2\r
	@Override\r
	public Executor getAsyncExecutor() {//2\r
		 ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();\r
	        taskExecutor.setCorePoolSize(5);\r
	        taskExecutor.setMaxPoolSize(10);\r
	        taskExecutor.setQueueCapacity(25);\r
	        taskExecutor.initialize();\r
	        return taskExecutor;\r
	}\r
	@Override\r
	public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\r
		return null;\r
	}\r
}\r
\`\`\`\r
\r
- 通过＠Async 注解表明该方法是个异步方法，如果注解在类级别，则表明该类所有的方法都是异步方法，而这里的方法自动被注入使用 ThreadPoolTaskExecutor 作为 TaskExecutor\r
- 通过＠EnableScheduling 注解开启对计划任务的支持\r
- 通过＠Scheduled 支持多种类型的计划任务，包含 cron,fixDelay、fixRate 等\r
\r
# 配置\r
\r
### 基本\r
\r
SpringBoot 提倡零配置，即无 xml 配置，但是在实际项目中，可能有一些特殊要求你必须使用 xml 配置，这时我们可以通过 Spring 提供的＠lmportResource 来加载 xml 配置，例如：\r
\`@lmportResource({"classpath:ss-context.xml","..."})\`\r
\r
- 可采用命令行配置：\`java -jar xx.jar --server.port=9090\`\r
- \`@SpringBootApplication\`是 Spring Boot 项目的核心注解，主要目的是开启自动配置，在加上其注解的类的 main 方法中使用\`SpringApplication.run(类名.class,args)\`，启动 SpringBoot 应用项目\r
- @PropertySource\r
  在常规 Spring 环境下，注入 properties 文件里的写值的方式，通过@PropertySource 指明 properties 文件的位置，然后通过＠Value 注入值。在 SpringBoot 中，我们只需在 application.properties 定义属性，直接使用＠Value 注入即可\r
- SpringBoot 还提供了基于类型安全的配置方式，通过＠ConfigurationProperties 将 properties 属性和一个 Bean 及其属性关联，从而实现类型安全的配置。通过 prefix 属性指定 properties 的自己置的前缀，通过 locations 指定 properties 文件的位置。不用重复写@Value 了\r
- 默认情况下，SpringBoot 使用 Logback 作为日志框架：logging.file=D:/log.log，logging.level.包名=级别\r
- Profile 是 Spring 用来针对不同的环境对不同的配置提供支持的，全局 Profile 配置使用 application-{profile}.properties（如 application-prod.properties）。然后通过在 app1ication.properties 中设置 spring.profiles.active=prod 来指定活动的 Profile。\r
\r
### 容器\r
\r
1. 关于 Tomcat 的所有属性都在 org.springframework.boot.autoconfigure.web.ServerProperties 的配置类中做了定义，我们只需在 application.properties 配置属性做配置即可。通用的 Servlet 容器配置都以“server”作为前缀，而 Tomcat 特有配置都以“server.tomcat＂作为前缀。下面举一些常用的例子。\r
   配置 Serviet 容器：\`server.port=\`＃配置程序端口，默认为 8080\r
   \`server.session-timeout＝\`＃用户会话 session 过期时间，以秒为单位\r
   \`server.context-path=\`#默认为/\r
2. 配置 Tomcat:\r
   \`server.tomcat.uri-encoding=\`＃配置 T9mcat 编码，默认为 UTF-8\r
\r
- 如果想通过代码方式配置 servlet 窗口，可注册一个实现 EmbeddedServletContainerCustomizer 接口的 bean 并覆盖其 customize，若想直接配置 Tomcat, Jetty, Undertow 则可直接定义 TomcatEmbeddedServletContainerFactory, JettyEmbeddedServletContainerFactory, UndertowEmbeddedServletContainerFactory\r
\r
3. Spring Boot 默认使用 Tomcat 作为内以 Servlet 容器,如果要使用 Jetty 或者 Undertow 为 sevvlet 容器，只需修改 spring-boot-starter 的 web 的依赖即可, 在 pom.xml 中，将 spring-boot-starter-web 的依赖由 spring-boot-starter-tomcat 替换为 spring-boot-starter-Jetty\r
\r
### SSL\r
\r
1. 用 Keytool 生成证书：\`keytool -genkey -alias\`\r
2. 2. tomcat 会生成一个.keystore 文件即证书，复制到项目根目录，然后在 application.preperties 中加入：\r
\r
\`\`\`properties\r
server.port=8843\r
server.ssl.key-store=.keystor\r
server.ssl.key-password=密码\r
server.ssl.keyStoreType=JKS\r
server.ssl.keyAlias=tomcat\r
\`\`\`\r
\r
地址栏输入的是 http，但是会自动转向到 https\r
\r
\`\`\`js\r
@Bean\r
   public EmbeddedServletContainerFactory servletContainer() {\r
     TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory() {\r
         @Override\r
         protected void postProcessContext(Context context) {\r
           SecurityConstraint securityConstraint = new SecurityConstraint();\r
           securityConstraint.setUserConstraint("CONFIDENTIAL");\r
           SecurityCollection collection = new SecurityCollection();\r
           collection.addPattern("/*");\r
           securityConstraint.addCollection(collection);\r
           context.addConstraint(securityConstraint);\r
         }\r
       };\r
     tomcat.addAdditionalTomcatConnectors(httpConnector());\r
     return tomcat;\r
   }\r
   @Bean\r
   public Connector httpConnector() {\r
     Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");\r
     connector.setScheme("http");\r
     connector.setPort(8080);\r
     connector.setSecure(false);\r
     connector.setRedirectPort(443);\r
     return connector;\r
   }\r
\`\`\`\r
\r
- 若需要设置自己的 Favicon，则只需将自己的 favicon.ico（文件名不能变动）文件放罩在类路径根目录、类路径 META-INF/resources／下、类路径 resources／下、类路径 static／下或类路径 public／下\r
\r
# WebSocket\r
\r
配置 WebSocket，需要在配置类上使用＠EnableWebSocketMessageBroker 开启 WebSocket 支持，并通过继承 AbstractWebSocketMessageBrokerConfigurer 类，重写其方法来配置 Websocket\r
\r
# 缓存\r
\r
1. 在配置类或主类中@EnableCaching\r
2. 在配置文件中\r
\r
\`\`\`properties\r
spring.cache.type= #比如redis, simple,ehcache...\r
spring.cache.cache-names= #程序启动时创建缓存名称\r
spring.cache.ehcache.config= #Ehcache的配置文件\r
\`\`\`\r
\r
＠CachePut 缓存新增的或更新的数据到缓存\r
＠CacheEvict 从缓存中删除数据\r
＠Cacheable 缓存 key 为 person 的 id 数据到缓存 people 中\r
\r
\`\`\`js\r
@Cacheable(value = "people", key = "#person.id")//3 SPEL表达式\r
	public Person findOne(Person person) {\r
		Person p = personRepository.findOne(person.getId());\r
		System.out.println("为id、key为:"+p.getId()+"数据做了缓存");\r
		return p;\r
	}\r
\`\`\`\r
\r
如果要用 EHCache:\r
\`<groupId>net.sf.ehcache</groupId> <artifactId>ehcache</artifactId>\`\r
EhCache 所需的配置文件 ehcache.xml 只需放在类路径下，SpringBoot 会自动扫描\r
内容为：\r
\r
\`\`\`xml\r
<?xml version="1.0" encoding="UTF-8"?><ehcache><cache name="people" maxElementsInMemory="1000" /></ehcache>\r
\`\`\`\r
\r
SpringBoot 会给找们自动配置 EhCachcCacheManager 的 Bean\r
\r
3. MongoDB\r
\r
- 建 MongoTemplate, MongoDBFactory 并且 Enable\r
- 对于 boot:在配置文件中\`spring.data.mongodb.(host/port/uri/database/username/password...)\`\r
- 自动 EnableMongoRepositiories，依赖要加入 spring-boot-starter-mongodb\r
- 在注解上@Document 来代替@Entity，用@Field 代替 Column\r
\r
\`\`\`js\r
public interface PersonRepository extends MongoRepository<Person, String> {\r
	 Person findByName(String name);\r
	 @Query("{'age': ?0}")\r
	 List<Person> withQueryFindByAge(Integer age);\r
}\r
\`\`\`\r
\r
4. Redis\r
\r
- 建 RedisTemplate 和 RedisConnectionFactory\r
- SpringDataRedis 为我们提供了 RedisTemplate 和 StringRedisTemplate 两个模板来进行数据操作，其中，StringRedisTemplate 只针对键值都是字符型的数据进行操作。它们有如下操作方法：\r
  opsForValue()操作只有简单属性的数据，opsForList()操作含有 list 的数据，opsForSet()操作含有 set 的数据，opsForZSet()操作含有 ZSet（有序的 set）的数据，opsForHash()操作含有 hash 的数据\r
- 在 Boot 中\r
  在配置文件中\`spring.data.redis.(host/port/uri/database/username/password...)\`\r
- 依赖：spring-boot-starter-redis\r
- domain 类需要 implements Serializable,并有一个空构造\r
  SpringBoot 会给找们自动配置 RedisCacheManager 的以及 RedisTemplate 的 Bean\r
\r
# Spring Security\r
\r
1. SpringSecurity 的配置和 Spring MVC 的配置类似，只需在一个配置类上注解@EnableWebSecurity，并让这个类继承 WebSecurityConfigurerAdapter 即可，我们可以通过重写 configure 方法来配置相关的安全配置。\r
2. 用户认证需要重写：\`protected void configure(AuthenticationManagerBuilder auth)\`\r
3. 内存用户时方法体\r
\r
\`\`\`js\r
auth.inMemoryAuthentication().withUser("don").password("don").roles("ROLE_ADMIN").and().\r
.withUser("wy").password("wy").roles("ROLE_USER");\r
\`\`\`\r
\r
4. JDBC 库中用户：\r
\r
\`\`\`js\r
@Autowired DataSource dataSource;\r
//在方法体中：\r
auth.jdbcAuthentication().dataSource(dataSource).usersByUserNameQuery("select username,password,true from myusers where username=?").authoritiesByUserNameQuery("select username, role from roles where username=?");\r
\`\`\`\r
\r
5. 通用用户（比如 JPA, mongo）需要实现 UserDetailSevice 并注册到方法体中\r
\r
\`\`\`js\r
public class CustomUserService implements UserDetailsService {\r
	@Autowired\r
	SysUserRepository userRepository;//此为查询SysUser表的JPA接口\r
	@Override\r
	public UserDetails loadUserByUsername(String username) { //2\r
		SysUser user = userRepository.findByUsername(username);\r
		if(user == null){\r
			throw new UsernameNotFoundException("用户名不存在");\r
		}\r
		List<GrantedAuthority> authorities=new ArrayList<>();\r
		authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"))\r
		return new User(user.getName(), user.getPwd(), authorities); //3\r
	}\r
}\r
//在配置的文件中：\r
@Bean\r
UserDetailsService cus(){return new CustomUserService(); }\r
//在Override的configure方法中：\r
auth.userDetailsService(cus());\r
\`\`\`\r
\r
6. 请求授权是重写\`procted void configure(HttpSecurity http)\`\r
\r
- Spring Security 使用以下匹配器来匹配请求路径： antMatchers：使用 Ant 风格的路径匹配。 regexMatchers：使用正则表达式匹配路径。\r
- 匹配路径后，安全处理的方法为：\r
\r
| 方法                         | 说明                                            |\r
| ---------------------------- | ----------------------------------------------- |\r
| access(spel)                 | spEL 表达式为 true 时可访问                     |\r
| anonymous()                  | 匿名可访问                                      |\r
| denyAll()                    | 用户不能访问                                    |\r
| fullyAuthenticated()         | 用户完全认证可访问（非 remember me 下自动登录） |\r
| hasAnyAuthority(String ... ) | 如果用户有参数， 则其中任一权限可访问           |\r
| hasAnyRole(String ... )      | 如果用户有参数， 则其中任一角色可访问           |\r
| hasAuthority(String )        | 如果用户有参数，则其权限可访问                  |\r
| haslpAddress(String )        | 如果用户来自参数中的 IP 则可访问                |\r
| hasRole(String)              | 若用户有参数中的角色可访问                      |\r
| permitAll()                  | 用户可任意访问                                  |\r
| rememberMe()                 | 允许通过 rememberMe 登录的用户访问              |\r
| authenticated()              | 用户登录后可访问                                |\r
\r
使用方法如：\r
\r
\`\`\`js\r
http\r
  .authorizeRequests() //通过authorizeRequests方法来开始请求权限配置\r
  .antMatchers("/admin/**")\r
  .hasRole("ROLE_ADMIN") //只有拥有ROLEADMIN角色的用户可以访问\r
  .antMatchers("/user/**")\r
  .hasAnyRole("ROLE_ADMIN", "ROLE_USER")\r
  .anyRequest()\r
  .authenticated(); //其余所有的请求都需要认证后（登录后）才可访问。\r
\`\`\`\r
\r
如果要自己定制页面：\r
\r
\`\`\`js\r
http\r
  .formLogin()\r
  .loginPage("/login")\r
  .defaultSuccessUrl("/index")\r
  .failureUrl("/login?error")\r
  .permitAll()\r
  .and()\r
  .rememberMe()\r
  .tokenValidSeconds(1209600)\r
  .key("mykey") //Cookie中"mykey"的有效期秒\r
  .and()\r
  .logout()\r
  .logoutUrl("/cus-logout")\r
  .logoutSucessUrl("logout-suc")\r
  .permitAll();\r
\`\`\`\r
\r
在 spring security 中要加入 thymeleaf 的话，依赖为：\r
\r
\`\`\`xml\r
<groupId>org.springframework.boot</groupId>\r
<artifactId>spring-boot-starter-thymeleaf</artifactId>\r
<groupId>org.thymeleaf.extras</groupId>\r
<artifactId>thymeleaf-extras-springsecurity4</artifactId>\r
\`\`\`\r
\r
# 部署\r
\r
- \`mvn package\`即可将项目打包成 jar 包，运行时\`jar -jar xx.jar\`\r
\r
若要将它注册为 Linux 服务需要在 pom.xml 中加入：然后再用 mvn package\r
\r
\`\`\`xml\r
<build><plugins>\r
			<plugin>\r
				<groupId>org.springframework.boot</groupId>\r
				<artifactId>spring-boot-maven-plugin</artifactId>\r
				<configuration>\r
					<executable>true</executable>\r
				</configuration>\r
			</plugin>\r
		</plugins>\r
	</build>\r
\`\`\`\r
\r
### Linux 部署\r
\r
- 主流的 Linux 大多使用 init.d 或月 systemd 来注册服务。\r
\r
1.  对于 Centos6.6\r
    将 jar 包放到 Centos 的 var/apps 下，从 Oracle 下载 rpm 的 jdk，再执行\`rpm -ivh jdk*.rpm\`安装 JDK，再\`sudo ln -s /var/apps/包.jar /etc/init.d/服务名\`。再\`service 服务名 start\`(可以 stop 或 status)启动服务，要开机启动的话："\`chkconfig 服务名 on\`"\r
\r
- 日志存放于／var/log/chIO.log 下， 可用 cat 或 tail 等命令查看\r
\r
2. 对于 Centos 7\r
   在 \`etc/systemd/system\`目录下新建文件：服务名.service 并写入下面内容：\r
\r
\`\`\`sh\r
[Unit]\r
Description=服务名\r
After=syslog.target\r
[Service]\r
ExecStart=/usr/bin/java -jar /var/apps/名.jar\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
启动服务：\`systemctl start(/stop/status) 服务名\`，要开机启动：\`systemctl enable 服务名\`，要看日志：\`journalctl -u 服务名\`\r
\r
3.jar 改 war\r
打包是 jar 还是 war 取决于 pom 中\`<packaing>\`，不想要内嵌 tomcat 的话：\r
\r
\`\`\`xml\r
<dependency>\r
			<groupId>org.springframework.boot</groupId>\r
			<artifactId>spring-boot-starter-tomcat</artifactId>\r
			<scope>provided</scope>\r
		</dependency>\r
\`\`\`\r
\r
要改 jar 成 war 的话增加一个类继承 SpringBootServletInitializer ：\r
\r
\`\`\`js\r
public class ServletInitializer extends SpringBootServletInitializer {\r
	@Override\r
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {\r
		return application.sources(你的main方法的类.class);\r
	}\r
}\r
\`\`\`\r
\r
### Docker 部署：\r
\r
Docker 是使用 Dokerfile 文件来编译自己的镜像的，Dockerfile 主要有如下的指令：\r
\r
\`\`\`\r
(1)FROM 指令指明了当前镜像继承的基镜像。 编译当前镜像时会自动下载基镜像。如from ubuntu\r
(2)MAINTAINER 指令指明了当前镜像的作者\r
(3)RUN指令可以在当前镜像上执行Linux命令并形成一个新的层。RUN是编译时(build)的动作。示例可有如下两种格式，CMD和ENTRYPOINT也是如此：\r
RUN /bin/bash -c "echo hello"或RUN["/bin/bash", " -c", "echo hello"]\r
(4)CMD指令指明了启动镜像容器时的默认行为。一个Dockerfile里只能有一个CMD指令。CMD指令里设定的命令可以在运行镜像时使用参数覆盖。CMD是运行时（run）的动作。示例：CMD echo "hi"，可被docker run -d 镜像名 echo "llo"覆盖。\r
(5)EXPOSE指令EXPOSE指明了镜像运行时的容器必需监听指定的端口。示例：EXPOSE 8080\r
(6)ENV指令ENV指令可用来设置环境变量。如：ENV myName=don\r
(7)ADD指令是从当前工作目录复制文件到镜像目录中去。示例: ADD test.txt /mydir/\r
(8)ENTRYPOINT指令ENTRYPOINT指令可让容器像一个可执行程序一样运行，这样镜像运行时可以像软件一样接收参数执行。ENTRYPOINT是运行时（run）的动作。示例: ENTRYPOINT ["/bin/echo"]\r
\`\`\`\r
\r
我们可以向镜像传递参数运行：\`docker run -d 镜像名 echo "llo"\`\r
Docker 使用示例：\r
安装 Docker: \`yum install docker\` 启动并开机自启：\`systemctl start docker systemctl enable docker\`\r
这个 Dockerfile 要放在上面 jar 包的同级目录下如上面的 var/apps/，内容如下：\r
\r
\`\`\`docker\r
FROM java:8\r
MAINTAINER don\r
ADD 包名.jar app.jar\r
EXPOSE 8080\r
ENTRYPOINT ["java","-jar","/app.jar"]\r
\`\`\`\r
\r
ADD 复制并且重命名操作，最后一行是启动时运行 \`java -jar app.jar\`\r
编译镜像：在/var/apps/ 目录下执行：\`docker build -t 前缀/镜像名 .\`(最后的点指当前路径)\r
运行镜像：\`docker run -d --name 服务名 -p 8080:8080 镜像名\`\r
\r
# 应用监控\r
\r
1. http 监控：\r
   新建 SpringBoot 项目，依赖为 Actuator(spring”boot-starter-actuator）、Web(spring-boot-starter-web）、HATEOAS(spring-hateoas）。\r
   访问http://localhost: 8080/actuator，可显示 Endpoint 列表。类似在地址最后加入命令有：\r
\r
| 命令        | 解释                                            |\r
| ----------- | ----------------------------------------------- |\r
| actuator    | 所有 EndPoint 的列表，需加入 springHATEOAS 支持 |\r
| autoconfig  | 当前应用的所有自动配置                          |\r
| beans       | 当前应用中所有 Bean 的信息                      |\r
| configprops | 当前应用中所有的配置属性                        |\r
| dump        | 显示当前应用线程状态信息                        |\r
| env         | 显示当前应用当前环境信患                        |\r
| health      | 显示当前应用健康状况                            |\r
| info        | 显示当前应用信息                                |\r
| metrics     | 显示当前应用的各项指标信息                      |\r
| mappings    | 显示所有的＠RequestMapping 映射的路径           |\r
| shutdown    | 关闭当前应用（默认关闭）并且只支持 POST 请求    |\r
| trace       | 显示追踪信息（默认最新的 http 请求）            |\r
\r
其中 shutdown 默认是关闭的，可以在 application.properties 中开启：endpoints.shutdown.enabled=true。\r
\r
2. JMX 监控\r
3. SSH 监控 依赖加入：Remote Shell ( spring-boot-starter-remoteshell)\r
\r
- 此时项目启动后控制台会打印密码，再用 putty 登录进，端口号为 2000 用户名为 user，进入子控制台后常用命令有：help, metrics, endpoint list, endpoint invoke health。\r
- 如果要定制 ssh 登录信息：在 application.properties 中加入：\`shell.auth.simple.user.name=don （password写密码）\`\r
`,Q=`### WebSecurityConfigureAdaptor\r
\r
需要 UserDetailService, PassowrdEncoder,configure(HttpSercurity http)\r
\r
#####\r
\r
1. 处理用户信息获取逻辑：UserDetailService 接口的 loadUserByUsername()（你自己用 Dao 实现）\r
2. 处理用户校验逻辑 UserDetails 接口。getAuthorities(), getPassword(), getUsername(), isAccountNonExpired(), isAccountNonLocked(), isCredentialsNonExpired(), isEnabled()。参考 User 类。\r
3. 处理密码加密解密\r
\r
- http.httpBasic() 走 basic\r
\r
\`\`\`js\r
//loginPage:可为controller; loginProcessingUrl:UserNamePaAF会自动找此,\r
http\r
  .formLogin()\r
  .loginPage("/login.jsp")\r
  .loginProcessingUrl("/submit")\r
  .and()\r
  .authorizeRequests()\r
  .anyMatchers("/login.jsp")\r
  .permitAll()\r
  .anyRequest()\r
  .authenticated()\r
  .and()\r
  .csrf()\r
  .disable(); //如果是自定义的表单需要csrf\r
\`\`\`\r
\r
- AuthorityUtils.commaSeparatedStringToAuthorityList():能把字体串们转为对象们\r
\r
\`\`\`js\r
@Component\r
@Slf4j\r
public class MyUserDetailSerivce implements UserDetailsService {\r
	@Autowired\r
	PasswordEncoder encoder;\r
	@Override\r
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\r
		log.info("登录用户名是：{}",username);\r
		//根据用户名从数据库中查找用户，并构建User对象（3参构造或7参构造），或返回由DB信息构造的UserDetail接口实现\r
		String passwd= encoder.encode("123456"); //encode的方法只能出现在注册的时候，存之于库，此处只为展示。\r
		log.info("PasswordEncoder加密‘123456’之后为: {}",passwd);\r
		return new User(username, passwd, AuthorityUtils.commaSeparatedStringToAuthorityList("admin"));\r
	}\r
}\r
	/*不推荐使用的，只在测试时用\r
	 * @Bean public PasswordEncoder passwordEncoder() { return\r
	 * NoOpPasswordEncoder.getInstance(); }\r
	 */\r
	//BCryptPasswordEncoder为spring5默认的Encoder\r
	@Bean\r
	public PasswordEncoder bEncoder() {\r
		return new BCryptPasswordEncoder();\r
	}\r
\`\`\`\r
\r
##### 当需要身份验证要拿前一次请求来判断是来自 Rest 还是网页，比如在一个@RestController 里：\r
\r
\`\`\`js\r
private RequestCache requestCache = new HttpSessionRequestCache();\r
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();\r
	@Autowired\r
	private SecurityProperties securityProperties;\r
	/**\r
	 * 当需要身份验证时跳到这里\r
	 * @param request\r
	 * @param response\r
	 * @return\r
	 */\r
	@ResponseStatus(HttpStatus.UNAUTHORIZED)\r
	@RequestMapping("/authentication/require")\r
	public Object requireAuthentication(HttpServletRequest request, HttpServletResponse response) throws Exception{\r
		SavedRequest savedRequest = requestCache.getRequest(request, response);\r
		if (savedRequest!=null) {\r
			String prev = savedRequest.getRedirectUrl();\r
			log.info("引发跳转的请求是 {}", prev);\r
			if (StringUtils.endsWithIgnoreCase(prev, ".html")) {\r
				redirectStrategy.sendRedirect(request, response, yourLoginUrl);\r
			}\r
		}\r
		return "Unauthrized";\r
	}\r
\`\`\`\r
\r
### 个性化用户认证：\r
\r
1. 自定义登录页：http.formLogin().loginPage("youPage.html")\r
2. 自定义登录成功处理：实现 AuthenticationSuccessHandler。\r
   在配置中加\r
\r
\`\`\`js\r
.loginProcessingUrl("/authentication/form").successHandler(donAuthenSuccessHandler)\r
				.failureHandler(donAuthenFailHandler);\r
@Component\r
@Slf4j\r
public class DonAuthenSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler{\r
	@Autowired\r
	private ObjectMapper objMapper;\r
	@Autowired\r
	private SecurityProperties securityProperties;\r
	@Override\r
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,\r
			Authentication authentication) throws IOException, ServletException {\r
		log.info("登录成功");\r
		//如果配置文件里面要登录成功后返回json，则...否则，返回spring的默认处理（html）\r
		if (LoginType.JSON.equals(securityProperties.getBrowser().getLoginType())) {\r
			response.getWriter().write(objMapper.writeValueAsString(authentication));\r
		}else {\r
			super.onAuthenticationSuccess(request, response, authentication);\r
		}\r
	}\r
}\r
\`\`\`\r
\r
3. 自定义登录失败处理\r
\r
\`\`\`js\r
@Component\r
@Slf4j\r
public class DonAuthenFailHandler extends SimpleUrlAuthenticationFailureHandler{\r
	@Autowired\r
	private ObjectMapper objMapper;\r
	@Autowired\r
	private SecurityProperties securityProperties;\r
	@Override\r
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,\r
			AuthenticationException exception) throws IOException, ServletException {\r
		log.info("登录失败");\r
		//如果配置文件里面要登录失败后返回json，则...否则，返回spring的默认处理（html）\r
		if ("JSON".equals(configJsonInProperties)) {\r
			response.setStatus(HttpStatus.UNAUTHORIZED.value());\r
			response.setCharacterEncoding("UTF-8");\r
			response.getWriter().write(objMapper.writeValueAsString(exception.getMessage()));\r
		}else {\r
			super.onAuthenticationFailure(request, response, exception);\r
		}\r
	}\r
}\r
\r
\`\`\`\r
\r
#### 图形验证码：\r
\r
html\r
\r
\`\`\`html\r
<form action="/authentication/form" method="post">\r
  <table>\r
    <tr>\r
      <td>用户名：</td>\r
      <td><input type="text" name="username" /></td>\r
    </tr>\r
    <tr>\r
      <td>密码：</td>\r
      <td><input type="password" name="password" /></td>\r
    </tr>\r
    <tr>\r
      <td>图形验证码：</td>\r
      <td>\r
        <input type="text" name="imageCode" /><img\r
          alt="capchar"\r
          src="/code/image"\r
        />\r
      </td>\r
    </tr>\r
    <tr>\r
      <td colspan="2">\r
        <input type="checkbox" name="remember-me" value="true" />记住我\r
      </td>\r
    </tr>\r
    <tr>\r
      <td colspan="2"><button type="submit">登录</button></td>\r
    </tr>\r
  </table>\r
</form>\r
\`\`\`\r
\r
2. Controller:\r
\r
\`\`\`js\r
import java.awt.Color;\r
import java.awt.Font;\r
import java.awt.Graphics;\r
import java.awt.image.BufferedImage;\r
import java.io.IOException;\r
import java.util.Random;\r
import java.util.stream.IntStream;\r
import javax.imageio.ImageIO;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import org.apache.commons.lang.RandomStringUtils;\r
import org.springframework.beans.factory.annotation.Autowired;\r
import org.springframework.social.connect.web.HttpSessionSessionStrategy;\r
import org.springframework.social.connect.web.SessionStrategy;\r
import org.springframework.web.bind.*;\r
import org.springframework.web.context.request.ServletWebRequest;\r
import don.core.valid.code.sms.SmsCodeSender;\r
\r
@RestController\r
public class ValidateCodeController {\r
	private SessionStrategy sessionStrategy = new HttpSessionSessionStrategy();\r
	public static final String SESSION_KEY = "SESSION_KEY_IMAGE_CODE";\r
	public static final String SESSION_SMS_KEY = "SESSION_KEY_SMS_CODE";\r
	@Autowired\r
	private SmsCodeSender smsCodeSender;\r
	@GetMapping("/code/image") //接收<img src="/code/image">的请求\r
	public void createCode(HttpServletRequest request, HttpServletResponse response) throws IOException {\r
		ImageCode imageCode = createImageCode(request);\r
		sessionStrategy.setAttribute(new ServletWebRequest(request), SESSION_KEY, imageCode);\r
		ImageIO.write(imageCode.getImage(), "JPEG", response.getOutputStream());\r
	}\r
\r
	private ImageCode createImageCode(HttpServletRequest request) {\r
		int width= 67;\r
		int height=23;\r
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);\r
		Graphics g = image.getGraphics();\r
		Random random = new Random();\r
		g.setColor(getRandomColor(200,250));\r
		g.fillRect(0, 0, width, height);\r
		g.setColor(getRandomColor(160,200));\r
		g.setFont(new Font("Times New Roman", Font.ITALIC, 20));\r
		for (int i = 0; i < 155; i++) {\r
			int x = random.nextInt(width);\r
			int y = random.nextInt(height);\r
			int xl = random.nextInt(12);\r
			int y1 = random.nextInt(12);\r
			g.drawLine(x, y, x+xl, y+y1);\r
		}\r
		StringBuffer sRand = new StringBuffer();\r
		for (int i = 0; i < 4; i++) {\r
			int rand = random.nextInt(10);\r
			sRand.append(rand);\r
			g.setColor(new Color(20+random.nextInt(110), 20+random.nextInt(110)\r
			, 20+random.nextInt(110), 150+random.nextInt(90)));\r
			g.drawString(rand+"", 13*i+6, 16);\r
		}\r
		g.dispose();\r
		return new ImageCode(image, sRand.toString(), 60);\r
	}\r
\r
	private Color getRandomColor(int fc, int bc) {\r
		Random random = new Random();\r
		fc= fc>255?255:fc;\r
		bc= bc>255?255:bc;\r
		int r = fc+ random.nextInt(bc-fc);\r
		int g = fc+ random.nextInt(bc-fc);\r
		int b = fc+ random.nextInt(bc-fc);\r
		return new Color(r,g,b);\r
	}\r
\r
	@GetMapping("/code/sms")\r
	public void createSmsCode(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletRequestBindingException {\r
		String mobile = ServletRequestUtils.getRequiredStringParameter(request, "mobile"); //表单中input的name\r
		String sRand = RandomStringUtils.randomNumeric(4);\r
		SmsCode smsCode = new SmsCode(sRand, 60);\r
		sessionStrategy.setAttribute(new ServletWebRequest(request), SESSION_SMS_KEY, smsCode);\r
		smsCodeSender.send(mobile, sRand);\r
	}\r
}\r
\r
\`\`\`\r
\r
图形验证码配置\r
\r
\`\`\`\r
http.addFilterBefore(new ValidateCodeFilter().setFailureHandler(donAuthenFailHandler),	UsernamePasswordAuthenticationFilter.class).formLogin()\r
    .loginPage("/authentication/require").loginProcessingUrl("/authentication/form")\r
    .successHandler(donAuthenSuccessHandler).failureHandler(donAuthenFailHandler)\r
.and().authorizeRequests().antMatchers("/authentication/require","/code/image").permitAll().anyRequest().authenticated()\r
.and().csrf().disable();\r
\r
\`\`\`\r
\r
图形验证码过滤器\r
\r
\`\`\`js\r
import java.io.IOException;\r
import javax.servlet.*;\r
import org.springframework.security.web.authentication.AuthenticationFailureHandler;\r
import org.springframework.social.connect.web.HttpSessionSessionStrategy;\r
import org.springframework.social.connect.web.SessionStrategy;\r
import org.springframework.util.StringUtils;\r
import org.springframework.web.bind.ServletRequestBindingException;\r
import org.springframework.web.bind.ServletRequestUtils;\r
import org.springframework.web.context.request.ServletWebRequest;\r
import org.springframework.web.filter.OncePerRequestFilter;\r
public class ValidateImgCodeFilter extends OncePerRequestFilter {\r
	private AuthenticationFailureHandler failureHandler;\r
	private SessionStrategy sessionStrategy = new HttpSessionSessionStrategy();\r
	@Override\r
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)\r
			throws ServletException, IOException {\r
		if ("/authentication/form".equals(request.getRequestURI())\r
				&& "POST".equalsIgnoreCase(request.getMethod())) {\r
			try {\r
				validate(new ServletWebRequest(request));\r
			} catch (ValidateCodeException e) {\r
				failureHandler.onAuthenticationFailure(request, response, e);\r
				return;\r
			}\r
		}\r
		filterChain.doFilter(request, response);\r
	}\r
	private void validate(ServletWebRequest servletWebRequest) throws ServletRequestBindingException {\r
		ImageCode codeInSession = (ImageCode)sessionStrategy.getAttribute(servletWebRequest\r
				, ValidateCodeController.SESSION_KEY);\r
		String codeInRequest = ServletRequestUtils.getStringParameter(servletWebRequest.getRequest(), "imageCode");\r
		if (StringUtils.isEmpty(codeInRequest)) {\r
			throw new ValidateCodeException("验证码不能为空");\r
		}\r
		if (codeInSession == null) {\r
			throw new ValidateCodeException("验证码不存在");\r
		}\r
		if (codeInSession.isExpired()) {\r
			sessionStrategy.removeAttribute(servletWebRequest, ValidateCodeController.SESSION_KEY);\r
		}\r
		if (!codeInSession.getCode().equals(codeInRequest)) {\r
			throw new ValidateCodeException("验证码不匹配");\r
		}\r
		sessionStrategy.removeAttribute(servletWebRequest, ValidateCodeController.SESSION_KEY);\r
	}\r
	public ValidateImgCodeFilter setFailureHandler(AuthenticationFailureHandler failureHandler) {\r
		this.failureHandler = failureHandler;\r
		return this;\r
	}\r
}\r
\`\`\`\r
\r
实体类：\r
\r
\`\`\`js\r
import java.awt.image.BufferedImage;\r
import java.time.LocalDateTime;\r
import lombok.AllArgsConstructor;\r
import lombok.Data;\r
import lombok.NoArgsConstructor;\r
@Data\r
@NoArgsConstructor\r
@AllArgsConstructor\r
public class ImageCode {\r
	private BufferedImage image;\r
	private String code;\r
	private LocalDateTime expireTime;\r
	public ImageCode(BufferedImage image, String code, int expireIn) {\r
		super();\r
		this.image = image;\r
		this.code = code;\r
		this.expireTime = LocalDateTime.now().plusSeconds(expireIn);\r
	}\r
	public boolean isExpired() {\r
		return LocalDateTime.now().isAfter(expireTime);\r
	}\r
}\r
\`\`\`\r
\r
#### 短信验证码：\r
\r
html\r
\r
\`\`\`html\r
<form action="/authentication/mobile" method="post">\r
  <table>\r
    <tr>\r
      <td>手机号：</td>\r
      <td><input type="text" name="mobile" value="13112456789" /></td>\r
    </tr>\r
    <tr>\r
      <td>短信验证码：</td>\r
      <td>\r
        <input type="text" name="smsCode" />\r
        <a href="/code/sms?mobile=13112456789">发送验证码</a>\r
      </td>\r
    </tr>\r
    <tr>\r
      <td colspan="2"><button type="submit">登录</button></td>\r
    </tr>\r
  </table>\r
</form>\r
\`\`\`\r
\r
SmsCode 实体类：\r
\r
\`\`\`js\r
import java.time.LocalDateTime;\r
\r
import lombok.AllArgsConstructor;\r
import lombok.Data;\r
import lombok.NoArgsConstructor;\r
@Data\r
@NoArgsConstructor\r
@AllArgsConstructor\r
public class SmsCode {\r
	private String code;\r
	private LocalDateTime expireTime;\r
	public SmsCode(String code, int expireIn) {\r
		super();\r
		this.code = code;\r
		this.expireTime = LocalDateTime.now().plusSeconds(expireIn);\r
	}\r
	public boolean isExpired() {\r
		return LocalDateTime.now().isAfter(expireTime);\r
	}\r
}\r
\`\`\`\r
\r
Controller\r
\r
\`\`\`js\r
	@GetMapping("/code/sms")\r
	public void createSmsCode(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletRequestBindingException {\r
		String mobile = ServletRequestUtils.getRequiredStringParameter(request, "mobile");\r
		String sRand = RandomStringUtils.randomNumeric(4);\r
		SmsCode smsCode = new SmsCode(sRand, 60);\r
		sessionStrategy.setAttribute(new ServletWebRequest(request), SESSION_SMS_KEY, smsCode);\r
		smsCodeSender.send(mobile, sRand);\r
	}\r
\`\`\`\r
\r
AuthenticationToken\r
\r
\`\`\`js\r
import java.util.Collection;\r
import org.springframework.security.authentication.AbstractAuthenticationToken;\r
import org.springframework.security.core.GrantedAuthority;\r
/**\r
 * 照抄的org.springframework.security.authentication.UsernamePasswordAuthenticationToken\r
 * @see UsernamePasswordAuthenticationToken\r
 */\r
public class SmsCodeAuthenticationToken extends AbstractAuthenticationToken{\r
	private static final long serialVersionUID = -6661456388883371241L;\r
	private final Object principal;\r
	public SmsCodeAuthenticationToken(Object principal, Collection<? extends GrantedAuthority> authorities) {\r
		super(authorities);\r
		this.principal = principal;\r
		super.setAuthenticated(true);\r
	}\r
	public SmsCodeAuthenticationToken(String mobile) {\r
		super(null);\r
		this.principal = mobile;\r
		setAuthenticated(false); // must use super, as we override\r
	}\r
	@Override\r
	public Object getCredentials() {		return null;	}\r
	@Override\r
	public Object getPrincipal() {		return principal;	}\r
	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {\r
		if (isAuthenticated) {\r
			throw new IllegalArgumentException(\r
					"Cannot set this token to trusted - use constructor which takes a GrantedAuthority list instead");\r
		}\r
		super.setAuthenticated(false);\r
	}\r
	@Override\r
	public void eraseCredentials() {		super.eraseCredentials();	}\r
}\r
\`\`\`\r
\r
过滤器\r
\r
\`\`\`js\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import org.springframework.security.authentication.AuthenticationManager;\r
import org.springframework.security.authentication.AuthenticationServiceException;\r
import org.springframework.security.core.Authentication;\r
import org.springframework.security.core.AuthenticationException;\r
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;\r
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;\r
import org.springframework.stereotype.Component;\r
/**\r
 * 照抄org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter\r
 * @author Donald\r
 *\r
 */\r
//@Component\r
public class SmsCodeAuthenticationFilter extends AbstractAuthenticationProcessingFilter {\r
	public static final String FROM_MOBILE_KEY = "mobile";\r
	private boolean postOnly = true;\r
	public SmsCodeAuthenticationFilter() {\r
		super(new AntPathRequestMatcher("/authentication/mobile", "POST"));\r
	}\r
	public Authentication attemptAuthentication(HttpServletRequest request,\r
			HttpServletResponse response) throws AuthenticationException {\r
		if (postOnly && !request.getMethod().equals("POST")) {\r
			throw new AuthenticationServiceException(\r
					"Authentication method not supported: " + request.getMethod());\r
		}\r
		String mobile = request.getParameter(FROM_MOBILE_KEY);\r
		if (mobile == null) {\r
			mobile = "";\r
		}\r
		mobile = mobile.trim();\r
		SmsCodeAuthenticationToken authRequest = new SmsCodeAuthenticationToken(mobile);\r
		// Allow subclasses to set the "details" property\r
		setDetails(request, authRequest);\r
		return this.getAuthenticationManager().authenticate(authRequest);\r
	}\r
	protected void setDetails(HttpServletRequest request,\r
			SmsCodeAuthenticationToken smsCode) {\r
		smsCode.setDetails(authenticationDetailsSource.buildDetails(request));\r
	}\r
	public void setPostOnly(boolean postOnly) {\r
		this.postOnly = postOnly;\r
	}\r
}\r
\`\`\`\r
\r
Provider\r
\r
\`\`\`js\r
import org.springframework.beans.factory.annotation.Autowired;\r
import org.springframework.security.authentication.AuthenticationProvider;\r
import org.springframework.security.authentication.InternalAuthenticationServiceException;\r
import org.springframework.security.core.Authentication;\r
import org.springframework.security.core.AuthenticationException;\r
import org.springframework.security.core.userdetails.UserDetails;\r
import org.springframework.security.core.userdetails.UserDetailsService;\r
import org.springframework.stereotype.Component;\r
import lombok.Getter;\r
import lombok.Setter;\r
@Setter\r
@Getter\r
//!Component : 这里不能向容器注册为Component，否则会影响其他的AuthenticationProvider\r
public class SmsCodeAuthenticationProvider implements AuthenticationProvider{\r
	@Autowired\r
	private UserDetailsService userDetailsService;\r
	@Override\r
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {\r
		UserDetails user = userDetailsService.loadUserByUsername((String) authentication.getPrincipal());\r
		if (null == user) {\r
			throw new InternalAuthenticationServiceException("无法获取用户信息！");\r
		}\r
		SmsCodeAuthenticationToken token = new SmsCodeAuthenticationToken(user, user.getAuthorities());\r
		//把原来携带的详细信息放到DB的查询结果中\r
		token.setDetails(authentication.getDetails());\r
		return token;\r
	}\r
	@Override\r
	public boolean supports(Class<?> authentication) {\r
		return SmsCodeAuthenticationToken.class.isAssignableFrom(authentication);\r
	}\r
}\r
\`\`\`\r
\r
自己的配置：\r
\r
\`\`\`js\r
package don.core.authentication.mobile;\r
import org.springframework.beans.factory.annotation.Autowired;\r
import org.springframework.context.annotation.Configuration;\r
import org.springframework.security.authentication.AuthenticationManager;\r
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;\r
import org.springframework.security.config.annotation.web.builders.HttpSecurity;\r
import org.springframework.security.core.userdetails.UserDetailsService;\r
import org.springframework.security.web.DefaultSecurityFilterChain;\r
import org.springframework.security.web.authentication.AuthenticationFailureHandler;\r
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;\r
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;\r
@Configuration\r
public class SmsCodeAuthenticationSecurityConfig\r
		extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {\r
	@Autowired\r
	AuthenticationSuccessHandler donAuthenSuccessHandler;\r
	@Autowired\r
	AuthenticationFailureHandler donAuthenFailHandler;\r
	private SmsCodeAuthenticationProvider smsAuthProvider;\r
	@Autowired\r
	private UserDetailsService userDetailsService;\r
	@Override\r
	public void configure(HttpSecurity http) throws Exception {\r
		SmsCodeAuthenticationFilter smsCodeAuthFilter = new SmsCodeAuthenticationFilter(); //这里必须new，不能@Component再@Autowire,否则找不到AuthenticationManager。\r
		smsCodeAuthFilter.setAuthenticationManager(http.getSharedObject(AuthenticationManager.class));\r
		smsCodeAuthFilter.setAuthenticationSuccessHandler(donAuthenSuccessHandler);\r
		smsCodeAuthFilter.setAuthenticationFailureHandler(donAuthenFailHandler);\r
		smsAuthProvider = new SmsCodeAuthenticationProvider(); //这里不能通过@Bean再@Autowire注入，否则找不到AuthenticationProvider\r
		smsAuthProvider.setUserDetailsService(userDetailsService);\r
		http.authenticationProvider(smsAuthProvider).addFilterAfter(smsCodeAuthFilter,\r
				UsernamePasswordAuthenticationFilter.class);\r
	}\r
}\r
\`\`\`\r
\r
整体配置\r
\r
\`\`\`js\r
http\r
  .addFilterBefore(\r
    new ValidateSmsCodeFilter().setFailureHandler(donAuthenFailHandler),\r
    UsernamePasswordAuthenticationFilter.class\r
  )\r
  .formLogin()\r
  .loginPage("/authentication/require")\r
  .loginProcessingUrl("/authentication/form")\r
  .successHandler(donAuthenSuccessHandler)\r
  .failureHandler(donAuthenFailHandler)\r
  .and()\r
  .authorizeRequests()\r
  .antMatchers("/authentication/require", "/code/*")\r
  .permitAll()\r
  .anyRequest()\r
  .authenticated()\r
  .and()\r
  .csrf()\r
  .disable()\r
  .apply(smsCodeAuthSecConf);\r
\`\`\`\r
\r
#### 记住我的功能：\r
\r
\`\`\`js\r
    @Bean\r
	public PasswordEncoder bEncoder() {\r
		return new BCryptPasswordEncoder();\r
	}\r
	@Autowired\r
	private DataSource dataSource;\r
	@Autowired\r
	private UserDetailsService userDetailsService;\r
	@Bean\r
	public PersistentTokenRepository persistentTokenRepository() {\r
		JdbcTokenRepositoryImpl tokenRepository = new JdbcTokenRepositoryImpl();\r
		tokenRepository.setDataSource(dataSource);\r
		tokenRepository.setCreateTableOnStartup(false); //只有在第一次时才设置为true\r
		return tokenRepository;\r
	}\r
//在配置中加入：\r
.and().rememberMe().tokenRepository(persistentTokenRepository())\r
				.tokenValiditySeconds(1000)\r
				.userDetailsService(userDetailsService)\r
\`\`\`\r
\r
#### Session\r
\r
1. 在 spring 中配置 session 超时时间：server.session.timeout=60，单位是秒 org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.configureSession(Context)这里决定（至少是一分钟）。\r
\r
\`\`\`js\r
//在rememberMe的配置上加：\r
.and().sessionManagement()./*invalidSessionUrl("/session/invalid") 这是一种方式*/\r
				invalidSessionStrategy(new DonSessionExpireStrategy("/index.html"))\r
				.maximumSessions(1).maxSessionsPreventsLogin(true) //默认false，不锁定当前只能在这个session上登\r
				.expiredSessionStrategy(new DonSessionExpireStrategy()).and()\r
import java.io.IOException;\r
import javax.servlet.ServletException;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import org.springframework.http.HttpStatus;\r
import org.springframework.security.web.DefaultRedirectStrategy;\r
import org.springframework.security.web.session.InvalidSessionStrategy;\r
import org.springframework.security.web.session.SessionInformationExpiredEvent;\r
import org.springframework.security.web.session.SessionInformationExpiredStrategy;\r
public class DonSessionExpireStrategy  implements SessionInformationExpiredStrategy, InvalidSessionStrategy {\r
	private String targetUrl;\r
	public DonSessionExpireStrategy(String targetUrl) {		this.targetUrl = targetUrl;	}\r
	public DonSessionExpireStrategy() {	}\r
	@Override\r
	public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException, ServletException {\r
		event.getResponse().setContentType("application/json;charset=UTF-8");\r
		event.getResponse().getWriter().write("并发登录！");\r
	}\r
	@Override\r
	public void onInvalidSessionDetected(HttpServletRequest request, HttpServletResponse response)\r
			throws IOException, ServletException {\r
		if (request.getRequestURI().endsWith(".html")) {\r
			new DefaultRedirectStrategy().sendRedirect(request, response, targetUrl);\r
		}else {\r
			response.setStatus(HttpStatus.UNAUTHORIZED.value());\r
			response.setContentType("application/json;charset=UTF-8");\r
			response.getWriter().write("Session 无效");\r
		}	}}\r
\`\`\`\r
\r
2. 多机集群 session\r
   依赖加入：org.springframework.session:spring-session-core\r
   首先 make 然后启动 redis server: ./src/redis-server\r
   指定 spring 的配置文件：\r
   spring.session.store-type=REDIS\r
   spring.redis.host/port=...\r
   ，注意要存 session 的对象要 implement Serializable\r
3. 登出：\r
\r
\`\`\`js\r
.and().logout().logoutUrl("/logout").logoutSuccessUrl("/ilogout.html") //或logoutSucessHandler(实现接口的类)				//如果需要删除cookie则：.deleteCookies("JSESSIONID")\r
\`\`\`\r
`,K=`### 基本语法\r
\r
\`\`\`groovy\r
3.times{print "$it"}\r
0.step(10,2){print "$it"} //Integer.step有三个入参\r
println "svn help".execute().text\r
//String类的execute方法就是Runtime.exec()\r
println "cmd /c dir".execute().text\r
str?.revese()//只有str不为空时才执行reverse\r
\`\`\`\r
\r
- Groovy 的 bean 实现不区分 public private 和 protected，要想某个属性不被修改可以在其 set 方法中直接 throw 一个 IllegalAccessException。除了 class 属性需要加 getClass()外，别的直接.就行 return 语句几乎总是可选的\r
- Groovy 不强迫我们捕获自己不关心的异常 ， 这些异常会被传递给代码的调用者。\r
- 多重赋值：def (a,b)="James,Bond".split(",") 不必创建临时变量并编写多条赋值语句.def (String cat, String mouse)= ['Tom',' Jerry ',' Spike ' ,' Tyke ' ]\r
- button.addActionListener({ JOptionPane.showMessageDialog(frame ,” You clicked ！ ”) })as ActionListener 调用了 addActionlistener 方法, 同时为该方法提供了一个代码块,借助 as 操作符,相当于实现了 Actionlistener 接口.\r
\r
\`\`\`groovy\r
def displayMouse={label.setText("$it.x, $it.y")}\r
frame.addMouseListener(displayMouse as MouseListener)\r
frame.addMouseMotionListener(displayMouse as MouseMotionListener)\r
\`\`\`\r
\r
如果接口中的每个方法需要不同的实现.不用担心,Groovy 可以摆平.只需要创建 一 个映射,以每个方法的名字作为键,以方法对应的代码体作为键值,同时使用简单的 Groovy 风格 , 用冒号（：） 分隔方法名和代码块即可.\r
\r
\`\`\`groovy\r
handlefocus = [focusGained : { msgLabel.setText（ ” Good to see you  f”）｝,focuslost : { msglabel.setText （ ” Come back soon  ！”）｝]\r
button.addFocusListene （ handlefocus as Focuslistener)\r
\`\`\`\r
\r
如果不知道类型则可以用 asType 如：\r
handle.asType({Class.forName("类名")})\r
\r
\`\`\`groovy\r
new FileWriter('abc.txt').withWriter{it.write('a')} //不再需要自己调用close()\r
\`\`\`\r
\r
- Groovy 会把使用单引号创建的 String 看作一个纯粹的字面常量。 因此 ， 如果在里面放了任何表达式， Groovy 并不会计算它们；相反 ， 它就是按所提供的字面内容来使用它们。要对 String 中的表达式进行求值运算 ， 必须使用双引号.\r
\r
- Java 的 String 是不可变的， Groovy 也信守这种不可变 性。一 旦创建了一个 String 实例， 就不能通过调用更改器等方法修改其内容了。可以使用［］操作符读取一个字符；不过不能修改\r
- 如果表达式是一个像 value 这样的简单变量名， 或者是一个简单的属性存取器（ accessor）， 则包围表达式的｛｝是可选的。\r
\r
- GString 的惰性求值:如果希望改变表达式中使用的引用， 而且希望它们的当前值被用于惰性求值中， 请必须记住， 不要在表达式中直接替换它们 ， 而要使用一个无参闭包。\r
\r
\`\`\`groovy\r
quote="Today \${->company} stock closed at \${->price}"\r
stocks.each{k,v->\r
    company=k;price=v;\r
    println quote\r
}\r
\`\`\`\r
\r
将～应用于 String. 会创建一个 Pattern 实例。 我们可以使用正斜杠、 单引号或双引号来创建 RegEx。 正斜杠有一个优势：不必对反斜杠进行转义。 因此 /\\d*\\w*/与"\\\\d*\\\\w*" 等价， 但是更优雅。\r
＝～操作符会返回 一 个 Matcher 对象。\r
Groovy 对 Matcher 的布尔求值处理不同于 Java ， 只要至少有 一 个匹配 ， 它就会返回 true 如果有多个匹配 ，则 matcher 会包含 一 个匹配的数组。这有助于快速获得匹配给定 RegEx 的文本\r
中的部分内容。\r
\r
\`\`\`\r
def pattern = ~"(G|g)roovy"\r
text="Groovy is me"\r
if(text =~ pattern) print "matched!" //=~执行部分匹配，==~执行精确匹配\r
matcher = 'Groovy is groovy' =~ /(G|g)roovy/\r
print '\${matcher[1]}'\r
rep = (str =~ /groovy/).replaceAll('hip') //Groovy is hip\r
\`\`\`\r
\r
- each(闭包)可以迭代， reverseEach （）方法反向迭代元素。如果关注迭代过程中的计数或索引 ， 可以使用 eachWithindex （）方法。\r
- 集合的 collect(闭包)相当于 java 中的 map, find/findAll 相当于 filter， inject 相当于 reduce(), groupBy()相当于 groupingBy()\r
- 如果想查找第 一 个匹配对象的位置， 可以使用 findindexOf （）方法\r
- flatten （）方法将 List 拉平\r
- any （）方法会查找至少 一 个满足给定条件（谓词）的 Map 中的元素 ， 而 every （）方法则会检查是否所有的元素都满足给定条件\r
- 可以在 List 上使用－操作符（ minus （））方法\r
- 可以使用 reverse （）方法得到列表的 一 份副本 ， 其中的元素是反向排列的。\r
- 星号展开符：如 lst\\*.size ()的作用与 1st.collect { it.size()}相同。\r
- 我们直接使用 user.name 其实相当于 user.getName(),要不用 get 则：user.@name\r
- <==>像不像一个宇宙飞船？相当于调用 compareTo 方法：\r
- Groovy 中的运算符：https://www.jianshu.com/p/b25ff17d10a1\r
\r
\`\`\`\r
lst=['programing','in','Groovy']\r
println lst.collect{it.size()}.sum() //所有元素长度之和19\r
println lst.inject(0){init,ele->init+ele.size()} //所有元素长度之和19\r
\`\`\`\r
\r
- 当定义 一 个问 Map 时， 对于规规矩矩的键名， 可以省略其引号。如：langs=[Java:'Gosling','C++':'Strom']\r
- Groovy 中 ， Object 的 with （）该方法接受 一 个闭包作为参数。 在闭包内调用的任何方法都会被自动解析到上下文对象（ Groovy 中 with （）方法是作为 identity （）的同义词引人的， 所以它们可以互换使用。）\r
  如：lst.with{\r
  add(3)\r
  print size()\r
  }\r
- 间接访问属性：car[name](反射)\r
- Groovy 中的所有对象都支持 invokeMethod()方法,如：person.invokeMethod("walk",10) (反射)\r
- ＋操作符映射的 plus （）、＋＋操作符映射的 ne × t （）\r
  String[]也支持 execute（）方法， 数组的第 一 个元素会被当作要执行的命令 ， 其余元素则被视作该命令的参数。作为替代，可以使用 List 的 execute（）方法。\r
  Thread.start{\r
  //将任务分派给单独的线程执行\r
  }\r
- Groovy 通过向 BufferedReade 、 InputStream 和 File 添加一个 text 属性 ， 使之简单了许多， 我们可以把文件的全部内容都读到一个 String 中，如 new File("ab").text\r
- new File("a").eachLine{闭包}\r
- new File("a").filterLine{it =~ /life/}\r
- new File("a").withWriter{it<<"追加文本"}\r
- Lisst, Set , sortedMap 和 SortedSet 都加入了 asimmutabl e （）方法 ， 用于获得各自实例的一 个不可变实例。 这些类还加入了 一 个 asSynchronized（）方法 ，用于创建线程安全的实例。\r
- java. util. Timer 上加入了 一 个 runAft er（）方法。 使用的语法更为简单， 因为该方法接受一个闭包， 该闭包将在 一 个给定的延迟（以毫秒为单位）之后运行。\r
\r
### XML\r
\r
\`\`\`groovy\r
def langs=new XmlSlurper().parse(new File("d:/don/temp/Groovy程序设计code/WorkingWithXML/languages.xml"))\r
langs.language.each{println "\${it.@name} authored by \${it.author[0].text()}"}\r
\`\`\`\r
\r
对于有 NameSpace 的，如：\r
\r
\`\`\`xml\r
<languages xmlns:computer="Computer" xmlns:natural="Natural">\r
  <computer:language name="Java"/>\r
  <natural:language name="English"/>\r
</languages>\r
\`\`\`\r
\r
\`\`\`groovy\r
def langs=new XmlSlurper().parse(new File(\r
"d:/don/temp/Groovy程序设计code/WorkingWithXML/computerAndNaturalLanguages.xml")).declareNamespace(natural:'Natural')\r
langs.'natural:language'.each{println "\${it.@name} authored by \${it.author[0].text()}"}\r
\`\`\`\r
\r
带命名空间的 xml 写入：\r
\r
\`\`\`groovy\r
langs = ['C++' : 'Stroustrup', 'Java' : 'Gosling', 'Lisp' : 'McCarthy']\r
xmlDocument = new groovy.xml.StreamingMarkupBuilder().bind {\r
  mkp.xmlDeclaration()\r
  mkp.declareNamespace(computer: "Computer")\r
  languages {\r
    comment << "Created using StreamingMarkupBuilder"\r
    langs.each { key, value ->\r
      computer.language(name: key) {\r
        author (value)\r
      }\r
    }\r
  }\r
}\r
println xmlDocument\r
\`\`\`\r
\r
### SQL\r
\r
最简单的 sql:\r
\r
\`\`\`groovy\r
def sql=groovy.sql.Sql.newInstance('jdbc:oracle:thin:@10.64.94.30:1521:CNDON',\r
        'donald','Testbus!654321','oracle.jdbc.driver.OracleDriver')\r
sql.eachRow('select * from t_dd_bank_info'){\r
    printf "%-20s%s\\n", it[0], it.bank_name\r
}\r
\`\`\`\r
\r
元数据：\r
\r
\`\`\`groovy\r
def processMeta = { meta->\r
    meta.columnCount.times{printf "%-15s", meta.getColumnLabel(it+1)}\r
    println ""\r
}\r
sql.eachRow('select * from t_dd_bank_info',processMeta){\r
    printf "%-15s%s\\n", it[0], it.bank_name\r
}\r
\`\`\`\r
\r
- 可以在 Sql 实例上使用 rows （）方法。该方法返回 一 个结果数据的 ArrayList 实例\r
- 如果改为调用 firstRow（）方法， 则仅得到结果的第 1 行。我们可以使用 Sql 的 call （）方法执行存储过程。使用 withStatement（）方法，可以设置一个将在查询执行之前调用的闭包。如果想在执行之前拦截并修改 SQL 查询， 该方法会有所帮助。\r
\r
- 数据转成 Xml 显示：\r
\r
\`\`\`groovy\r
def bd=new groovy.xml.MarkupBuilder()\r
bd.weather{\r
    sql.eachRow('select * from weather'){\r
        city(name:it.city, temp:it.temp)\r
    }\r
}\r
\`\`\`\r
\r
- 传统的方式是使用 Sql 类的 execute （）或 execute!nsert （）方法\r
  面向对象：\r
- Sql 类的 dataset （）方法接收 一 个表名 ， 并返回 一 个虚拟代理直到迭代时 ， 它才去取实际的行。\r
- 方法有 findAll()和 each(), add()\r
\r
\`\`\`groovy\r
println sql.rows('select * from a').size()\r
sql.dataSet('weather').findAll{it.temp<32} //会自动生成相应sql\r
sql.dataSet('weather').add(city:'He', temp:19)\r
\`\`\`\r
\r
操作 Excel 的 temperature 表：\r
\r
\`\`\`groovy\r
def sql = groovy.sql.Sql.newInstance(\r
"""jdbc:odbc:Driver=\r
{Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};\r
DBQ=C:/temp/weather.xlsx;READONLY=false""", '', '')\r
\r
println "City\\t\\tTemperature"\r
sql.eachRow('SELECT * FROM [temperatures$]') {\r
 println "\${it.city}\\t\\t\${it.temperature}"\r
}\r
\`\`\`\r
\r
Groovy 的依赖管理：\r
\r
\`\`\`groovy\r
@GrabResolver(name = 'aliyun', root = 'http://maven.aliyun.com/nexus/content/groups/public/')\r
@GrabConfig(systemClassLoader = true)\r
@Grab(group = 'org.hsqldb', module = 'hsqldb', version = '2.3.4')\r
\`\`\`\r
\r
常用的 SQL:\r
\r
\`\`\`groovy\r
sql.executeInsert(带问号sql, 数组)\r
sql.withTransaction {\r
                sql.executeInsert("")\r
                sql.executeInsert("")\r
            }\r
sql.withBatch(3,'insert into a values(?) '){\r
     qry->qry.addBatch(101)\r
     qry->qry.addBatch(102)\r
}\r
\r
sql.rows("select * from a", 1, 3).each { printRow(it) } //分页：起始索引1，数据量3\r
\`\`\`\r
\r
\`\`\`groovy\r
@GrabResolver(name = 'hc', root = 'http://alm.homecredit.cn/nexus/content/groups/public')\r
@GrabConfig(systemClassLoader = true)\r
@Grab('com.oracle:ojdbc6:11.2.0.3')\r
@Grapes([@Grab('''),])\r
\`\`\`\r
\r
注解：\r
@groovy.transform.ToString(includeNames=true)\r
`,Y=`# 资料：\r
- [Kotlin从入门到实战](https://www.bilibili.com/video/BV1bZ4y1N7my) 61小时！\r
# 入门\r
### 语法\r
1. switch case在kt中为\r
\r
\`\`\`\r
val i = when(w){1->10\r
    else ->{ println "hi"} //返回kotlin.Unit\r
}\r
\`\`\`\r
- java中父类是object在kt中是Any\r
- 字符串模板中\`\${}\`可用\r
- 函数默认是public修饰 ，入参可以有默认值\r
- 函数调用方的参数可以具名：\`login(age=99,name="don")\`\r
- 返回类型中有Nothing类型，抛出NotImplementedError如\`TODO("no")\`\r
- 反引号可以用于转义关键字如函数名是中文，纯数字或\`is\`\r
- 匿名函数最后一行不要写return，如果有入参\r
- for-in循环: ..是创建两端闭区间, until关键字左闭右开, 降序downTo两端闭区间\r
\`\`\`\r
//匿名函数2种声明方式(冒号或等号)\r
val m :(Int)->String ={n->"\${n}"} //亦可用it\r
//第二种\r
val x={a:Int,b:Int->$a}\r
m(1)\r
\`\`\`\r
- 当有lambda作为入参时，最好在函数声明前加上\`inline\`，减少对象性能损耗\r
- 函数调用方要把另一个函数作为lambda入参，另一个函数名前需要加上\`::\`如：\`login("d",1,::resp)\`也就是把函数变成对象（函数类型对象）\r
- 函数可以返回函数\r
\r
\`\`\`\r
fun show(i:String):(String,Int)->String{\r
    println("")\r
    return {name:String,age:Int->""}\r
}\r
\`\`\`\r
对于空的处理\r
\r
\`\`\`\r
var n:String?=null\r
var b=n?.let{it}\r
var c=n!!.capitalize() //!!断言会抛异常\r
println(n?:"ha") //空合并运算，如果为null则执行？：后面的东西\r
println(n?.let{it}?:"ha") //如果有则n，否则ha，两者合并\r
checkNotNull(n) //如果n为空则抛异常（先决条件函数）或requireNotNull\r
\`\`\`\r
支持解构：\`val (s1,s2)="Don,ald".split(",")\`\r
### 类型\r
- \`64.55.toInt()\`或\`roundToInt()\`都会四舍五入\r
- apply的函数没有it却有它本身$this（可省略）, 并且返回this，可以链式调用。用于一堆set的情况\r
- let 用的it，并且返回最后一行。用于 \`a?.let{}\`\r
- run : 入参this， 返回最后一行。用于具名函数：\`val r2:=str.run(::isLong)\`\r
- with和run功能一样，只不过入参要写在with里，\`with(str){}\`\r
- also入参it, 返回它本身\r
- takeIf，大部分配合?:来用如\`name.takeIf{allow(pw)}?:"don"\`，相当于合并了Optional.of().else()\r
- takeUnless与之相反\`name.takeUnless{true/false}\` 当为false时返回name本身，true返回null\r
- 类型强转为as, 安全强转为\`as?\` 如:\`val ss:String?=loca as? String\`,转换失败则ss为null\r
### 集合\r
- 定义：\`listOf(), mutableListOf() \`，由不可变转可变：\`list1.toMutableList()\`\r
- 另一种array: \`arrayOf()\`，对于array其有toString方法：\`.contentToString()\`，可修改已有元素，但不可以再加。\r
- 集合有\`.forEachIndexed{id,it->}\`\r
- 集合解构时可以用\`_\`不接收元素\r
- 数组定义：intArrayOf(), 普通数组：arrayOf()\r
- map定义：\`mapOf("a" to 3.14,"b" to 3.65)\` 或\`Pair("a",3.14)\`\r
-  map遍历 \`map.forEach{(k,v)->{}}\` (k,v)或k,v都行。或\`for(i in map){}\`\r
### 类\r
- 类的属性默认是private的，但会自己加上set和get方法，要覆盖，则写get()=field set(v){field=v}\r
- val属性默认只有get方法，没有set，所以不能直接实例化后赋值\r
- 类主构造函数：\r
\`\`\`\r
class Don(val name:String){\r
    constructor(var name:String, sex:Char='M'):this(name){  //次构造必须调用主构造\r
       \r
    }\r
    init{\r
        //相当于java的{}类代码块\r
    }\r
    val dd=readDB()\r
    val dd2 by laze {readDb()}\r
} \r
\`\`\`\r
- 次构造函数是通过constructor关键字来定义的\r
- 构造函数可以有默认值 \r
- 延迟初始化：\`lateinit var resp:String;\`,判断一个变量是否已经初始化：\`if(::resp.isInitialized)\`\r
- 变量默认饿汉式加载，只要实例化了类，它的变量会自动被初始化。如上面的dd变量在\`Don()\`时就会调用readDB函数。而dd2只有用到时才加载。\r
- 所有类和函数默认是final修饰的，不能被继承，要被继承，要加\`open\`关键字\r
- 单例类：\`object\`,而不是\`class\`\r
- 匿名对象object\r
\r
\`\`\`\r
object : Person(){} //继承person的一个实例\r
class KtP{\r
    companion object{ //static的\r
        val info="hi"\r
    }\r
    inner class Body{ //必须加上inner关键字！才是内部类。否则是嵌入类，嵌入类只能父读子的数据，不能反！inner类可以\r
        \r
    }\r
    \r
}\r
\`\`\`\r
- java中的static在kt中是\`companion object\`\r
- 数据类(record)：\`data class\`.\r
- 重载运算：\`operator fun plus\`\r
\`\`\`\r
data class App(var num){\r
    operator fun plus(p2:App):Int{\r
        return num+p2.num\r
    }\r
}\r
\`\`\`\r
- 枚举比java多了class如：\`enum class Week{MON,TUE(var ind:Int)}\`，所以枚举里可以有属性了。\r
- 与之类似有sealed class\r
- \r
\`\`\`\r
sealed class Exam{\r
    object Fraction1:Exam()\r
    class Fraction4(val name:String):Exam()\r
}\r
\`\`\`\r
- 动态参数：\`vararg\`\r
\r
\`\`\`\r
class KtC<T>(vararg ojs:T){\r
    //out表示T只能被读取，不能修改。in只能被修改,不能返回\r
    var objArr:Array<out T>=ojs\r
}\r
//java中，协变：泛型的子类转成父类用extend，在kt中用out T声明\r
List<? extends Charsequence> l = new ArrayList<String>();\r
//java中，逆变：泛型的父类转成子类用super，在kt中用in T声明\r
List<? super String> lin = new ArrayList<Charsequence>();\r
\`\`\`\r
- 扩展函数：\`fun 类名.show(){ this....}\`给类加上show方法，亦可以给jdk的类加方法，你定义的会覆盖原方法优先级更高\r
- 还可以对泛型扩展函数，比如官网的let apply等\r
\r
\`\`\`\r
fun <T> T.show()=println("hi")\r
val String.myInf:String\r
    get()="Don"\r
\`\`\`\r
- 还可以扩展属性，如上面的val本质上是扩展了get方法\r
- 还可以对可空类型扩展如：\`fun String?.out1(df:String)=println(this?:df)\`\r
- 中缀表达式infix如:\`mapOf("a" to 1)\`就是Tuple类中定义的(中缀+扩展)\`public infix fun<A,B> A.to(that:B):Pair<A,B>=Pair(this,that)\` \r
- 还可以扩展父类：\`fun<E> Iterable<E>.randomVal()=this.shuffle().first()\`\r
- 一个长函数名在import中可用as来简写\r
- apply函数的参数的T.()->Unit,它还是个泛型类型的扩展\r
\`\`\`\r
public inline fun <T> T.apply(block: T.() -> Unit): T {\r
     block()\r
     return this\r
}\r
\`\`\`\r
- 自定义DSL：输入既有it又有this，输出为它本身\r
- 与之相似，我再给Context写一函数：\`public inline fun Context.app(block:Context.(String)->Uint){block("")return this}\`调用时Context().app{这里既有it（""），又有this（Context）}\r
- KT中调用java的类时，注意java中返回String的，在KT中默认是String!，不能为空。最好在KT中类型将其声明为String?\r
- 懒汉式双重检验的单例类：\r
\`\`\`\r
class Sing private constructor(){\r
    companion object{\r
        val instance: Sing by lazy(mode =LazyThreadSafetyMode.SYNCHRONIZED){Sing()}\r
    }\r
}\r
\`\`\`\r
- 在KT的文件上\`@file:JvmName("Bla")\`会将此kt编译后的java类命名为Bla。如果不加默认名为文件名+Kt\r
- 在KT的class中的val属性，默认是只对java提供get方法，若要直接读属性，则需要加上\`@JvmField\`\r
- 在KT中的函数中，如果入参有默认值，在java调用时则不能省略，要使java也能省略，需要方法上加\`@JvmOverloads\`\r
- companion object的方法，要被java调用，需要加上\`@JvmStatic\`注解 \r
- 仿RxJava \r
\`\`\`\r
fun main(){\r
    create{\r
        "Don"\r
        123\r
        5356.0f //只返回最后一行\r
    }.map{"你的值是$this"}.map{"[$this]"}.observe{println(this)}\r
}\r
class RJClass<T>(var valueItem:T) //主构造，接收传来的参数\r
inline fun <I> RJClass<I>.observe(observeAction:I.()->Unit)=observeAction(valueItem)\r
inline fun<I,O> RJClass<I>.map(mapAction:I.()->O)=RJClass(mapAction(valueItem))\r
inline fun<T> create(action:()->T)=RJCalss(action())\r
 \`\`\`\r
- 多行文本可以去除缩进如：\r
\r
\`\`\`\r
val inf="""\r
    你\r
    是\r
""".trimIndent()\r
\`\`\`\r
- if是表达式，when（+else）也是表达式\r
- 复杂for:\`for (i in 600 downTo 1 step2)\`\r
### 高级\r
- 委托接口实现by\r
\r
\`\`\`\r
interface IUSB(){ fun insert()}\r
class Mouse:IUSB{ override fun insert()=println("mouse")}\r
//把接口的实现委托给了isub参数，它自己就不用实现了\r
class CreateUsb(iusb:IUSB):IUSB by iusb\r
\`\`\`\r
- 委托属性(需要加::)来直接使用被委托者的set和get方法。委托属性的用途：类升级版本时要改属性名，但不能动老属性名.\r
- 加：：可以使用官方的委托，不加则需要自定义委托\r
\r
\`\`\`\r
class Sim{\r
    var resInfo="";\r
    var resData:String by ::resInfo\r
}\r
val rsp:String by lazy{\r
    requestDownload()\r
}//只有调用rsp变量时候才会加载requestDownload()方法\r
\`\`\`\r
- 在安卓中使用委托给TextView\r
\`\`\`\r
operator fun TextView.provodeDelegate(value:Any?, property:KProperty<*>) = object:ReadWriteProperty<Any?,String?>{\r
    override fun getValue(thisRef:Any?, property:Kproperty<*>):String? = text as String?\r
    override fun setValue(thisRef:Any?, property:Kproperty<*>, value:String?) {text=value}\r
}\r
\`\`\`\r
- 使用反射来实现String的代理\r
\`\`\`\r
private operator fun String.setvalue(thisRef:MainActivity3,property:KProperty<*>,value:String){ property.javaField?.isAccessible=true\r
property.javaField?.set(thisRef,value) } \r
private operator fun String.getvalue(thisRef:MainActivity3?,property:KProperty<*>)=this\r
class MainActivity3:AppCompactActivity(){\r
    var name1="is"\r
    var name2:String by name1\r
}\r
\`\`\`\r
- 观察者模式代理：\r
\r
\`\`\`\r
class Simplel { \r
    var name: String by Delegates.observable("Test") {\r
    prop, old, new -> println("旧值：$old -> 新值：$new") }\r
fun main() { \r
    val simplel = Simplel()\r
    simplel.name = "Updatel"\r
    simplel.name = "Update2"\r
\`\`\`\r
\r
### Lambda\r
- 给已有的类扩展函数\`val method2:Int.(Int)->String={"第一个\${this+it}"}\`\r
    是扩展了\`Int.method2\`\r
- 注意区别：\`fun m1(){}\`返回的是Unit和\`fun m2()={}\`返回的是函数\`()->Unit\`,要调用m2需要为\`m2()()\`第一个括号返回了一个函数，第二个括号为此函数的调用\r
- 高阶函数泛型：\`fun <T> T.myFun(mm:T.(Float)->Boolean){mm(33.1)}\`,第二个T.代表了可以在函数实现时可以用this来引入T，里边亦可写作\`this.mm(33.1)\`\r
- 函数的lambda调用有2种方式：1匿名：\`showAction{"$it"}\`,2写一个实现，用::调那个实现：\`showAction(::lamaImpl)\`\r
# Jetpack Compose\r
### 响应\r
1. 变量读写：\r
\r
\`\`\`\r
private val _a = mutableStateOf("")\r
val a:MutableState<String>\r
    @Composable get()=remember{\r
        _a\r
    }\r
\`\`\`\r
写的时候直接\`_a.value="xxx"\`\r
### 协程\r
1. \`GlobalScope.launch {}\`相当于新起了一个线程，而在\`runblocking{ launch{} lannch{}}\`是会起多个协程\r
2. runBlocking可以保证在协程作用域内的所有代码和子协程没有全部执行完之前一直阻塞当前线程。\r
3. suspend关键字，使用它可以将任意函数声明成挂起函数\`suspend fun xxx(){}\`\r
4. coroutineScope函数会继承外部的协程的作用域并创建一个子协程\`suspend fun printDot() = coroutineScope {launch{}}\`\r
5. 不过GlobalScope.launch和runBlocking函数是可以在任意地方调用的，coroutineScope函数可以在协程作用域或挂起函数中调用，而launch函数只能在协程作用域中调用。\r
6. GlobalScope.launch函数还是launch函数，它们都会返回一个Job对象，只需要调用Job对象的cancel()方法就可以取消协程了\r
7. 实际项目中比较常用的写法:\r
\`\`\`\r
val job = Job()\r
val scope = CoroutineScope(job)\r
scope.launch {    // 处理具体的逻辑 }\r
job.cancel()\r
\`\`\`\r
- lauch无执行结果返回值永远是一个Job对象，而async有返回一个Deferred对象，调用Deferred对象的await()方法来取结果\r
- withContext()函数是一个挂起函数，大体可以将它理解成async+await函数的一种简化版写法\`runBlocking{varr res=withContext(Dispatcher.Default){5+5};println(res)}\`\r
- 线程参数主要有以下3种值可选: Dispatchers.Default表示会使用一种默认低并发的线程策略(计算密集型任务)； Dispatchers.IO表示会使用一种较高并发的线程策略(IO密集型)；Dispatchers.Main则表示不会开启子线程，而是在Android主线程中执行代码，只能在Android项目中使用。\r
- suspendCoroutine函数几乎可以用于简化任何回调的写法\r
\`\`\`kt\r
val appService = ServiceCreator.create<AppService>()\r
appService.getAppData().enqueue(object : Callback<List<App>> {\r
    override fun onResponse(call: Call<List<App>>, response: Response<List<App>>) {        // 得到服务器返回的数据\r
    }\r
    override fun onFailure(call: Call<List<App>>, t: Throwable) {        // 在这里对异常情况进行处理\r
    }})\r
\`\`\`\r
# 代码\r
1. 实现：\`row_number() over(PARTITION BY cr.id ORDER BY cr.timestamp_utc DESC) rn\`\r
\r
\`\`\`kt\r
val recordsWithRowNumber = records.groupBy { it.id }\r
        .flatMap { (_, group) ->group\r
                .sortedByDescending { it.timestampUtc }\r
                .mapIndexed { index, record -> RecordWithRowNumber(record, index + 1) }\r
        }\r
\`\`\`\r
2. 实现where rn=1\r
\r
\`\`\`kt\r
val latestStudentsById = students\r
        .groupBy { it.id } \r
        .mapValues { (_, students) -> \r
            students.maxByOrNull { it.date }  // 取每个组中 date 最大的 Student\r
        }\r
        .values.filterNotNull() // 去除可能的 null 值\r
\`\`\`\r
`,X=`# 环境\r
1. [Android Studio 配置SDK踩坑](https://blog.csdn.net/qq_34124780/article/details/123783953)\r
2. [Android网络抓包工具--Chuck](https://www.jianshu.com/p/d562139a7b07)\r
# 布局\r
- 引用Sting资源：在java中\`R.string.xx\`在xml中引用\`@String/xxx\`\r
- 依赖自身jar包：\`dependencies { implementation fileTree(dir: 'libs', include: ['*.jar'])}\`\r
- 主类：\r
\r
\`\`\`kotlin\r
class SecondActivity : AppCompatActivity() {\r
    override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)        setContentView(R.layout.second_layout)\r
    }}\r
\`\`\`\r
对应的AndroidManifest.xml\r
\r
\`\`\`xml\r
<activity  android:name=".FirstActivity"  android:label="This is FirstActivity">\r
        <intent-filter>\r
            <action android:name="android.intent.action.MAIN"/>\r
            <category android:name="android.intent.category.LAUNCHER"/>\r
        </intent-filter>\r
</activity>\r
\`\`\`\r
- Activity类提供了一个finish()方法来销毁Activity\r
- 显式跳转到第二个Activity:\r
\`\`\`kt\r
button1.setOnClickListener {\r
    val intent = Intent(this, SecondActivity::class.java)\r
    startActivity(intent)\r
}\r
\`\`\`\r
- 隐式跳转到另一个声明了intent-filter带action和category的Activity\r
\r
\`\`\`kt\r
button1.setOnClickListener {\r
    val intent = Intent("com.example.activitytest.ACTION_START")\r
    intent.addCategory("com.example.activitytest.MY_CATEGORY") //android.intent.category.DEFAULT是一种默认的category，默认的可省略\r
    startActivity(intent)\r
}\r
\`\`\`\r
- 浏览器跳转\r
\`\`\`kt\r
button1.setOnClickListener {\r
    val intent = Intent(Intent.ACTION_VIEW)\r
    intent.data = Uri.parse("https://www.baidu.com")\r
    startActivity(intent)\r
}\r
\`\`\`\r
- ThirdActivity要响应网页跳转请求示例：\r
\`\`\`xml\r
<activity android:name=".ThirdActivity">\r
    <intent-filter tools:ignore="AppLinkUrlError">\r
        <action android:name="android.intent.action.VIEW" />\r
        <category android:name="android.intent.category.DEFAULT" />\r
        <data android:scheme="https" />\r
    </intent-filter>\r
</activity>\r
\`\`\`\r
- 拨号跳转\r
\`\`\`kt\r
val intent = Intent(Intent.ACTION_DIAL)\r
    intent.data = Uri.parse("tel:10086")\r
    startActivity(intent)\r
\`\`\`\r
- intent传递额外信息：\`intent.putExtra("extra_data", data)\`，接收额外信息\`intent.getStringExtra("extra_data")\`\r
- 第一个Activty要接收第二个的返回数据：第一个要改成\`startActivityForResult(intent, 1)\`1是请求码，唯一即可。第二个\r
\r
\`\`\`kt\r
override fun onBackPressed() { //或者btn.click\r
    val intent = Intent()\r
    intent.putExtra("data_return", "Hello FirstActivity")\r
    setResult(RESULT_OK, intent)\r
    finish()}\r
\`\`\`\r
然后第一个要处理返回的数据：\r
\`\`\`\r
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\r
    super.onActivityResult(requestCode, resultCode, data)\r
    when (requestCode) {\r
        1 -> if (resultCode == RESULT_OK) {\r
            val returnedData = data?.getStringExtra("data_return")\r
            Log.d("FirstActivity", "returned data is $returnedData")\r
        }    }}\r
\`\`\`\r
- Activity的生命周期：onCreate, onStart, onPause, onResume, onStop, onDestroy\r
- Activity被回收数据防丢：\r
\`\`\`kt\r
//1. 在销毁前\r
override fun onSaveInstanceState(outState: Bundle) {\r
    super.onSaveInstanceState(outState)\r
    val tempData = "Something you just typed"\r
    outState.putString("data_key", tempData)\r
}\r
//2. 在onCreate方法中添加：\r
if (savedInstanceState != null) {\r
        val tempData = savedInstanceState.getString("data_key")\r
        Log.d(tag, "tempData is $tempData")\r
    }\r
\`\`\`\r
- Activity的启动模式: standard、singleTop、singleTask和singleInstance。在哪指定：xml中\`<activity android:launchMode="singleTop">\`\r
1. 对于使用standard模式的Activity，系统不会在乎这个Activity是否已经在返回栈中存在，每次启动都会创建一个该Activity的新实例。\r
2. singleTop，在启动Activity时如果发现返回栈的栈顶已经是该Activity，则认为可以直接使用它，不会再创建新的Activity实例.不过当FirstActivity并未处于栈顶位置时，再启动FirstActivity还是会创建新的实例的。\r
3. singleTask，每次启动该Activity时，系统首先会在返回栈中检查是否存在该Activity的实例，如果发现已经存在则直接使用该实例，并把在这个Activity之上的所有其他Activity统统出栈，如果没有发现就会创建一个新的Activity实例。\r
4. singleInstance模式的Activity会启用一个新的返回栈来管理这个Activity（其实如果singleTask模式指定了不同的taskAffinity，也会启动一个新的返回栈）(用于跨app共用activity)\r
#### 在Activity中使用Menu\r
1. menu文件夹→New→Menu resource file，名叫'main'\r
2. 在main.xml中添加\r
\`\`\`xml\r
<menu xmlns:android="http://schemas.android.com/apk/res/android">\r
    <item        android:id="@+id/add_item"        android:title="Add"/>\r
    <item        android:id="@+id/remove_item"        android:title="Remove"/>\r
</menu>\r
\`\`\`\r
3. 在主类中重写onCreateOptionsMenu()方法\r
\`\`\`kt\r
override fun onCreateOptionsMenu(menu: Menu?): Boolean {\r
    menuInflater.inflate(R.menu.main, menu);    return true}\r
\`\`\`\r
4. 对于每个菜单的点击事件：\r
\`\`\`kt\r
override fun onOptionsItemSelected(item: MenuItem): Boolean {\r
    when (item.itemId) {\r
        R.id.add_item -> Toast.makeText(this, "You clicked Add",                             Toast.LENGTH_SHORT).show()\r
        R.id.remove_item -> Toast.makeText(this, "You clicked Remove",                                Toast.LENGTH_SHORT).show()\r
    }    return true\r
}\r
\`\`\`\r
- Kotlin中的javaClass表示获取当前实例的Class对象，相当于在Java中调用getClass()方法；而Kotlin中的BaseActivity::class.java表示获取BaseActivity类的Class对象，相当于在Java中调用BaseActivity.class。\r
- 隐藏默认ActionBar:\`supportActionBar?.hide()\`\r
- 一个layout.xml中包含另一个：\`<include layout="@layout/title">\r
- 或者把它填充到java中，再在xml中引入这个java\r
\`\`\`\r
//填充到java中\r
class TitleLayout(context: Context, attrs: AttributeSet) : LinearLayout(context, attrs) {\r
    init {\r
        LayoutInflater.from(context).inflate(R.layout.title, this)    }}\r
//引入\r
<com.example.uicustomviews.TitleLayout\r
        android:layout_width="match_parent"\r
        android:layout_height="wrap_content" />\r
\`\`\`\r
# 广播\r
### 分类：\r
1. 标准广播（normal broadcasts）fanout那种\r
2. 有序广播（ordered broadcasts）同一时刻只会有一个BroadcastReceiver能够收到这条广播消息，当这个BroadcastReceiver中的逻辑执行完毕后，广播才会继续传递\r
3. 注册BroadcastReceiver的方式一般有两种：在代码中注册（动态）和在AndroidManifest.xml中注册（静态）。\r
4. 实现：继承自BroadcastReceiver，并重写父类的onReceive()\r
\`\`\`kt\r
class MainActivity : AppCompatActivity() {\r
    lateinit var timeChangeReceiver: TimeChangeReceiver\r
    override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)\r
        setContentView(R.layout.activity_main)\r
        val intentFilter = IntentFilter()\r
        intentFilter.addAction("android.intent.action.TIME_TICK")\r
        timeChangeReceiver = TimeChangeReceiver()\r
        registerReceiver(timeChangeReceiver, intentFilter)\r
    }\r
\r
    override fun onDestroy() {\r
        super.onDestroy()\r
        //动态注册的BroadcastReceiver一定要取消注册才行!!\r
        unregisterReceiver(timeChangeReceiver)\r
    }\r
\r
    inner class TimeChangeReceiver : BroadcastReceiver() {\r
        override fun onReceive(context: Context, intent: Intent) {\r
            Toast.makeText(context, "Time has changed", Toast.LENGTH_SHORT).show()\r
        }    }}\r
\`\`\`\r
- 如果你想查看完整的系统广播列表: \`<Android SDK>/platforms/<任意android api版本>/data/broadcast_actions.txt\`\r
- Android 8.0系统之后，所有隐式广播都不允许使用静态注册的方式来接收了，[仅有特例](https://developer.android.google.cn/guide/components/broadcast-exceptions.html)可以。\r
- 静态接收开机广播示例：AndroidManifest.xml\r
\`\`\`xml\r
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />\r
<application>\r
    <receiver android:name=".BootCompleteReceiver"  android:enabled="true"  android:exported="true">\r
            <intent-filter>\r
                <action android:name="android.intent.action.BOOT_COMPLETED" />\r
            </intent-filter>\r
        </receiver>\r
<application>\r
\`\`\`\r
- 默认情况下我们发出的自定义广播恰恰都是隐式广播,调用setPackage()方法，指定这条广播是发送给哪个应用程序的，从而让它变成一条显式广播\r
\r
\`\`\`kt\r
button.setOnClickListener {\r
    val intent = Intent("com.example.broadcasttest.MY_BROADCAST")\r
    intent.setPackage(packageName) //当前应用程序的包名\r
    sendBroadcast(intent)}\r
\`\`\`\r
如果要发送有序广播上面改成\`sendOrderedBroadcast(intent, null)\`,要改变优先级需要在xml中的intent-filter中改成\`<intent-filter android:priority="100">\`\r
- 在java中\`abortBroadcast()\`可以这条广播截断。\r
# 数据库\r
### 文件\r
- Context类中提供了一个openFileOutput()方法，可以用于将数据存储到指定的文件中。所有的文件都默认存储到/data/data/<package name>/files/目录下。第二个参数是文件的操作模式，主要有MODE_PRIVATE和MODE_APPEND两种\r
\`\`\`kt\r
fun save(inputText: String) {\r
    try {\r
        val output = openFileOutput("data", Context.MODE_PRIVATE)\r
        val writer = BufferedWriter(OutputStreamWriter(output))\r
        writer.use {  //代码全部执行完之后自动将外层的流关闭\r
            it.write(inputText)\r
        }\r
    } catch (e: IOException) {        e.printStackTrace()    }\r
}\r
\`\`\`\r
- openFileInput()方法，用于从文件中读取数据\r
### sharedPreference\r
1. Context类中的getSharedPreferences()方法和 Activity类中的getPreferences()方法（自动将当前Activity的类名作为SharedPreferences的文件名）\r
\r
\`\`\`kt\r
btn.setOnClickListener {\r
    val editor = getSharedPreferences("data",Context.MODE_PRIVATE).edit()\r
    editor.putString("name", "Tom")\r
    editor.apply()\r
\`\`\`\r
# SQLite\r
1. SQLiteOpenHelper中有两个抽象方法：onCreate()和onUpgrade()和使用：getReadableDatabase()和getWritableDatabase()，数据库文件会存放在/data/data/<package name>/databases/目录下\r
- 它的数据类型很简单：integer表示整型，real表示浮点型，text表示文本类型，blob表示二进制类型。\r
- id自增：\`id integer primary key autoincrement,\`\r
\`\`\`kt\r
class MyDatabaseHelper(val context: Context, name: String, version: Int) :\r
        SQLiteOpenHelper(context, name, null, version) {\r
    override fun onCreate(db: SQLiteDatabase) {\r
        db.execSQL(createBookSql)\r
        Toast.makeText(context, "Create succeeded", Toast.LENGTH_SHORT).show()\r
    }\r
    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) { \r
        db.execSQL("drop table if exists Book")\r
        onCreate(db)\r
    }}\r
//使用：\r
val dbHelper = MyDatabaseHelper(this, "BookStore.db", 2)\r
val db = dbHelper.writableDatabase\r
db.insert("Book", null, values1)\r
 db.update("Book", values, "name = ?", arrayOf("The Da Vinci Code"))\r
 db.delete("Book", "pages > ?", arrayOf("500"))\r
 db.execSQL("insert into Book (name, author, pages, price) values(?, ?, ?, ?)",\r
    arrayOf("The Da Vinci Code", "Dan Brown", "454", "16.96")\r
)\r
val cursor = db.rawQuery("select * from Book", null)\r
\r
db.beginTransaction() // 开启事务\r
 db.setTransactionSuccessful() // 事务已经执行成功\r
 db.endTransaction() // 结束事务\r
\`\`\`\r
# ContentProvider\r
\r
### 运行时权限申请：\r
如：\` <uses-permission android:name="android.permission.CALL_PHONE" />\`\r
\r
\`\`\`kt\r
override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)\r
        setContentView(R.layout.activity_main)\r
        makeCall.setOnClickListener {\r
            if (ContextCompat.checkSelfPermission(this,Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {\r
                ActivityCompat.requestPermissions(this,arrayOf(Manifest.permission.CALL_PHONE), 1)\r
            } else {call() }\r
        }    }\r
\r
    override fun onRequestPermissionsResult(requestCode: Int,  permissions: Array<String>, grantResults: IntArray) {\r
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)\r
        when (requestCode) {\r
            1 -> {\r
                if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {call()} else {\r
                    Toast.makeText(this, "You denied the permission", Toast.LENGTH_SHORT).show()\r
                }            }        }    }\r
\r
    private fun call() {\r
        try { val intent = Intent(Intent.ACTION_CALL)\r
            intent.data = Uri.parse("tel:10086")\r
            startActivity(intent)\r
        } catch (e: SecurityException) {            e.printStackTrace()        }    }\r
\`\`\`\r
### Content\r
- 如果想要访问ContentProvider中共享的数据，就一定要借助ContentResolver类，可以通过Context中的getContentResolver()方法获取该类的实例\r
- ContentResolver中的增删改查方法需要包名和表名形成的URI\r
- \r
\`\`\`\r
val uri = Uri.parse("content://com.example.app.provider/table1")\r
//查\r
val cursor = contentResolver.query(uri,projection,selection,selectionArgs,sortOrder)\r
while (cursor.moveToNext()) {\r
    val column1 = cursor.getString(cursor.getColumnIndex("column1"))\r
    val column2 = cursor.getInt(cursor.getColumnIndex("column2"))\r
}\r
cursor.close()\r
//增\r
val values = contentValuesOf("column1" to "text", "column2" to 1)\r
contentResolver.insert(uri, values)\r
//更\r
val values = contentValuesOf("column1" to "")\r
contentResolver.update(uri, values, "column1 = ? and column2 = ?", arrayOf("text", "1"))\r
//删除\r
contentResolver.delete(uri, "column2 = ?", arrayOf("1"))\r
\`\`\`\r
- 创建自己的contentProvider:继承ContentProvider，getType()方法: 必须以vnd开头, 如果内容URI以路径结尾，则后接android.cursor.dir/；如果内容URI以id结尾，则后接android.cursor.item/。最后接上vnd.<authority>.<path>。\r
# 多媒体\r
### 通知\r
\r
\`\`\`kt\r
override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)\r
        setContentView(R.layout.activity_main)\r
        val manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager\r
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\r
            //8.0之后才有的通知渠道（分类）\r
            val channel = NotificationChannel("normal", "Normal",NotificationManager.\r
                IMPORTANCE_DEFAULT)\r
            manager.createNotificationChannel(channel)\r
        }\r
        //用户点击通知后要跳转到哪个activity: \r
        val pi = PendingIntent.getActivity(this, 0, Intent(this, MyNotificationActivity::class.java), 0)\r
        btn.setOnClickListener {\r
            val notification = NotificationCompat.Builder(this, "normal") .setContentTitle("This is content title")\r
                .setContentText("This is content text").setSmallIcon(R.drawable.small_icon)\r
                .setLargeIcon(BitmapFactory.decodeResource(resources, R.drawable.large_icon))\r
                .setContentIntent(pi) //要跳转到的intent\r
                .setAutoCancel(true) //当点击这个通知的时候，通知会自动取消\r
                .build()\r
            //发送通知\r
            manager.notify(1, notification)\r
        }\r
    }\r
\`\`\`\r
- 让状态栏上图标消失的方法有两种：一种是在NotificationCompat.Builder中再连缀一个setAutoCancel()方法，\r
- 一种是显式地调用NotificationManager的cancel()方法将它取消。\r
- 通知中要显示长文字：\`.setStyle(NotificationCompat.BigTextStyle().bigText("Learn how to build...))\`来代替setContentText()方法\r
- 通知中显示大图：\`.setStyle(NotificationCompat.BigPictureStyle().bigPicture(BitmapFactory.decodeResource(resources, R.drawable.big_image)))\`\r
### 摄像头\r
- 关联缓存目录: getExternalCacheDir()方法可以得到这个目录，具体的路径是/sdcard/Android/data/<package name>/cache\r
- 从Android 7.0系统开始，直接使用本地真实路径的Uri被认为是不安全的，而FileProvider则是一种特殊的ContentProvider可以选择性地将封装过的Uri，需要注册并在xml中提供路径 \r
1. AndroidManifest.xml的application中添加：并注意authorities需要与后面代码里FileProvider.getUriForFile()方法中的第二个参数一致\r
\`\`\`xml\r
<provider  android:name="androidx.core.content.FileProvider"\r
            android:authorities="com.example.cameraalbumtest.fileprovider"\r
            android:exported="false"  android:grantUriPermissions="true">\r
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS"\r
                android:resource="@xml/file_paths" />        </provider>\r
\`\`\`\r
- res目录→New→Directory，创建一个xml目录，接着右击xml目录→New→File，创建一个file_paths.xml文件\r
name属性的值可以随便填，path属性的值表示共享的具体路径(SD卡根目录为\`/\`)\r
\`\`\`xml\r
<?xml version="1.0" encoding="utf-8"?>\r
<paths xmlns:android="http://schemas.android.com/apk/res/android">\r
    <external-path name="my_images" path="/" /></paths>\r
\`\`\`\r
MainActivity中的代码\r
\r
\`\`\`kt\r
val takePhoto = 1\r
    lateinit var imageUri: Uri\r
    lateinit var outputImage: File\r
    override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)\r
        setContentView(R.layout.activity_main)\r
        takePhotoBtn.setOnClickListener {\r
            // 创建File对象，用于存储拍照后的图片\r
            outputImage = File(externalCacheDir, "output_image.jpg")\r
            if (outputImage.exists()) {                outputImage.delete()            }\r
            outputImage.createNewFile()\r
            imageUri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {\r
                FileProvider.getUriForFile(this, "com.example.cameraalbumtest.fileprovider", outputImage)\r
            } else {                Uri.fromFile(outputImage)            }\r
            // 启动相机程序\r
            val intent = Intent("android.media.action.IMAGE_CAPTURE")\r
            intent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri)\r
            startActivityForResult(intent, takePhoto)\r
        }    }\r
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\r
        super.onActivityResult(requestCode, resultCode, data)\r
        when (requestCode) {\r
            takePhoto -> {\r
                if (resultCode == Activity.RESULT_OK) {\r
                    // 将拍摄的照片显示出来\r
                    val bitmap = BitmapFactory.decodeStream(contentResolver.\r
                        openInputStream(imageUri))\r
                    imageView.setImageBitmap(rotateIfRequired(bitmap))\r
                }            }       }    }\r
//手机认为打开摄像头进行拍摄时手机就应该是横屏的，因此回到竖屏的情况下就会发生90度的旋转。\r
    private fun rotateIfRequired(bitmap: Bitmap): Bitmap {\r
        val exif = ExifInterface(outputImage.path)\r
        val orientation = exif.getAttributeInt(ExifInterface.TAG_ORIENTATION,\r
            ExifInterface.ORIENTATION_NORMAL)\r
        return when (orientation) {\r
            ExifInterface.ORIENTATION_ROTATE_90 -> rotateBitmap(bitmap, 90)\r
            ExifInterface.ORIENTATION_ROTATE_180 -> rotateBitmap(bitmap, 180)\r
            ExifInterface.ORIENTATION_ROTATE_270 -> rotateBitmap(bitmap, 270)\r
            else -> bitmap        }    }\r
\r
    private fun rotateBitmap(bitmap: Bitmap, degree: Int): Bitmap {\r
        val matrix = Matrix()\r
        matrix.postRotate(degree.toFloat())\r
        val rotatedBitmap = Bitmap.createBitmap(bitmap, 0, 0, bitmap.width, bitmap.height,\r
            matrix, true)\r
        bitmap.recycle() // 将不再需要的Bitmap对象回收\r
        return rotatedBitmap\r
    }\r
\`\`\`\r
- 从相册中选已有图片，修改MainActivity中的代码\r
\`\`\`kt\r
val fromAlbum = 2\r
override fun onCreate(savedInstanceState: Bundle?) {\r
        //上面调摄像头的代码...\r
        fromAlbumBtn.setOnClickListener {\r
            // 打开文件选择器\r
            val intent = Intent(Intent.ACTION_OPEN_DOCUMENT)\r
            intent.addCategory(Intent.CATEGORY_OPENABLE)\r
            // 指定只显示图片\r
            intent.type = "image/*"\r
            startActivityForResult(intent, fromAlbum)\r
        }    }\r
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\r
        super.onActivityResult(requestCode, resultCode, data)\r
        when (requestCode) {\r
            //上面调摄像头的代码...\r
            fromAlbum -> {\r
                if (resultCode == Activity.RESULT_OK && data != null) {\r
                    data.data?.let { uri ->  // 将选择的图片显示\r
                        val bitmap = getBitmapFromUri(uri)\r
                        imageView.setImageBitmap(bitmap)\r
                    }                }            }        }\r
    }\r
    private fun getBitmapFromUri(uri: Uri) = contentResolver\r
        .openFileDescriptor(uri, "r")?.use {BitmapFactory.decodeFileDescriptor(it.fileDescriptor) }\r
    ...\r
\`\`\`\r
# Service\r
- kotin开启线程的方式：\`thread{//逻辑}\`，android不允许跨线程操作UI，但可通过异步消息处理机制\r
- runOnUiThread()方法其实就是对异步消息处理机制进行了一层封装\r
\`\`\`kt\r
val updateText = 1\r
    val handler = object : Handler(Looper.getMaininLooper()) {\r
        override fun handleMessage(msg: Message) {\r
            // 在这里可以进行UI操作\r
            when (msg.what) {updateText -> textView.text = "Nice to meet you"}\r
        }    }\r
    override fun onCreate(savedInstanceState: Bundle?) {\r
        super.onCreate(savedInstanceState)\r
        setContentView(R.layout.activity_main)\r
        changeTextBtn.setOnClickListener {\r
            thread {\r
                val msg = Message()\r
                msg.what = updateText\r
                handler.sendMessage(msg) // 将Message对象发送出去  }        }    }\r
\`\`\`\r
- 为了方便操作使用AsyncTask\r
\`\`\`kt\r
//参数为：自定义参数，进度，结果\r
class DownloadTask : AsyncTask<Unit, Int, Boolean>() {\r
    override fun onPreExecute() {\r
        progressDialog.show() // 显示进度对话框\r
    }\r
    override fun doInBackground(vararg params: Unit?) = try {\r
        while (true) {\r
            val downloadPercent = doDownload() // 这是一个虚构的方法\r
            publishProgress(downloadPercent)\r
            if (downloadPercent >= 100) {                break            }\r
        }\r
        true\r
    } catch (e: Exception) {        false    }\r
    override fun onProgressUpdate(vararg values: Int?) {\r
        // 在这里更新下载进度\r
        progressDialog.setMessage("Downloaded \${values[0]}%")\r
    }\r
    override fun onPostExecute(result: Boolean) {\r
        progressDialog.dismiss()// 关闭进度对话框\r
        // 在这里提示下载结果\r
        if (result) {            Toast.makeText(context, "Download succeeded", Toast.LENGTH_SHORT).show()\r
        } else {            Toast.makeText(context, " Download failed", Toast.LENGTH_SHORT).show()        }\r
    }\r
\r
}\r
\`\`\`\r
### Service\r
- 需要new出来才会自动加到xml中\r
- 使用：\`class MyService : Service() {override fun onBind(intent: Intent): IBinder {}}\`\r
- onCreate()方法会在Service创建的时候调用，onStartCommand()方法会在每次Service启动的时候调用，onDestroy()方法会在Service销毁的时候调用\r
- 用Intent来启停service: \`val intent = Intent(this, MyService::class.java);startService(intent);  stopService(intent);\`\r
- Service也可以自我停止运行,Service内部调用\`stopSelf()\`\r
- 通过Intent与Activity的绑定\r
1. 在Service中创建绑定者：\r
\r
\`\`\`kt\r
class MyService : Service() {\r
    private val mBinder = DownloadBinder()\r
    class DownloadBinder : Binder() {\r
        fun startDownload() {Log.d("MyService", "startDownload executed")}\r
        fun getProgress(): Int {Log.d("MyService", "getProgress executed"); return 0}\r
    }\r
    override fun onBind(intent: Intent): IBinder { return mBinder }\r
}\r
\`\`\`\r
2. 在主类中绑定到一起\r
\`\`\`\r
lateinit var downloadBinder: MyService.DownloadBinder\r
    private val connection = object : ServiceConnection {\r
        override fun onServiceConnected(name: ComponentName, service: IBinder) {\r
            downloadBinder = service as MyService.DownloadBinder\r
            downloadBinder.startDownload()\r
            downloadBinder.getProgress()\r
        }\r
        override fun onServiceDisconnected(name: ComponentName) {        }\r
    }\r
\r
    override fun onCreate(savedInstanceState: Bundle?) {\r
        bindServiceBtn.setOnClickListener {\r
            val intent = Intent(this, MyService::class.java)\r
            bindService(intent, connection, Context.BIND_AUTO_CREATE) // 绑定Service\r
        }\r
        unbindServiceBtn.setOnClickListener {   unbindService(connection) // 解绑Service        }\r
    }\r
\`\`\`\r
- ServiceConnection的匿名类实现的onServiceConnected()方法方法会在Activity与Service成功绑定的时候调用\r
- 但实际上每个Service只会存在一个实例\r
- Service前台保活的方法：让它保在状态栏里\r
\`\`\`kt\r
class MyService : Service() {\r
    //省略其它代码......\r
    override fun onCreate() {\r
        super.onCreate()\r
        val manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager\r
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {\r
            val channel = NotificationChannel("my_service", "前台Service通知",NotificationManager.IMPORTANCE_DEFAULT)\r
            manager.createNotificationChannel(channel)\r
        }\r
        val intent = Intent(this, MainActivity::class.java)\r
        val pi = PendingIntent.getActivity(this, 0, intent, 0)\r
        val notification = NotificationCompat.Builder(this, "my_service").setContentTitle("This is content title")\r
            .setContentText("This is content text").setSmallIcon(R.drawable.small_icon)\r
            .setLargeIcon(BitmapFactory.decodeResource(resources, R.drawable.large_icon)).setContentIntent(pi).build()\r
        startForeground(1, notification)\r
    }\r
    //省略其它代码......}\r
\`\`\`\r
Android 9.0系统开始，使用前台Service必须在AndroidManifest.xml文件中进行权限声明\`<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\`\r
- Service中的代码都是默认运行在主线程当中的，如果在onStartCommand中用thread{}将会无法停止，所以最好用IntentService类\r
\`\`\`\r
class MyIntentService : IntentService("MyIntentService") {\r
     override fun onHandleIntent(intent: Intent?) {} //这里都是新线程的\r
}\r
\`\`\`\r
# 网络\r
### webview\r
1. 在activity_main.xml建一WebView控件，宽高均为\`match_parent\`，并声明联网\`<uses-permission android:name="android.permission.INTERNET" />\`\r
2. 在主类中\r
\`\`\`kt\r
webView.settings.javaScriptEnabled=true\r
webView.webViewClient = WebViewClient()\r
webView.loadUrl("https://www.baidu.com")\r
\`\`\`\r
### http请求\r
- ==声明联网==\r
\r
\`\`\`kt\r
private fun sendRequestWithHttpURLConnection() {\r
        // 开启线程发起网络请求\r
        thread {\r
            var connection: HttpURLConnection? = null\r
            try { val response = StringBuilder()\r
                val url = URL("https://www.baidu.com")\r
                connection = url.openConnection() as HttpURLConnection\r
                connection.connectTimeout = 8000\r
                connection.readTimeout = 8000\r
                val input = connection.inputStream\r
                // 下面对获取到的输入流进行读取\r
                val reader = BufferedReader(InputStreamReader(input))\r
                reader.use {reader.forEachLine {response.append(it)}}\r
                showResponse(response.toString())\r
            } catch (e: Exception) {  e.printStackTrace()} \r
            finally {connection?.disconnect()}\r
        }    }\r
    private fun showResponse(response: String) {\r
        runOnUiThread {\r
            // 在这里进行UI操作，将结果显示到界面上\r
            responseText.text = response        }    }\r
\`\`\`\r
### OKHttp\r
- 引包\`implementation 'com.squareup.okhttp3:okhttp:4.1.0'\`\r
\`\`\`kt\r
val client = OkHttpClient()\r
val request = Request.Builder().url("https://www.baidu.com").build()\r
val response = client.newCall(request).execute()\r
val responseData = response.body?.string()\r
//如果要提交表单\r
val requestBody = FormBody.Builder().add("username", "admin")\r
        .add("password", "123456").build()\r
val request = Request.Builder().url("https://www.baidu.com").post(requestBody).build()\r
\`\`\`\r
- 要让安卓访问明文http数据需要在清单中的application签加入\`android:networkSecurityConfig="@xml/network_config"\`\r
- network_config.xml文件中的内容\r
\`\`\`xml\r
<?xml version="1.0" encoding="utf-8"?>\r
<network-security-config>\r
    <base-config cleartextTrafficPermitted="true">\r
        <trust-anchors>   <certificates src="system" /></trust-anchors>\r
    </base-config>   </network-security-config>\r
\`\`\`\r
- 解析Json可以用官方自带的\`JSONArray\`和\`JSONObject\`如：\`val jsonArray = JSONArray(str);val jsonObject = jsonArray.getJSONObject(i);val id = jsonObject.getString("id")\r
\`\r
- 也可以用\`Gson().fromJson(str,Person::class.java)\`对于泛型：\r
\`\`\`kt\r
val typeOf = object : TypeToken<List<Person>>() {}.type\r
val people = gson.fromJson<List<Person>>(jsonData, typeOf)\r
\`\`\`\r
# JetPack\r
### ViewModel\r
- ViewModel的生命周期和Activity不同，它可以保证在手机屏幕发生旋转的时候不会被重新创建，只有当Activity退出的时候才会跟着Activity一起销毁。\r
- 引包：\`implementation "androidx.lifecycle:lifecycle-extensions:2.2.0"\`\r
- 比较好的编程规范是给每一个Activity和Fragment都创建一个对应的ViewModel:\`class MainViewModel : ViewModel() {var counter =0}\`\r
- 在主类中创建变量\`lateinit var viewModel: MainViewModel\`\r
- 在方法中调用：\`viewModel = ViewModelProvider(this).get(MainViewModel::class.java); viewModel.counter++\`\r
- 使用LiveData: 在ViewModel的子类中：\` val counter = MutableLiveData<Int>()\`\r
- LiveData的三大方法：getValue()方法用于获取LiveData中包含的数据；setValue()方法用于给LiveData设置数据，但是只能在主线程中调用；postValue()方法用于在**非主线程**中给LiveData设置数据，否则会发生崩溃。\r
- 任何LiveData对象都可以调用它的observe()方法来观察数据的变化\r
\`\`\`kt\r
viewModel.counter.observe(this, Observer { count ->\r
    //更新界面的操作：\r
     infoText.text = count.toString()\r
})\r
\`\`\`\r
- LiveData可以做map(computed)\r
- \r
\`\`\`kt\r
private val userLiveData = MutableLiveData<User>()\r
    val userName: LiveData<String> = Transformations.map(userLiveData) { user ->\r
        "\${user.firstName} \${user.lastName}"    }\r
\`\`\`\r
如果ViewModel中的某个LiveData对象是调用另外的方法获取的，那么我们就可以借助switchMap()方法，将这个LiveData对象转换成另外一个可观察的LiveData对象\r
\r
\`\`\`kt\r
private val userIdLiveData = MutableLiveData<String>()\r
val user: LiveData<User> = Transformations.switchMap(userIdLiveData) { userId ->   Repository.getUser(userId)    }\r
//调用下面这个方法的目的是为了调用setValue方法，从而触发数据变更\r
fun getUser(userId: String) {userIdLiveData.value = userId}\r
\`\`\`\r
### 任务调度WorkManager\r
- 为省电量WorkManager注册的周期性任务不能保证一定会准时执行，依赖：\`implementation "androidx.work:work-runtime:2.2.0"\`\r
1.  定义一个后台任务，成功就返回Result.success()，失败就返回Result.failure()\r
\`\`\`kt\r
class SimpleWorker(context: Context, params: WorkerParameters) : Worker(context, params) {  override fun doWork(): Result {}}\r
\`\`\`\r
2.  OneTimeWorkRequest.Builder构建单次运行的后台任务，PeriodicWorkRequest.Builder，可用于构建周期性运行的后台任务请求（运行周期间隔不能短于15分钟）\r
\`\`\`kt\r
val request = OneTimeWorkRequest.Builder(SimpleWorker::class.java).setInitialDelay(5, TimeUnit.MINUTES).addTag("simple").build()\r
val request2 = PeriodicWorkRequest.Builder(SimpleWorker::class.java, 15,\r
    TimeUnit.MINUTES).build()\r
WorkManager.getInstance(this).enqueue(request)\r
//取消任务的2种方式\r
WorkManager.getInstance(this).cancelAllWorkByTag("simple")\r
WorkManager.getInstance(this).cancelWorkById(request.id)\r
WorkManager.getInstance(this).cancelAllWork() //取消所有\r
\`\`\`\r
如果后台任务的doWork()方法中返回了Result.retry()，那么是可以结合setBackoffCriteria()方法来重新执行任务的，需要在build()之前加入：\`.setBackoffCriteria(BackoffPolicy.LINEAR, 10, TimeUnit.SECONDS)\`\r
3. 运行结果监听：\r
\`\`\`kt\r
WorkManager.getInstance(this)\r
    .getWorkInfoByIdLiveData(request.id)\r
    .observe(this) { workInfo ->\r
        if (workInfo.state == WorkInfo.State.SUCCEEDED) {\r
            Log.d("MainActivity", "do work succeeded")\r
        } else if (workInfo.state == WorkInfo.State.FAILED) {\r
            Log.d("MainActivity", "do work failed")        }    }\r
\`\`\`\r
- 开启一个链式任务:\`WorkManager.getInstance(this).beginWith(sync).then(t2).enqueue()\`\r
- ==WorkManager国产手机上可能会非常不稳定==\r
# 进阶\r
### 全局获取Context的技巧\r
1. MyApplication类继承自Application，并将清单中的主类改成这个\r
\`\`\`kt\r
class MyApplication : Application() {\r
    companion object {\r
        @SuppressLint("StaticFieldLeak")\r
        lateinit var context: Context    }\r
\r
    override fun onCreate() {\r
        super.onCreate()\r
        context = applicationContext    }}\r
\`\`\`\r
- 之后不管你想在项目的任何地方使用Context，只需要调用一下MyApplication.context就可以了\r
### Intent传对象\r
1. 让对象实现Serializable 接口即可或者用Parcel\r
\`\`\`\r
@Parcelize\r
class Person(var name: String, var age: Int) : Parcelable\r
\`\`\`\r
`,Z={props:["title"],data(){return{map1:{quasarIntro:V,linuxBasics:G,nodeJs:J,springboot:z,springSecurity:Q,groovy:K,kotlin:Y,android:X}}}};function rr(r,s,a,i,n,c){const o=N("q-markdown");return M(),j(W,{padding:""},{default:x(()=>[b(R,{to:"/",color:"primary",icon:"home"},{default:x(()=>s[0]||(s[0]=[L("返回")])),_:1}),b(o,{src:n.map1[a.title],toc:!0},null,8,["src"]),b($,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:x(()=>[b(R,{fab:"",icon:"keyboard_arrow_up",color:"accent"})]),_:1})]),_:1})}const ar=_(Z,[["render",rr]]);export{ar as default};
