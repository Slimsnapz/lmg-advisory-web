// js/tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                lmg: {
                    navy: '#17263A',       // Primary brand colour
                    graphite: '#28323C',   // Body text
                    coolgrey: '#5C6B73',   // Secondary information
                    ivory: '#F6F4EF',      // Warm background
                    copper: '#A56A43'      // Restrained accent
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            }
        }
    }
}