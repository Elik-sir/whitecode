import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  NewsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid black',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '10px',
    width: '350px',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: '14px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  date: {
    fontSize: '12px',
    marginBottom: '0',
    opacity: '52%',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    width: '80%',
    margin: '0',
    marginBottom: '1px',
    letterSpacing: '9.6',
  },
  news: {
    width: '80%',
    height: '100%',
  },
  wrapperNews: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90px',
  },
}));
