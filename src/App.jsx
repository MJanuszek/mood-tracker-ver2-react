import "./App.css";
import React, { useState } from "react";

function App() {
  const [moodsJournal, setMoodsJournal] = useState([]);

  function handleSaveCurrentMood(event) {
    let mood = event.target.id;

    const date = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // console.log(mood, moodsJournal);
    setMoodsJournal([...moodsJournal, { mood, date }]);
  }
  return (
    <div className="container">
      <h2 className="title">Click on face to record how are you feeling</h2>
      <div className="emotions-imgs">
        <img
          className="face-icon"
          id="sad"
          onClick={handleSaveCurrentMood}
          src="src/assets/4117483_emoji_emoticon_frowning_lour_sad_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          id="happy"
          onClick={handleSaveCurrentMood}
          src="src/assets/4117484_comfortable_easy_emoji_emoticon_happy_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          id="inLove"
          onClick={handleSaveCurrentMood}
          src="src/assets/4117489_emoticon_fall_fond_heart_in_icon.png"
          alt=""
        />
        <img
          className="face-icon"
          id="anxious"
          onClick={handleSaveCurrentMood}
          src="src/assets/11121718_fi_rr_face_anxious_sweat_icon.png"
          alt=""
        />
      </div>
      <h2 className="title">Your previous moods:</h2>
      <div className="mood-entries">
        {moodsJournal.map((entry, index) => (
          <div className={entry.mood} key={index}>
            You were {entry.mood} on {entry.date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
