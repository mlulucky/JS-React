import './App.css'
import Welcome from './components/Welcom'

function App() {
	const name = "clover";
	const isMember = true;
  return (
    <>
      <Welcome name={name} isMember={isMember}/>
    </>
  )
}

export default App
