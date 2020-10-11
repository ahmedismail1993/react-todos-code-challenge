import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { DELETE_TODO,UPDATE_TODO} from '../../actions/Todo'
import styles from './styles.module.sass';

function TodoItem({todo,DELETE_TODO,UPDATE_TODO}) {
  const onDeleteTodo = (todo)=>{
    DELETE_TODO(todo)
  }
  const onToggleTodo=(todo)=>{
   
    UPDATE_TODO(todo)
  }
  const completedStyle = {color: todo.completed&&'#ccc',textDecoration:todo.completed&&'line-through'}
  return (

    <div className={styles.card}>
      <h2 className={styles.title}>
        <span style={completedStyle}>{todo.name}</span>
      </h2>
        {!todo.completed &&
         <button onClick={()=>onToggleTodo(todo)} className={styles.completeBtn}>Complete</button>}
      
      <button onClick={()=>onDeleteTodo(todo)} className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo:PropTypes.object
}
TodoItem.defaultProps={
  todo:{id:"", name:'', completed:false}
}
export default connect(null,{DELETE_TODO,UPDATE_TODO}) (TodoItem) ;
