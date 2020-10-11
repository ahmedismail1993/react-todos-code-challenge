import React from 'react';
import TodoItem from '../TodoItem';
import {connect} from 'react-redux'
function TodoList({todos}) {
  
  return (
    <div>
      {todos.map(todo=>(
      <TodoItem key={todo.id} todo={todo} />
      ))}

    </div>
  );
}

const mapStateToProps = (state)=>{
  
    return{
      todos:state.todoReducer.todoList
    }
}

export default connect(mapStateToProps)(TodoList) ;
