const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
                <a href="#beranda">Beranda</a>
                <a href="#tentang">Tentang</a>
                <a href="#proyek">Pelatihan</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/majidilharam">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://www.instagram.com/majiiiidddd_?igsh=MWl4NnV3bDFvMTA1cg==">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="https://www.tiktok.com/@majidddddddd_?_r=1&_t=ZS-91fPsvX5lpg">
                    <i className="ri-tiktok-fill ri-2x"></i>
                </a>
                <a href="https://wa.me/qr/XOLN4BV2H6Q4B1">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
