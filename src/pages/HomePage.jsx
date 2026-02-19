import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"

import {kelasTerbaru, dataSwiper} from "../data/index"
import {useNavigate} from "react-router-dom"
import FaqComponent from "../components/FaqComponent"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {
  let navigate = useNavigate() 

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5 ">
            <Col lg="6">
              <h1 className="mb-4 gap-4 animate__animated animate__fadeInLeft animate__delay-1s">Temukan<br/><span>Bakat kreativitasmu</span><br/>bersama kami </h1>
              <p className="mb-4 animate__animated animate__fadeInRight animate__delay-2s text">First Class adalah perusahaan pelatihan inovatif yang berdedikasi
                 untuk memberdayakan individu dengan keterampilan digital yang relevan dan dibutuhkan di era modern.
                  Kami percaya bahwa pendidikan adalah kunci untuk membuka potensi tak terbatas. Dengan kurikulum yang 
                  dirancang secara komprehensif dan instruktur berpengalaman di bidangnya, kami berkomitmen untuk 
                  menyediakan pengalaman belajar yang interaktif, praktis, dan menyenangkan.</p>
                <button className="btn btn-danger rounded-3 btn-lg  me-2 mb-xs-0 mb-2 animate__animated animate__fadeIn animate__delay-1s" onClick={()=>navigate("/kelas")}>Lihat kelas</button>
                <button className="btn btn-outline-danger rounded-3 btn-lg mb-2 mb-xs-0 mb-2 animate__animated animate__fadeIn animate__delay-2s">Lihat promo</button>
            </Col>

            <Col lg="6" className="">
            <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp animate__delay-3s" /></Col>
          </Row>
        </Container>

      </header>
      <div className="kelas w-100 min-vh-100 " >
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold ">Kelas terbaru</h1>
            <p className="text-center ">Kami menawarkan berbagai program pelatihan yang dirancang untuk membekali Anda dengan keterampilan digital yang paling 
                              dicari di industri saat ini. Pilih jalur karier Anda dan mulailah perjalanan belajar Anda bersama kami!.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas)=> {
              return(
                <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com"  className="w-100 mb-5 rounded-2 "/>
                  <div className="star mb-2">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary -fw-bold">{kelas.price}</p>
                    <button className="btn btn-outline-danger rounded">{kelas.buy}</button>
                  </div>                 
                </Col>
                ) 
            })}
          </Row>
          <Row>
            <Col className="text-center" >
              <button className="btn btn-success rounded-4 btn-lg " onClick={()=> navigate("/kelas")}data-aos="fade-up" data-duration="1000">Lihat Semua Kelas
                
              <i className="fa-solid fa-chevron-right ms-3 "></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold my-5 animate__animated animate__fadeInDown animate__delay-4s" data-aos="fade-up">Testimonial</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper" data-aos="fade-up"
      >
        {dataSwiper.map((data)=>{
          return(
            <SwiperSlide key={data.id} className="shadow-sm">Slide 1
              <p className="desc"> {data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.skill}</p>
                </div>
              </div>
            </SwiperSlide>
          
          )
        })}
       
      </Swiper>

          </Row>
        </Container>
      </div>
      {/* {Section FAQ} */}
      <FaqComponent/>
      {/* {Section FAQ} */}
    </div>

  )
}

export default HomePage