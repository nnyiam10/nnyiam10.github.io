import PageContainer from '../components/PageContainer'

export default function Home() {
  return (
    <PageContainer>
      <div className="container">
        <div className="text">
          <h1>Nten Nyiam</h1>

          <p>
            I'm currently a software engineer at <a href="https://www.hadrius.com/" target="_blank">Hadrius</a>, where I build tooling to review marketing materials for legal and regulatory compliance. I previously worked at <a href="https://www.silnahealth.com/" target="_blank">Silna Health</a> and <a href="https://ramp.com/" target="_blank">Ramp</a>.
          </p>

          <p>
            I earned a B.S in Computer Science and Molecular Biology (2023) and an M.Eng in Computer Science and Engineering (2024) from the Massachusetts Institute of Technology, where I worked with <a href="https://www.keatinglab.mit.edu/people" target="_blank">Amy Keating</a>, <a href="https://www.carolineuhler.com/" target="_blank">Caroline Uhler</a>, and <a href="https://medicine.yale.edu/profile/salil-garg/" target="_blank">Salil Garg</a>. Outside of work, I enjoy rock climbing, playing and watching basketball (go Knicks!), and reading.
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
                <input type="checkbox" checked disabled />
                Links to GitHub, LinkedIn, etc.
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" checked disabled />
                Resume page
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" disabled />
                Blog (no longer a stretch goal)
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" checked disabled />
                Component transitions/animations (small in scale, but still present)
              </label>
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  )
}

