import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n-1) + '...': str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;


// @media screen and (max-width:768px) {
//      .browse{
//         display: block
//     }
//     .center  ul li a{
//         display: block;
//         margin:40px 0 ;
//     }
//     .checkbtn #bars{
//         display: block;
//     }
//     .center ul li a{
//         background-color: rgb(6, 6, 6);
//         position: fixed;
//         text-align: center;
//         width: 75%;
//         height: 20vh;
//         right: -120%;
//         margin-left: 0;
//         transition: all 0.3s;
//         font-size: 20px;
//         padding: 20px;
//     }
   
//     #check:checked~ ul li a{
//         right:0
//     }
    
//     #check:checked~ label #bars{
//         display: none;
//     } 
//     #check:checked ~ label #cancle{
// display: block;    
// } 
// }
//             <input type="checkbox" id="check"/>
//             <label htmlFor="check" class="checkbtn">
//             <i className="fas fa-angle-down" id="bars"> </i>
//             <i className="fas fa-angle-up" id="cancle"></i>  
//         </label>