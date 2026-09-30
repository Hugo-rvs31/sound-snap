import "./App.scss";
import SoundButton from "./components/SoundButton/SoundButton";

import catImage from "./assets/images/cat-meow.jpg";
import dogImage from "./assets/images/dog-bark.jpg";
import carImage from "./assets/images/car-engine-start.jpg";
import birdImage from "./assets/images/bird.jpg";
import rainImage from "./assets/images/rain.jpg";
import phoneImage from "./assets/images/phone-ring.jpg";
import doorImage from "./assets/images/open-door.jpg";
import keyboardImage from "./assets/images/keyboard.jpg";
import carHornImage from "./assets/images/car-horn.jpg";
import creepyMusicBoxImage from "./assets/images/creepy-music-box.jpg";
import heartMonitorImage from "./assets/images/heart-monitor.jpg";
import nuclearBombImage from "./assets/images/nuclear-bomb.jpg";
import punchImage from "./assets/images/punch.jpg";
import screamImage from "./assets/images/scream.jpg";
import sneezeImage from "./assets/images/sneeze.jpg";
import technoPartyImage from "./assets/images/techno-party.jpg";
import wilhelmScreamImage from "./assets/images/wilhelm-scream.jpg";
import psychoViolinImage from "./assets/images/psycho-violin.jpg";
import hallelujahImage from "./assets/images/hallelujah.webp";

import catSound from "./assets/sounds/cat-meow.mp3";
import dogSound from "./assets/sounds/dog-bark.mp3";
import carSound from "./assets/sounds/car-engine-start.mp3";
import birdSound from "./assets/sounds/bird.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import phoneSound from "./assets/sounds/phone-ring.mp3";
import doorSound from "./assets/sounds/open-door.mp3";
import keyboardSound from "./assets/sounds/keyboard.mp3";
import carHornSound from "./assets/sounds/car-horn.mp3";
import creepyMusicBoxSound from "./assets/sounds/creepy-music-box.mp3";
import heartMonitorSound from "./assets/sounds/heart-monitor.mp3";
import nuclearBombSound from "./assets/sounds/nuclear-bomb.mp3";
import punchSound from "./assets/sounds/punch.mp3";
import screamSound from "./assets/sounds/scream.mp3";
import sneezeSound from "./assets/sounds/sneeze.mp3";
import technoPartySound from "./assets/sounds/techno-party.mp3";
import wilhelmScreamSound from "./assets/sounds/wilhelm-scream.mp3";
import psychoViolinSound from "./assets/sounds/psycho-violin.mp3";
import hallelujahSound from "./assets/sounds/hallelujah.mp3";

function App() {
  const sounds = [
    {
      name: "Cat",
      image: catImage,
      sound: catSound,
    },
    {
      name: "Dog",
      image: dogImage,
      sound: dogSound,
    },
    {
      name: "Car Engine Start",
      image: carImage,
      sound: carSound,
    },
    {
      name: "Bird",
      image: birdImage,
      sound: birdSound,
    },
    {
      name: "Rain",
      image: rainImage,
      sound: rainSound,
    },
    {
      name: "Phone ring",
      image: phoneImage,
      sound: phoneSound,
    },
    {
      name: "Door",
      image: doorImage,
      sound: doorSound,
    },
    {
      name: "Keyboard",
      image: keyboardImage,
      sound: keyboardSound,
    },
    {
      name: "Car Horn",
      image: carHornImage,
      sound: carHornSound,
    },
    {
      name: "Creepy music box",
      image: creepyMusicBoxImage,
      sound: creepyMusicBoxSound,
    },
    {
      name: "heart monitor",
      image: heartMonitorImage,
      sound: heartMonitorSound,
    },
    {
      name: "nuclear bomb",
      image: nuclearBombImage,
      sound: nuclearBombSound,
    },
    {
      name: "punch",
      image: punchImage,
      sound: punchSound,
    },
    {
      name: "scream",
      image: screamImage,
      sound: screamSound,
    },
    {
      name: "sneeze",
      image: sneezeImage,
      sound: sneezeSound,
    },
    {
      name: "techno party",
      image: technoPartyImage,
      sound: technoPartySound,
    },
    {
      name: "Wilhelm scream",
      image: wilhelmScreamImage,
      sound: wilhelmScreamSound,
    },
    {
      name: "Psycho violin",
      image: psychoViolinImage,
      sound: psychoViolinSound,
    },
    {
      name: "Hallelujah !",
      image: hallelujahImage,
      sound: hallelujahSound,
    },
  ];
  return (
    <div className="app">
      <div className="box-title">
        <h1>SoundSnap</h1>
        <p>Click on an image to hear its sound!</p>
      </div>

      <div className="box-sound">
        {sounds.map((sound) => (
          <SoundButton
            key={sound.name}
            image={sound.image}
            name={sound.name}
            sound={sound.sound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
