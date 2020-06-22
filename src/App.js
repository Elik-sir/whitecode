import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/Page';
import NewsPage from './pages/NewsPage/Page';
import AddNewsPage from './pages/AddNewsPage/Page';
import EditNewsPage from './pages/EditNewsPage/Page';

const App = ({ user }) => {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            user ? <Redirect to='/news' /> : <AuthorizationPage />
          }
        />
        <Route
          exact
          path='/news'
          render={() => (user ? <NewsPage /> : <Redirect to='/' />)}
        />
        <Route
          path='/news/add'
          render={() => (user ? <AddNewsPage /> : <Redirect to='/' />)}
        />
        <Route
          path='/news/:newsID'
          render={() => (user ? <EditNewsPage /> : <Redirect to='/' />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
