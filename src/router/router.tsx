import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Detail from '../page/Detail';
import IssueListPage from 'page/IssueListPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        //FIXME - path 필요시 수정!
        index: true,
        element: <IssueListPage></IssueListPage>,
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
