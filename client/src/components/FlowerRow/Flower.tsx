import { FC } from 'react';

interface IFlowerProps {
  size?: string;
  hue: number;
  saturation: number;
  lightness: number;
  petals: number;
  animationDuration: number;
}

const Flower: FC<IFlowerProps> = (props) => {
  const { size, hue, saturation, lightness, petals, animationDuration } = props;

  const petalColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const petalRadius = 20;
  const petalsArray = Array.from({ length: petals });

  return (
    <svg
      width={size || ' 30'}
      height={size || '30'}
      viewBox="-50 -50 100 100"
      style={{
        animation: `spin-slow ${animationDuration}s linear infinite`,
      }}
    >
      {petalsArray.map((_, i) => {
        const angle = (360 / petals) * i;
        return (
          <g key={i} transform={`rotate(${angle})`}>
            <ellipse cx={0} cy={-30} rx={petalRadius} ry={petalRadius / 2} fill={petalColor} />
          </g>
        );
      })}
      <circle cx={0} cy={0} r={6} fill="#FFD700" />
    </svg>
  );
};

export default Flower;
