import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CustomLink } from '../CustomComponents/CustomLink.styled';
import { IArticle } from '../../types/IArticle';
import { formatDate } from '../../utils/formatDate';

interface NewsCardProps {
  article: IArticle;
}

const imageMock =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dxQQBrfgmNAJzXHWdKQXfa7syAFFiEydGA-xT47jDgAQsmIu2xhUL7-vpF2DUB7RMKw&usqp=CAU';

function NewsCard({ article }: NewsCardProps) {
  const { title, publishedAt, urlToImage, description, url } = article;

  return (
    <Card sx={{ height: '550px' }}>
      <CardHeader
        avatar={
          <CustomLink to='/profile' color='#000'>
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          </CustomLink>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={formatDate(publishedAt)}
      />
      <CardMedia
        component='img'
        height='194'
        image={urlToImage || imageMock}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {description || 'Has no description'}{' '}
          <a target='_blank' href={url} rel='noreferrer'>
            Show more
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
