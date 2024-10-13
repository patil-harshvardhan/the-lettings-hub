/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom keyframes for image and text animations
      keyframes: {
        'fade-in-image': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'fade-in-slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'], // Add your custom font here
      },
      animation: {
        'fade-in-image': 'fade-in-image 3s ease-out forwards',
        'fade-in-slide-up': 'fade-in-slide-up 3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
