import React from 'react';
import { STATS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../../helper/Error';
import Loading from '../../helper/Loading';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) <Error error={error} />;
  if (loading) <Loading />;
  if (data) {
    return (
      <div>
        <UserStatsGraphs data={data} />
      </div>
    );
  } else return null;
};

export default UserStats;
