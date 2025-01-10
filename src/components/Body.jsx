import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card.jsx';
import { useState, useEffect, useContext,  } from 'react';
import Shimmer from './Shimmer.jsx';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus.jsx';
import OnlineStatus from './onlineStatus.jsx';
import { PHOTO } from '../utils/constants.jsx';
import React from "react";
import Slider from "react-slick";
import Usercontext from "../utils/Usercontext.jsx";
const Body = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    console.log("Body component render")
    const [searchText, setSearchText] = useState("");
    const [Head, setHead] = useState([])
    const [list, setList] = useState([]);
    const {setUserName} = useContext(Usercontext);
    console.log(setUserName);

    useEffect(() => {
        fetchData();

    }, [])
    console.log(list)
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setHead(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);


    }
    console.log(Head);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<OnlineStatus />)
    return (list.length === 0) ? <Shimmer /> : (

        <>

            <h1 className='text-2xl font-bold m-2 flex justify-center'>What's on your mind ?</h1>
            <div className="slider-container mx-24">
                <Slider {...settings}>
                    {Head.map((item) => (
                        <div key={item.id} className="slider-item flex justify-center">
                            <img className="w-36" src={PHOTO + item.imageId} alt="restaurant" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='flex relative left-36'>
                <input className=' border border-solid border-gray-400 p-2' type='text' placeholder='Search restaurent'
                    value={searchText}
                    onChange={(e) => {

                        setSearchText(e.target.value)

                    }} />
                <button className='border border-solid border-black p-2 m-2 bg-red-700 hover:bg-white   transition duration-300 ' onClick={() => {
                    let filtered = list.filter(
                        (resdata) => resdata.info.name.includes(searchText)
                    )
                    setList(filtered)
                }}>Search</button>
                <button className='border border-solid border-black p-2 m-2 bg-red-700 hover:bg-white transition duration-300' onClick={() => {
                    const filteredList = list.filter(
                        (data) => data.info.avgRating > 4.4)
                    console.log(filteredList);

                    setList(filteredList);


                }}>Top_Rated_Restaurent</button>
                {/* <label>UserName</label>
                <input className = "border border-black m-2" onChange={(e)=>setUserName(e.target.value)} type="text" /> */}
            </div>
            <h1 className='text-2xl font-bold m-2 flex justify-center'>Top Restaurants Chain In delhi</h1>

            <div className="flex flex-wrap justify-center m-2">
                {
                    list.map((restaurent) => {
                        return <Link to={"/restaurents/" + restaurent.info.id} key={restaurent.info.id}>
                            <Card resData={restaurent.info} /></Link>

                    })
                }
            </div>
        </>

    );

};

export default Body;