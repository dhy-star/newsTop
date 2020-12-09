import listbox from './tpl/listbox.tpl'
import newsTpl from './tpl/newsTpl.tpl'
import newsTpl01 from './tpl/newsTpl01.tpl'
import newsTpl02 from './tpl/newsTpl02.tpl'
import newsTpl03 from './tpl/newsTpl03.tpl'
import {getItemNode,tplReplace} from '../../libs/utils'
import './main.css'
export default {
    name: 'newsList',
    template(options) {
        return tplReplace(listbox, options)
    },
    newsTplTemplate(data,pageNum) {
      
        let newsListTplString = ''
        let tpl = undefined

        
            data.forEach((item, index) => {
                if (item.thumbnail_pic_s03) {
                    tpl = newsTpl03
                } else if (item.thumbnail_pic_s02) {
                    tpl = newsTpl02
                } else if (item.thumbnail_pic_s) {
                    tpl = newsTpl01
                }else if(!item.thumbnail_pic_s){
                    tpl = newsTpl
                }
                newsListTplString +=  tplReplace(tpl,{
                    page:pageNum,
                    index,
                    title: item.title,
                    thumbnail_pic_s: item.thumbnail_pic_s,
                    thumbnail_pic_s02: item.thumbnail_pic_s02,
                    thumbnail_pic_s03: item.thumbnail_pic_s03,
                    category:item.category,
                    date:item.date,
                    
                })
            })
        return newsListTplString
    },
    //图片加载
    imgShow(){
         let imgArray = document.querySelectorAll('img')
         Array.prototype.forEach.call(imgArray,img=>{
             img.onload = function(){
                 img.style.opacity = 1
             }
         })
    },
    //点击新闻
    bindEvent(getNewsData){
        let newsbox = document.querySelector('.news_box')
        newsbox.addEventListener('click',show.bind(this,getNewsData),false)
        function show(getNewsData){
            let news = getItemNode(arguments[1].target)
            let options = {
                index:news.dataset.index,
                pageNum:news.dataset.page
            }
            getNewsData(options)
            window.location.href =`detail.html`
            localStorage.setItem('urlpath',location.pathname)
        }
    }
}