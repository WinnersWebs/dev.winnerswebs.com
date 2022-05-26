import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { Results } from './components/Results'
import { Form } from './components/Form'
import CallToActionBar from './components/helpers/CallToActionBar'
import { ToTopBtn } from './components/helpers/ToTopBtn'

function App() {

  return (
    <div className='bg-dark-green'>
      <div className=" bg-[url('./img/svg-bg.svg')] bg-dark-green bg-cover">
        <div className='container mx-auto flex flex-col items-center'>
          <Header/>
          <Hero/>
        </div>
        <ToTopBtn/>
        <div>
          <Results/>
        </div>
      </div>
      <div className='bg-dark-green'>
        <div className='container mx-auto'>
          <Services/>
        </div>
          <CallToActionBar/>
          <Form/>
          <Footer/>
      </div>
    </div>
  )
}

export default App
