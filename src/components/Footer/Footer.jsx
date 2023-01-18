import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
} from 'react-icons/fa';
import { MdOutlineAlternateEmail, MdPhoneIphone } from 'react-icons/md';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by <em>Raees Ahmed</em></h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} <em>Rz</em></h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/raees724"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li>
              <a
                href="https://www.linkedin.com/in/raees-ahmed-966207213/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
              {/* email */}
          <li className={s.socialLink}>
            <a
              href="mailto:ahmedraees724@gmail.com"
              target="_blank"
              rel="noreferrer"
              
            >
          <MdOutlineAlternateEmail/>
            </a>
          </li>
          {/* phone */}
          <li className={s.socialLink}>
            <a
              href="tel:+918583876387"
              target="_blank"
              rel="noreferrer"
            
            >
          <MdPhoneIphone/>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
