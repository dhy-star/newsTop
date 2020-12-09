import loading from './index.tpl'
import './index.css'
import {tplReplace} from '../../libs/utils'
export default{
    name:'loading',
    template(option){
       return  tplReplace(loading,option)
    }
}