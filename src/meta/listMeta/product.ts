import { IListMetaGetter } from '~/meta/types'
import { add, remove, update } from '~/store/product/slice'
import { productFormMetaGetter } from '~/meta/formMeta/product'

export const productListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: 'SKU',
        dataIndex: 'sku'
      },
      {
        title: 'Title',
        dataIndex: 'title'
      },
      {
        title: 'Category',
        dataIndex: 'category'
      },
      {
        title: 'Price',
        dataIndex: 'price'
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity'
      }
    ],
    tableActions: [
      {
        actionType: 'CREATE',
        actionText: '${list.tableActions.create}',
        formMetaGetter: productFormMetaGetter('CREATE'),
        action: add
      }
    ],
    rowActions: [
      { actionType: 'UPDATE', formMetaGetter: productFormMetaGetter('UPDATE'), action: update },
      { actionType: 'REMOVE', action: remove }
    ],
    storeSelector: 'product',
    localeSelector: 'product'
  }
}
