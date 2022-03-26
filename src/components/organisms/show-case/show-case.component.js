import React from 'react';

const ShowCase = (children) => {
  const style = {
    'width': '100%',
    'height': '100%',
    'margin': '0 auto',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }

  return <div style={style}>
    {children}
  </div>
}

export default ShowCase;
