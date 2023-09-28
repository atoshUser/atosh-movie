import React from "react";
import { ICard } from "./card.props";
import Image from "next/image";
import { image_base_url } from "@/helpers/constant";

const Card = ({ movie }: ICard) => {
  return (
    <div className="relative flex flex-col rounded-md transition-all duration-300 hover:scale-110 overflow-hidden md:rounded min-w-[210px] h-[240px] md:min-w-[300px]  md:h-[300px] lg:h-[350px]">
      <Image
        src={`${image_base_url}/${movie?.poster_path || movie?.backdrop_path}`}
        alt={movie?.title || movie?.original_title}
        fill
        className="md:object-cover"
      />
    </div>
  );
};

export default Card;
