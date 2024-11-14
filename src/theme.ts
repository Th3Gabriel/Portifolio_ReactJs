import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1C1C1C',
    },
    secondary: {
      main: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: ['"Segoe UI"'].join(','),
  },
});

theme = responsiveFontSizes(theme)

export default theme;
