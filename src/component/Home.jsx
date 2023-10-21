import personalData from '../personalData.json';

export default function Home() {
  const heroImg = personalData.main.heroImg
  const socials = personalData.main.socials;

  return (
    <header id="home" className="container">
      <div className="home-content">
        <div className="desc">
          <h4>Welcome to my Personal Portfolio</h4>
          <h1>
            Hi, I&apos;m <span>Seinki</span>
            <br/>Junior Web Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel quaerat voluptatibus at voluptate exercitationem quidem minima eaque obcaecati incidunt!
          </p>
          <ul className="socials">
            <li className="social">
              <a href={socials.instagram.link} target='_blanck'>
                <img src={socials.instagram.icon} alt="" />
              </a>
            </li>
            <li className="social">
              <a href={socials.linkedin.link} target='_blanck'>
                <img src={socials.linkedin.icon} alt="" />
              </a>
            </li>
            <li className="social">
              <a href={socials.github.link} target='_blanck'>
              <img src={socials.github.icon} alt="" />
              </a>
            </li>
          </ul>
          {/* <button className="btn">
            <a href="#">Get Started</a>
          </button> */}
        </div>
        <div className="header-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </header>
  )
}