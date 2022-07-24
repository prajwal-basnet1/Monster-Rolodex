import React from 'react'
import {CardList} from './Componenet/card-list/cardlist.componenet.jsx'
import './Search/search.componenet.css'
import {SearchString} from './Search/search.componenet'
import './App.css'

class App extends React.Component{

constructor() {
  super() 

  this.state = {
    monster:[],
    searchField:""
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{this.setState({monster:data})})
  .catch(err=>console.log(err))
}

handlechange=(e)=> {
  this.setState({searchField:e.target.value})
}

render() {
  const monsters=this.state.monster; 
  const searchField=this.state.searchField
  const filterdMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className='App'>
      <h1 >Monster Roldex</h1>
    <SearchString placeholder='Search Monster' handlechange={this.handlechange}/>
    <CardList monster={filterdMonster}/>
    </div>
  )
}

}
export default App