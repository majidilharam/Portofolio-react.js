import DataImage from './data'
import { listTools, listProyek, listProjects } from './data'


function App() {


  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className='animate__animated animate__fadeInBottomLeft animate__delay-3s'>
          <div className='flex items-center gap-3 mb-6 bg-blue-300 w-fit p-4 rounded-2xl'>
            <img src={DataImage.PotoQuote} alt="Hero Image" className='w-10 rounded-md' loading='lazy' />
            <q>Do what makes you happy</q>
          </div>
          <h1 className='text-5xl/tight font-bold mb-6'>Hi, i'm Muhammad Nur Majid</h1>
          <p className='text-base/loose mb-6 opacity-90'>a Front-End Engineer specializing in React.js. I build responsive,
           component-based web interfaces with clean and maintainable code, and I'm always looking to take on new challenges that push my skills further.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href="https://drive.google.com/file/d/1aiOMKJ2JymQ3gYZ-_btrE0KEGRTza2Mg/view?usp=sharing" className='bg-blue-300 p-4 rounded-2xl hover:bg-blue-600'> See My CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#kontak" className='bg-blue-600 p-4 rounded-2xl hover:bg-blue-900'>Contact Me</a>
          </div>
        </div>
        <img src={DataImage.PotoProfil} alt="Poto Profil" className='w-[500px]  object-fit:contain md:ml-auto rounded-3xl  animate__animated animate__fadeInBottomLeft animate__delay-4s' loading='lazy' />
      </div>

      {/* about */}
      <div className="tentang mt-32 py-10" id="tentang">
       
        <div className='tools mt-32'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">
            Tools I Use</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50'
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here are some of the tools I regularly use to build websites</p>
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

     {/* Certifications */}
<div className='proyek mt-32 py-10' id='proyek'>
  <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000">
    Certifications</h1>
  <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
   Certifications earned upon course completion </p>
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
    {listProyek.map(proyek => (
      <div key={proyek.id} className='p-4 bg-blue-300 rounded-md h-full flex flex-col' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
        <img src={proyek.gambar} alt="Certificate" loading='lazy' />
        <div className='flex flex-col flex-1'>
          <h1 className='text-lg font-bold my-4'>{proyek.nama}</h1>
          <p className='text-xl mb-4'>{proyek.desk}</p>
          <div className='flex flex-wrap gap-2'>
            {proyek.tools.map((tool, index) => (
              <p className='py-1 px-3 border bg-zinc-600 border-zinc-500 rounded-md font-semibold' key={index}>{tool}</p>
            ))}
          </div>
          <div className='mt-auto pt-8 text-center'>
            <a href={proyek.sertifikat}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 p-3 rounded-lg block border border-white hover:bg-blue-900'>
              View Certificate
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Certifications */}

{/* Projects */}
<div className='proyek mt-32 py-10' id='projects'>
  <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000">
    Projects
  </h1>
  <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    A selection of projects I've built to apply my skills
  </p>
  
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
    {listProjects.map(project => (
      <div 
        key={project.id} 
        className='p-4 bg-blue-300 rounded-md h-full flex flex-col justify-between' 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-delay={project.dad}
      >
        {/* Bagian Atas: Gambar, Judul, Deskripsi, Tools */}
        <div className='flex flex-col flex-1'>
          {/* Fixed aspect ratio & height untuk gambar */}
          <div className='w-full h-48 overflow-hidden rounded-md bg-white mb-4'>
            <img 
              src={project.gambar} 
              alt={project.nama} 
              loading='lazy' 
              className='w-full h-full object-cover object-top' 
            />
          </div>

          <h1 className='text-lg font-bold mb-2'>{project.nama}</h1>
          <p className='text-base mb-4 opacity-90 leading-relaxed'>{project.desk}</p>
          
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tools.map((tool, index) => (
              <p className='py-1 px-3 border bg-zinc-600 border-zinc-500 text-white rounded-md font-semibold text-xs' key={index}>
                {tool}
              </p>
            ))}
          </div>
        </div>

        {/* Bagian Bawah: Tombol Aksi */}
        <div className='mt-auto pt-2 flex gap-3'>
          <a 
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 p-3 rounded-lg flex-1 text-center text-white font-medium border border-white hover:bg-blue-900 transition-colors'
          >
            Live Demo
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Projects */}



     {/* Contact */}
<div className="kontak mt-32 sm:p-10 p-0" id='kontak'>
  <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000">Contact</h1>
  <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Let's get in touch.</p>
  <form action="https://formsubmit.co/muhammadnurmajid160@gmail.com" method="POST" className='bg-blue-300 p-10 sm:w-fit w:full mx-auto rounded-md'
    autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Full Name</label>
        <input type="text" name="nama" placeholder='Enter your name...'
          className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Email</label>
        <input type="email" name="email" placeholder='Enter your email...'
          className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='pesan' className='font-semibold'>Message</label>
        <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='Your message...'
          className='border border-white focus:outline-none placeholder-white p-2 rounded-md' required ></textarea>
      </div>
      <div className='text-center'>
        <button type="submit" className='bg-blue-600 p-3 rounded-lg w-full cursor-pointer border
        border-white hover:bg-blue-900'>Send Message</button>
      </div>
    </div>
  </form>
</div>
{/* Contact */}

    </>
  )
}

export default App
