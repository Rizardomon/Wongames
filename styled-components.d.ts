/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from 'styles/theme'

// Inferência de tipo
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends Theme { }
}
