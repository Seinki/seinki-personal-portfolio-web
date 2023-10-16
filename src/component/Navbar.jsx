import personalData from '../personalData.json';

export default function Navbar() {
  const logo = personalData.main.logo;

  return(
    <div className="container-navbar">
      <nav className='navbar'>
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Resume</a>
          </li>
          <li className="link">
            <a href="#">Skills</a>
          </li>
          <li className="link">
            <a href="#">Portfolio</a>
          </li>
          <li className="link">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="btn">
          <a href="#">Hire Me</a>
        </button>
      </nav>
    </div>
  )
}