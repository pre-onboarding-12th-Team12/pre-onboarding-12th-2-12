import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'page/Home';
import Detail from 'page/Detail';
import NotFound from 'page/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
