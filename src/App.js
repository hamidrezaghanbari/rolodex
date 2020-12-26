import axios from 'axios';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'hello to hamidreza',
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      this.setState({
        monsters: response.data
      })
    }).catch(errors => {
      alert(errors)
    })

  }

  // handleChange(e) {
  //   this.setState({searchField: e.target.value})
  // }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div className="app">
        <h1 id="title">list of monsters</h1>

        <SearchBox placeholder="search monster ..." type="search"
            handleChange={this.handleChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
