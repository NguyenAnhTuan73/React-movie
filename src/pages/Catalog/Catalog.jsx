import React from "react";
import "./catalog.scss";
import { useParams } from "react-router";
import PageHeader from "../../components/page-header/PageHeader";
import { category as cate } from "../../api/tmdbApi";
import MovieGird from "../../components/movie-gird/MovieGird";
const Catalog = () => {
  const { category } = useParams();
  console.log("check:", category);
  return (
    <div>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGird category={category} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
