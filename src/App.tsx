import { RouterProvider } from 'react-router';
import { router } from './src/routes';
import './styles/globals.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
