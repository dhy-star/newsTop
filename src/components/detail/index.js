import './main.css'
import tpl from './index.tpl'
import {tplReplace} from '../../libs/utils'
export default{
    name:'detail',
    template(option){
        return tplReplace(tpl,option)
    }
}