import './myexports'
import header from '../components/header/index.js'
import navBar from '../components/navBar/index.js'
import newsList from '../components/newsList/index.js'
import loading from '../components/loading/index.js'
import {getNewsList} from '../libs/api'
import {scorllToButtom} from '../libs/utils'
//首页入口文件
(function(doc){
    let app = doc.querySelector('#app')
    let pageNum = 0
    let data ={}
    let type = ''
    let loadingtpl = loading.template({top:.61})
        let headertpl = header.template({
            url:'/',
            title:'今日头条',
            urlDisplay:'none',
            backDisplay:'none',
            collectionsDisplay:'inline-block'
        })
        let navbartpl = navBar.template()
        let newsListTpl = newsList.template({
            top:'.61'
        })
    function render(){
        window.addEventListener('scroll',scorllToButtom.bind(null,getMoreList),false)
        app.innerHTML= headertpl+navbartpl+newsListTpl
        navBar.eventBind(setType)
        newsList.bindEvent(getNewsData)
        header.bindEvent()
    }
    render()
    let newsbox = document.querySelector('.news_box')
    setType('top')
   function setType(types){
       type=types
       pageNum=0
    newsbox.innerHTML = loadingtpl
       if(data[types]){
        newsbox.innerHTML =  newsList.newsTplTemplate(data[types][pageNum],pageNum)
        newsList.imgShow()
        return
       }
       getNewsList({field:types}).then(res=>{
           data[type] = res
           newsbox.innerHTML =  newsList.newsTplTemplate(res[pageNum],pageNum,loadingtpl)
           newsList.imgShow()
       })
   }
  function getMoreList(){
      if(pageNum===data[type].length-1)return
      pageNum+=1
    if(data[type]){
        newsbox.innerHTML +=  newsList.newsTplTemplate(data[type][pageNum],pageNum)
        newsList.imgShow()
        return
       }
       getNewsList({field:types}).then(res=>{
           data[type] = res
           newsbox.innerHTML +=  newsList.newsTplTemplate(res[pageNum],pageNum,loadingtpl)
           newsList.imgShow()
       })
  }

  function getNewsData(options){
      let {index,pageNum} = options
      localStorage.setItem('news',JSON.stringify(data[type][pageNum][index]))
  }
})(document)
