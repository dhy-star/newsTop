import {ajax} from '../libs/http'
export const getNewsList = (params)=>{
    //field
   return ajax('Juhe/getNewsList','POST',params).then(res=>{
       return cutting(10,res.result.data)
   })
}
const cutting = (num,array) =>{
    let newArray = []
    let child =[]
    for(let i = 0;i<array.length;i++){
          
          child.push(array[i])
          if((i+1)%num===0||i===array.length-1){
              newArray.push(child)
              child = []
          }
    }
    return newArray
}