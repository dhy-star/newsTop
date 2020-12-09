import box from './tpl/box.tpl'
import item from './tpl/item.tpl'
import {tplReplace} from '../../libs/utils'
import {NEWS_TYPE} from '../../config/data'

import './main.css'
export default{
    name:'navBar',
    template(){
        let itemList = ''
        NEWS_TYPE.forEach((itemBar,index) => {
            itemList+= tplReplace(item,{title:itemBar.title,isActive:index===0?'active':'',type:itemBar.type})
        });
        return tplReplace(box,{itemList:itemList},this)
    },
    eventBind(setType){
        let items = document.querySelectorAll('.item')
       function add(e){
           items.forEach(element=>{
             if(element.classList.contains('active')){
                 element.classList.remove('active')
             }
           })
           e.target.classList.add('active')
           let type = e.target.getAttribute('data-type')
           setType(type)
       }
     
       
      
        document.querySelector('.scorll').addEventListener('click',add,false)
    }


}