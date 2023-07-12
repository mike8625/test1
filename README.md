# eslint 测试

测试了husky lint-stage 以及 commitlint

> 前提是你装了eslint

### 先装 husky

npm install husky -D

### 光装它不行, 他会检查所有没有提交的文件,即使不暂存的也检查,所以为了更方便,再装 lint-stage

npm i lint-staged -D

然后配置 package.json  跟对象里面加上这个
`

  "lint-staged": {
    "*.{js,vue}": [
      "eslint"
    ]
  }

`

执行 npx husky-init 初始化一下husky, 会在项目的根目录出现一个 .husky的目录

同时在package.json的script对象里面加上一个

`
"scripts": {
    // .....
    "prepare": "husky install"
},
`
> prepare 脚本是 npm 的特殊脚本之一，它在安装包之前执行. husky install 是 husky 提供的一个命令，它的作用是安装 husky 的 Git 钩子

执行 npx husky add .husky/pre-commit   添加一个钩子, 这时候会在.husky目录里面创建一个 pre-commit  这个pre-commit是规定的写法,就是在提交之前做处理, 其他的还有commit-msg, pre-push等,具体看文档.

找到这个pre-commit(有的文章说是pre-commit.sh) 添加如下代码, 让他执行以下对暂存文件的检查

echo "husky pre-commit" && npx lint-staged

这时候你随便改错一些代码,然后提交, 他就会报错, 阻止你提交

### 提交的时候,写的注释的规范

> 有的人提交随便写,或者不写注释,这个包可以帮你做规范限制

先安装两个包

npm install @commitlint/cli @commitlint/config-conventional -D

前者是对提交时候的注释进行判断处理的包,后面的是一个规则包,就是定义了一些规则,比如feat: 是新增功能 test: 是测试, 也就是注释必须有类型说明你这次提交是哪个方面的改动

执行命令 npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"  (在.husky目录自己手动添加好像也行...)

这样就添加了一个提交时候的钩子,判断提交的注释是否符合规范

> 有一点要注意就是 提交的时候,  比如feat 后面还有冒号和空格, 一开始我没打空格就报错...


### 这里只是简单的说明,具体的还是要看文档
