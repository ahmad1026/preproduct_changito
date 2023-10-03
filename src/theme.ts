import { createTheme } from "@mui/material";
const theme = createTheme({
    // direction: 'rtl',
    palette: {
        primary: {
            main: '#BB86FC',
        },
        secondary: {
            main: '#FFFFFF',
            dark:'#C294F4'

          },
          
    },
    shape: {
        borderRadius: 5,
    },
    typography: {
        fontFamily: ['IRANSans'].join(','),
    },


})


export default theme;

