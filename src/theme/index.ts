import { extendTheme } from "native-base";

export const THEME = extendTheme(
    {
        colors: {
            gray: {
                700: '#0D0D0D',
                600: '#1A1A1A',
                500: '#262626',
                400: '#333333',
                300: '#808080',
                200: '#D9D9D9',
                100: '#F2F2F2'
            },
            white: '#FFFFFF',
            alert: '#E25858',
            blue_dark:'#1E6F9F',
            blue_light:'#4EA8DE',
            purple_dark:'#5E60CE',
            purple_light:'#8284FA'
        },
        fonts: {
            heading: 'Inter_700Bold',
            body: 'Inter_400Regular',
        },
        fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            
        },
        sizes: {
            14: 52
        }
    }


)
