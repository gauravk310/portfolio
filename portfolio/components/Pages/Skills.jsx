import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiElectron,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPython,
  SiC,
  SiJupyter,
  SiScikitlearn,
  SiArduino
} from "react-icons/si";

const SkillCard = ({ title, children }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500 rounded-2xl p-6 flex flex-col items-center gap-6 hover:border-[#00c951] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,201,81,0.15)] group w-full">
    <h3 className="text-2xl font-bold text-gray-300 group-hover:text-[#00c951] transition-colors tracking-wide">{title}</h3>
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {children}
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="h-full w-full overflow-y-auto p-6 md:p-12 flex flex-col items-center gap-10 border border-t-[#00c951] border-b-[#00c951] bg-[#0f172a]">
      <div className="text-center space-y-3 animate-in fade-in slide-in-from-top-4 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#00c951]">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg">Technologies & Tools I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl pb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
        {/* FRONTEND */}
        <SkillCard title="FRONTEND">
          <SiHtml5 color="#E44D26" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(228,77,38,0.5)]" title="HTML5" />
          <SiCss3 color="#1572B6" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(21,114,182,0.5)]" title="CSS3" />
          <SiJavascript color="#F7DF1E" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(247,223,30,0.5)]" title="JavaScript" />
          <SiReact color="#61DAFB" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.5)]" title="React" />
          <SiBootstrap color="#7952B3" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(121,82,179,0.5)]" title="Bootstrap" />
          <SiTailwindcss color="#06B6D4" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" title="Tailwind CSS" />
        </SkillCard>

        {/* BACKEND */}
        <SkillCard title="BACKEND">
          <SiExpress color="white" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" title="Express.js" />
          <SiNodedotjs color="#339933" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(51,153,51,0.5)]" title="Node.js" />
          <SiNextdotjs color="white" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" title="Next.js" />
          <SiMongodb color="#47A248" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(71,162,72,0.5)]" title="MongoDB" />
          <SiElectron color="#61DAFB" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.5)]" title="Electron" />
        </SkillCard>

        {/* LANGUAGES */}
        <SkillCard title="LANGUAGES">
          <SiPython color="#3776AB" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(55,118,171,0.5)]" title="Python" />
          <SiC color="#A8B9CC" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(168,185,204,0.5)]" title="C" />
          <SiArduino color="#00979D" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(0,151,157,0.5)]" title="Arduino" />
        </SkillCard>

        {/* TOOLS */}
        <SkillCard title="TOOLS">
          <SiGit color="#F05032" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(240,80,50,0.5)]" title="Git" />
          <SiGithub color="white" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" title="GitHub" />
          <SiJupyter color="#F37626" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(243,118,38,0.5)]" title="Jupyter" />
          <SiPrisma color="white" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" title="Prisma" />
          <SiScikitlearn color="#F7931E" className="text-5xl hover:scale-110 transition-transform cursor-target hover:drop-shadow-[0_0_10px_rgba(247,147,30,0.5)]" title="Scikit-learn" />
        </SkillCard>
      </div>
    </div>
  );
}
