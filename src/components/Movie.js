import React from "react";
//Importing Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
//Importing Dispatch
import { useDispatch } from "react-redux";
//Importing API URL
import { getMovieDetails } from "../actions/movieDetailsAction";
import { Link } from "react-router-dom";

export const Movie = ({ name, year, coverImage, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  const movieDetailHandler = () => {
    dispatch(getMovieDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledMovie
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={movieDetailHandler}
    >
      <Link to={`/movie/${id}`}>
        <Title layoutId={`title ${stringPathId}`}>
          <h3>
            {name}
            <em> ({year})</em>
          </h3>
        </Title>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={coverImage}
          alt={name}
        />
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 0px 25px rgb(0, 0, 0, 0.35);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Title = styled(motion.div)`
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem;

  em {
    font-size: 1rem;
  }
`;

export default Movie;
