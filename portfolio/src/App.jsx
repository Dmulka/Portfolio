import { useRef } from 'react'
import './App.css'
import BackToTop from './components/BackToTop'
import NewResumePDF from './assets/New Resume.pdf'


function App() {
  const bio = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);


  const scrollTo = (elementRef) => {
    window.scroll({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return ( 
    <div className='App'>
      <BackToTop />
      <div className='Navbtns'>
        <ul>
          <li onClick={() => scrollTo(bio)} className= 'link'>Bio</li>
          <li onClick={() => scrollTo(projects)} className= 'link'>Projects</li>
          <li><a href={NewResumePDF} target="_blank" rel="noopener noreferrer" className='link'>Resume</a></li>
          <li onClick={() => scrollTo(contact)} className= 'link'>Contact</li>
        </ul>
      </div>
      <div ref={bio} className= 'Bio'>
        <h3>About Me</h3>
        <p><b>Daniel Mulka</b>- Software Engineer</p>
        <p> with six years of experience in the general manufacturing industry, complemented by a recent immersion in a comprehensive software engineering boot camp. Committed to leveraging my expertise in quality assurance methodologies and applying emerging software engineering skills to drive excellence in the tech industry. Successfully utilized root cause analysis to find issues and took corrective action to prevent their recurrence. Seeking a challenging role as a Quality Engineer to contribute to software development projects and enhance overall product quality in a dynamic and innovative environment.</p>
      </div>
      <div ref={projects} className= 'Projects'>
        <h3>Projects</h3>
          <div className='projectList'>
            <ul>
              <li><a href='https://walksafenyc.netlify.app/' target="_blank" rel="noopener noreferrer" className='link'>Walksafe NYC</a> </li>

              <li><a href='http://space_invaders0508.surge.sh/'target="_blank" rel="noopener noreferrer" className='link'>Space Invaders</a> </li>

              <li><a href='https://github.com/Dmulka/Unit2_f1_app'target="_blank" rel="noopener noreferrer" className='link'>F1 App</a> </li>
            </ul>
          </div>
   
        </div>
        <div ref={contact} className= 'Contact'>
          <h3>Contact</h3>
            <div className='contacBtns'>
               <a a href='https://github.com/Dmulka'target="_blank" rel="noopener noreferrer" className='link'>Github</a>
              
               <a a href='https://www.linkedin.com/in/danielmulka/'target="_blank" rel="noopener noreferrer" className='link'>Linkedin</a>
              
            </div>


        </div>
      
    </div>
  )

}

export default App
