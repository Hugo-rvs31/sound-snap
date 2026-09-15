import "./SoundButton.scss";

let currentAudio = null;

const SoundButton = ({ image, name, sound }) => {
  const playSound = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(sound);
    currentAudio.play();
  };

  return (
    <button onClick={playSound}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </button>
  );
};

export default SoundButton;
