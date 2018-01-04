import React from 'react';

export default props => {
  return (
    <div>
      <h1>Im a header</h1>
      {props.children}
      <h1>Im a footer</h1>
    </div>
  );
};
