/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-dark-green': '#004346',
        'custom-dark-green2':'#02220B',
        'custom-grey': '#879791',
        'custom-light-green1':'#B5C4BE',
        'custom-light-green2':'#B2ECA1',
        'custom-light-green3':'#15B779',
        'custom-light-green4' :'#ECF2EA',
        'custom-light-green5' : '#E4F3E0',
        'custom-black1':'#433520',
        'custom-black2':'#0C1E11',
        'custom-peach' : '#FDE8CD',
        
      },
    },
  },
  plugins: [],
}
