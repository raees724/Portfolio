import s from "./TechSkills.module.scss";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3Full,
  DiFirebase,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  
  SiHtml5,
  SiBootstrap,
  SiMysql,
  SiSass,
} from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={s.container}>
      {/* FRONT TOOLS */}
      <li className={s.techIcon}>
        <DiJavascript1 className={s.icon}  />
        <p className={s.title}>JavaScript</p>
      </li>

      <li className={s.techIcon}>
        <SiHtml5 className={s.icon}  />
        <p className={s.title}>HTML5</p>
      </li>

      <li className={s.techIcon}>
        <DiReact className={s.icon}  />
        <p className={s.title}>ReactJs</p>
      </li>
      
      <li className={s.techIcon}>
        <DiCss3Full className={s.icon}  />
        <p className={s.title}>CSS</p>
      </li>
      <li className={s.techIcon}>
        <SiBootstrap className={s.icon}  />
        <p className={s.title}>Bootstrap</p>
      </li>
      <li className={s.techIcon}>
        <DiFirebase className={s.icon}  />
        <p className={s.title}>Firebase</p>
      </li>
      {/* BACKEND TOOL */}


      
      <li className={s.techIcon}>
        <DiNodejs className={s.icon}  />
        <p className={s.title}>NodeJs</p>
      </li>

      
      <li className={s.techIcon}>
        <DiJava className={s.icon}  />
        <p className={s.title}>Java</p>
      </li>
      <li className={s.techIcon}>
        <SiSass className={s.icon}  />
        <p className={s.title}>Sass</p>
      </li>
      
      <li className={s.techIcon}>
        <DiMongodb className={s.icon}  />
        <p className={s.title}>Mongodb</p>
      </li>
      <li className={s.techIcon}>
        <SiMysql className={s.icon}  />
        <p className={s.title}>MySql</p>
      </li>
      <li className={s.techIcon}>
        <DiGit className={s.icon} />
        <p className={s.title}>Git</p>
      </li>
      
    </ul>
  );
};

export default TechSkills;
