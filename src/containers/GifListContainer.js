import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
        state = {
            gifs: []
        }
    
   

    fetchImages = (e, query) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=eMol46BTMtC3aHdsQUNqu2DUtGc6M83v`)
            .then(resp => resp.json())
            .then(json => this.getThree(json))
    }

    getThree = (json) => {
        let first3 = json.data.slice(0, 3).map((gif) => gif.images.original.url)
        this.setState({
            gifs: first3
        })
    }

    // componentDidMount(){
    //     this.fetchImages()
    // }

    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchImages={this.fetchImages}/> 
            </div>
        )
    }
}
export default GifListContainer