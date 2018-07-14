import React, { Component } from 'react'
import Header from './Header'
import SearchBar from '../containers/SearchBar'
import Table from '../containers/Table'

const styles = {
  app: {
    backgroundColor: "#EFF8FF"
  }
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid m-0 p-0" style={styles.app}>
        <Header />
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default App;
