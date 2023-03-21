import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import TournamentListTools from './components/TournamentListTools/TournamentListTools';
import TournamentList from './components/TournamentList/TournamentList';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <TournamentListTools />
      <TournamentList />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
