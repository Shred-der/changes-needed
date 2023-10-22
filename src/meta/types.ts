import { ReactNode } from 'react'
import { IDataActionProps } from '~/components/action/DataAction'
import { IInputType } from '~/components/form/types'
import { ITableProps } from '~/components/table/Table'
import { RootState } from '~/store/store'

interface IListMeta {
  columns: ITableProps['columns']
  tableActions?: IDataActionProps[]
  rowActions?: IDataActionProps[]
  storeSelector?: keyof RootState
  localeSelector?: string
}

export interface IListMetaGetter {
  (data?: Record<string, any>): IListMeta
}

export interface IFormField {
  fieldName: string
  label: string
  inputType: IInputType
  helperText?: ReactNode
  defaultValue?: any
  required?: boolean
  options?: {
    label: string
    value: string
  }[]
}

interface IFormMeta {
  title: ReactNode
  fields: IFormField[]
  localeSelector?: string
}

export interface IFormMetaGetter {
  (data?: Record<string, any>): IFormMeta
}
