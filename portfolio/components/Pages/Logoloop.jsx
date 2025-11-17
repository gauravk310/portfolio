import LogoLoop from '@/components/ui/LogoLoop';
import { color } from 'motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiC, SiPython, SiElectron, SiGit, SiGithub } from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 color='red'/>, title: "HTML5" },
  { node: <SiCss3 color='blue'/>, title: "CSS3" },
  { node: <SiTailwindcss color='#00bcff'/>, title: "Tailwind CSS" },
  { node: <SiBootstrap color='#7d0df7'/>, title: "BootStrap" },
  { node: <SiJavascript color='yellow'/>, title: "JAVASCRIPT" },
  { node: <SiReact color='#14869a'/>, title: "React"  },
  { node: <SiNextdotjs color='black' />, title: "Next.js" },
  { node: <SiNodedotjs color='green' />, title: "Next.js" },
  { node: <SiExpress color='yellow'/>, title: "ExpressJS" },
  { node: <SiMongodb color='green'/>, title: "MongoDB" },
  { node: <SiPostman color='red'/>, title: "Postman" },
  { node: <SiC color='blue'/>, title: "C" },
  { node: <SiGit color='red'/>, title: "Electron" },
  { node: <SiGithub color='black'/>, title: "Electron" },
  { node: <SiPython color='blue '/>, title: "Python" },
  { node: <SiElectron color='blue '/>, title: "Electron" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Logoloop() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden', paddingTop: "50px", borderTop:"2px solid green", borderBottom:"2px solid green" }}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={150}
        direction="right"
        logoHeight={80}
        gap={100}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
  </div>
  );
}