import React from 'react';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        dislay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: '365px',
          md: '320px'
        },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid grey'
            }}

          />
          <Typography>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={
              {
                fontSize: 15, color: 'gray', ml: '5px'
              }
            } />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{
               fontSize: '15px',
                fontWeight: 500,
                 color: 'gray' 
                 }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}

        </CardContent>

      </Link>

    </Box>
  )
}

export default ChannelCard