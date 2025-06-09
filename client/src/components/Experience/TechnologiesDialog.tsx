import { FC } from 'react';
import { Box, Chip, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { ITechnology } from '../../types/Technology';
import { Close } from '@mui/icons-material';

interface ITechnologiesDialogProps {
  company: string;
  technologies: ITechnology[];
  open: boolean;
  close: () => void;
}

const TechnologiesDialog: FC<ITechnologiesDialogProps> = (props) => {
  const { company, technologies, open, close } = props;

  return (
    <Dialog onClose={close} open={open} closeAfterTransition={false}>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Technologies Used</Typography>
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Box>
        {technologies.length
          ? technologies.map((tech, techIndex) => (
              <Chip
                icon={tech.icon}
                label={tech.label}
                key={`${company}-${tech.label}-${techIndex}`}
                sx={{ px: 1, m: 0.5 }}
                color="primary"
              />
            ))
          : ''}
      </DialogContent>
    </Dialog>
  );
};

export default TechnologiesDialog;
