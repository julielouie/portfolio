import { Component, ErrorInfo, ReactNode } from 'react';
import { Typography, Grid, AccordionSummary, AccordionDetails, Accordion, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icon from '../../../public/logo.png';
import { Link } from 'react-router-dom';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: any;
  info: any;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
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
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
          <Box component="main" sx={{ width: '100%' }}>
            <Grid container flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', px: '1rem' }}>
              <Grid container spacing={3} flexDirection="column" sx={{ mx: 'auto', maxWidth: '80rem', width: '100%', py: '5rem', mb: 5 }}>
                <Grid
                  component="div"
                  sx={{
                    backgroundImage: `url(${Icon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '201px',
                    width: '205px',
                  }}
                />
                <Grid>
                  <Typography variant="h1" sx={{ fontWeight: 500 }}>
                    Oops!
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h4">Something went wrong. Please let Julie know!</Typography>
                </Grid>
                <Grid sx={{ border: '2px solid orange', borderRadius: '5px' }}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{error.toString()}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">{info.componentStack}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid>
                  <Link to="/">
                    <Button color="primary" variant="contained">
                      Home
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
