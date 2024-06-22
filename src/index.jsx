import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <strictMode>
    <Todo />
  </strictMode>
);
