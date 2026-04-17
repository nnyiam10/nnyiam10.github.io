export default function Home() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src="/nten-image.jpeg" alt="Nten Nyiam" />
      </div>

      <div className="text">
        <h1>Nten Nyiam</h1>

        <p>
          I'm currently a software engineer at <a href="https://www.hadrius.com/" target="_blank">Hadrius</a>, where I broadly work on tooling to check marketing materials to make sure they follow laws and compliance regulations before they are published or distributed. I previously worked at <a href="https://www.silnahealth.com/" target="_blank">Silna Health</a> and <a href="https://ramp.com/" target="_blank">Ramp</a>.
        </p>

        <p>
          I previously completed my Bachelor's in Computer Science and Molecular Biology (2023) and my Master's in Computer Science and Engineering (2024), where I worked with <a href="https://www.keatinglab.mit.edu/people" target="_blank">Amy Keating</a>, <a href="https://www.carolineuhler.com/" target="_blank">Caroline Uhler</a>, and <a href="https://medicine.yale.edu/profile/salil-garg/" target="_blank">Salil Garg</a>. Outside of work, I like to rock climb, play and watch basketball (go Knicks!), and read.
        </p>

        <p>
          <strong>Note:</strong> This site is a work in progress. Progress will be incremental, and not particularly fast. Below is the base set of features I want to add:
        </p>

        <ul className="checklist">
          <li>
            <label>
              <input type="checkbox" checked disabled />
              Cleaner/non-default landing page
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" disabled />
              Links to GitHub, LinkedIn, etc.
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" disabled />
              Resume page / downloadable resume
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" disabled />
              Timeline/experience section (stretch goal)
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" disabled />
              Blog (stretch goal)
            </label>
          </li>

          <li>
            <label>
              <input type="checkbox" disabled />
              Component transitions/animations
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

