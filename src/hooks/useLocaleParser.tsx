import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'

export const useLocaleTranslation = (localeSelector?: string) => {
  const { t } = useTranslation(localeSelector)

  const translate = useCallback(
    (text: string) => {
      const localeIndex = text.match(/\$\{([^}]+)\}/)
      return localeIndex ? t(localeIndex) : text
    },
    [t]
  )

  return {
    translate
  }
}
