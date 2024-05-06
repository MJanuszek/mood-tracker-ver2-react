import "./App.css";
import React, { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2 className="title">Click on face to record how are you feeling</h2>
      <div className="emotions-imgs">
        <img
          className="face-icon"
          src="src/assets/4117483_emoji_emoticon_frowning_lour_sad_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          src="src/assets/4117484_comfortable_easy_emoji_emoticon_happy_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          src="src/assets/4117489_emoticon_fall_fond_heart_in_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          src="src/assets/11121718_fi_rr_face_anxious_sweat_icon.png"
          alt=""
        />
      </div>
      <h2 className="title">Your previous moods:</h2>
      <div className="mood-entries"></div>
    </div>
  );
}

export default App;
