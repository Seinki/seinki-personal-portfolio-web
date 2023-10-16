import personalData from '../personalData.json';

export default function Navbar() {
  const logo = personalData.main.logo;

  return(
    <nav>
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
    </nav>
  )
}