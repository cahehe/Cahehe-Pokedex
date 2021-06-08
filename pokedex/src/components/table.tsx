import { useMemo } from 'react';
import {useTable} from 'react-table';
import {Link} from 'react-router-dom';

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

    //const data : Array<any> = props.result
    
    const data: Array<any> = useMemo(() => props.result,[props.result])
    
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

    //console.log(rows[0])
  
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
                    console.log(row)
                    //let name = row['name']
                      return (                      
                        <td {...cell.getCellProps()}> 
                          {/* need to encode incase we have percentage sign                            */}
                          <Link to = {'/' +  encodeURIComponent(row.values.name)}>                              
                            {cell.render('Cell') }
                          </Link>                        
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