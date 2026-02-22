import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                success: {
                    DEFAULT: 'oklch(var(--success) / <alpha-value>)',
                    foreground: 'oklch(var(--success-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                burgundy: {
                    50: 'oklch(0.95 0.02 10)',
                    100: 'oklch(0.88 0.04 10)',
                    200: 'oklch(0.78 0.08 10)',
                    300: 'oklch(0.68 0.12 10)',
                    400: 'oklch(0.58 0.14 10)',
                    500: 'oklch(0.50 0.18 10)',
                    600: 'oklch(0.42 0.16 10)',
                    700: 'oklch(0.35 0.14 10)',
                    800: 'oklch(0.28 0.12 10)',
                    900: 'oklch(0.22 0.10 10)',
                    950: 'oklch(0.16 0.08 10)'
                },
                steel: {
                    50: 'oklch(0.95 0.02 230)',
                    100: 'oklch(0.88 0.04 230)',
                    200: 'oklch(0.78 0.06 230)',
                    300: 'oklch(0.68 0.08 230)',
                    400: 'oklch(0.58 0.10 230)',
                    500: 'oklch(0.52 0.10 230)',
                    600: 'oklch(0.45 0.09 230)',
                    700: 'oklch(0.38 0.08 230)',
                    800: 'oklch(0.30 0.06 230)',
                    900: 'oklch(0.24 0.04 230)',
                    950: 'oklch(0.18 0.03 230)'
                },
                dusty: {
                    50: 'oklch(0.96 0.02 355)',
                    100: 'oklch(0.90 0.04 355)',
                    200: 'oklch(0.82 0.08 355)',
                    300: 'oklch(0.74 0.10 355)',
                    400: 'oklch(0.68 0.12 355)',
                    500: 'oklch(0.65 0.12 355)',
                    600: 'oklch(0.58 0.11 355)',
                    700: 'oklch(0.50 0.10 355)',
                    800: 'oklch(0.42 0.08 355)',
                    900: 'oklch(0.35 0.06 355)',
                    950: 'oklch(0.28 0.04 355)'
                }
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif'
                ],
                display: [
                    'Outfit',
                    'Inter',
                    'system-ui',
                    'sans-serif'
                ],
                mono: [
                    'JetBrains Mono',
                    'Fira Code',
                    'monospace'
                ]
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 2px 8px -2px rgba(0,0,0,0.08)',
                medium: '0 4px 16px -4px rgba(0,0,0,0.12)',
                large: '0 8px 32px -8px rgba(0,0,0,0.16)',
                'burgundy-glow': '0 0 20px rgba(120, 50, 50, 0.4)',
                'burgundy-glow-lg': '0 0 40px rgba(120, 50, 50, 0.5)',
                'pink-glow': '0 0 20px rgba(200, 140, 160, 0.3)',
                'pink-glow-lg': '0 0 40px rgba(200, 140, 160, 0.4)',
                'steel-glow': '0 0 20px rgba(100, 120, 150, 0.3)',
                'steel-glow-lg': '0 0 40px rgba(100, 120, 150, 0.4)'
            },
            spacing: {
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
                30: '7.5rem'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in': {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-in': 'slide-in 0.4s ease-out'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
