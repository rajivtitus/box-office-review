import React, { useEffect } from "react";
//import components
import Movie from "../components/Movie";
//importing Styling and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";
//Importing Dispatch and Selector
import { useDispatch, useSelector } from "react-redux";
//Importing Action Creators
import { getPopularMovies } from "../actions/moviesAction";
//Importing Component
import MovieDetail from "../components/MovieDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => dispatch(getPopularMovies()), [dispatch]);

  const { popular, searched } = useSelector((state) => state.movies);

  return (
    <MoviesList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} />}
        </AnimatePresence>
        {searched &&
          (searched.length ? (
            <div>
              <h2>Searched Movies</h2>
              <Movies>
                {searched.map((movie) => (
                  <Movie
                    name={movie.Title}
                    year={movie.Year}
                    coverImage={movie.Poster}
                    key={movie.imdbID}
                    id={movie.imdbID}
                  />
                ))}
              </Movies>
            </div>
          ) : (
            ""
          ))}
        <h2>Batman Movies</h2>
        <Movies>
          {popular.map((movie) => (
            <Movie
              name={movie.Title}
              year={movie.Year}
              coverImage={movie.Poster}
              key={movie.imdbID}
              id={movie.imdbID}
            />
          ))}
        </Movies>
      </AnimateSharedLayout>
    </MoviesList>
  );
};

const Movies = styled(motion.div)`
  min-height: 90vh;
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;

const MoviesList = styled(motion.div)`
  padding: 0.5rem 8rem;
  z-index: 1;

  @media (max-width: 850px) {
    padding: 0.5rem 2.5rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

export default Home;
