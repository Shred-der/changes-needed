import { ReactNode, useContext } from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { AuthContext } from '.././contexts/Auth'
import { Login } from './Login'
import { useTranslation } from 'next-i18next'

interface IProtectedViewProps {
  children: ReactNode
}

export const ProtectedView = ({ children }: IProtectedViewProps) => {
  const { authenticated, initializing } = useContext(AuthContext)
  const { t } = useTranslation('common')

  return (
    <>
      {authenticated ? (
        children
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 10,
            minHeight: '50vh'
          }}
        >
          {initializing ? (
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress />
              <Typography variant="subtitle1" color={'GrayText'}>
                {t('authentication.statusCheck')}
              </Typography>
            </Box>
          ) : (
            <Login />
          )}
        </Box>
      )}
    </>
  )
}
