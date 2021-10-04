import React,{useMemo} from 'react'
import { TableFilter} from './TableFilter'

import 
{
  useTable,useGlobalFilter,useSortBy
} 
from 'react-table'

import { Data } from './Data'
import { COLUMNS } from './columns'


export const Table2 = () => {




  const data=useMemo(()=>Data,[])
  const columns=useMemo(()=>COLUMNS,[])




  const {getTableBodyProps,getTableProps,footerGroups,headerGroups,rows,prepareRow,state,setGlobalFilter} =useTable({data,
    columns},useGlobalFilter,useSortBy)

   const { globalFilter }=state

  return (
    
    <div>
      <br/>
      <br/>
      <br/>
      <TableFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <br/>
     <table {...getTableProps}>




     <thead>
          {
            headerGroups.map((headerGroups)=>
            <tr {...headerGroups.
            getHeaderGroupProps()}>
              {
                headerGroups.headers.map(column=>(
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' sort-dsc'
                        : ' sort-asc'
                      : ''}
                  </span>
                    </th>
                ))}
          </tr>
            )}

        </thead>

     <tbody {...getTableBodyProps}>
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
        footerGroups.map((group)=>
          <tr {...group.getFooterGroupProps()}>
            {
              group.headers.map((column)=>(
                <td {...column.getFooterProps()} >{column.render('Footer')}</td>
              ))
            }
          </tr>
        )
      }
    </tfoot>
     </table>
    </div>
  )
}


