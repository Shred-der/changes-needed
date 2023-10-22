import { ReactNode } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Form, IFormProps } from './Form'
import { useLocaleTranslation } from '~/hooks/useLocaleParser'

interface IModalFormProps {
  title?: ReactNode
  description?: ReactNode
  open: boolean
  onClose: () => void
  formProps: IFormProps
  localeSelector?: string
}

export const ModalForm = ({ title, description, open, onClose, formProps, localeSelector }: IModalFormProps) => {
  const { translate } = useLocaleTranslation(localeSelector)
  return (
    <Dialog open={open} onClose={onClose}>
      {title ? <DialogTitle>{typeof title === 'string' ? translate(title) : title}</DialogTitle> : null}
      <DialogContent>
        {description ? <DialogContentText>{description}</DialogContentText> : null}
        <Form {...formProps} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  )
}
