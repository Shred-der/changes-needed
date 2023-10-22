import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode, useCallback, useState } from 'react'
import { FlagBangladesh } from '../customIcons/FlagBangladesh'
import { FlagFrance } from '../customIcons/FlagFrance'
import { FlagUSA } from '../customIcons/FlagUSA'

const getLocaleDetails = (locale='en') => {
  let title: string
  let icon: ReactNode
  switch (locale) {
    case 'fr':
      title = 'French'
      icon = <FlagFrance />
      break;
    case 'bn':
      title = 'Bangla'
      icon = <FlagBangladesh />
      break;
  
    default:
      title = 'English'
      icon = <FlagUSA />
  }

  return {
    title,
    icon
  }
}

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { locales=[], locale: currentLocale, pathname, query, asPath, push: routerPush } = router
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSwitch = useCallback((locale: string) => {
    routerPush({
      pathname,
      query,
    }, asPath, {locale}).then(() => setAnchorEl(null))
  }, [routerPush, asPath, query, pathname])

  return (
    <>
      <IconButton
        id="locale-switch"
        aria-controls={open ? 'locale-options' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {getLocaleDetails(currentLocale).icon}
      </IconButton>
      <Menu
        id="locale-options"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'locale-switch',
        }}
      >
        {locales.map(i => {
          const {icon, title} = getLocaleDetails(i)
          return (
            <MenuItem key={i} onClick={() => handleSwitch(i)}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                {icon}
                {title}
              </Box>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}