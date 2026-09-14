import "./App.scss";

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
      image: BirdImage,
      sound: Bir,
      sound: Bir,
    },
    {
      name: "Rain",
      image: RainImage,
      sound: RainSound,
    },
    {
      name: "Phone-ring",
      image: PhoneImage,
      sound: PhoneSound,
    },
    {
      name: "Open-Door",
      image: DoorImage,
      sound: DoorSound,
    },
    {
      name: "Keyboard",
      image: KeyboardImage,
      sound: KeyboardSound,
    },
    {
      name: "Car-Horn",
      image: carHornImage,
      sound: carHornSound,
    },
  ];
  return (
    <div>
      <h1>SoundSnap</h1>
      <p>Click on an image to hear its sound!</p>
    </div>
  );
}

export default App;
