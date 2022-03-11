import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [], 
      isLoading: false
    }
  } 

  fetchMovieList(params) {
    this.setState({isLoading: true})
    fetch("https://api.jikan.moe/v3/top/anime")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTimeout (() => {
      }, 2000)
      //console.log(data)
      const dataTops = data?.top
      if (dataTops) {
        this.setState({movieList: dataTops})
      }
    }, 5000)

  })
  .catch(error => {
    console.log(error)
  })
}

componentDidMount () {
    this.fetchMovieList()
  }

componentDidUpdate (prevProps, prevState) {
  if (prevState.movieList.length !== this.state.movieList.length) {
    this.setState({isLoading: false})
  }
}

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
        {
          this.state.isLoading === true
          ? <h2>Loading ....</h2>
          : <div id="daftar-anime" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {
              this.state.movieList?.map((anime, index) => (
                <MovieCard movie={anime} key={anime?.mal_id} />
              ))
            }
          </div>
        }
        </div>
      </div>
    );
  }
}
export default App;