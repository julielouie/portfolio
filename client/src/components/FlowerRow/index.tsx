import { FC } from 'react';
import { Box } from '@mui/material';
import Flower from './Flower';

interface IFlowerRowProps {
  text: string;
  animationDuration: number;
  size?: string;
}

const FlowerRow: FC<IFlowerRowProps> = (props) => {
  const { text, animationDuration, size } = props;

  const generateFlowerSettingsFromChar = (char: string) => {
    const code = char.toLowerCase().charCodeAt(0);

    const hue = (code * 37) % 360;
    const saturation = 60 + ((code * 17) % 41);
    const lightness = 50 + ((code * 23) % 31);
    const petals = ((code * 19) % 4) + 5;

    return {
      hue,
      saturation,
      lightness,
      petals,
      animationDuration,
      size,
    };
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {text.split('').map((char, index) => {
        const settings = generateFlowerSettingsFromChar(char);
        return <Flower key={index} {...settings} />;
      })}
    </Box>
  );
};

export default FlowerRow;
