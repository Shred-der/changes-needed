import { useEffect } from 'react'

export const useBodyClass = (className: string, active = true) => {
  useEffect(() => {
    if (active) document.body.classList.add(className)
    else document.body.classList.remove(className)

    return () => {
      document.body.classList.remove(className)
    }
  }, [className, active])

  return null
}
