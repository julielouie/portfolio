import { FC } from 'react';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import TextureOverlay from '../../assets/transparent_adobe_texture_soft.png';
import { Link } from 'react-router-dom';

const Intro: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      id="intro"
      sx={{
        minHeight: '100vh',
        pt: 10,
        px: '1rem',
        backgroundImage: theme.palette.mode === 'light' ? `url(${TextureOverlay})` : 'none', // update for dark theme when texture decided
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
      container
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        spacing={2}
        sx={{ mx: 'auto', maxWidth: '80rem', width: '100%', py: '5rem' }}
      >
        <Grid>
          <Typography variant="h1" fontWeight={400}>
            Julie Louie
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h3" fontWeight={400}>
            Software Engineer
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h6" fontWeight={400}>
            I turn dreams into scalable code and seamless user experiences.
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained">
            <Link to="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
              See Works
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
