import { FC } from 'react';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import TextureOverlay from '../../assets/transparent_adobe_texture_pothos.png';
import { Link } from 'react-router-dom';
import FlowerRow from '../FlowerRow';
import useWindowSize from '../../hooks/useWindowSize';

const Intro: FC = () => {
  const theme = useTheme();

  const size = useWindowSize();

  return (
    <Grid
      id="intro"
      sx={{
        minHeight: '100vh',
        pt: 10,
        px: '1rem',
        backgroundImage: theme.palette.mode === 'light' ? `url(${TextureOverlay})` : 'none', // update for dark theme when texture decided
        backgroundRepeat: 'no-repeat',
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
          <FlowerRow text="Julie Louie" animationDuration={0} size={size.width < 640 ? '21' : '41'} />
        </Grid>
        <Grid>
          <Typography variant="h3" fontWeight={400}>
            Software Engineer
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h6" fontWeight={400}>
            I bring ideas to life with scalable code and seamless UX.
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained">
            <Link to="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>
              See Experience
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
