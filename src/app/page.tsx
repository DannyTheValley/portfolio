import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className={`${styles.section} text-center`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
            <div className={`${styles.imagecontainer}`}>
                <img src="/path/to/image.jpg" alt="About me" className="img-fluid mb-4" />
                <div className={`${styles.circle} shadow-lg`}></div>
              </div>
            </div>
            <div className="col-md-5">
              <h1>Velkommen til min portfolio</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, fuga adipisci. Fuga est nesciunt commodi eum consequuntur veniam, saepe dolore excepturi ipsam cum explicabo itaque illum perferendis rem quo laudantium..</p>
              <a href="#contact" className="btn btn-primary me-2">Contact</a>
              <a href="#resume" className="btn btn-secondary">Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.section}`}>
        <h2>Om meg</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nobis assumenda reiciendis minima ipsum eaque incidunt modi expedita impedit, rerum minus in ullam. Quos tempore eos mollitia! Eos, ab magni?</p>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`${styles.section}`}>
        <h2>Resume</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nobis assumenda reiciendis minima ipsum eaque incidunt modi expedita impedit, rerum minus in ullam. Quos tempore eos mollitia! Eos, ab magni?</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section}`}>
        <h2>Kontakt</h2>
        <p>Ta gjerne kontakt med meg på e-post: <a href="mailto:deg@email.com">deg@email.com</a></p>
        <a href="/projects" className="btn btn-secondary">Se mine prosjekter</a>
      </section>
    </div>
  );
}