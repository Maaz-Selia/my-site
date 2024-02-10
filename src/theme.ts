import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

/* config settings for light-dark mode, follows system setting changes */
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    colors: {
        /* Colour pallete from Smart Swatch: https://smart-swatch.netlify.app/#716758 */
        brown: {
            50: '#f8f3e7',
            100: '#e0dad0',
            200: '#c8c1b6',
            300: '#b1a89b',
            400: '#9a8f7f',
            500: '#807665',
            600: '#645b4e',
            700: '#494137',
            800: '#2c271e',
            900: '#120d00'
        }
    }
}, withDefaultColorScheme({ colorScheme: 'brown' }));

export default theme;