import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ComponentPropsWithRef } from 'react'
import { FieldMetaProcessor } from '~/components/form/FieldMetaProcessor'
import { useForm } from 'react-hook-form'

const FieldMetaProcessorWithControl = ({
  fieldName,
  label,
  inputType
}: Omit<ComponentPropsWithRef<typeof FieldMetaProcessor>, 'control'>) => {
  const { control } = useForm()
  return (
    <FieldMetaProcessor
      {...{
        control,
        fieldName,
        label,
        inputType: inputType
      }}
    />
  )
}

describe('FieldMetaProcessor', () => {
  it('renders an input', () => {
    const { container } = render(
      <FieldMetaProcessorWithControl fieldName="first_name" label="First Name" inputType="TEXT" />
    )
    expect(container.querySelector('input')).toBeInTheDocument()
  })

  it('renders input with label', () => {
    const { container } = render(
      <FieldMetaProcessorWithControl fieldName="first_name" label="First Name" inputType="TEXT" />
    )
    expect(container.querySelector('label')).toBeInTheDocument()
  })

  //stubs
  it('renders a text input', () => {})
  it('renders a number input', () => {})
  it('renders a select input', () => {})
  it('renders select input with options', () => {})
})
