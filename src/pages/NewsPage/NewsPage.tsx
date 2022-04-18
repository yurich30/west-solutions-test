import React from 'react';
// @ts-ignore
import { CubeGrid } from 'styled-loaders-react';
import { toast, ToastContainer } from 'react-toastify';
import { useGetHeadlinesByCountryQuery } from '../../store/reducers/newsApi';
import NewsList from '../../components/News/NewsList';
import { CustomContainer } from './NewsPage.styled';
import 'react-toastify/dist/ReactToastify.css';

function NewsPage() {
  const { data, error, isLoading } = useGetHeadlinesByCountryQuery('us');

  const toastMess = () =>
    toast.error(
      // @ts-ignore
      `${error.data.message}`,
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );

  return (
    <CustomContainer maxWidth='xl'>
      {isLoading && <CubeGrid color='#1976d2' />}
      {data && <NewsList newsList={data} />}
      {error && toastMess() && <ToastContainer />}
    </CustomContainer>
  );
}

export default NewsPage;
