import { useEffect } from "react";
import personalData from '../personalData.json';

export default function Resume() {
  // function for experiences button
  useEffect(() => {
    const buttons = document.querySelectorAll(".toggle-button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        contents.forEach((content) => {
          if (content.id === target) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => { });
      });
    };
  }, []);

  // variable untuk pemanggilan data dari json
  const exp1 = personalData.main.experience.exp1;
  const exp2 = personalData.main.experience.exp2;

  return (
    <section className="container">
      <div className="resume-title">
        <h1>My Resume</h1>
      </div>

      <div className="resume-content">
        <div className="exp-title">
          <h2>Experiences</h2>
        </div>

        <div className="exp-content">
          <div className="exp-content-title">
            <div id="exp1-title" className="exp1-title toggle-button" data-target="contentExp1">
              <button className="btn btn-exp-title btn-exp1-title">
                <span>{exp1.title}</span>
              </button>
              {/* <span><i className="ri-arrow-right-line"></i></span> */}
            </div>
            <div id="exp2-title" className="exp2-title toggle-button" data-target="contentExp2">
              <button className="btn btn-exp-title btn-exp2-title">
                <span>{exp2.title}</span>
              </button>
              {/* <span><i className="ri-arrow-right-line"></i></span> */}
            </div>
          </div>
          <div className="exp-desc-content">
            {/* Experience 1 */}
            <div id="contentExp1" className="contentExp1 content active">
              <h4>{exp1.jobdesc}</h4>
              <h5>{exp1.address}</h5>
              <p>{exp1.date}</p>
              <div className="tools">
                <span className="tools1">
                  {exp1.tools[0]}
                </span>
                <span className="tools2">
                  {exp1.tools[1]}
                </span>
              </div>
              <ul className="description">
                <li>{exp1.description[0]}</li>
                <li>{exp1.description[1]}</li>
                <li>{exp1.description[2]}</li>
                <li>{exp1.description[3]}</li>
              </ul>
            </div>
            {/* Experience 2 */}
            <div id="contentExp2" className="contentExp2 content">
              <h4>{exp2.jobdesc}</h4>
              <h5>{exp2.address}</h5>
              <p>{exp2.date}</p>
              <div className="tools">
                <span className="tools1">
                  {exp2.tools[0]}
                </span>
                <span className="tools2">
                  {exp2.tools[1]}
                </span>
                <span className="tools1">
                  {exp2.tools[2]}
                </span>
                <span className="tools2">
                  {exp2.tools[3]}
                </span>
              </div>
              <hr />
              <ul className="description">
                <li>{exp2.description[0]}</li>
                <li>{exp2.description[1]}</li>
                <li>{exp2.description[2]}</li>
                <li>{exp2.description[3]}</li>
                <li>{exp2.description[4]}</li>
                <li>{exp2.description[5]}</li>
                <li>{exp2.description[6]}</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="edu-title">
          <h2>Educations</h2>
        </div>
        <div className="edu-content">
          <div className="edu1">
            <ul className="edu1-content">
              <li>
                <h4 className="edu1-major">Computer & Network Engineering</h4>
                <h5 className="edu1-instance">Al Hadi Bandung Vocational High School</h5>
                <p className="edu1-graduate">Graduates in 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}