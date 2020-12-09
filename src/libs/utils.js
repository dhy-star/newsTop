
export function tplReplace(template,templateObject,tpl){
  let templateString = template()
  return templateString.replace(/\{\{(.*?)\}\}/g,(node,key)=>{
      return templateObject[key.trim()]
  })
}
/**滚动条触底 */
export function scorllToButtom(callback){
  let doc = document.documentElement||document.body
  if(doc.scrollTop+ doc.clientHeight === doc.scrollHeight){
    callback()
  }
}
/**拿到新闻的div */
export function getItemNode(target){
  while (target=target.parentNode) {
    if(target.classList.contains('news')){
      return target
    }
  }
}
//获取下标-也可判断收藏夹里有无新闻
export function getIndex(news,collections,keystring){
  if(collections.length===0)return -1
    for(let i =0;i<collections.length;i++){
         if(news[keystring]===collections[i][keystring]){
           return i
         }
    }
    return -1
}
