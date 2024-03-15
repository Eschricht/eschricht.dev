import { themes } from 'artivue'
import type { BaseTheme } from 'artivue'

export function useTheme() {
  const customTheme = useCookie<BaseTheme | undefined>('custom-theme', {
    default: undefined,
  })

  return customTheme
}
