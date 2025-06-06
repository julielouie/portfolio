import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import FlowerRow from '../FlowerRow';

const About: FC = () => {
  return (
    <Grid id="about" sx={{ pt: 10, px: '1rem' }} container>
      <Grid container sx={{ mx: 'auto', maxWidth: '80rem', width: '100%', py: '5rem' }}>
        <Grid size={{ xs: 12, md: 6 }} />
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
              I'm a software engineer who loves building sleek, user-friendly apps with React, TypeScript, Node.js. I specialize in the
              frontend and move fast, write clean code, and live for those “this just works” chef's kiss moments.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" fontWeight={400}>
              When I’m not coding, I’m painting tiny pokéballs on nails, hunting for my next food adventure, or losing track of time in a
              cozy game (Witcher 3 counts as cozy, right?)
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" fontWeight={400}>
              I’m all about good vibes, great design, and getting things done 💕
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
