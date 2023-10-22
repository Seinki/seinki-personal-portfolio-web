import personalData from '../personalData.json';

export default function Portfolio() {
  const portfolio = personalData.main.portfolio;
  return (
    <section className="container">
      <div className="portfolio">
        <div className="portfolio-title about-title">
          <h1>Portfolios</h1>
        </div>
        <div className="card-port-container">
          {/* card 1 */}
          <div className="card" id='cards1'>
            <img src={portfolio.port1.images} alt="e-commerce_planet_burger" />
            <div className="card__details">
              <div className="name">{portfolio.port1.title}</div>
              <p>{portfolio.port1.desc}</p>
            </div>
            <button className=" btn-portfolio">
              <a className='link-portfolio' href={portfolio.port1.link} target='_blank' rel="noreferrer">
                See More ➡️ <i className="ri-arrow-right-line"></i>
              </a>
            </button>
          </div>
          {/* card 2 */}
          <div className="card" id='cards1'>
            <img src={portfolio.port2.images} alt="e-commerce_planet_burger" />
            <div className="card__details">
              <div className="name">{portfolio.port2.title}</div>
              <p>{portfolio.port2.desc}</p>
            </div>
            <button className=" btn-portfolio">
              <a className='link-portfolio' href={portfolio.port2.link} target='_blank' rel="noreferrer">
                See More ➡️ <i className="ri-arrow-right-line"></i>
              </a>
            </button>
          </div>
          
          {/* card 3 */}
          <div className="card" id='cards1'>
            <img src={portfolio.port3.images} alt="e-commerce_planet_burger" />
            <div className="card__details">
              <div className="name">{portfolio.port3.title}</div>
              <p>{portfolio.port3.desc}</p>
            </div>
            <button className=" btn-portfolio">
              <a className='link-portfolio' href={portfolio.port3.link} target='_blank' rel="noreferrer">
                See More ➡️ <i className="ri-arrow-right-line"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}