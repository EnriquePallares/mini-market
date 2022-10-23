import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import getStore from './store/getStore';

library.add();

function App() {
  const { store } = getStore();

  return (
    <Provider store={store}>
      <BrowserRouter basename="/minimarket">
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
