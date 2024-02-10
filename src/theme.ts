import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    colors: {
        darkBrown:'#716758',
        lightBrown: '#E9DCD6',
        altBrown: '#D9C9C1'

    }
});

export default theme;