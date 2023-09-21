// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; BVS-NEPAL Template By&nbsp;
          <Typography component={Link} variant="subtitle2" href="https://codedthemes.com" target="_blank" underline="hover">
            CodedThemes
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography variant="subtitle2" color="secondary" component="span">
            Developed By&nbsp;
            <Typography component={Link} variant="subtitle2" href="https://aswinisoft.com" target="_blank" underline="hover">
              Deependra Adhikari
            </Typography>
          </Typography>
          <Typography variant="subtitle2" color="secondary" component="span">
            Supported By&nbsp;
            <Typography component={Link} variant="subtitle2" href="https://aswinisoft.com" target="_blank" underline="hover">
              AswiniSoft Pvt. Ltd.
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
