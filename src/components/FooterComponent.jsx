import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5 ">
      <Container>
        <Row className="d-flex justify-content-between bg-light p-5 rounded-4">
          <Col lg="5">
            <h3 className="fw-bold">Visi</h3>
            <p className="desc">Menjadi penyedia pelatihan digital terkemuka yang diakui secara global,
               mencetak talenta-talenta digital berkualitas tinggi yang siap bersaing dan berinovasi.</p>      

          </Col>
        <div className="no mb-1 mt-4">
          <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <h3 className="fw-bold">MISI</h3>
            <p className="desk">- Menyediakan program pelatihan berkualitas tinggi yang relevan dengan kebutuhan industri.
                            - Mengembangkan kurikulum yang adaptif terhadap perkembangan teknologi dan tren digital terkini. 
                            - Menciptakan lingkungan belajar yang suportif, inspiratif, dan kolaboratif.
                            - Membekali peserta dengan keterampilan praktis dan portofolio yang kuat untuk meraih kesuksesan karier.
                            - Membangun komunitas pembelajar digital yang aktif dan saling mendukung.
            </p> 
            <p className="m-0">+62 813 2929 1886</p> 
          </Link>
        </div>

      <div className="mail">
        <Link className="text-decoration-none">
          <i className="fa-regular fa-envelope"></i>
          <p className="m-0">satriacoegg@gmail.com</p>
        </Link>
      </div>
      
        <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">Faq</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
        </Col>  

        <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
          <div className="subscribes">
            <input type="Subscribes" />
            <button className="btn btn-danger rounded-end rounded-0">Subscribes</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>

        </Col>  
        </Row>
          <Row>
            <Col>
              <p className="  text-center mt-5 mb-0  py-3 w-full"> 
              &copy;Copyright {new Date().getFullYear()}
              by <span className="fw-bold ">muhammadhafizh3,</span> All Right Reserved  
              </p>         
            </Col>
          </Row>

      </Container>


    </div>
  )
}

export default FooterComponent