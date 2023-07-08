module.exports = {
  mode: 'jit',
  // purge: ['./**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
          colors: {
              gradient: 'linear-gradient(180deg, #EE4600 0%, #FF864A 100%)',
              primary: '#005baa', //orange
              green73: '#73D13D',
              greenF6: '#F6FFED',
              greenB7: '#B7EB8F',
              second: '#0F62F9', //blue
              orangeDF: '#DF7300',
              black: '#000000',
              black29: '#292D32',
              black25: '#00000040',
              grayF5: '#F5F5F5',
              grayF0: '#F0F0F0',
              grayBF: '#BFBFBF',
              white: '#FFFFFF',
              whiteF0: '#F0F0F0',
              white045: '#00000073',
              error: '#F5222D',
              redF0: '#FFF1F0',
              red9E: '#FFA39E',
              grayFA: '#FAFAFA',
              orange40: '#FFA940',
              orangeFF: '#FFD591',
              blueCD: '#CDE5FB',
              blue1: '#E6F7FF',
              green38: '#389E0D',
              yellowFF: '#FFF7E6',
              redFF: '#FF4D4F',
              grayD9: '#D9D9D9',
              blue18: '#1890FF',
              yellowFE: '#FEE8D0',
              purpleD3: '#D3ADF7',
              purpleF9: '#F9F0FF',
              blue18: '#1890FF',
              blue91: '#91D5FF',
              blueE6: '#E6F7FF',
              purple72: '#722ED1',
              grayEE: '#EEEEEE',
              gray43: '#434343',
          },
          backgroundImage: {
              gradient: 'linear-gradient(180deg, #EE4600 0%, #FF864A 100%)',
          },
          boxShadow: {
              20: '0px 2px 20px rgba(20, 19, 19, 0.05)',
              30: '0px 2px 30px rgba(20, 19, 19, 0.05)',
              40: '0px 2px 40px rgba(0, 0, 0, 0.05)',
              form: '0px 2px 30px rgba(20, 19, 19, 0.05)',
              '40-08': ' 0px 2px 40px rgba(0, 0, 0, 0.08)',
              '008': '0px 2px 40px rgba(0, 0, 0, 0.08)',
          },
          blur: {
              shadow: 'drop-shadow(0px 2px 30px rgba(20, 19, 19, 0.05))',
          },
          screens: {
              xl: { max: '1279px' },
              // => @media (max-width: 1279px) { ... }

              lg: { max: '1023px' },
              // => @media (max-width: 1023px) { ... }

              md: { max: '767px' },
              // => @media (max-width: 767px) { ... }

              sm: { max: '639px' },
              // => @media (max-width: 639px) { ... }
          },
      },
      borderRadius: {
          none: '0',
          sm: '0.125rem',
          DEFAULT: '0.25rem',
          md: '0.375rem',
          lg: '0.5rem',
          full: '9999px',
          2: '8px',
          1: '4px',
          large: '12px',
      },
      fontWeight: {
          thin: '100',
          hairline: '100',
          extralight: '200',
          light: '300',
          regular: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          'extra-bold': '800',
          black: '900',
      },
  },
  plugins: [],
}
