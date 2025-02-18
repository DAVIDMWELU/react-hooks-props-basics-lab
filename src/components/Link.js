import PropTypes from "prop-types";
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>}
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>}
    </div>
  );
}

Links.propTypes = {
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

Links.defaultProps = {
  github: "",
  linkedin: "",
};

export default Links;