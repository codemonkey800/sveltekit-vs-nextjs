module.exports = {
  darkMode: 'media',
  purge: {
    content: ['./src/**/*.svelte'],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      xs: '300px',
      md: '495px',
      lg: '875px',
      xl: '1150px',
      '2xl': '1425px',
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
