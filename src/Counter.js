import React, { Component } from 'react';
import store from './store';
//store 连接 action和Reducer的一个对象
//action是一个对象，描述state的变化
//Reducer 定义了如何响应action描述的state的变化，并发送到store
class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd = ()=>{
        let action ={type : 'add',value:10};
        store.dispatch(action);
        console.log(store.getState());
    }
    handleDec = ()=>{
        let action ={type : 'DEC'};
        store.dispatch(action);
        console.log(store.getState());
    }
    handleOdd = ()=>{
        let action = {type : 'odd'};
        if((this.state.num) % 2 !==0){
            store.dispatch(action);
        }
    }
    handleTime =()=>{
        let action = {type :'time'};
        setTimeout(function(){
            store.dispatch(action);
        },2000);
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <button onClick={this.handleTime}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
