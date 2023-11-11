import {Tabs, TabList, TabPanel, Tab} from "react-tabs";
import Skills from "./Skills.jsx";
import Home from "./About.jsx";
import About from "./Home.jsx";
import Contacts from "./Contact.jsx";
import Projects from "./Projects.jsx";

export default function Navbar() {
    return (
        <Tabs>
         <header className="block pt-4">
            <ul>
            <TabList className="flex flex-row justify-evenly max-w-6xl m-auto">
             <Tab>
                 <li>
                     <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                         About
                     </button>
                 </li>
             </Tab>
                <Tab>
                 <li>
                     <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                         Contact
                     </button>
                 </li>
                </Tab>
                <Tab>
                 <li>
                     <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                         Projects
                     </button>
                 </li>
                </Tab>
                <Tab>
                 <li>
                     <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                             Skills
                     </button>
                 </li>
                </Tab>
                </ TabList>
            </ul>
         </header>
            <TabPanel>
                <Home />
            </TabPanel>
            <TabPanel>
                <Contacts />
            </TabPanel>
            <TabPanel>
                <Projects />
            </TabPanel>
            <TabPanel>
                <Skills />
            </TabPanel>
        </Tabs>
    )
}

