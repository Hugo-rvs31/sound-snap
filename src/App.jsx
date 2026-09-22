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

import catSound from "./assets/sounds/cat-meow.mp3";
import dogSound from "./assets/sounds/dog-bark.mp3";
import carSound from "./assets/sounds/car-engine-start.mp3";
import birdSound from "./assets/sounds/bird.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import phoneSound from "./assets/sounds/phone-ring.mp3";
import doorSound from "./assets/sounds/open-door.mp3";
import keyboardSound from "./assets/sounds/keyboard.mp3";
import carHornSound from "./assets/sounds/car-horn.mp3";

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
      name: "Car-Engine-Start",
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
      name: "Phone-ring",
      image: phoneImage,
      sound: phoneSound,
    },
    {
      name: "Open-Door",
      image: doorImage,
      sound: doorSound,
    },
    {
      name: "Keyboard",
      image: keyboardImage,
      sound: keyboardSound,
    },
    {
      name: "Car-Horn",
      image: carHornImage,
      sound: carHornSound,
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
