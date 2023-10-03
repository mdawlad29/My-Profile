import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#0866FF",
        // primary:"#03A84E",
        secondary:"#ED1C24",
        "secondary-50":"#222222",
        accent:"#263170",
        neutral:"#fff"
      },
      textColor:{
        primary:"#0866FF",
        // primary:"#03A84E",
        secondary:"#ED1C24",
        accent:"#263170",
        neutral:"#fff"
      },
      borderColor:{
         primary:"#0866FF",
        // primary:"#03A84E",
        secondary:"#83aef3",
        // secondary:"#ED1C24",
        accent:"#263170",
        neutral:"#fff"
      },
    },
  },
  plugins: [],
}
export default config
