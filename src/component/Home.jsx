import personalData from '../personalData.json';

export default function Home() {
  const heroImg = personalData.main.heroImg
  const socialsLink1 = personalData.main.socials.instagram.link
  const socialsLink2 = personalData.main.socials.linkedin.link
  const socialsLink3 = personalData.main.socials.github.link
  const socialsIcon1 = personalData.main.socials.instagram.icon
  const socialsIcon2 = personalData.main.socials.linkedin.icon
  const socialsIcon3 = personalData.main.socials.github.icon
  return (
    <header id="home" className="container">
      <div className="content">
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
              <a href={socialsLink1}>
                <img src={socialsIcon1} alt="" />
              </a>
            </li>
            <li className="social">
              <a href={socialsLink2}>
              <img src={socialsIcon2} alt="" />
              </a>
            </li>
            <li className="social">
              <a href={socialsLink3}>{socialsIcon3}</a>
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