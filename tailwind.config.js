module.exports = {
  purge: {
    enabled: true,
    content: ['./app/**/*.html', './app/**/*.ejs'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#907A7B',
        secondary: '#C0A4A5',
        warning: '#F5F0E7',
        gray: '#707070',
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        'sm': '.875rem',   // 14px
        'base': '1rem',    // 16px
        'md': '1.125rem',  // 18px
        'lg': '1.25rem',   // 20px
        'xl': '1.5rem',    // 24px
        '2xl': '1.75rem',  // 28px
        '3xl': '2rem',     // 32px
        '4xl': '2.25rem',  // 36px
        '5xl': '2.5rem',   // 40px
        '6xl': '3rem'      // 48px
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px'
      },
      maxWidth: {
        '63.75': '15.9375rem',
        '111.25': '27.8125rem'
      },
      minWidth: {
        '206.25': '51.5625rem'
      },
      spacing: {
        '7.5': '1.875rem',
        '16.25': '65%',
        '17.5': '70%',
        '17': '4.25rem',
        '18': '4.5rem',
        '21.25': '5.3125rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        '37.5': '9.375rem',
        '53.5': '13.375rem',
        '63.75': '15.9375rem',
        '87.5': '21.875rem',
        '111.25': '27.8125rem',
        'percent-11': '11%',
        'percent-15': '15%',
        'percent-57': '57%',
        'percent-63': '63%',
        'full': '100%',
        '1/8': '12.5%',
        '7/8': '87.5%'
      },
      height: {
        '15': '3.75rem',
        '37.5': '9.375rem',
        '40': '10rem',
        '49': '12.25rem',
        '52.5': '13.125rem',
        '54': '13.5rem',
        '63': '15.75rem',
        '66.5': '16.625rem',
        '85': '21.25rem',
        '87.5': '21.875rem',
        '90': '22.5rem',
        '104.5': '26.125rem',
        '105': '26.25rem',
        '111.25': '27.8125rem',
        '157': '39.25rem'
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      scale: {
        '118': '1.18'
      },
      borderRadius: {
        '50': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
