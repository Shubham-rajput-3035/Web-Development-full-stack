import { useState } from "react";
export default function LikeButton() {
  let [isLiked, SetIsLiked] = useState(false);
  let [clicks, setclicks] = useState(0);

  let toggleLiked = () => {
    SetIsLiked(!isLiked);
    setclicks(clicks + 1);
  };

  let likestyles = { color: "red" };
  return (
    <div>
      <p>Clicks = {clicks} </p>
      <p onClick={toggleLiked}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likestyles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
