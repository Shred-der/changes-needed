import { ReactNode } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { IFormField } from '~/meta/types'
import { FieldMetaProcessor } from './FieldMetaProcessor'
import { useDispatch } from 'react-redux'
import { useLocaleTranslation } from '~/hooks/useLocaleParser'

export interface IFormProps {
  title: ReactNode
  fields: IFormField[]
  submitAction: ActionCreatorWithPayload<any>
  onSubmitSuccess?: () => void
  defaultValues?: Record<string, any>
  onCancel?: () => void
  localeSelector?: string
}

export const Form = ({
  title,
  fields,
  submitAction,
  onSubmitSuccess,
  defaultValues,
  onCancel,
  localeSelector
}: IFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })
  const dispatch = useDispatch()
  const { translate } = useLocaleTranslation(localeSelector)
  const { translate: translateCommon } = useLocaleTranslation('common')

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    dispatch(submitAction(data))
    onSubmitSuccess?.()
  }

  return (
    <Box>
      {typeof title === 'string' ? (
        <Typography variant="h5" sx={{ py: 2 }}>
          {translate(title)}
        </Typography>
      ) : (
        title
      )}
      <Divider />
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} sx={{ my: 2 }}>
        <Grid container spacing={2}>
          {fields.map((i) => (
            <Grid item key={i.fieldName} md={6} xs={12}>
              <FieldMetaProcessor {...i} control={control} error={errors?.[i.fieldName] as FieldError} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {onCancel ? (
            <Button onClick={onCancel} variant={'outlined'}>
              {translateCommon('${form.cancel}')}
            </Button>
          ) : null}
          <Button type="submit" variant="contained">
            {translateCommon('${form.submit}')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
