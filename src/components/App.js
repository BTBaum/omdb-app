import React, { Component } from 'react'
import Header from './Header'
import SearchBar from '../containers/SearchBar'
import Table from '../containers/Table'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default App;
