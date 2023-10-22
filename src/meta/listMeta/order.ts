import { IListMetaGetter } from '~/meta/types'
import { add, remove, update } from '~/store/order/slice'
import { orderFormMetaGetter } from '../formMeta/order'

export const orderListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: 'Invoice',
        dataIndex: 'invoice'
      },
      {
        title: 'Customer',
        dataIndex: 'customer'
      },
      {
        title: 'Product',
        dataIndex: 'product'
      },
      {
        title: 'Amount',
        dataIndex: 'amount'
      },
      {
        title: 'Payment Method',
        dataIndex: 'payment_method'
      },
      {
        title: 'Status',
        dataIndex: 'status'
      }
    ],
    tableActions: [
      {
        actionType: 'CREATE',
        actionText: '${list.tableActions.create}',
        formMetaGetter: orderFormMetaGetter('CREATE'),
        action: add
      }
    ],
    rowActions: [
      { actionType: 'UPDATE', formMetaGetter: orderFormMetaGetter('UPDATE'), action: update },
      { actionType: 'REMOVE', action: remove }
    ],
    storeSelector: 'order',
    localeSelector: 'order'
  }
}
