import {Container, Row, Col} from 'react-bootstrap'
import FaqComponent from '../components/FaqComponent'



const SyaratKetenPage = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className='syarat-ketentuan min-vh-100' >
        <Container  >
          <Row data-aos="fade-up">
            <Col>
              <h1 className='fw-bold text-center mb-2 ' >Syarat & Ketentuan</h1>
              <p className='text-center '>Dengan mengakses dan menggunakan layanan di website First Class, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.</p>
            </Col>
          </Row>

          <Row className='pt-5 ' data-aos="fade-up">
            <Col>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, excepturi est! Inventore voluptatum blanditiis deserunt animi veniam! Nihil hic vitae earum iure quasi expedita praesentium mollitia et, placeat perferendis quaerat natus excepturi aspernatur blanditiis. Eius modi doloribus corrupti tenetur? Quo dignissimos consequuntur ab earum tenetur, ad eveniet commodi exercitationem delectus.</p>
            </Col>
          </Row>
          <Row className='py-3 ' data-aos="fade-up">
            <Col>
            <h4 className='fw-bold  '>1. Pendaftaran dan Pembayaran : </h4>
            <p> - Pendaftaran kelas dilakukan melalui website resmi First Class.</p>
            <p> - Pembayaran harus diselesaikan sesuai dengan metode pembayaran yang dipilih dan tenggat waktu yang ditentukan.</p>
            <p> - Konfirmasi pendaftaran akan dikirimkan melalui email setelah pembayaran berhasil diverifikasi.</p>

            </Col>
          </Row>
          <Row className='py-3 ' data-aos="fade-up">
            <Col>
            <h4 className='fw-bold'>2. Pembatalan dan Pengembalian Dana :</h4>
            <p> - Pembatalan oleh peserta setelah pembayaran tidak dapat dikembalikan, kecuali ada kebijakan khusus yang berlaku atau pembatalan dilakukan oleh pihak First Class.</p>
            <p> - First Class berhak membatalkan kelas jika tidak memenuhi kuota minimum atau karena alasan lain yang dianggap perlu, dengan pemberitahuan sebelumnya dan pengembalian dana penuh kepada peserta yang sudah membayar.</p>

            </Col>
          </Row>

          <Row className='py-3 ' data-aos="fade-up" data-aos-duration="1000">
            <Col>
            <h4 className='fw-bold'>3. Hak Kekayaan Intelektual:</h4>
            <p> - Semua materi pelatihan, modul, video, dan konten lainnya adalah hak cipta dari First Class dan tidak boleh disebarluaskan, direproduksi, atau digunakan tanpa izin tertulis.</p>
            <p> - Peserta diperbolehkan menggunakan materi untuk keperluan belajar pribadi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis eum incidunt, nulla exercitationem quo aperiam accusantium voluptas aut laboriosam consequuntur modi sunt corporis a! Fugiat dolores nihil laudantium quam!</p>

            </Col>
          </Row> 
      

        </Container>

      </div>
      <FaqComponent />
    </div>
  )
}

export default SyaratKetenPage