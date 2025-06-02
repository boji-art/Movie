export const Writer=({movie,crew})=>{
    // console.log("crew",crew)
    const directorList=crew?.crew?.filter((person)=>person.department==="Directing")
;
const writerList=crew?.crew?.filter((person)=>person.department==="Writing");

 
console.log("directorList", directorList)

    return(
        <div className="flex flex-col">
        <div
          className=" flex 
        flex-row font-base h-[28px] gap-15 ml-5 py-10"
        >
          <span className="font-bold ">Director</span>
          {directorList?.slice(0,3).map((director,index)=>(<p key={index}>{director.name}</p>

         ))}
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
    )
}