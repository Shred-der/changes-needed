import { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Container, Drawer } from '@mui/material'
import { SideMenu } from './SideMenu'
import { Navbar } from './Navbar'
import { useRouter } from 'next/router'
import { ThemeContext } from '../../contexts/Theme'
import { ProtectedView } from '../../components/ProtectedView'
import { useBodyClass } from '../../hooks/useBodyClass'

interface ILayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
  const { pathname } = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { mode } = useContext(ThemeContext)
  useBodyClass('--dark-mode', mode === 'dark')

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  return (
    <ProtectedView>
      <Navbar onShowDrawer={() => setDrawerOpen(true)} />
      <Container>
        <Drawer open={drawerOpen} onClose={handleDrawerClose}>
          <SideMenu onClose={handleDrawerClose} />
        </Drawer>
        {children}
      </Container>
    </ProtectedView>
  )
}
