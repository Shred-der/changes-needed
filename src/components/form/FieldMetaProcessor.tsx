import { FilledInput, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { Control, Controller, FieldError } from 'react-hook-form'
import { IFormField } from '~/meta/types'

interface IFieldMetaProcessorProps extends IFormField {
  control: Control
  error?: FieldError
}

export const FieldMetaProcessor = ({
  control,
  fieldName,
  label,
  inputType,
  helperText,
  defaultValue,
  required,
  options,
  error
}: IFieldMetaProcessorProps) => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel htmlFor={fieldName}>{label}</InputLabel>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue === undefined ? '' : defaultValue}
        render={({ field }) =>
          inputType === 'SELECT' ? (
            <Select id={field.name} value={field.value} onChange={field.onChange} label={label}>
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          ) : inputType === 'NUMBER' ? (
            <FilledInput {...field} type={'number'} error={!!error} />
          ) : (
            <FilledInput {...field} error={!!error} />
          )
        }
        rules={{
          required: { value: !!required, message: 'This field is required' }
        }}
      />
      {error?.message || helperText ? (
        <FormHelperText id="helper-text">{error?.message || helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
