import { useEffect, useState } from "react";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error("Error fetching tracks:", error));
  }, []);

  const logEvent = async (trackId, eventType) => {
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
          track_id: trackId,
          event_type: eventType
        })
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error logging event:", error);
    }
  };

  return (
    <main>
      <h1>Music Intelligence Platform</h1>
      <p>Track listening behavior and build smarter recommendations.</p>

      <h2>Tracks</h2>

      {tracks.map((track) => (
        <div key={track.track_id}>
          <h3>{track.title}</h3>
          <p>{track.artist_name}</p>
          <p>{track.genre} • {track.release_year}</p>

          <button onClick={() => logEvent(track.track_id, "play")}>
            Play
          </button>

          <button onClick={() => logEvent(track.track_id, "save")}>
            Save
          </button>

          <button onClick={() => logEvent(track.track_id, "skip")}>
            Skip
          </button>
        </div>
      ))}
    </main>
  );
}

export default App;