import React, { Component } from 'react';

const people =[
  {
    id : 1,
  first : "ahmad",
  last : "Rizwan",
  age : 22
},
{
  id : 2,
  first : "bilal",
  last : "zubair",
  age : 25
},
{
  id : 3,
  first : "muhammad",
  last : "zain",
  age : 24
},
]
class App extends Component {
  constructor(props){
    super(props);
  this.state = { 
    people,
    search : ''
  }
}
  handleSearch= (e)=>{
    this.setState({
      search : e.target.value
    })
  }

  searchFor =(search)=>{
    return((x=>{
      return x.first.toLowerCase().includes(search.toLowerCase()) || !search;
    }))
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state)
    this.setState({
      search : ""
    })
  }

  render() { 
    return (
    <div className="App text-center">
      
      <form onSubmit={this.handleSubmit}>
        <label>Serach person</label>
        <input type="text" name="name" onChange={this.handleSearch} value={this.state.search} />
      </form>
     
      {this.state.people.filter(this.searchFor(this.state.search)).map((person)=>{
        return(
          <div key={person.id} className='bg-blue'>
            <h1>{person.first}</h1>
            <h2>{person.last}</h2>
            <h3>{person.age}</h3>
          </div>
        )

      })}
    </div>  );
  }
}
 
export default App;