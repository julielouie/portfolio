import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import TextureOverlay from '../../assets/transparent_adobe_texture_soft.png';

const Intro: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${TextureOverlay})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        pt: 10,
      }}
    >
      <Typography variant="h4">See Works</Typography>
    </Box>
  );
};

export default Intro;
