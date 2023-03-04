import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    
    palette: {
        primary: {
            main: '#2C5F2D',
        },
        secondary: {
            main: '#ffffff',
        }
     },
     
     typography: {
        fontFamily: 'Roboto',
        fontSize: 15,
        h1: { // incase h1 needs to have a separate fontFamily 
            fontFamily: 'Times New Roman',
            fontSize: 15,
        }
     },



});