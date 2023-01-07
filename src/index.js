import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Chakra } from 'components/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Chakra>
            <App />
    </Chakra>
  </React.StrictMode>
);
