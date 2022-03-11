import React from "react";

class MovieCard extends React.Component {
    constructor (props) {
        super(props)
    }
//  {
//  mal_id: 5114,
//  rank: 1,
//  title: "Fullmetal Alchemist: Brotherhood",
//  url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
//  image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
//  type: "TV",
//  episodes: 64,
//  start_date: "Apr 2009",
//  end_date: "Jul 2010",
//  members: 2649743,
//  score: 9.16
//  }, 

    render () {
        return (
            <div className="col-6 my-3">
            <div class="card h-100">
              <img
                //src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f"
                src={this.props?.movie?.image_url}
                class="card-img-top"
                alt="skilvul"
              />
              <div class="card-body">
                {/*<h5 class="card-title">Fullmetal Alchemist: Brotherhood</h5> */}
                <h5 class="card-title">{props?.movie?.title}</h5>
                <h6 class="card-subtitle mb-2">
                  {/*<span class={`badge bg-danger`}>TV</span> */}
                  {/*<span class={`badge ${this.props?.movie?.type === 'TV' ?} 'bg-danger' : 'bg-success'}>{this.props?.movie?.type}</span> */}
                  {
                      this.props?.movie?.type === 'TV'
                      ? <span class={'badge bg-danger'}>TV</span>
                      : <span class={'badge bg-success'}>{this.props?.movie.type}</span>
                  }
                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <div class="card-body">
                <a
                  href="https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
                  class="btn btn-primary w-100 text-uppercase"
                >
                  readmore
                </a>
              </div>
            </div>
          </div>
        )
    }
}

export default MovieCard