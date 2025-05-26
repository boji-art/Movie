export const Genre = ({ movie }) => {
  return (
    <div>
      <div className="flex  items-center justify-between  gap-2 ">
        <img src="wicked.jpg" className="w-[100px] h-[148px] " />
        <div className="flex  flex-col  gap-2">
          <button className="rounded-full  border-gray-400 border p-1 ">
            Fairy Tale
          </button>
          <button className="rounded-full border-gray-400 border p-1">
            Pop Musical
          </button>
          <button className="rounded-full border-gray-400 border p-1">
            Fantasy
          </button>
          <button className="rounded-full border-gray-400 border p-1">
            Musical
          </button>
          <button className="rounded-full border-gray-400 border p-1">
            Romance
          </button>
          <p>
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>
      </div>

      <div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold ">Director</span>
          <span>Jon M. Chu</span>
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold ">Writers</span>
          <span>Winnie Holzman · Dana Fox · Gregory Maguire</span>
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold">Stars</span>
          <span>Cynthia Erivo · Ariana Grande · Jeff Goldblum</span>
        </div>
      </div>
    </div>
  );
};
