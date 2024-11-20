const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import './Header.css'
import logo from '../assets/react-core-concepts.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * (1 + max));
}

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

