import React from "react";
//importing Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Importing Selector to access state
import { useSelector } from "react-redux";
//Importing icons for logos
import imdb from "../images/imdb.png";
import metacritic from "../images/metacritic.svg";
import rottentomatoes from "../images/rotten-tomatoes.png";
//importing history
import { useHistory } from "react-router-dom";

const MovieDetail = ({ pathId }) => {
  const history = useHistory();
  const { movie, isLoading } = useSelector((state) => state.movieDetails);

  //exit MovieDetails
  const exitMovieDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      history.push("/");
    }
  };

  //select logo based on rating website
  const logoHandler = (website_name) => {
    switch (website_name) {
      case "Internet Movie Database":
        return imdb;

      case "Rotten Tomatoes":
        return rottentomatoes;

      case "Metacritic":
        return metacritic;

      default:
        return imdb;
    }
  };

  return (
    <>
      {!isLoading && (
        <Shadow className="shadow" onClick={exitMovieDetailHandler}>
          <StyledMovieDetails layoutId={pathId}>
            <motion.h2 layoutId={`title ${pathId}`}>{movie.Title}</motion.h2>
            <Stats>
              <div className="image">
                <motion.img
                  src={movie.Poster}
                  layoutId={`image ${pathId}`}
                  alt={movie.Title}
                />
              </div>
              <div className="details">
                <ul>
                  <li>
                    <strong>Release Date: </strong> {movie.Released}
                  </li>
                  <li>
                    <strong>Director: </strong> {movie.Director}
                  </li>
                  <li>
                    <strong>Runtime: </strong> {movie.Runtime}
                  </li>
                  <li>
                    <strong>Genre: </strong> {movie.Genre}
                  </li>
                </ul>
                <div className="ratings">
                  <p>
                    <strong>Ratings:</strong>
                  </p>
                  {movie.Ratings.map((rating) => (
                    <div className="logos" key={rating.Source}>
                      <img
                        src={logoHandler(rating.Source)}
                        alt={rating.Source}
                      />
                      <p>{rating.Value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Stats>
            <AdditionalDetails>
              <ul>
                <li>
                  <strong>Actors: </strong> {movie.Actors}
                </li>
                <li>
                  <strong>Awards: </strong>
                  {movie.Awards}
                </li>
                <li>
                  <strong>Production: </strong>
                  {movie.Production}
                </li>
              </ul>
              <p>
                <strong>Plot: </strong>
                {movie.Plot}
              </p>
            </AdditionalDetails>
          </StyledMovieDetails>
        </Shadow>
      )}
    </>
  );
};

const Shadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  overflow-y: scroll;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: white;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: 10px;
    &:hover {
      background: red;
    }
  }
`;

const StyledMovieDetails = styled(motion.div)`
  width: 55%;
  position: absolute;
  left: 17.25%;
  padding: 0.5rem 4rem;
  box-shadow: 0px 0px 25px rgb(255, 0, 0, 0.25);
  border-radius: 10px;
  background: white;
  @media (max-width: 650px) {
    width: 75%;
    left: 7.5%;
    padding: 0.25rem 2rem;
  }

  @media (max-width: 1065px) {
    h2,
    .image {
      text-align: center;
    }
    .ratings {
      display: flex;
      .logos {
        padding: 0rem 1rem;
      }
    }
  }

  ul {
    list-style: none;
    font-size: 1.15rem;
    line-height: 150%;
    margin: 0;
    padding: 0;
    li {
      padding: 0.15rem 0rem;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 1065px) {
    flex-direction: column;
  }

  .image {
    max-width: 50%;
    overflow: hidden;
    @media (max-width: 1065px) {
      max-width: 100%;
    }
  }
  .details {
    padding-top: 1rem;
  }
  .logos {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.25rem 0rem;

    img {
      width: 2.5rem;
      height: auto;
    }
  }
`;

const AdditionalDetails = styled(motion.div)`
  padding: 1rem 0rem;
  line-height: 200%;
`;

export default MovieDetail;
