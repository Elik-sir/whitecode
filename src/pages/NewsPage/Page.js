import React from 'react';
import News from '../../components/News/News.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NewsPage = ({ news, channel, user, idTab }) => {
  channel.postMessage({ sender: idTab, id: user.id });

  return (
    <div style={{}}>
      <h1>НОВОСТИ!!!</h1>
      {news.map((oneNews) => (
        <News key={oneNews.id} news={oneNews} />
      ))}
      <button>
        <Link to='/news/add' style={{ color: 'black', textDecoration: 'none' }}>
          Создать новость
        </Link>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  news: state.news.news,
  user: state.user.currentUser,
});
export default connect(mapStateToProps)(NewsPage);
