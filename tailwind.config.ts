import type { Config } from 'tailwindcss'

const config: Config = {
  important:"true",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        primary:"#00A34F",
        secondary:"#ED1C24",
        accent:"#263170",
        neutral:"#fff"
      },
      textColor:{
        primary:"#00A34F",
        secondary:"#ED1C24",
        accent:"#263170",
        neutral:"#fff"
      },
      borderColor:{
        primary:"#00A34F",
        secondary:"#ED1C24",
        accent:"#263170",
        neutral:"#fff"
      },
    },
  },
  plugins: [],
}
export default config
