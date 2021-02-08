import React from 'react';
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <p><b>{props.subreddit}</b> - {props.userName}</p>
      <h3><em>{props.title}</em></h3>
    </React.Fragment>
  );
}

Post.propTypes = {
  subreddit: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string
};

export default Post;