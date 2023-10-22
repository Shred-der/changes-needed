import { useContext } from 'react'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { ThemeContext } from '../../contexts/Theme'

export const ThemeToggler = () => {
  const { mode, toggleMode } = useContext(ThemeContext)
  return (
    <IconButton onClick={toggleMode} sx={{ color: mode === 'dark' ? 'white' : 'black' }}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}
