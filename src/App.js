import logo from './logo.svg';
import './App.css';
import FullName from './Profile/FullName'

function App() {
  const Name = "Abdessalem Yaccoubi"
  const Adress = "Yacoubiabdessalem95@gmail.com" 
  const MyImage= './images/Slouma.jpg'
  return (
    <div>
    <FullName
     Name={Name} 
     MyImage={MyImage} 
     Adress={Adress} />
    </div>
  );
}

export default App;
