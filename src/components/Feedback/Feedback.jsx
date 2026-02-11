import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const onReset = () => {
    setLikes((prevValue) => {
      return 0;
    });

    setDislikes((prevValue) => {
      return 0;
    });
  };

  return (
    <div className="feedback_wrapper">
      <div className="feedback_row">
        <Button name="Like" onClick={onLike} />
        <span className="value">{likes}</span>
      </div>

      <div className="feedback_row">
        <Button name="Dislike" onClick={onDislike} />
        <span className="value">{dislikes}</span>
      </div>

      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
}

export default Feedback;
