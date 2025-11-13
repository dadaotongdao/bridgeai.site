/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 支持手动切换暗色/亮色
  theme: {
    extend: {
      colors: {
        // 暗色主题配色（与参考图一致）
        brand: {
          50: '#f0f0f0',
          100: '#d1d1d1',
          200: '#a3a3a3',
          300: '#757575',
          400: '#474747',
          500: '#1a1a1a', // 主背景
          600: '#171717',
          700: '#141414',
          800: '#101010',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}