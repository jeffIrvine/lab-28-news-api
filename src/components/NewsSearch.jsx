import React from 'react';
import { getArticlesList } from '../services/getArticles';
import Search from '../components/presentationalComp/Search';
import ArticlesList from './presentationalComp/ArticlesList';

export default class NewsSearch extends React.Component {
  state = {
    search: '',
    loading: false,
    articles: []
  }

  componentDidMount() {
    getArticlesList()
      .then(articles => this.setState({ articles }));
  }

  handleClick = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await getArticlesList(this.state.search)
      .then(search => this.setState({ search }));
  }

  render() {
    return (
      <div>
        <h1>The News</h1>
        <Search 
          search={this.state.search} 
          handleClick={this.handleClick} 
          handleSubmit={this.handleSubmit}
        />
        <ArticlesList 
          search={this.state.search}
        />
      </div>
    );
  }
}
