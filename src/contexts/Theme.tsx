import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material'
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

interface IThemeContextValue {
  mode: ThemeMode
  toggleMode: () => void
}

export const ThemeContext = createContext<IThemeContextValue>({
  mode: 'light',
  toggleMode: () => {}
})

interface IThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [mode, setMode] = useState<IThemeContextValue['mode']>('light')

  const toggleMode = useCallback(() => {
    setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
  }, [])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode
      }}
    >
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
