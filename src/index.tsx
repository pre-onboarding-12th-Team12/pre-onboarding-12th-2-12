import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'router/router';
import { IssueContextProvider } from 'contexts/IssueContext';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);
root.render(
  <IssueContextProvider>
    <RouterProvider router={router} />
  </IssueContextProvider>
);
