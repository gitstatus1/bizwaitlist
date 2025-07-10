import './styles/App.css'
import Form from './component/form.jsx'
import logo from './assets/merbau_logo_box.png'

function App() {

  return (
    <div className = "main">
      <div className = "top-div">
          <div className = 'logo-div'>
            <img src={logo} className = 'logo'/>
          </div>
        <div className = 'title-div'>
          <p className= 'title'>COFFEE AND GEAR CO.</p>
        </div>
      </div>
        <p className= 'subtitle'>"Curated coffee gear, crafted for connoiseurs"</p>
      <Form />
    </div>
  )
}

export default App
