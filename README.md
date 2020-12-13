# 关于newsTop<br>
来源：b站网课
样式：rem ,电脑上调试的时候如果窗口大小改变记得刷新<br>
核心：webpack,ejs-loader <br>
概况：一个移动端的小项目，实现了头条新闻条目展示，收藏，查看详情功能。以组件化的形式进行开发。
# 组件化思路<br>
主要是把html转化成模板，还要实现一个极简极简的模板引擎使得该模板是可配置的。ejs-loader可以帮助我实现这一效果<br>
例如 : main.tpl 文件中写一个 <h1>{{title}}</h1>，ejs-loader可以使该文件把改文件中的内容转换成一个函数<br>
import mytpl from './mian.tpl'<br>
我可以这样拿到这个函数。<br>
执行这个函数可以返回这个模板字符串 “<h1>{{title}}<h1>” 然后可以用正则匹配到改字符串中所有的“{{}}”，把它替换成我们的配置项<br>

import mytpl from './mian.tpl'<br>
export default {<br>
tpl(options){<br>
   return  tplReplace（mytpl,options）<br>
}<br>
}<br>
  


