import { IFormMetaGetter } from '~/meta/types'
import { add, update } from '~/store/product/slice'

export const productFormMetaGetter =
  (submitType: 'CREATE' | 'UPDATE'): IFormMetaGetter =>
  () => ({
    title: submitType === 'CREATE' ? '${form.createTitle}' : '${form.updateTitle}',
    fields: [
      {
        fieldName: 'sku',
        label: 'SKU',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'title',
        label: 'Title',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'category',
        label: 'Category',
        inputType: 'SELECT',
        required: true,
        options: [
          { label: 'Electronics', value: 'Electronics' },
          { label: 'Smartphone', value: 'Smartphone' },
          { label: 'Pet Supplies', value: 'Pet Supplies' },
          { label: 'Office Products', value: 'Office Products' }
        ]
      },
      {
        fieldName: 'price',
        label: 'Price',
        inputType: 'NUMBER',
        required: true
      },
      {
        fieldName: 'quantity',
        label: 'Quantity',
        inputType: 'NUMBER',
        required: true
      }
    ],
    submitAction: submitType === 'CREATE' ? add : update,
    localeSelector: 'product'
  })
