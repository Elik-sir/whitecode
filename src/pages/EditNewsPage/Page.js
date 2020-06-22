import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router-dom';
import { setEditingNews, editNews } from '../../redux/news/actions';
import { Link } from 'react-router-dom';
const EditNewsPage = ({ setEditingNews, editingNews, history, editNews }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  let { newsID } = useParams();

  useEffect(() => {
    setEditingNews({});
    setEditingNews(newsID);
  }, [newsID, setEditingNews]);
  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setText(editingNews.text);
      setImg(editingNews.img);
    }
  }, [editingNews]);
  return (
    <div>
      <h1>Редактирование Новости</h1>
      {editingNews ? (
        <>
          <TextField
            id='title'
            label='Название'
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={editingNews.title}
          />
          <br />
          <TextField
            id='text'
            label='Текст'
            onChange={(e) => setText(e.target.value)}
            defaultValue={editingNews.text}
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
              if (title && text) {
                editNews({
                  id: editingNews.id,
                  title,
                  text,
                  img: img ? img : editingNews.img,
                  date: Date(),
                });
                setEditingNews({});
              } else {
                alert('заполенны не все поля');
              }
            }}
          >
            <Link to='/news' style={{ color: 'black', textDecoration: 'none' }}>
              Редактировать
            </Link>
          </button>
        </>
      ) : (
        <h1>Такой новости нет!!!</h1>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  editingNews: state.news.editingNews,
});
const mapDispatchToProps = (dispatch) => ({
  setEditingNews: (id) => dispatch(setEditingNews(id)),
  editNews: (news) => dispatch(editNews(news)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditNewsPage);
