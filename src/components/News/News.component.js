import React from 'react';
import { connect } from 'react-redux';
import { Edit, Delete } from '@material-ui/icons';
import { useStyles } from './styles';
import { format } from 'date-fns';
import { deleteNews } from '../../redux/news/actions';
import { Link } from 'react-router-dom';
const News = ({ news, deleteNews }) => {
  const classes = useStyles();
  return (
    <div className={classes.NewsItem}>
      <div className={classes.news}>
        <p className={classes.title}>{news.title}</p>
        <p className={classes.text}>{news.text}</p>
        <img src={news.img} width='150px' height='200px' alt='news' />
        <p className={classes.date}>
          {format(new Date(news.date), 'dd/MM/yyyy HH:mm:ss')}
        </p>
      </div>
      <div className={classes.wrapperNews}>
        <div className='edit'>
          <Link
            to={`/news/${news.id}`}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <Edit />
          </Link>
        </div>
        <div className='del' onClick={() => deleteNews(news.id)}>
          <Delete />
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteNews: (newsID) => dispatch(deleteNews(newsID)),
});
export default connect(null, mapDispatchToProps)(News);
