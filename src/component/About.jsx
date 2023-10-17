import personalData from '../personalData.json';

export default function About() {
  const aboutImg = personalData.main.aboutImg;
  return (
    <section className="container">
      <div className="about-title">
        <h1>
          About Me
        </h1>
        {/* <img src="/src/assets/line-horizontal.svg" alt="" /> */}
      </div>
      <div className="about-content">
        <div className="about-img">
          <img src={aboutImg} alt="about-img" />
        </div>
        <div className="about-desc">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt a atque consequuntur minima, suscipit rerum inventore provident quas, voluptates, consequatur enim optio nobis nam libero ab fugit. Minus aliquid, ut labore nostrum tempore amet eveniet exercitationem nemo libero alias nisi vitae quaerat harum quis modi suscipit? Nam minima non iure?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil, rerum dolores minus culpa doloribus perferendis dolorem modi suscipit inventore non officiis odit magni qui voluptatum mollitia maiores iusto ipsum. Laudantium sed quisquam doloremque ullam quo magnam amet nulla blanditiis aut tenetur, ducimus quos facilis delectus dicta eos fuga necessitatibus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nisi amet reiciendis culpa quaerat ullam at earum corrupti similique molestiae omnis ipsa fugit est architecto voluptates temporibus sed totam, atque blanditiis, unde dolorum consequuntur hic minus iusto. Fugit quos illo tenetur. Rem illum error, maiores laboriosam commodi molestiae aut soluta?
          </p>
        </div>
      </div>
    </section>
  )
}