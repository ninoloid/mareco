import React from 'react';

const Replied = ({ replyCount }) => {
  return (
    <div className="replied">
      <p className="repliedDetail">Replied :</p>
      <p className="repliedDetail">{ replyCount }</p>
    </div>
  );
}

export default Replied;
