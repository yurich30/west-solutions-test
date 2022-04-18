import React from 'react';
// @ts-ignore
import { CubeGrid } from 'styled-loaders-react';
import { useGetHeadlinesByCountryQuery } from '../../store/reducers/newsApi';
import NewsList from '../../components/News/NewsList';
import { CustomContainer } from './NewsPage.styled';

function NewsPage() {
  const { data, error, isLoading } = useGetHeadlinesByCountryQuery('us');

  return (
    <CustomContainer maxWidth='xl'>
      {isLoading && <CubeGrid color='#1976d2' />}
      {data && <NewsList newsList={data} />}
      {error && <div>error</div>}
    </CustomContainer>
  );
}

export default NewsPage;
