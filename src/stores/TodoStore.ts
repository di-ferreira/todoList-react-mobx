import { createContext } from 'react';
import { action, makeObservable, observable, computed } from 'mobx';
import { v4 } from 'uuid';

interface Todo{
    id:String;
    title:String;
    completed:Boolean;
}

class TodoStore {
    todos:Todo[] = [
        {id:v4(), title:'Item #1', completed:false},
        {id:v4(), title:'Item #2', completed:false},
        {id:v4(), title:'Item #3', completed:false},
        {id:v4(), title:'Item #4', completed:false},
        {id:v4(), title:'Item #5', completed:true},
        {id:v4(), title:'Item #6', completed:false},
    ];

    constructor() {
       makeObservable(this,{
           todos: observable,
           addTodo: action,
           toggleTodo: action,
           removeTodo: action,
           info: computed
       }) 
    }

    addTodo = (todo:Todo)=>{
        this.todos.push(todo);
    }

    toggleTodo = (id:String)=>{
        this.todos = this.todos.map(todo=>{
          if (todo.id === id) {
              return{
                  ...todo,
                  completed: !todo.completed
              }
          } 
          return todo; 
        });
    }

    removeTodo = (id:String)=>{
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    get info(){
        return{
            total: this.todos.length,
            completed:this.todos.filter(todo=> todo.completed).length,
            notCompleted:this.todos.filter(todo=> !todo.completed).length
        }
    }
}

export default createContext(new TodoStore());