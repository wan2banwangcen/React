import React, { Component } from 'react';
import store from './store';
class TodoList extends Component {
    constructor(){
        super();
        this.state ={
            list: store.getState().TodoList.list
        }
        store.subscribe(()=>{
            this.setState({
                list: store.getState().TodoList.list
            })
        })
    }
    handleAdd =(e)=>{
        if(e.keyCode === 13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            });
            console.log(e.target.value);
            e.target.value = '';
            
        } 
    }
    handleDel =(index,e)=>{
        store.dispatch({
            type : 'del_item',
            value:index
        })
        console.log(index);
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type="text" /><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}&nbsp;&nbsp;&nbsp;<button onClick={this.handleDel.bind(this,index)}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
