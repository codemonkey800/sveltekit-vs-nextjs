module.exports = {
  darkMode: 'media',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      xs: '300px',
      sm: '495px',
      md: '875px',
      lg: '1150px',
      xl: '1425px',
    },

    extend: {
      backgroundColor: {
        'napari-primary': '#80d1ff',
      },

      fontSize: {
        napari: '14px',
      },

      margin: {
        'napari-margin': '50px',
      },

      height: {
        'napari-app-bar': '75px',
        'napari-button': '50px',
      },

      width: {
        'napari-container': '1325px',
        'napari-main': '775px',
        'napari-section': '225px',
      },

      minWidth: (theme) => theme('width'),
    },
  },
};
