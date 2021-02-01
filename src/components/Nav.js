import React, { useState } from "react";
//importing Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Importing Action Creator
import { getSearchedMovies } from "../actions/moviesAction";
//Importing Dispatch
import { useDispatch } from "react-redux";
//import animations
import { fadeIn } from "../animations";

const Nav = () => {
  //defining local state
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const getSearchedMoviesHandler = (event) => {
    event.preventDefault();
    dispatch(getSearchedMovies(inputText));
    setInputText("");
  };

  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <h1 onClick={clearSearched}>
        Box Office <span>Reviews</span>
      </h1>
      <form>
        <input type="text" onChange={inputTextHandler} value={inputText} />
        <button onClick={getSearchedMoviesHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  min-height: 10vh;
  text-align: center;
  padding-top: 0.5rem;

  h1 {
    cursor: pointer;
  }

  span {
    color: red;
  }

  input {
    width: 30%;
    padding: 0.5rem 1rem;
    border: gray 1px solid;
    box-shadow: 0px 0px 25px rgb(255, 0, 0, 0.25);
    @media (max-width: 850px) {
      width: 45%;
      }
  }

  button {
    border: none;
    border-radius: 5px;
    background: red;
    color: white;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    }
  }
`;

export default Nav;
