import { FC, SyntheticEvent, useState } from 'react';
import { IWork } from '../../types/Work';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import WorkAccordion from './WorkAccordion';

const Experience: FC = () => {
  const [expanded, setExpanded] = useState<string | false>('');

  const theme = useTheme();

  const updateSingleAccordion = (_event: SyntheticEvent, newExpanded: boolean, panel: string) => {
    setExpanded(newExpanded ? panel : false);
  };

  const works: IWork[] = [
    {
      company: 'Northrop Grumman',
      titles: ['Software Engineer Product Lead', 'Software Engineer 2', 'Software Engineer'],
      dateStart: ['Dec 2022', 'Dec 2021', 'Jan 2021'],
      dateEnd: ['Dec 2024', 'Dec 2022', 'Dec 2021'],
      description: [
        [
          'Led several multi-person teams to build numerous internal applications from the ground up, including:',
          ' Document tracker, digitizing existing work flows and minimizing paper trails, reducing engineer time spent in status meetings by 40% and eliminating document status meetings amongst teams',
          ' Record-keeping and report generating tool for aerospace test engineers to enter, track, filter, search, and report data, increasing test report turnaround time by an average of 80% across multiple laboratories under a $9.2B contract',
          ' Location-based employee announcement tool, streamlining disclosures from corporate to employees regarding general and emergency announcements, improving average employee awareness of events/activities from an average of 1-3 business days to within 1-4 hours of the same business day',
          'Standardized the end-to-end development process of applications built, from UI/UX design, to feature development, to deployment, reducing turnaround time for apps developed by an average of 3 weeks',
          'Recruited, mentored, and endorsed best practices to 10 reporting engineers across several product teams, through code reviews and peer-programming, resulting in clean code bases throughout existing and new projects within the software team',
        ],
        [
          'Built a dashboard application used in multiple laboratories across the company, to provide sensitive real-time information regarding engineering tests and laboratory equipment status, leading to thousands of man hours saved across several different programs, each with multi-billion dollar contracts ',
          'Created a work status tracking tool for many internal teams throughout the company to trace work items and improve productivity, facilitating corporate Agile initiatives by creating and maintaining Agile workflows, and improving communication between and within teams belonging to different programs and organizations',
          'Drove product adoption by presenting and communicating with various programs, resulting in a 50% increase in user base for multiple different products/applications created by the software team',
        ],
        [
          'Spearheaded the modernization of an existing web application product, improving product adoption throughout the company by 60\% and resulting in increased product funding and team budget',
          'Pioneered the integration/maintenance of frontend unit testing with Jest and React Testing Library through utilization of the Gitlab CI/CD pipeline, reducing deployment time by 25\% and increasing code confidence',
          'Increased code readability and ease of management by introducing TypeScript and MaterialUI best practices',
        ],
      ],
      technologies: [],
    },
    {
      company: 'Baytech Consulting',
      titles: ['Software Engineer'],
      dateStart: ['Jun 2020'],
      dateEnd: ['Dec 2020'],
      description: [
        [
          'Developed CRM application for a mortgage company client, increasing their lead tracking from 20% to 90%',
          'Created an easy-to-use and reusable phone system UI component, using the Twilio API, resulting in saved development time across a suite of multiple applications',
          'Designed and constructed wireframes using Figma for existing UI overhauls and new product architecture',
        ],
      ],
      technologies: [],
    },
  ];

  return (
    <Grid id="experience" sx={{ pt: 10, px: '1rem' }} container>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        sx={{ mx: 'auto', maxWidth: '80rem', width: '100%', py: '5rem' }}
        spacing={2}
      >
        <Grid>
          <Typography variant="h3" fontWeight={400}>
            Works
          </Typography>
        </Grid>
        <Grid sx={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: '5px' }}>
          {works.length
            ? works.map((work, workIndex) => (
                <Box key={work.company}>
                  <WorkAccordion work={work} expanded={expanded} updateSingleAccordion={updateSingleAccordion} />
                  {workIndex !== works.length - 1 && (
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
