import { render, screen } from '@testing-library/react'
import { DataAction } from '~/components/action/DataAction'
import '@testing-library/jest-dom'
import { ComponentProps } from 'react'
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

const action: ComponentProps<typeof DataAction>['action'] = add

const DataActionComponent = (
  <Provider store={store}>
    <DataAction action={action} actionType={'CREATE'} actionText={'Okay'} />
  </Provider>
)

describe('DataAction', () => {
  it('renders a button', () => {
    render(DataActionComponent)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders action with icon and text', () => {
    render(DataActionComponent)
    const button = screen.getByRole('button')
    expect(button.textContent).toEqual('Okay')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders action with icon only', () => {
    render(DataActionComponent)
    const button = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  //stubs
  it('renders create action with plus icon', () => {})
  it('renders edit action with edit icon', () => {})
  it('renders delete action with delete icon', () => {})
  it('displays a modal-form when create action is clicked', () => {})
  it('displays a modal-form when edit action is clicked', () => {})
})
