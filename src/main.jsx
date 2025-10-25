import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// const titlu = createElement('h1', {}, 'Hello from ',
//   createElement('a', {children: 'React', href: 'https://react.dev', target: '_blank'}),
//   createElement('sup', {children: 2}),
//   '!');

// const titlu = (
//   <h1>
//     Hello from <a href="https://scoalainformala.ro" target="_blank">
//       JSX
//     </a>
//     <sup>2</sup>!
//   </h1>
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
