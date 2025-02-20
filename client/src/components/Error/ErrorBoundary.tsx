import { Component, ErrorInfo, ReactNode } from 'react';
import { Typography, Grid2 as Grid, AccordionSummary, AccordionDetails, Accordion, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icon from '../../../public/vite.svg';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
  info: any;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render(): ReactNode {
    const { error, hasError, info } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '70vh' }}>
          <Grid container spacing={2} sx={{ p: 5 }}>
            <Grid size={{ xs: 12 }} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
              <Box
                component="div"
                sx={{
                  backgroundImage: `url(${Icon})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: '200px',
                  width: '200px',
                }}
              />
              <Typography variant="h1" sx={{ pl: 2 }}>
                Oops...
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant="h4" sx={{ pr: 2 }}>
                Something went wrong. Please let someone know!
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{error.toString()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{info.componentStack}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
