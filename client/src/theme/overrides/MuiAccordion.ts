const MuiAccordion = {
  styleOverrides: {
    root: {
      '&.MuiAccordion-root': {
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          marginBottom: 0,
        },
      },
    },
  },
};

export default MuiAccordion;
