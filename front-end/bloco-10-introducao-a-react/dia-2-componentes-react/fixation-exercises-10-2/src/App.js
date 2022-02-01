import staringCat from './staringCat.jpg';
import Image from './Image';
import './App.css';

function App() {
  return (
    <div>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
