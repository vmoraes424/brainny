import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: '400',

      },
      // 2. We can add a new button size or extend existing
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