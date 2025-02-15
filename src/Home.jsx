import React from 'react'
import Head from './Head'
import Body from './Body'

const Home = () => {
  return (
    <div>
        <style>
            {` 

            body{
            margin: 0;
            padding: 0;
            background-image:  linear-gradient(60deg,
                            rgba(245, 70, 66, 0.75),
                            rgba(8, 83, 156, 0.75)),url("https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg");
            width:100%;
            height:100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            }
            `}
        </style>
      <Body />
    </div>
  )
}

export default Home
