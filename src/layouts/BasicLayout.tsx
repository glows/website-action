import React from "react";

interface Props {
  pathName: string;
}

const BasicLayout = (props: Props) => {
  return (
    <div>
      <hr />
      This page online {props.pathName}
      <div className="footer">
        <div>
          <a href="/">
            <em>Steven : </em>
          </a>
          &nbsp;
          <a href="mailto:duncyun@gmail.com">
            <em>duncyun@gmail.com</em>
          </a>
        </div>
        Last updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
};

export default BasicLayout;
