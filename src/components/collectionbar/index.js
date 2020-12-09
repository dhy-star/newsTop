import tpl from './index.tpl'
import {tplReplace,getIndex} from '../../libs/utils'
import './main.css'
export default{
    name:'collectionBar',
    template(options){
        return tplReplace(tpl,options)
    },
    bindEvent(){
       let bar = document.querySelector('.collectionbar')
       bar.addEventListener('click',addOrRemoveNews,false)
       if(!JSON.parse(localStorage.getItem('newsCollection'))){
        localStorage.setItem('newsCollection',JSON.stringify([]))
       }
       let newsCollection = JSON.parse(localStorage.getItem('newsCollection'))//取收藏夹
       let news = JSON.parse(localStorage.getItem('news'))
       init()
       function addOrRemoveNews(){
        let newsCollection = JSON.parse(localStorage.getItem('newsCollection'))//取收藏夹
        console.log(newsCollection)
          if(haveNews(newsCollection,news)){
              //有
              console.log('有',getIndex(news,newsCollection,'uniquekey'))
              newsCollection.splice(getIndex(news,newsCollection,'uniquekey'),1)
           
              bar.style.background='white'
          }else{
             //没有
             console.log('没有')
             newsCollection.push(news)
             bar.style.background='yellow'
          }
          
          localStorage.setItem('newsCollection',JSON.stringify(newsCollection))
       }
       //初始化
       function init(){
          //如果收藏夹里有该新闻，把颜色变黄 校验值：uniquekey
          console.log('init',newsCollection)
          if(haveNews(newsCollection,news)){
              bar.style.background='yellow'
          }else{
              bar.style.background='white'
          }
       }
       //判断有无新闻
       function haveNews(newsCollection,news){
        if(getIndex(news,newsCollection,'uniquekey')!==-1){
            return true
        }else{
            return false
        }
       }
    }
}