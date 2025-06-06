import { FC } from 'react';
import { Grid, useTheme } from '@mui/material';
import TextureOverlay from '../../assets/transparent_adobe_texture.png';

const Contact: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      id="contact"
      sx={{
        minHeight: '30vh',
        pt: 5,
        px: '1rem',
        backgroundImage: theme.palette.mode === 'light' ? `url(${TextureOverlay})` : 'none', // update for dark theme when texture decided
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper, // update for dark theme when color decided
      }}
      container
    >
      Contact
    </Grid>
  );
};

export default Contact;
