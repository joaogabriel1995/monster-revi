import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          transition: 'all 0.3s ease', 
        },
        containedPrimary: {
          backgroundColor: '#1E88E5',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1565C0',
            boxShadow: '0px 4px 12px rgba(30, 136, 229, 0.3)',
          },
        },
        containedSecondary: {
          backgroundColor: '#8E24AA',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#6A1B9A',
          },
        },
        outlined: {
          borderColor: '#4FC3F7',
          color: '#4FC3F7',
          '&:hover': {
            borderColor: '#81D4FA',
            backgroundColor: 'rgba(79, 195, 247, 0.1)',
          },
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.875rem',
        },
        sizeMedium: {
          padding: '8px 20px',
          fontSize: '1rem',
        },
        sizeLarge: {
          padding: '10px 24px',
          fontSize: '1.125rem',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, 
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2A',
          borderRadius: 12,
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.4)', 
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          scrollBehavior: 'smooth', 
        },
        'html, body, #__next, #root': {
          minHeight: '100%',
          width: '100%',
          backgroundColor: '#0F1419', 
        },
        a: {
          textDecoration: 'none',
          color: '#4FC3F7', 
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        hr: {
          borderColor: 'rgba(255, 255, 255, 0.15)',
          margin: '20px 0',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2A',
          '& .MuiTableCell-root': {
            color: '#B0BEC5',
            borderBottom: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    grey: {
      100: '#CFD8DC',
      200: '#B0BEC5',
      300: '#90A4AE',
      400: '#78909C',
      500: '#607D8B',
      600: '#546E7A',
      700: '#455A64',
      800: '#37474F',
      900: '#263238',
    },
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(30, 136, 229, 0.2)', 
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    background: {
      default: '#0F1419', 
      paper: '#1A1F2A', 
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    primary: {
      main: '#1E88E5', 
      light: '#4FC3F7', 
      dark: '#1565C0', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8E24AA', 
      light: '#BA68C8',
      dark: '#6A1B9A',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#26A69A',
      light: '#4DB6AC',
      dark: '#00796B',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#4FC3F7',
      light: '#81D4FA',
      dark: '#0288D1',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA726',
      light: '#FFB300',
      dark: '#F57C00',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF5350',
      light: '#E57373',
      dark: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#E1E8ED', 
      secondary: '#B0BEC5', 
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  shape: {
    borderRadius: 8, 
  },
  shadows: [
    'none', 
    '0px 2px 4px rgba(0, 0, 0, 0.3)', 
    '0px 3px 6px rgba(0, 0, 0, 0.35)', 
    '0px 4px 8px rgba(0, 0, 0, 0.4)', 
    '0px 6px 10px rgba(0, 0, 0, 0.45)', 
    '0px 8px 12px rgba(0, 0, 0, 0.5)', 
    '0px 10px 14px rgba(0, 0, 0, 0.55)', 
    '0px 12px 16px rgba(0, 0, 0, 0.55)', 
    '0px 14px 18px rgba(0, 0, 0, 0.55)', 
    '0px 16px 20px rgba(0, 0, 0, 0.55)', 
    '0px 18px 22px rgba(0, 0, 0, 0.55)', 
    '0px 20px 24px rgba(0, 0, 0, 0.55)', 
    '0px 22px 26px rgba(0, 0, 0, 0.55)', 
    '0px 24px 28px rgba(0, 0, 0, 0.55)', 
    '0px 26px 30px rgba(0, 0, 0, 0.55)', 
    '0px 28px 32px rgba(0, 0, 0, 0.55)', 
    '0px 30px 34px rgba(0, 0, 0, 0.55)', 
    '0px 32px 36px rgba(0, 0, 0, 0.55)', 
    '0px 34px 38px rgba(0, 0, 0, 0.55)', 
    '0px 36px 40px rgba(0, 0, 0, 0.55)', 
    '0px 38px 42px rgba(0, 0, 0, 0.55)', 
    '0px 40px 44px rgba(0, 0, 0, 0.55)', 
    '0px 42px 46px rgba(0, 0, 0, 0.55)', 
    '0px 44px 48px rgba(0, 0, 0, 0.55)', 
    '0px 46px 50px rgba(0, 0, 0, 0.55)', 
  ],
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    button: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#E1E8ED',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#E1E8ED',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#E1E8ED',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#B0BEC5',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#E1E8ED',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      color: '#90A4AE',
    },
  },
});
