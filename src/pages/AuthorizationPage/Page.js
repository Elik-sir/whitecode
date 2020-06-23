import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn, startFetch } from '../../redux/user/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import TextField from '@material-ui/core/TextField';

const AuthorizationPage = ({
  authorization,
  startFetch,
  isLoading,
  currentUser,
}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  return (
    <div>
      <h1>Авторизация</h1>
      <TextField
        disabled={isLoading ? true : false}
        error={currentUser === undefined && !isLoading ? true : false}
        id='Login'
        label='Login'
        helperText={
          currentUser === undefined && !isLoading
            ? 'неверный логин или пароль'
            : ''
        }
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <TextField
        disabled={isLoading ? true : false}
        id='password'
        label='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button
        onClick={() => {
          startFetch();
          let a = new Promise((resolve) => {
            setTimeout(() => resolve(), 1000);
          });
          a.then(() => {
            authorization({ login, password });
          });
        }}
      >
        Войти
      </button>
      {isLoading && (
        <CircularProgress size={48} className={classes.buttonProgress} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  authorization: (payload) => dispatch(signIn(payload)),
  startFetch: () => dispatch(startFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
