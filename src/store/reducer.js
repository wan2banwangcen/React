import {combineReducers} from 'redux';
let counter = (state = 12,action)=>{
    switch(action.type){
        case 'add':
            return state + action.value;
        case 'DEC':
            return state - 1;
        case 'odd' :
            return state + 1;
        case 'time' :
            return state + 1;
        default:
            return state;
    }   
}
let initValue = {
    list:[1,2,3]
}
let TodoList = (state = initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));//先把state解析成一个字符串，在转变成一个JSON对象
            // let obj = Object.assign({},state,{a:100})
            newState.list.push(action.value);
            return newState;
        case 'del_item' :
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.list.splice(action.value,1);
            return newState2;
        default :
            return state;
    }   
}

export default  combineReducers({
    counter,
    TodoList
})