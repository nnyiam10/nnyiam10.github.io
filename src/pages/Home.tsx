import PageContainer from '../components/PageContainer'

export default function Home() {
  return (
    <PageContainer>
      <div className="container">
        <div className="text">
          <h1>Nten Nyiam</h1>

          <p>
            I'm a software engineer at <a href="https://www.hadrius.com/" target="_blank">Hadrius</a> where I work on improving AI review of marketing materials and archiving of communications for financial firms. I previously built software at <a href="https://www.silnahealth.com/" target="_blank">Silna Health</a> and <a href="https://ramp.com/" target="_blank">Ramp</a>.
          </p>

          <p>
            I grew up in New York City and went to school at the Massachusetts Institute of Technology, where I worked with <a href="https://www.keatinglab.mit.edu/people" target="_blank">Amy Keating</a>, <a href="https://www.carolineuhler.com/" target="_blank">Caroline Uhler</a>, and <a href="https://medicine.yale.edu/profile/salil-garg/" target="_blank">Salil Garg</a>. Outside of work, I enjoy rock climbing, playing and watching basketball (go Knicks!), and reading.
          </p>

          <p className="see-heading">See:</p>
          <ul className="see-list">
            <li>
              <a
                href="https://www.linkedin.com/in/ntenyiam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nnyiam10"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>Email: nten.nyiam [at] gmail.com</li>
          </ul>

        </div>
      </div>
    </PageContainer>
  )
}
