import React, {useEffect, useMemo, useState} from 'react';
import {useTable} from 'react-table';
import usePokeData from './data';

function GetPoke(){
  const result: Array<any> = usePokeData();  
  console.log(result)
  return result
}

const Table = () =>{ 
  
  const data: Array<any> = usePokeData();
  // console.log(result)


    // const data: Array<any> = useMemo(
    //     () => [
    //       {
    //         col1: 'One',
    //         col2: 'two',
    //       },
    //       {
    //         col1: 'three',
    //         col2: 'four',
    //       },
    //       {
    //         col1: 'five',
    //         col2: 'six',
    //       }
    //     ], []
    //   )
    //const data: Array<any> = useMemo(() => GetPoke(),[]) //its returning an undefined value first so it gives an error.

    //const data: Array<any> = result
    
    
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