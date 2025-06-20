import './styles/App.css'
import Form from './component/form.jsx'
import logo from './assets/merbau_logo1_nobg.png'

function App() {

  return (
    <div className = "main">
      <div className = "top-div">
        <img src={logo} className = 'logo'/>
        <p className= 'title'>Merbau Coffee</p>
      </div>
        <p className= 'subtitle'>"Curated Coffee Gear, Crafted for Connoiseurs"</p>
      <Form />
    </div>
  )
}

export default App
