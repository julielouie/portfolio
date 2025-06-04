import { Box } from '@mui/material';
import { FC } from 'react';
import TextureOverlay from '../../assets/transparent_adobe_texture.png';

const Contact: FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundImage: `url(${TextureOverlay})`,
        backgroundColor: '#a25833',
        height: '50vh',
      }}
    >
      Contact
    </Box>
  );
};

export default Contact;
