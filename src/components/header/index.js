import tpl from './index.tpl'
import {tplReplace} from '../../libs/utils'
import './index.css'
export default {
    name:'header',
    template(options){
        return tplReplace(tpl,options)
    },
    bindEvent(){
        let jumpFunction = {
            back:function(){
                let url = localStorage.getItem('urlpath')
                window.location.href =url
            },
            collection:function(){
                localStorage.setItem('urlpath',location.pathname)
                window.location.href  = 'collections.html'
            }
        }
        let back = document.querySelector('.back')
        let collection = document.querySelector('.collections')
        back.addEventListener('click',jump.bind(null,'back'),false)
        collection.addEventListener('click',jump.bind(null,'collection'),false)
       // collection.addEventListener('click',jump,false)
        
        function jump(key){
            jumpFunction[key]()
        }
    }
}