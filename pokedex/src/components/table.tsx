import { useMemo, useCallback } from 'react';
import {useTable, useBlockLayout} from 'react-table';
import {Link} from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import "./table.css"

interface pokeData{
  pokedex_number: number,
  name: string,
  species: string,
  type_1: string,
  type_2: string
}

interface tableProps{
  result: pokeData[],
  className: string
}

const Table = (props: tableProps) =>{ 

    
    const data: Array<any> = useMemo(() => props.result,[props.result])
    
    //save memoized value. Recommended by react-table docs
    //if table rerenders we don't have to recalculate logic
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
  
    const tableInstance = useTable({columns, data}, useBlockLayout)
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      totalColumnsWidth,
      prepareRow,
    } = tableInstance    


    //save memoized function
    const Row = useCallback(({index, style}) => {
      const row = rows[index]
        prepareRow(row)
        return (
          <div {...row.getRowProps({style})}  className = "rows">          
            {
              row.cells.map(cell => {              
                return (                      
                  <div {...cell.getCellProps()} className = "all"> 
                    {/* need to encode incase we have percentage sign*/}                    
                    <Link to = {'/' +  encodeURIComponent(row.values.name)}>                                                  
                      {cell.render('Cell') }
                    </Link>                        
                  </div>
                )
              })
            }
          </div>
        )
      }, [prepareRow,rows]
    )   
  
    return (           
      <div {...getTableProps()} className = "table">
        <div>              
          {
            headerGroups.map(headerGroup => (
              <div {...headerGroup.getHeaderGroupProps()} id = "header">
                {
                  headerGroup.headers.map(column => (
                    <div {...column.getHeaderProps()}>                        
                      {column.render('Header')}
                    </div>
                  ))
                }
              </div>  
            ))}              
        </div>

        <div {...getTableBodyProps()}>
          <FixedSizeList                              
            height = {800}
            itemCount = {rows.length}
            itemSize = {100}
            width={totalColumnsWidth + 680}
          >
            {Row}
          </FixedSizeList>                   
        </div>
      </div>      
    );
}

export default Table