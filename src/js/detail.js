import './myexports'
import header from '../components/header'
import detail from '../components/detail'
import collectionbar from '../components/collectionbar'
//页面详情入口文件
(function(doc){
    let newsData =JSON.parse(localStorage.getItem('news'))

 let app = doc.querySelector('#app')
 let headertpl = header.template({
     url:'/',
    title:'新闻详情',
    urlDisplay:'none',
    backDisplay:'block',
    collectionsDisplay:'none'
})
let collectionbartpl = collectionbar.template({})
let detailtpl = detail.template({
    url:newsData.url
})
console.log(detailtpl)
 function render(){
    
     console.log(header)
     app.innerHTML = headertpl+detailtpl
     let headerdom = document.querySelector('.header')
     headerdom.innerHTML+=collectionbartpl
     header.bindEvent()
     collectionbar.bindEvent()
 }
 render()
})(document)