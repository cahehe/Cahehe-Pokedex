import React, {useEffect, useMemo, useState} from 'react';
import {useTable} from 'react-table';

interface pokeData{
  pokedex_number: number,
  name: string,
  species: string,
  type_1: string,
  type_2: string
}

interface tableProps{
  result: pokeData[]
}

const Table = (props: tableProps) =>{ 

    const data : Array<any> = props.result
    
    
      const columns: Array<any> = useMemo(
        () => [
          {
            Header: "pokedex_number",
            accessor: "pokedex_number",
          },
          {
            Header: "name",
            accessor: "name",
          },
          {
            Header: "species",
            accessor: "species",
          },
          {
            Header: "type_1",
            accessor: "type_1",
          },
          {
            Header: "type_2",
            accessor: "type_2",
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