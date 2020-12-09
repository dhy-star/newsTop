import './myexports'

import header from '../components/header'
import newsList from '../components/newsList/index.js'
////收藏页面入口文件
(function(doc){
 let app = doc.querySelector('#app')
 let data = JSON.parse(localStorage.getItem('newsCollection'))||[]
 let headertpl = header.template({
    url:'/',
    urlDisplay:'block',
    title:'我的收藏',
    backDisplay:'none',
    collectionsDisplay:'none'
})
let newsListTpl = newsList.template({
    top:'.36'
})
let itemsTpl = newsList.newsTplTemplate(data)
 function render(){
     app.innerHTML = headertpl+newsListTpl
     let newsbox = document.querySelector('.news_box')
     newsbox.innerHTML = itemsTpl
     header.bindEvent()
     newsList.bindEvent(getNewsData)
     newsList.imgShow()
   
 }
 render()
 function getNewsData(options){
    let {index} = options
    localStorage.setItem('news',JSON.stringify(data[index]))
}
})(document)