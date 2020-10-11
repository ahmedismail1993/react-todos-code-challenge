import React,{useState} from 'react';
import {connect} from 'react-redux'
import { v4 as uuid } from 'uuid';

import styles from './styles.module.scss';

// actions
import {SET_TODO} from '../../actions/Todo'

function TodoForm({SET_TODO}) {
  const [todo,setValue]=useState({name:"",id:"",completed:false})
 const handleSubmit=(e)=>{
    e.preventDefault()
    const myTodo = {...todo,id:uuid()}
    SET_TODO(myTodo)
    setValue(()=>{
      return{
        name:"",
        id:"",
        completed:false
      }
    })

  }
  const handleChange = e=>{
    const {value} =e.target;
    setValue((todo=>{
      return{
        ...todo,
        name:value
      }
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        value={todo.name}
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        onChange={handleChange}
      />
    </form>
  );
}


export default connect(null,{SET_TODO})(TodoForm);
