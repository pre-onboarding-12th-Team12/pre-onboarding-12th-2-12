import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'page/Home';
import Detail from '../page/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        //FIXME - path 필요시 수정!
        index: true,
        element: <Home />,
      },
      {
        //FIXME - path 필요시 수정!
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: 'NotFound',
  },
]);

export default router;
