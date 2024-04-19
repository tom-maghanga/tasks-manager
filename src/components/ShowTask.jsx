import React from 'react'

function ShowTask() {
    const tasks = [
        {id : 1001, name : "Task A", time : "04:00:00 AM"},
        {id : 1001, name : "Task B", time : "04:00:00 AM"},
        {id : 1001, name : "Task C", time : "04:00:00 AM"}
    ]
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'></span>
                <span className='count'></span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
            {tasks.map((task) =>(
                <li>
                <p>
                     <span className='name'>{task.name}</span>
                     <span className='time'>{task.time}</span>
                 </p>
                 <i className='bi bi-pencil-square'></i>
                 <i className='bi bi-trash'></i>
                </li>
            ))}
           
        </ul>
    </section>
  )
}

export default ShowTask