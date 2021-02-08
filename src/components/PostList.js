import React from 'react';
import Post from './Post';

const masterPostList = [
  {
    subreddit: 'r/HighQualityGifs',
    userName: 'u/ballz_Boi69420',
    title: 'I Love Elon Musk'
  },
  {
    subreddit: 'r/WallstreetBets',
    userName: 'u/GMEHFDLer',
    title: '$GME TO THE MOON'
  },
  {
    subreddit: 'r/Robinhood',
    userName: 'u/Investor4269',
    title: 'Robinhood SUX. DOGECOIN TO THE MOON'
  }
]

function PostList(){
  return (
    <React.Fragment>
      <hr/>
      {masterPostList.map((post, index) =>
      <Post subreddit={post.subreddit}
        userName={post.userName}
        title={post.title}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;