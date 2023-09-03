// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider } from 'notistack';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <SnackbarProvider maxSnack={3}>
        <Routes />
      </SnackbarProvider>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
