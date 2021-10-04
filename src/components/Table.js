import React,{useMemo} from 'react'
import {useTable} from  'react-table'
import { Data } from './Data'
import './table.css'
import  {COLUMNS} from './columns'


export const Table = () => {


   const data=useMemo(()=>Data,[])
   const columns=useMemo(()=>COLUMNS,[])





  const tableinstance=useTable({
      data,
      columns
  })




const {getTableProps,getTableBodyProps,footerGroups,headerGroups,rows,prepareRow} =tableinstance




  return (
    <div> 
      <h4>React DataTable</h4>
      <div className="row" >
        <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((headerGroups)=>
            <tr {...headerGroups.
            getHeaderGroupProps()}>
              {
                headerGroups.headers.map(column=>(
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
          </tr>
            )}

        </thead>


        <tbody {...getTableBodyProps()}>
          {
            rows.map((row)=>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell)=>{
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                  }
                </tr>
              )
            })
          }


          
        </tbody>

        <tfoot>
      {
        footerGroups.map((group)=>(
          <tr {...group.getFooterGroupProps()}>
            {
              group.headers.map((column)=>(
                <td {...column.getFooterProps()} >{column.render('Footer')}</td>
              ))
            }
          </tr>
        ))
      }
    </tfoot>
      </table>
    </div>
  </div>

  )
}
