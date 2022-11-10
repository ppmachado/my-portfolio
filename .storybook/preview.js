import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { SessionProvider } from 'next-auth/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'zerometer-light',
    values: [
      {
        name: 'zerometer-light',
        value: theme.colors.white
      },
      {
        name: 'zerometer-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <SessionProvider session={{}}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </SessionProvider>
  )
]