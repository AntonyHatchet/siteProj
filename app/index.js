import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from 'containers/App';
import store from 'store';

injectTapEventPlugin();

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <MuiThemeProvider>
            <Component />
          </MuiThemeProvider>
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/App', () => renderApp(App));
}
