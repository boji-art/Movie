import { Star} from "lucide-react";

export const Carousel = () => {
  return (
    <div>
      <img src="wicked-mobile.png" />
      <div className="flex justify-between">
        <div>
        <p>Now Playing:</p>
        <h1>Wicked</h1>
      </div>
      <div></div>
       <div className="flex p-2">
          <Star className="text-yellow-300 fill-yellow-300 " />
          <p className="w-[36] h-[16] pl-6px">6.9</p>
          <p className="text-gray-500">/10</p>
        </div></div>

    </div>
  );
};
