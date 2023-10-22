import { useCallback } from "react"
import { TableContainer, Table as MUITable, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"
import { DataAction, IDataActionProps } from "../action/DataAction"

interface IColumn {
  dataIndex: string
  title: string
  key?: string
}

export interface ITableProps {
  columns: IColumn[]
  dataSource: Record<string, any>[]
  rowKey?: string
  rowActions?: IDataActionProps[]
}

export const Table = ({
  columns=[],
  dataSource=[],
  rowKey="id",
  rowActions=[],
}: ITableProps) => {
  const renderDataCell = useCallback((rowData: Record<string, any>) => {
    return (
      columns.map(column => (
        <TableCell key={column.key || column.dataIndex}>{rowData[column.dataIndex]}</TableCell>
      ))
    )
  }, [columns])

  const renderActionCell = useCallback((rowData: Record<string, any>) => {
    return rowActions.length ? (
      <TableCell>
        {rowActions.map((i, index) => <DataAction key={index} {...i} context={rowData} />)}
      </TableCell>
    ) : null
  }, [rowActions])

  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.key || column.dataIndex}>{column.title}</TableCell>
            ))}
            {rowActions.length ?
              <TableCell>Actions</TableCell>
            : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map(rowData => (
            <TableRow key={rowData[rowKey]}>
              {renderDataCell(rowData)}
              {renderActionCell(rowData)}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}