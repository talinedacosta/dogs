import React from 'react';
import { STATS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../../helper/Error';
import Loading from '../../helper/Loading';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

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
      <React.Suspense fallback={<></>}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
};

export default UserStats;
