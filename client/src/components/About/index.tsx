import { FC } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import FlowerRow from '../FlowerRow';
import PepperImg from '../../assets/pepper_1.jpg';

const About: FC = () => {
  const theme = useTheme();

  return (
    <Grid id="about" sx={{ pt: 10, px: '1rem' }} container>
      <Grid container sx={{ mx: 'auto', maxWidth: '80rem', width: '100%' }}>
        <Grid container size={{ xs: 12, md: 6 }}>
          <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: 5 }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'flex' }}
              fill={theme.palette.primary.main}
            >
              <defs>
                <clipPath id="arch-clip" clipPathUnits="userSpaceOnUse">
                  <path d="M 0 200 A 200 200 0 0 1 400 200 L 400 500 L 0 500 Z" />
                </clipPath>
              </defs>
              <image href={PepperImg} width="400" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#arch-clip)" />
            </svg>
          </Grid>
        </Grid>
        <Grid container flexDirection="column" justifyContent="center" spacing={2} size={{ xs: 12, md: 6 }}>
          <Grid>
            <Typography variant="h3" fontWeight={400}>
              About Me
            </Typography>
            <FlowerRow text="About Me" animationDuration={0} size="27" />
          </Grid>
          <Grid>
            <Typography variant="h4" fontWeight={400}>
              Hi, I'm Julie, but most people call me Jules.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" fontWeight={400}>
              I'm a software engineer and animal lover who loves building sleek, user-friendly apps with React, TypeScript, Node.js, and
              Figma. I specialize in the frontend and move fast, write clean code, and live for those “this just works” chef's kiss moments.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" fontWeight={400}>
              When I’m not coding, I’m training my pup, painting tiny pokéballs on nails, hunting for my next food adventure, or losing
              track of time in a cozy game (Dragon Age counts as cozy, right?)
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" fontWeight={400}>
              I’m all about good vibes, great design, and snuggling my dog 💕
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
