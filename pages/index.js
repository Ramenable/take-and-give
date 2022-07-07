import Head from 'next/head'
import Link from 'next/link'
import TakeButtonLayout from '../components/takeButtonLayout'
import 'transition-style';
import { useInView } from 'react-intersection-observer';
import { FiHome, FiMonitor } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { BiStar, BiHomeHeart } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";


export default function Home() {
  // On scroll animation
  const { ref: projectsRef, inView: projectsIsVisible } = useInView();
  const { ref: interestsRef, inView: interestsIsVisible } = useInView();
  const { ref: cardRef, inView: cardIsVisible } = useInView();

  return (
    <div className="container">
      <Head>
        <title>Holder</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link> 
      </Head>

      <main>
        <div className="pageContainer">
          <div id="mySidebar" class="sidebar">
            <a href="#introduction">
              <div className="sideText"> <div class="sideIcon"><FiHome class="sideIconFormat"></FiHome></div> Introduction</div>
            </a>
            <a href="#projects">
              <div className="sideText"> <div class="sideIcon"><FiMonitor class="sideIconFormat"></FiMonitor></div> Projects</div>
            </a>
            <a href="#people">
              <div className="sideText"> <div class="sideIcon"><BsPeople class="sideIconFormat"></BsPeople></div> People</div>
            </a>
            <a href="#interests">
              <div className="sideText"> <div class="sideIcon"><BiStar class="sideIconFormat"></BiStar></div> Interests</div>
            </a>
          </div>

          <div className='sectionContainer'>
            <div id="introduction" className="section">
              <h1 className="title">
                Introduction
              </h1>

              <p className="description">
                IT'z ME
              </p>
              <p className="introSummary">
              ”With what shall I come before the Lord, and bow myself before God on high?
              Shall I come before him with burnt offerings, with calves a year old?
              Will the Lord be pleased with thousands of rams, with ten thousands of rivers of oil?
              Shall I give my firstborn for my transgression, the fruit of my body for the sin of my soul?”
              He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?
              <br></br>-Micah 6:6-8
              </p>
            </div>

            <div ref={projectsRef} id="projects" className="section" transition-style={`${projectsIsVisible ? "in:polygon:opposing-corners" : ""}`}>
              <h1 className="title">
                Personal Projects
              </h1>

              <p className="description">
                things I enjoyed coding
              </p>

              <div className="grid">
                <Link href="https://grocery-react.herokuapp.com/">
                  <a ref={cardRef} className={`${cardIsVisible ? "card item-animation" : "card"}`}>
                    <div className="cardWithIcon">
                      <MdOutlineLocalGroceryStore className="cardIcon"></MdOutlineLocalGroceryStore>
                      <div>
                        <h3>Group Grocery Site &rarr;</h3>
                        <p>Do groceries together!</p>
                      </div>
                    </div>
                  </a>
                </Link>

                <Link href="https://moviegrossingsvis.herokuapp.com/">
                  <a ref={cardRef} className={`${cardIsVisible ? "card item-animation" : "card"}`}>
                    <div className="cardWithIcon">
                      <AiOutlineFundProjectionScreen className="cardIcon"></AiOutlineFundProjectionScreen>
                      <div>
                        <h3>Movie Budget Visualization &rarr;</h3>
                        <p>How much does budget correlate to movie sales?</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

            </div>
            <div id="people" className="section">
              <h1 className="title">
                People
              </h1>

              <p className="description">
                friends I want to shoutout
              </p>

              <ul class="peopleCards">
                <li>
                  <a href="https://www.linkedin.com/in/leo6/" class="peopleCard">
                    <img src="/leob.jpg" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <BiHomeHeart class="peopleCardIcon"></BiHomeHeart>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">Leo Battalora</h3>            
                          <span class="peopleCardStatus">JP Morgan Chase Software Engineer</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">Inspirator of this website</p>
                    </div>
                  </a>      
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/stevliu/" class="peopleCard">
                    <img src="/stevenl.png" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">        
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <BiHomeHeart class="peopleCardIcon"></BiHomeHeart>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">Steven Liu</h3>
                          <span class="peopleCardStatus">Chemical and Biomolecular Engineering Student at JHU</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">"Bo" inventor</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/john-t-chen/" class="peopleCard">
                    <img src="/johnc.jpg" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">        
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <FaUniversity class="peopleCardIcon"></FaUniversity>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">John Chen</h3>
                          <span class="peopleCardStatus">AWS SDE Intern</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">My cousin!</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/raphael-cheng-64tech/" class="peopleCard">
                    <img src="/raphc.jpg" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">        
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <FaUniversity class="peopleCardIcon"></FaUniversity>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">Raphael Cheng</h3>
                          <span class="peopleCardStatus">Delsys Mechanical Systems Intern</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">Hilariously unfunny</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/calebwychang/" class="peopleCard">
                    <img src="/calebc.jpg" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">        
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <FaUniversity class="peopleCardIcon"></FaUniversity>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">Caleb Chang</h3>
                          <span class="peopleCardStatus">Opportunity Research Scholar at CMU</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">On a quest to learn the meaning of his name</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" class="peopleCard">
                    <img src="" class="peopleCardImage" alt="" />
                    <div class="peopleCardOverlay">        
                      <div class="peopleCardHeader">
                        <svg class="peopleCardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <BiStar class="peopleCardIcon"></BiStar>
                        <div class="cardHeaderText">
                          <h3 class="peopleCardTitle">Undecided</h3>
                          <span class="peopleCardStatus">...</span>
                        </div>
                      </div>
                      <p class="peopleCardDescription">This list is a bit sexist, no?</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* "in:wipe:bottom-right" */}
            <div ref={interestsRef} id="interests" className="section" transition-style={`${interestsIsVisible ? "in:polygon:opposing-corners" : ""}`}>
              <h1 className="title">
                Interests
              </h1>

              <p className="description">
                maybe the most interesting part of the site
              </p>

              <div className="grid">
                <Link href="/interests/castLot">
                  <a className="card item-animation">
                    <h3>"Lots" of Reading &rarr;</h3>
                  </a>
                </Link>
                <Link href="/interests/unphogettable">
                  <a className="card item-animation">
                    <h3>Unpho'gettable &rarr;</h3>
                  </a>
                </Link>
                <Link href="/interests/kpopKwangya">
                  <a className="card item-animation">
                    <h3>Kpop Kwangya &rarr;</h3>
                  </a>
                </Link>
                <Link href="/interests/dreamCatalog">
                  <a className="card item-animation">
                    <h3>Dream Catalog &rarr;</h3>
                  </a>
                </Link>
                <Link href="/interests/seasons">
                  <a className="card item-animation">
                    <h3>CSSeasons &rarr;</h3>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <SideNavbarLayout></SideNavbarLayout> */}

      <footer>
          <h2>結束</h2>
      </footer>
    </div>
  )
}
