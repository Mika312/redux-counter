import React from "react";
import { connect } from "react-redux";

const Screen = ({ count }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "darkblue",
      height: 200,
      width: 200,
      color: "white",
      borderRadius: 10,
    }}
  >
    {count}
  </div>
);

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    count: state.counter,
  };
};

export default connect(mapStateToProps)(Screen);
