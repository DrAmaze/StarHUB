import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App'
import 'cross-fetch/polyfill';


// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
//   request: operation => {
//     operation.setContext({
//       headers: { authorization: `Bearer ${ process.env.GITHUB_TOKEN }` }
//     });
//   }
// });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
