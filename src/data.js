
import PotoProfil from "../public/assets/potoprofil/poto-majid.jpg"
import logo1 from '../public/assets/potoprofil/poto-majid2.jpg'
import PotoQuote from "/assets/logo-bulan.jpg"


const Image = {
  PotoProfil,
  PotoQuote,
  logo1,
 
};

export default Image;

import Tools1 from "/assets/tools/html.webp";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Html",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
];

import Proyek1 from "/assets/proyek/Sertifikat-majid.png"
import Proyek2 from "/assets/proyek/sertifikat-fe.png"
import Proyek3 from "/assets/proyek/sertifikat-da.png"
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Completed",
    desk: "Master Class: React JS dan Tailwind CSS Website Development",
    tools: ["HTML", "Tailwind CSS", "Javascript"],
    dad: "200",
    sertifikat: 'https://drive.google.com/file/d/1-cRTAyBrBjU4RjWQZsKTg7bUJRVe2ATe/view?usp=drivesdk' 
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Completed",
    desk: "Intro to Software Engineering",
    tools: ["HTML", "Tailwind CSS", "Javascript"],
    dad: "200",
    sertifikat: 'https://drive.google.com/file/d/1JkJN7fUcQROF98Tx-_bRilMMuaues8wJ/view?usp=drive_link'
  },
    {
    id: 3,
    gambar: Proyek3,
    nama: "Completed",
    desk: "Intro to Data Analytics",
    tools: ["Microsoft Excel", "MySQL", "Microsoft Power BI"],
    dad: "200",
    sertifikat: 'https://drive.google.com/file/d/12MSLT5hgK-LyBdCnhR9omjXcgbxKoloh/view?usp=drive_link'
  },

];

import projects1 from "/assets/projects/story.png"
import projects2 from "/assets/projects/ykk.png"

export const listProjects = [
  {
    id: 1,
    nama: "Story Daily Point",
    desk: "A daily task tracker that helps users log, organize, and keep track of their to-dos with a clean and simple interface.",
    gambar: projects1,
    tools: ["React", "JavaScript", "Tailwind CSS"],
    demo: "https://story-daily-point.vercel.app/",
    github: "https://github.com/majidilharam/story-daily-point",
    dad: "300",
  }, 
    {
    id: 2,
    nama: "Sistem Cuti Lembur",
    desk: "An employee leave and overtime management system designed to streamline request submissions, approvals, and logs tracking with role-based access",
    gambar: projects2,
    tools: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
    demo: "https://sistem-cuti-lembur-ptykk.vercel.app/",
    dad: "300",
  }, 
  
]
