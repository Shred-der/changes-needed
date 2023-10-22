import { IFormMetaGetter } from '~/meta/types'
import { add, update } from '~/store/contact/slice'

export const contactFormMetaGetter =
  (submitType: 'CREATE' | 'UPDATE'): IFormMetaGetter =>
  () => ({
    title: submitType === 'CREATE' ? '${form.createTitle}' : '${form.updateTitle}',
    fields: [
      {
        fieldName: 'name',
        label: 'Name',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'email',
        label: 'Email',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'mobile',
        label: 'Mobile',
        inputType: 'TEXT',
        required: true
      },
      {
        fieldName: 'country',
        label: 'Country',
        inputType: 'SELECT',
        required: true,
        options: [
          { label: 'Bangladesh', value: 'Bangladesh' },
          { label: 'Netherlands', value: 'Netherlands' },
          { label: 'Poland', value: 'Poland' },
          { label: 'USA', value: 'USA' },
          { label: 'Vietnam', value: 'Vietnam' }
        ]
      }
    ],
    submitAction: submitType === 'CREATE' ? add : update,
    localeSelector: 'contact'
  })
