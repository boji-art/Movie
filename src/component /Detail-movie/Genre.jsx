export const Genre = ({ movie }) => {
  return (
    <div>
      <div>
        <img src="wicked.jpg"></img>
        <p>{movie?.Genre}</p>
        <p>Pop Musical</p>
        <p>Fantasy</p>
        <p>Musical</p>
        <p>Romance</p>
      </div>
      <p>Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.  </p>

      <div >
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold ">Director</span>
          <span>Jon M. Chu</span>
          <img src="Line.png"/>
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold ">Writers</span>
          <span>Winnie Holzman · Dana Fox · Gregory Maguire</span>
          <img src="Line.png"/>
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold">Stars</span>
          <span>Cynthia Erivo · Ariana Grande · Jeff Goldblum</span>
          <img src="Line.png"/>
        </div>
      </div>
    </div>
  );
};
