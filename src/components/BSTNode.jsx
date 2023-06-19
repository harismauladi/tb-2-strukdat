import React from "react";

function BSTNode({ value, left, right }) {
  return (
    <div className="node">
      <span className="value">{value}</span>
      <div className="children">
        {right && <BSTNode {...right} />}
        {left && <BSTNode {...left} />}
      </div>
    </div>
  );
}

export default BSTNode;
