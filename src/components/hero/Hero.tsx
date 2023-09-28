import React from "react";
import { useState, useEffect } from "react";
import { IHero } from "./hero.props";
import { IMovie } from "@/interfaces/app.interface";
import Image from "next/image";
import { image_base_url } from "@/helpers/constant";
import { Button, Rating } from "@mui/material";
import { TbPlayerPlayFilled } from "react-icons/tb";
import ReactStars from "react-stars";
const Hero = ({ data }: IHero): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  const getRandomData = ({ data }: IHero) => {
    const randomData = data[Math.floor(Math.random() * data.length)];
    setMovie(randomData);
  };

  useEffect(() => {
    getRandomData({ data });
  }, [data]);

  return (
    <div className=" flex flex-col relative  overflow-hidden w-full  top-0 left-0 h-[50vh] md:h-[90vh]">
      <div className="h-full -z-10">
        <Image
          src={`${image_base_url}${movie?.poster_path || movie?.backdrop_path}`}
          alt={movie?.title || movie?.original_title}
          fill
          className="  h-screen absolute object-cover opacity-50"
        />
      </div>
      <div className="absolute w-full h-[80%]  flex flex-col top-0 left-0 p-[10px] md:pl-[30px] z-200 justify-end md:justify-center">
        <div className="w-[111px] flex p-[7px] md:text-[20px] lg:text-[25px] text-white md:px-[15px] md:py-[8px] justify-center capitalize font-bold  rounded-bl-md rounded-tr-md bg-[#1d1d1d50]/50">
          {movie?.media_type}
        </div>
        <div className="flex  space-x-3  items-center">
          <ReactStars
            edit={false}
            size={25}
            count={10}
            value={movie?.vote_average}
            color1="#fff"
          />
          <span className="text-white text-[12px] md:text-[20px] font-medium">
            ({movie?.vote_count})
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-7xl leading-2  font-bold text-white mb-2 md:mb-4">
          {movie?.title || movie?.original_title}
        </h2>
        <p className="max-w-sm  md:max-w-lg lg:max-w-4xl mb-4 leading-2 md:leading-6 text-slate-200 text-[15px] md:text-[18px] ">
          {movie?.overview?.slice(0, 130)}...
        </p>
        <div className="flex w-[120px] md:w-[150px] lg:w-[200px] rounded-full bg-gradient-to-r p-[1px] md:p-1 from-pink-500 via-red-500 to-yellow-500">
          <Button
            startIcon={<TbPlayerPlayFilled />}
            className="w-full rounded-full text-[12px]  md:text-[15px]  font-medium md:font-bold whitespace-nowrap transition-all  duration-300 bg-white/60 p-[5px] lg:py-[15px]"
          >
            Watch now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
