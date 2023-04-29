import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import SocialIcons from './components/SocialIcons';
import { useLocation } from 'react-router-dom';
const personalDetails = {
  name: "Nivrutha Balaji",
  location: "Arnhem, Netherlands",
  email: "nivrutha.balaji@gmail.com",
  availability: "Open for work",
  brand:
    "A web developer with over 4.5 years of experience in implementation, testing and deployment of large web applications. A strong understanding and working knowledge of front-end frameworks such as Angular,React and Web APIs. Adept at collaborating with clients and working in cross functional teams to develop end-to-end products. Proactive and structured with a drive for innovation.",
};
function App() {
  const { pathname } = useLocation();
  const [isContact, setIsContact] = useState(false);
  useEffect(() => {
    setIsContact(pathname === '/contact');
  }, [pathname]);
  const handleThemeChange = () => {
    if (document.documentElement.style.getPropertyValue('--bg-color') === '#020c1b') {
      document.documentElement.style.setProperty('--bg-color', '#f3f3f3');
      document.documentElement.style.setProperty('--text-color', '#020c1b');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#020c1b');
      document.documentElement.style.setProperty('--text-color', '#f3f3f3');
    }
  }
  return (
    <>
      <Header handleThemeChange={handleThemeChange} />
      <AnimatedRoutes personalDetails={personalDetails} />
      <SocialIcons isContact={isContact} />
    </>
  );
}

export default App;
