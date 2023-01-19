import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Merriweather Light'), local('Merriweather-Light'),
        url('/fonts/Merriweather-Light.ttf') format('truetype');
  }

   @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Merriweather Regular'), local('Merriweather-Regular'),
        url('/fonts/Merriweather-Regular.ttf') format('truetype');
  }

   @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Merriweather Bold'), local('Merriweather-Bold'),
        url('/fonts/Merriweather-Bold.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Montserrat Black'), local('Montserrat-Black'),
        url('/fonts/Montserrat-Black.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('/fonts/Montserrat-Light.ttf') format('truetype');
  }
      @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
        url('/fonts/Montserrat-Thin.ttf') format('truetype');
  }
      @font-face {
    font-family: 'MuseoModerno';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('MuseoModerno Regular'), local('MuseoModerno-Regular'),
        url('/fonts/MuseoModerno-Regular.ttf') format('truetype');
  }
      @font-face {
    font-family: 'MuseoModerno';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('MuseoModerno Medium'), local('MuseoModerno-Medium'),
        url('/fonts/MuseoModerno-Medium.ttf') format('truetype');
  }
      @font-face {
    font-family: 'MuseoModerno';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('MuseoModerno SemiBold'), local('MuseoModerno-SemiBold'),
        url('/fonts/MuseoModerno-SemiBold.ttf') format('truetype');
  }
      @font-face {
    font-family: 'VarelaRound';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('VarelaRound Regular'), local('VarelaRound-Regular'),
        url('/fonts/VarelaRound-Regular.ttf') format('truetype');
  }
      @font-face {
    font-family: 'CourierPrime';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('CourierPrime Bold'), local('CourierPrime-Bold'),
        url('/fonts/CourierPrime-Bold.ttf') format('truetype');
  }

      @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open Sans Regular'), local('Open-Sans-Regular'),
        url('/fonts/OpenSans-Regular.ttf') format('truetype');
  }

      @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open Sans Regular'), local('Open-Sans-Regular'),
        url('/fonts/OpenSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Open Sans SemiBold'), local('Open-Sans-SemiBold'),
        url('/fonts/OpenSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Open Sans Bold'), local('Open-Sans-Bold'),
        url('/fonts/OpenSans-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Open Sans ExtraBold'), local('Open-Sans-ExtraBold'),
        url('/fonts/OpenSans-ExtraBold.ttf') format('truetype');
  }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    ${({ theme }) => css`
      html {
        font-size: ${theme.font.sizes.small}
        scroll-behavior: smooth;
      }

      body {
        background-color: transparent;
      }
    `}

  `

export default GlobalStyles
