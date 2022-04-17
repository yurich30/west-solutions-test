import React from 'react';
import { Grid } from '@mui/material';
import { IArticle } from '../../types/IArticle';
import NewsCard from './NewsCard';

interface NewsListtProps {
  newsList: IArticle[];
}

function NewsList({ newsList }: NewsListtProps) {
  const renderedNewsList = newsList.map(article => (
    <Grid item key={article.title} gridColumn='span 4' sx={{ maxWidth: 300 }}>
      <NewsCard article={article} />
    </Grid>
  ));

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
      gap={2}
    >
      {renderedNewsList}
    </Grid>
  );
}

export default NewsList;
