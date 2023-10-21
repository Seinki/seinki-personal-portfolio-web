import personalData from '../personalData.json';

export default function Skills() {
  const cards = personalData.main.skills;
  const tools = personalData.main.tools;
  return (
    <section className="container">
      <div className="skills-title">
        <h1>Expertise</h1>
      </div>

      {/* Skills */}
      <div className="card-container">
        {/* card 1 */}
        <div className="card" id='cards1'>
          <img src={cards.card1.img} alt="web-dev" />
          <div className="card__details">
            <div className="name">{cards.card1.title}</div>
            <p>{cards.card1.desc}</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card" id='cards2'>
          <img src={cards.card2.img} alt="it-support" />
          <div className="card__details">
            <div className="name">{cards.card2.title}</div>
            <p>{cards.card2.desc}</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card" id='cards3'>
          <img src={cards.card3.img} alt="Avatar" />
          <div className="card__details">
            <div className="name">{cards.card3.title}</div>
            <p>{cards.card3.desc}</p>
          </div>
        </div>
        {/* card 4 */}
        <div className="card" id='cards4'>
          <img src={cards.card4.img} alt="Avatar" />
          <div className="card__details">
            <div className="name">{cards.card4.title}</div>
            <p>{cards.card4.desc}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tools-title about-title">
          <h1>Tools</h1>
        </div>
        <div className="sub-tools-title1" id='stt-1'>
          <h4>Technical Skills</h4>
        </div>
        <div className="tools-item">
          <div className="html">
            <img className='tools-img' src={tools.html} alt="html-icon" title='HTML'/>
          </div>
          <div className="css">
            <img className='tools-img' src={tools.css} alt="css-icon" title='CSS'/>
          </div>
          <div className="javascript">
            <img className='tools-img' src={tools.javascript} alt="javascript-icon" title='Javascript'/>
          </div>
          <div className="react">
            <img className='tools-img' src={tools.react} alt="react-icon" title='ReactJS'/>
          </div>
          <div className="vite">
            <img className='tools-img' src={tools.vite} alt="vite-icon" title='ViteJS' />
          </div>
          <div className="golang">
            <img className='tools-img' src={tools.golang} alt="golang-icon" title='Go Language' />
          </div>
          <div className="linux">
            <img className='tools-img' src={tools.linux} alt="linux-icon" title='Linux' />
          </div>
          <div className="kalilinux">
            <img className='tools-img' src={tools.kalilinux} alt="kalilinux-icon" title='Kali Linux' />
          </div>
        </div>
        <div className='dummy'><br /></div>
        <div className="sub-tools-title2" id='stt-2'>
          <h4>Development Tools and Environment</h4>
        </div>
        <div className="tools-item">
          <div className="vscode">
            <img className='tools-img' src={tools.vscode} alt="vscode-icon" />
          </div>
          <div className="virtualbox">
            <img className='tools-img' src={tools.virtualbox} alt="virtualbox-icon" />
          </div>
          <div className="git">
            <img className='tools-img' src={tools.git} alt="git-icon" />
          </div>
          <div className="github">
            <img className='tools-img' src={tools.github} alt="github-icon" />
          </div>
        </div>
      </div>

    </section>
  )
}