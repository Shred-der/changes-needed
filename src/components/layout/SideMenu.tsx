import { ReactNode, useCallback, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Inventory2Sharp, ContactPageSharp, ShoppingBagSharp, LogoutSharp, InfoSharp } from '@mui/icons-material'
import { useLocaleTranslation } from '../../hooks/useLocaleParser'
import { AuthContext } from '../../contexts/Auth'

interface ISideMenuProps {
  onClose?: () => void
}

interface IMenu {
  name: string
  key: string
  path: string
  icon?: ReactNode
}

const menus: IMenu[] = [
  {
    name: 'Products',
    key: 'productList',
    path: '/product/list',
    icon: <Inventory2Sharp color={'primary'} />
  },
  {
    name: 'Contacts',
    key: 'contactList',
    path: '/contact/list',
    icon: <ContactPageSharp color={'primary'} />
  },
  {
    name: 'Orders',
    key: 'orderList',
    path: '/order/list',
    icon: <ShoppingBagSharp color={'primary'} />
  },
  {
    name: 'About',
    key: 'about',
    path: '/about',
    icon: <InfoSharp color={'info'} />
  }
]

export const SideMenu = ({ onClose }: ISideMenuProps) => {
  const { push: routerPush, pathname } = useRouter()
  const { translate } = useLocaleTranslation('menu')
  const { translate: translateCommon } = useLocaleTranslation('common')
  const { logout, loading } = useContext(AuthContext)

  const handleLogout = useCallback(() => {
    logout().then((resp) => {
      onClose?.()
    })
  }, [logout, onClose])

  return (
    <Box sx={{ width: 250 }} role={'presentation'}>
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.key} disablePadding>
            <ListItemButton onClick={() => routerPush(menu.path)} selected={menu.path === pathname}>
              {menu.icon ? <ListItemIcon>{menu.icon}</ListItemIcon> : null}
              <ListItemText primary={translate(`\${${menu.name}}`)} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} disabled={loading}>
            <ListItemIcon>
              <LogoutSharp color="warning" />
            </ListItemIcon>
            <ListItemText primary={translateCommon('${authentication.logout}')} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
