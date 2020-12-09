import $ from 'jquery'
import {BASE_URL} from '../config/index'
export const ajax = function(url,type,data){
    return new Promise((resolve,reject)=>{
        $.ajax({
              url:BASE_URL+url,
              dataType:"JSON",
              type:type,
              data:data,
              success(data){
                  resolve(data)
              },
              error(err){
                  reject(err)
              }
        })
    })
}

