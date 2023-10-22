import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'
import { LocaleSwitcher } from './LocaleSwitcher'
import { ThemeToggler } from './ThemeToggler'

interface INavbarProps {
  onShowDrawer: () => void
}

export const Navbar = ({ onShowDrawer }: INavbarProps) => {
  const isMobileView = useMediaQuery('(max-width:375px)')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={2}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: isMobileView ? 0 : 2 }}
              onClick={onShowDrawer}
            >
              <Menu />
            </IconButton>
            <Link href={'/'}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  cursor: 'pointer',
                  letterSpacing: isMobileView ? 1 : 5
                }}
              >
                DASHBOARD
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: isMobileView ? 0 : 1 }}>
            <ThemeToggler />
            <LocaleSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
