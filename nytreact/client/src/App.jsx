import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import HeaderSemantic from './components/Header';
import Articles from './components/Articles';
import SavedArticles from './components/SavedArticles';
import Search from './components/Search';
import API from "../../utils/API";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({articles: res.data})
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">

        <HeaderSemantic className="App-header" />

        <Container>
          {this.state.articles.map(articles => 
              <Articles articleName={articles.title}/>
            )
          }
          
          <Articles articleName="YEEYEE"/>
          <SavedArticles 
            articleName="yeecsad" 
            description="YEEYEEEYEAIJDASDJS"
            articleDate="10-20-99"
          />
          <Search />
        </Container>

      </div>
    );
  }
}

export default App;
