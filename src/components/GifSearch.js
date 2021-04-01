import React from 'react'


class GifSearch extends React.Component{
    state = {
        searchQuery: ""
    }

    handleChange = (e) => {
        this.setState({
          searchQuery: e.target.value
        })
      }
    
      render(){
        return(
          <form onSubmit={ (e) => this.props.fetchImages(e, this.state.searchQuery) }> 
            <label>Enter desired topic: </label>
            <input onChange={this.handleChange} type='text' id='query' value={this.state.searchQuery} />
            <input type='submit' />
          </form>
        )
      }
    
}


export default GifSearch