import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import TodoStore from '../../stores/TodoStore';


const TodoList:React.FC = ()=> {

  const todoStore = useContext(TodoStore);
  const { toggleTodo,todos,removeTodo,info } = todoStore;
  
  return (
    <>
      <div className="alert alert-dark">
        <div className="d-inline col-4">
          Total de tarefas: &nbsp; 
          <span className="badge badge-info"> { info.total } </span>
        </div>
        <div className="d-inline col-4">
          Concluídas: &nbsp; 
          <span className="badge badge-success"> { info.completed } </span>
        </div>
        <div className="d-inline col-4">
          Pendentes: &nbsp; 
          <span className="badge badge-warning"> { info.notCompleted } </span>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h3>Lista de Tarefas</h3>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th>Título</th>
                <th>Concluída?</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo=>(
                <tr>
                  <td> { todo.title } </td>
                  <td> { todo.completed
                    ? <span className="badge badge-success"> Sim </span>
                    : <span className="badge badge-danger"> Não </span>
                  } 
                  </td>
                  <td>
                    <button 
                      className="btn btn-sm btn-info" 
                      onClick={()=>toggleTodo(todo.id)}> 
                      Toggle 
                    </button>
                    <button 
                      className="btn btn-sm btn-danger ml-2" 
                      onClick={()=>removeTodo(todo.id)}> 
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default observer(TodoList);
