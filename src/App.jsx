import DataImage from './data'
import { listTools, listProyek } from './data'


function App() {


  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className='animate__animated animate__fadeInBottomLeft animate__delay-3s'>
          <div className='flex items-center gap-3 mb-6 bg-blue-300 w-fit p-4 rounded-2xl'>
            <img src={DataImage.PotoQuote} alt="Hero Image" className='w-10 rounded-md' loading='lazy' />
            <q>Do what makes you happy</q>
          </div>
          <h1 className='text-5xl/tight font-bold mb-6'>Hi, Saya Muhammad Nur Majid</h1>
          <p className='text-base/loose mb-6 opacity-90'>Saya mempunyai ketertarikan dalam bidang Programing, terutama pada
            pembuatan website, dan saya baru memulai di bidang ini semenjak masuk kuliah.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href="https://drive.google.com/file/d/1vf-j105OrZEjEVd6-WuGecgJ5pjpDctt/view?usp=drivesdk" className='bg-blue-300 p-4 rounded-2xl hover:bg-blue-600'> See My CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#kontak" className='bg-blue-600 p-4 rounded-2xl hover:bg-blue-900'>Contact Me</a>
          </div>
        </div>
        <img src={DataImage.PotoProfil} alt="Poto Profil" className='w-[500px]  object-fit:contain md:ml-auto rounded-3xl  animate__animated animate__fadeInBottomLeft animate__delay-4s' loading='lazy' />
      </div>

      {/* about */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-blue-300 rounded-lg'
          data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.logo1} alt=' Image' className='w-12 rounded-md mb-10 sm:hidden' loading='lazy' />
          <p className='text-base/loose mb-10'>
            Hi, pekernalkan saya Muhammad Nur Majid, Saya ingin menjadi Frontend Developer,
            Dan saya sedang belajar membuat web menggunakan react.js,
            semoga apa yang saya usahakan bisa berbuahkan hasil yang maksimal.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.logo1} alt=" Image" className='w-12 rounded-md sm:block hidden' loading='lazy' />
            <div className='flex items-center gap-6'>
              <div>
              </div>
            </div>
          </div>
        </div>

        <div className='tools mt-32'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">
            Tools yang dipakai</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50'
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website</p>
          <div className='tools-box mt-14 grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 
          grid-cols-1 gap-4'>

            {listTools.map(tool => (
              <div className='flex items-center gap-2 p-3 border border-white-600 rounded:md
            hover:bg-blue-300 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1
               group-hover:bg-zinc-900'loading='lazy' />
                <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* about */}

      {/* pelatihan */}
      <div className='proyek mt-32 py-10' id='proyek'>
        <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000">
          Pelatihan</h1>
        <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
         Sertifikasi yang diperoleh karena telah menyelesaikannya </p>
        <div className="proyek-box  mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className='p-4 bg-blue-300 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
              <div>
                <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                <p className='text-base/loose mb-4'>{proyek.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {proyek.tools.map((tool, index) => (
                    <p className='py-1 px-3 border bg-zinc-600 border-zinc-500 rounded-md font-semibold' key={index}>{tool}</p>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  <a href='https://drive.google.com/file/d/1-cRTAyBrBjU4RjWQZsKTg7bUJRVe2ATe/view?usp=drivesdk' className='bg-blue-500 p-3 rounded-lg block border border-white
                  hover:bg-blue-900'>Lihat Sertifikat</a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* pelatihan */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id='kontak'>
        <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/muhammadnurmajid160@gmail.com" method="POST" className='bg-blue-300 p-10 sm:w-fit w:full mx-auto rounded-md'
          autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Nama Lengkap</label>
              <input type="text" name="nama" placeholder='Masukan Nama....'
                className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input type="email" name="email" placeholder='Masukan Email....'
                className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='pesan' className='font-semibold'>Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='Pesan....'
                className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required ></textarea>
            </div>
            <div className='text-center'>
              <button type="submit" className='bg-blue-600 p-3 rounded-lg w-full cursor-pointer border
              border-white hover:bg-blue-900'>Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}

    </>
  )
}

export default App
