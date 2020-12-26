import axios from 'axios';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'hello to hamidreza',
      monsters: [],
      searchField: ''
    }
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

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div className="app">
        <h1 id="title">list of monsters</h1>

        <input type="text" onChange={e => this.setState({searchField: e.target.value})} placeholder="search in monsters" />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
