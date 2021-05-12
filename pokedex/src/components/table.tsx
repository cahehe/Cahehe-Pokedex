import React, {useMemo} from 'react';
import {useTable} from 'react-table';


const Table = () =>{
    const data: Array<any> = useMemo(
        () => [
          {
            col1: 'One',
            col2: 'two',
          },
          {
            col1: 'three',
            col2: 'four',
          },
          {
            col1: 'five',
            col2: 'six',
          }
        ], []
      )
    
    
      const columns: Array<any> = useMemo(
        () => [
          {
            Header: "Col1",
            accessor: "col1",
          },
          {
            Header: "Col2",
            accessor: "col2",
          },
        ],[]
      )
    
      const tableInstance = useTable({columns, data})
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
    
      return (
        <div>      
          <table {...getTableProps()}>
            <thead>
              <tr>
                {
                  headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {
                        headerGroup.headers.map(column => (
                          <th {...column.getHeaderProps()}>                        
                            {column.render('Header')}
                          </th>
                        ))
                      }
                    </tr>  
                  ))}
              </tr>
            </thead>
    
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        return (                      
                          <td {...cell.getCellProps()}>                        
                            {cell.render('Cell')}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })}          
            </tbody>
          </table>
        </div>
      );
}

export default Table