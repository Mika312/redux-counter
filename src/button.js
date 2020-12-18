import React from "react";
import { connect } from "react-redux";

const Button = ({ increment, decrement }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "",
      marginTop: 20,
      height: 30,
    }}
  >
    <button
      onClick={increment}
      style={{
        marginRight: 10,
        cursor: "pointer",
      }}
    >
      INCREMENT
    </button>
    <button
      onClick={decrement}
      style={{
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      DECREMENT
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(null, mapDispatchToProps)(Button);
