import { FC, SyntheticEvent, useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import WorkAccordion from './WorkAccordion';
import FlowerRow from '../FlowerRow';
import { jobs } from './Jobs';

const Experience: FC = () => {
  const [expanded, setExpanded] = useState<string | false>('');

  const theme = useTheme();

  const updateSingleAccordion = (_event: SyntheticEvent, newExpanded: boolean, panel: string) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid id="experience" sx={{ pt: 10, px: '1rem', minHeight: '50vh' }} container>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        sx={{ mx: 'auto', maxWidth: '80rem', width: '100%', py: '5rem', mb: 5 }}
        spacing={2}
      >
        <Grid>
          <Typography variant="h3" fontWeight={400}>
            Experience
          </Typography>
          <FlowerRow text="Experience" animationDuration={0} size="24" />
        </Grid>
        <Grid sx={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: '5px' }}>
          {jobs.length
            ? jobs.map((work, workIndex) => (
                <Box key={work.company}>
                  <WorkAccordion work={work} expanded={expanded} updateSingleAccordion={updateSingleAccordion} />
                  {workIndex !== jobs.length - 1 && (
                    <Box sx={{ height: '1px', width: '97.5%', mx: 'auto', backgroundColor: theme.palette.primary.main }} />
                  )}
                </Box>
              ))
            : ''}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
