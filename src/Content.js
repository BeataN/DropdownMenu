import React from "react";

const Content = props => {
  return (
    <div className="content-wrap">
      {props.content && <article>{props.content}</article>}
    </div>
  );
};

export default Content;
