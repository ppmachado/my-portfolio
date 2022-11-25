export default {
  border: {
    small: '1px',
    medium: '8px',
    large: '',
    huge: '28px'
  },
  font: {
    family01: 'Merriweather, serif',
    family02: 'Montserrat, sans-serif',
    modern: 'MuseoModerno, sans-serif',
    rounded: 'VarelaRound, sans-serif',
    courier: 'CourierPrime, serif',
    thin: 100,
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
    sizes: {
      smaller: '1rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.0rem',
      large: '2.4rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      xxxlarge: '3.6rem',
      huge: '4.0rem',
      xhuge: '5.6rem'
    }
  },
  colors: {
    primaryLight: '#f8f8f8',
    primaryMedium: '#C4C4C4',
    primaryDark: '#B8B2B2',
    primaryDarkest: '#191A1A',
    backButton: '#D9D9D9',

    orange: '#EC840B',
    yesGreen: '#3CA318',
    yesBorder: '#2C810E',
    noRed: '#F67C74',
    noBorder: '#CF5048',
    white: '#FFFFFF',
    black: '#000000',
    background: '#595957',
    yellow: '#FFC81A',
    icons: '#333333'
  },
  gradient: {
    defaultMedium: `linear-gradient(135deg, rgba(109, 157, 249, 0.66) 0%, #6D9DF9 100%), #FFFFFF`
  },
  elevation: {
    boxShadow01: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    boxShadow02: '0px 2px 5px 2px rgba(0, 0, 0, 0.1)',
    boxShadow03: '0px 4px 9px 4px rgba(0, 0, 0, 0.1)'
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    slow: '0.7s ease-in-out',
    default: '0.4s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
