tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        'bengali': ['"Hind Siliguri"', 'sans-serif'],
                    },
                    colors: {
                        primary: '#3A86FF',
                        secondary: '#6C63FF',
                        accent: '#00D4FF',
                        dark: '#0f172a',
                        darker: '#0b0f19',
                        glass: 'rgba(255, 255, 255, 0.05)',
                        glassBorder: 'rgba(255, 255, 255, 0.1)',
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                        'premium-gradient': 'linear-gradient(135deg, #3A86FF 0%, #6C63FF 50%, #00D4FF 100%)',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                        'spin-slow': 'spin 8s linear infinite',
                        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'scroll-down': 'scrollDown 2s infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(58,134,255,0.8))' },
                            '50%': { opacity: .5, filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.8))' },
                        },
                        scrollDown: {
                            '0%': { transform: 'translateY(-10px)', opacity: 0 },
                            '50%': { opacity: 1 },
                            '100%': { transform: 'translateY(10px)', opacity: 0 },
                        }
                    }
                }
            }
        }
