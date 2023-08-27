import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: '400',

      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'pontogo': {
          bg: 'var(--principal-color)',
          color: 'white',
        },
      },
    },
  },
})

export default theme