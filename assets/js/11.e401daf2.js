(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{271:function(t,a,e){"use strict";e.r(a);var s=e(19),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("h2",{attrs:{id:"常用-git-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令"}},[t._v("#")]),t._v(" 常用 Git 命令")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("[xxx] 均为可选参数")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git clone 仓库地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下载一个 Git 项目")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git config --list")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前的 Git 配置")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git config [--global] user.name "名称"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置提交代码时的用户名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git config [--global] user.email "邮箱"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置提交代码时的邮箱地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git add .")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("添加所有文件到暂存区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git commit -m "提交信息"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交暂存区到仓库区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git commit --amend -m "提交信息"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替换（无代码改动就重写）上一次 commit 信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有本地分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -r")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有远程分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有本地分支和远程分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -d 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新建一个分支，但依然停留在当前分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git checkout --orphan 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新建一个空白分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示变更的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git log")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前分支的版本历史")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git merge 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("合并指定分支到当前分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git remote -v")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示所有远程仓库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git pull [remote][branch]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取回远程仓库的变化，并与本地分支合并")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git push [remote][branch]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("上传本地指定分支到远程仓库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git push [remote] --force")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("强行推送当前分支到远程仓库，即使有冲突")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git stash")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("暂时将未提交的变化移除")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git stash pop")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取出未提交的变化")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"command"}},[t._v("查看完整版 Git 命令")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 命令大全 github"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"将代码提交到-github-的-gh-pages-分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将代码提交到-github-的-gh-pages-分支"}},[t._v("#")]),t._v(" 将代码提交到 github 的 gh-pages 分支")]),t._v(" "),e("ol",[e("li",[t._v("安装 "),e("code",[t._v("gh-pages")])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D gh-pages\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D gh-pages")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("在 "),e("code",[t._v("package.json")]),t._v(" 中添加如下脚本")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gh-pages -d dist -m deploy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build && npm run deploy"')]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("运行 "),e("code",[t._v("deploy")]),t._v(" 脚本")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" deploy\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm run deploy")]),t._v("\n")])])]),e("h2",{attrs:{id:"删除-git-中的所有提交历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-git-中的所有提交历史记录"}},[t._v("#")]),t._v(" 删除 Git 中的所有提交历史记录")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("以 "),e("code",[t._v("master")]),t._v(" 分支为例")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 orphan 分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加需要上传文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交更改")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除需要清空提交记录的分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前分支重命名为需要清空提交记录的分支名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制更新存储库")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);