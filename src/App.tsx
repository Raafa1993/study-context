import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes/index';

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
