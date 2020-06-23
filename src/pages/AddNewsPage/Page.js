import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TextField from '@material-ui/core/TextField';
import { addNews } from '../../redux/news/actions';
import { withRouter } from 'react-router-dom';
const AddNewsPage = ({ addNews, history }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  return (
    <div>
      <h1>Создание новости</h1>
      <TextField
        id='title'
        label='Название'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        id='text'
        label='Текст'
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type='file'
        onChange={(e) => {
          let reader = new FileReader();
          let file = e.target.files[0];

          reader.onloadend = () => {
            setImg(reader.result);
          };

          reader.readAsDataURL(file);
        }}
      />
      <br />
      <button
        onClick={() => {
          if (title && text && img) {
            addNews({ title, text, img });
            history.push('/news');
          } else {
            alert('заполенны не все поля');
          }
        }}
      >
        Создать новость!!
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addNews: (news) => dispatch(addNews(news)),
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(AddNewsPage);
