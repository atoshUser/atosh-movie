import { IRow } from "./row.props";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { useRef, useState } from "react";
import { Card } from "..";
const Row = ({ title, data }: IRow) => {
  const [moved, setMoved] = useState<number>(1);

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollData =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth + 15;

      carouselRef.current.scrollTo({ left: scrollData, behavior: "smooth" });
    }
    if (direction == "left") {
      setMoved((prev) => prev - 1);
    }
    if (direction == "right") {
      setMoved((prev) => prev + 1);
    }
  };
  return (
    <div className="relative z-30 ">
      <div className="absolute flex w-full flex-col top-[-60px] md:top-[-190px] space-y-4">
        <h2 className="text-white text-[15px] md:text-[20px] tracking-[6px] font-extrabold lg:text-[30px] pl-3 md:pl-6">
          {title}
        </h2>
        <div className="w-full group flex items-center">
          <IconButton
            className={`absolute left-0 z-30 opacity-0 group-hover:opacity-100 ${
              moved <= 1 ? "hidden" : "block"
            }`}
            sx={{ color: "white" }}
            size="large"
            onClick={() => handleClick("left")}
          >
            <AiFillCaretLeft />
          </IconButton>

          <div
            ref={carouselRef}
            className="flex w-full  ml-3 md:ml-6 overflow-x-scroll scrollbar-hide  space-x-2  md:space-x-4 "
          >
            {data.map((item) => {
              return <Card key={item.id} movie={item} />;
            })}
          </div>
          <IconButton
            className="absolute right-0 z-30  opacity-0 group-hover:opacity-100"
            sx={{ color: "white" }}
            size="large"
            onClick={() => handleClick("right")}
          >
            <AiFillCaretRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Row;
