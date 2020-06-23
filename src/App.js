import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/Page';
import NewsPage from './pages/NewsPage/Page';
import AddNewsPage from './pages/AddNewsPage/Page';
import EditNewsPage from './pages/EditNewsPage/Page';
import { BroadcastChannel } from 'broadcast-channel';
import { logOut } from './redux/user/actions';
const App = ({ user, logOut }) => {
  const channel = new BroadcastChannel('foobar');
  const [idTab, setIdTab] = useState(new Date());
  channel.onmessage = (msg) => {
    if (user && Number(idTab) !== Number(msg.sender)) {
      if (user.id === msg.id) {
        logOut();
      }
    }
  };

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() =>
            user ? <Redirect to='/news' /> : <AuthorizationPage />
          }
        />
        <Route
          exact
          path='/news'
          component={() =>
            user ? (
              <NewsPage channel={channel} idTab={idTab} />
            ) : (
              <Redirect to='/' />
            )
          }
        />
        <Route
          path='/news/add'
          component={() => (user ? <AddNewsPage /> : <Redirect to='/' />)}
        />
        <Route
          path='/news/:newsID'
          component={() => (user ? <EditNewsPage /> : <Redirect to='/' />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
