import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Form } from '~/components/form/Form'
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

const FormComponent = (
  <Provider store={store}>
    <Form title={'Create Product'} fields={[]} submitAction={add} />
  </Provider>
)

describe('FieldMetaProcessor', () => {
  it('renders a form', () => {
    const { container } = render(FormComponent)
    expect(container.querySelector('form')).toBeInTheDocument()
  })

  it('renders form title', () => {
    render(FormComponent)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading').textContent).toEqual('Create Product')
  })

  it('renders form with submit action', () => {
    const { container } = render(FormComponent)
    expect(container.querySelector('button[type="submit"]')).toBeInTheDocument()
  })

  //stubs
  it('renders form with cancel action', () => {})
})
