import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        query:''
    }

    onInputChange = (e) =>{
        this.setState({ query: e.target.value});
    };

    onFormSubmit = e => {
         e.preventDefault();
        // ToDo : MAke sure we call
        // callback from parent component
    }

    render() {
        return (
            <div className='search-bar ui segment'>
               <form  onSubmit={this.onFormSubmit} className='ui form'>
                   <div className='field'>
                       <label> Video Search</label>
                       <input 
                       type='text' 
                       value={this.state.query}
                       onChange={this.onInputChange} />

                   </div>

               </form>
            </div>
        )
    }
}
