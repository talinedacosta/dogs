import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../../helper/Error';
import Loading from '../../helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response } = request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;