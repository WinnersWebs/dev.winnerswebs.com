import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { Results } from './components/Results'
import { Form } from './components/Form'
import CallToActionBar from './components/helpers/CallToActionBar'

function App() {

  return (
    <div >
      <div className=" bg-[url('./img/svg-bg.svg')] bg-slate-800 bg-cover">
        <div className='container mx-auto flex flex-col items-center'>
          <Header/>
          <Hero/>
        </div>
      </div>
      <div className='bg-dark-green'>
        <div className='container mx-auto'>
          <Services/>
        </div>
        <div>
          <Results/>
        </div>
          <CallToActionBar/>
          <Form/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
