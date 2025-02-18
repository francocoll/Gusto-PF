import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux';
import axios from 'axios'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'
//----------------Auth0 Config----------------------------
const domain = 'dev-18zov1enqjrx8hn7.us.auth0.com';
const clientId = 'LqqBa9zF6gjJ2lwcrNYsAtYpikXifzQZ';

// para el deploy las variables de arriba, para local las de abajo

// const domain = 'dev-18zov1enqjrx8hn7.us.auth0.com';
// const clientId = 'dC62CcwF4rJihASZzkZ7ZTixIGGoRtao';

axios.defaults.baseURL = 'https://gusto-pf-franco.up.railway.app'

//  axios.defaults.baseURL = 'http://localhost:3001'


ReactDOM.render(
  <ChakraProvider>

    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
