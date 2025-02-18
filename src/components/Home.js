import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        David is a Web Developer from Mombasa
      </h1>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Home.defaultProps = {
  color: "black",
};


export default Home;
