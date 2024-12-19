const MuiCard = {
  styleOverrides: {
    root: {
      '&.MuiCard-root': {
        padding: '5px',
        boxShadow: 'none',
        minWidth: 350,
        borderRadius: '6px',
        '& .MuiCardHeader-root .MuiTypography-root': {
          fontWeight: 600,
          fontSize: '1.35rem',
        },
      },
    },
  },
};

export default MuiCard;
