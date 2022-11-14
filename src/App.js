import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/elements/ErrorBoundary';
import { Main } from './pages';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} exact path="/" />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default hot(App);

App.propTypes = {};
