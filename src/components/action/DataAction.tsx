import { Button, IconButton } from '@mui/material'
import { AddBox, Edit, Delete } from '@mui/icons-material'
import { ReactNode, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { IFormMetaGetter } from '~/meta/types'
import { ModalForm } from '~/components/form/ModalForm'
import { useLocaleTranslation } from '~/hooks/useLocaleParser'

export interface IDataActionProps {
  actionType: 'CREATE' | 'UPDATE' | 'REMOVE'
  actionText?: string
  action: ActionCreatorWithPayload<any>
  context?: Record<string, any>
  formMetaGetter?: IFormMetaGetter
  localeSelector?: string
}

export const DataAction = ({
  actionType,
  actionText,
  action,
  context,
  formMetaGetter,
  localeSelector
}: IDataActionProps) => {
  const dispatch = useDispatch()
  const [showDialog, setShowDialog] = useState(false)
  const { translate } = useLocaleTranslation(localeSelector)

  let ariaLabel: string
  let icon: ReactNode

  switch (actionType) {
    case 'CREATE':
      ariaLabel = 'add'
      icon = <AddBox />
      break
    case 'UPDATE':
      ariaLabel = 'UPDATE'
      icon = <Edit color="primary" />
      break
    case 'REMOVE':
      ariaLabel = 'REMOVE'
      icon = <Delete color="warning" />
      break
  }

  const handleClick = useCallback(() => {
    if (actionType === 'REMOVE' && context) dispatch(action(context.id))
    else if (actionType === 'CREATE' || actionType === 'UPDATE') setShowDialog(true)
  }, [actionType, action, context, dispatch])

  return (
    <>
      {actionText ? (
        <Button
          variant="contained"
          startIcon={icon}
          onClick={handleClick}
          color={actionType === 'CREATE' ? 'success' : undefined}
        >
          {translate(actionText)}
        </Button>
      ) : (
        <IconButton onClick={handleClick}>{icon}</IconButton>
      )}
      {formMetaGetter ? (
        <ModalForm
          open={showDialog}
          onClose={() => setShowDialog(false)}
          formProps={{
            ...formMetaGetter(),
            submitAction:
              actionType === 'CREATE' ? action : (((data) => action({ id: context?.id, data })) as typeof action),
            onSubmitSuccess: () => setShowDialog(false),
            defaultValues: context
          }}
          localeSelector={localeSelector}
        />
      ) : null}
    </>
  )
}
