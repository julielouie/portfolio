import { useState, useEffect, FC } from 'react';
import { Zoom, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const scroll = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTopByClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTopByClick}
        color="secondary"
        size="small"
        aria-label="scroll to top of page"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTopButton;
