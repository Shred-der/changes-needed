import { IFormMetaGetter } from '~/meta/types'
import { add, update } from '~/store/order/slice'

export const orderFormMetaGetter =
  (submitType: 'CREATE' | 'UPDATE'): IFormMetaGetter =>
  () => ({
    title: submitType === 'CREATE' ? '${form.createTitle}' : '${form.updateTitle}',
    fields: [
      {
        fieldName: 'invoice',
        label: 'Invoice',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'customer',
        label: 'Customer',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'product',
        label: 'Product',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'amount',
        label: 'Amount',
        inputType: 'NUMBER',
        required: true
      },
      {
        fieldName: 'payment_method',
        label: 'Payment Method',
        inputType: 'SELECT',
        required: true,
        options: [
          { label: 'Visa', value: 'Visa' },
          { label: 'Mastercard', value: 'Mastercard' }
        ]
      },
      {
        fieldName: 'status',
        label: 'Status',
        inputType: 'SELECT',
        required: true,
        options: [
          { label: 'Delivered', value: 'Delivered' },
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Cancelled', value: 'Cancelled' }
        ]
      }
    ],
    submitAction: submitType === 'CREATE' ? add : update,
    localeSelector: 'order'
  })
