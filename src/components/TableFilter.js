import React from 'react'

export const TableFilter = ({filter,setFilter}) => {
  return (
    <div> 
      <h3>Global filtering</h3>
      SEARCH:{' '}
      <input value={filter} onChange={e=>setFilter(e.target.value)}/>
    </div>
  )
}
