import React from 'react';
import NewsSearch from '../NewsSearch';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="news-search">
          <NewsSearch />
        </div>
      </>
    );
  }
}
