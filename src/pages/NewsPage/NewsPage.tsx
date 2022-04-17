import React from 'react';
import { useGetHeadlinesByCountryQuery } from '../../store/reducers/newsApi';
import NewsList from '../../components/News/NewsList';
import { CustomContainer } from './NewsPage.styled';

function NewsPage() {
  const { data, error, isLoading } = useGetHeadlinesByCountryQuery('us');

  return (
    <CustomContainer maxWidth='xl'>
      {isLoading && <div>loading</div>}
      {data && <NewsList newsList={data} />}
      {error && <div>error</div>}
    </CustomContainer>
  );
}

export default NewsPage;
