import React from 'react';
import { COMMENT_POST } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../../helper/Error';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        id="comment"
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
