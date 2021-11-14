import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import { TemplateProvider } from './hooks/Template';
import { WidgetStoreProvider } from './hooks/WidgetStore';
import Routes from './routes/index';

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TemplateProvider>
            <WidgetStoreProvider>
              <Routes />
            </WidgetStoreProvider>
          </TemplateProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
