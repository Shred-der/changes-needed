import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useState } from 'react'
import { ModalForm } from '~/components/form/ModalForm'
import { add } from '~/store/product/slice'
import { Provider } from 'react-redux'
import { store } from '~/store/store'

jest.mock('next-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  }
}))

const ModalFormComponent = () => {
  const [open, setOpen] = useState(true)
  return (
    <Provider store={store}>
      <ModalForm
        formProps={{
          title: 'Create Product',
          fields: [],
          submitAction: add,
          localeSelector: 'product'
        }}
        onClose={() => setOpen(false)}
        open={open}
      />
    </Provider>
  )
}

describe('ModalForm', () => {
  it('renders a modal', () => {
    render(<ModalFormComponent />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders a form', () => {
    render(<ModalFormComponent />)
    expect(screen.getByRole('dialog').querySelector('form')).toBeInTheDocument()
  })

  //stubs
  it('closes when submitted successfully', () => {})
  it('closes when cancelled', () => {})
})
