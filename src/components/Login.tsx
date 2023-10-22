import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Button, CardActions } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import { LocaleSwitcher } from './layout/LocaleSwitcher'
import { ThemeToggler } from './layout/ThemeToggler'
import { useTranslation } from 'next-i18next'

export const Login = () => {
  const { login } = useContext(AuthContext)
  const { t } = useTranslation('common')

  return (
    <>
      <Box>
        <ThemeToggler />
        <LocaleSwitcher />
      </Box>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 2
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="240" image="/images/peng.jpg" alt="penguins" />
          <CardContent sx={{ p: 3, pb: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              {t('authentication.login.greetings')},
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {t('authentication.login.message')}
            </Typography>
          </CardContent>
          <CardActions sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
            <Button onClick={login} size="medium" color="info" variant="contained">
              {t('authentication.login.action')}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
