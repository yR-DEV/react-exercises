import React, { useEffect } from 'react';

const Comments = (props) => {

    useEffect(() => {
        props.getAPI('comments');
        return () => props.clearState();
    }, []);

    return (
        <ul>
          {props.comments.map(comment => {
              return <li key={comment.id}>
                  <p>{comment.name}</p>
                  <ul>
                    <li>{comment.body}</li>
                  </ul>
              </li>
          })}
        </ul>
    )
}

export default Comments;