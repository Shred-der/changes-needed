import { IListMetaGetter } from '~/meta/types'
import { add, remove, update } from '~/store/contact/slice'
import { contactFormMetaGetter } from '~/meta/formMeta/contact'

export const contactListMetaGetter: IListMetaGetter = () => {
  return {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Mobile',
        dataIndex: 'mobile'
      },
      {
        title: 'Country',
        dataIndex: 'country'
      }
    ],
    tableActions: [
      {
        actionType: 'CREATE',
        actionText: '${list.tableActions.create}',
        formMetaGetter: contactFormMetaGetter('CREATE'),
        action: add
      }
    ],
    rowActions: [
      { actionType: 'UPDATE', formMetaGetter: contactFormMetaGetter('UPDATE'), action: update },
      { actionType: 'REMOVE', action: remove }
    ],
    storeSelector: 'contact',
    localeSelector: 'contact'
  }
}
