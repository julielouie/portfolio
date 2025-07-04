import { FC, SyntheticEvent, useState } from 'react';
import { IWork } from '../../types/Work';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import FlowerRow from '../FlowerRow';
import TechnologiesDialog from './TechnologiesDialog';

interface IWorkAccordionProps {
  work: IWork;
  expanded: string | false;
  updateSingleAccordion: (_event: SyntheticEvent, newExpanded: boolean, panel: string) => void;
}

const WorkAccordion: FC<IWorkAccordionProps> = (props) => {
  const { work, expanded, updateSingleAccordion } = props;

  const [openTechnologies, setOpenTechnologies] = useState(false);

  return (
    <>
      <Accordion
        expanded={expanded === work.company}
        onChange={(event: SyntheticEvent, newExpanded: boolean) => updateSingleAccordion(event, newExpanded, work.company)}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Grid container flexDirection="column">
            <Grid container flexDirection="row" alignItems="center">
              <Typography variant="h5" sx={{ mr: 2 }}>
                {work.company}
              </Typography>
              {work.dateEnd[0] === 'Present' && (
                <Grid>
                  <Box className="blinking" />
                </Grid>
              )}
            </Grid>
            {expanded === work.company && work.titles.length > 2 ? (
              ''
            ) : (
              <Grid container flexDirection="row">
                <Grid>
                  <Typography variant="body1" sx={{ pr: 1 }}>{`${work.titles[0]}:`}</Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1">
                    {work.titles.length > 1
                      ? `${work.dateStart[work.dateStart.length - 1]} - ${work.dateEnd[0]}`
                      : `${work.dateStart[0]} - ${work.dateEnd[0]}`}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {work.technologies.length ? (
            <Chip label="See Technologies" color="primary" sx={{ mb: 2 }} onClick={() => setOpenTechnologies(true)} />
          ) : (
            ''
          )}
          {work.description.map((position, positionIndex) => (
            <Grid container key={`${work.company}-${work.titles[positionIndex]}`}>
              {work.titles.length > 1 ? (
                <Grid container flexDirection="column">
                  <Grid>
                    <Typography variant="button">{work.titles[positionIndex]}</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body2">
                      {work.dateStart[positionIndex]} - {work.dateEnd[positionIndex]}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                ''
              )}
              <Box sx={{ mb: 2 }}>
                {position.length > 1 &&
                  position.map((description, descriptionIndex) => (
                    <Box
                      sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                      key={`${work.company}-${work.titles[positionIndex]}-${descriptionIndex}`}
                    >
                      <Box sx={{ pl: description[0] === ' ' ? 2 : 0 }}>
                        <FlowerRow text="p" animationDuration={0} size="24" />
                      </Box>
                      <Typography sx={{ pl: 2 }} variant="body1">
                        {description.trim()}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>
      {work.technologies.length ? (
        <TechnologiesDialog
          company={work.company}
          open={openTechnologies}
          technologies={work.technologies}
          close={() => setOpenTechnologies(false)}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default WorkAccordion;
