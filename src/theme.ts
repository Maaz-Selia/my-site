import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { myPallete } from "./constants/myColors";

/* config settings for light-dark mode, follows system setting changes */
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    colors: {
        /* Colour pallete from Smart Swatch: https://smart-swatch.netlify.app/#716758 */
        myPallete: 
        {
          ...myPallete
        },
        'white': myPallete[50],
        'gray-50': myPallete[50],
        'gray-100': myPallete[100],
        'gray-200': myPallete[200],
        'gray-300': myPallete[300],
        'gray-400': myPallete[400],
        'gray-500': myPallete[500],
        'gray-700': myPallete[600],
        'gray-800': myPallete[700],
        'gray-900': myPallete[800],
    }
}, withDefaultColorScheme({ colorScheme: 'myPallete' }));

export default theme;