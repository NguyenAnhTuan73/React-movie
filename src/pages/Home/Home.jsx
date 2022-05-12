import React from "react";
import { OutlineButton } from "../../components/button/Button";
import HeroSlide from "../../components/hero-slide/HeroSlide";
import "./home.scss";
import { Link } from "react-router-dom";
import MovieList from "../../components/movie-list/MovieList";
import { category, movieType } from "../../api/tmdbApi";
const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Reted Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rate TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={movieType.top_rated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
