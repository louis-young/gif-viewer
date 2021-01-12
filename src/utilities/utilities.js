import blue from "../assets/placeholders/blue.jpg";
import green from "../assets/placeholders/green.jpg";
import orange from "../assets/placeholders/orange.jpg";
import purple from "../assets/placeholders/purple.jpg";
import yellow from "../assets/placeholders/yellow.jpg";

const placeholders = [blue, green, orange, purple, yellow];

const getRandomPlaceholder = () => {
  const index = Math.floor(Math.random() * placeholders.length);

  const placeholder = placeholders[index];

  return placeholder;
};

const showGif = (event) => {
  const image = event.target;

  const gif = image.dataset.gif;

  image.src = gif;
};

export { getRandomPlaceholder, showGif };
