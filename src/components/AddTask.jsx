import React from 'react'

function AddTask({taskList, setTaskList}) {
    const handleSumbit = (e) =>{
        e.preventDefault();

        const date = new Date();
        const newTask = {id : date.getTime(), name : e.target.task.value, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`};
        setTaskList([...taskList, newTask]);
        e.target.task.value = "";
    }


  return (
    <section className='addTask'>
        <form onSubmit={handleSumbit}>
            <input type='text' name='task' autoComplete='off' placeholder='add task' maxLength={25}/>
            <button type='submit'> Add</button>
        </form>
    </section>
  )
}

export default AddTask