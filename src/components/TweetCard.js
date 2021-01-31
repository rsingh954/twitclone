import React from 'react'

const TweetCard = ({tweet, url}) => {
  return (
    <div className = "tweet-container">
      <img style={{height:'60px',width:'60px', color:"black", borderRadius: '5rem'}} variant = 'top' src = {url} alt = 'user'/>
      <div className = 'tweet' style = {{color:"black"}}>{tweet}</div>
    </div>
  )
}

export default TweetCard


  