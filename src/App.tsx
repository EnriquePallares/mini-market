import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add();

function App() {
  return (
    <BrowserRouter basename="/minimarket">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
