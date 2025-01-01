import { BrowserRouter } from 'react-router-dom';
import{  
   Hero, Navbar, Tech, Works, StarsCanvas, About, Contact, Experience, Feedbacks,} from './components';
const App=() =>{
 

  return (
    
  <BrowserRouter>
  
   <div className='relative z-0 bg-[#030014]'>
   
      <div className=' bg-cover  bg-center bg-no-repeat'> 
      {/* <StarsCanvas /> */}
      <Navbar />
      
      <Hero />
      
      </div>
      <About  />
      <Experience />
      <Tech />  
      <Works />
      <Feedbacks />
      
      <div className='relative z-0'>

    <Contact />
    <StarsCanvas />

      </div>
    </div>
    
    
    
   </BrowserRouter>
  )
}

export default App
