import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <em className={s.purple}>Raees Ahmed  </em>
        from <em className={s.purple}> Kasaragod,Kerela,India</em>
        <br />
        Skilled in Web development
        <br /> B.Tech in Computer Science and Engineering from
        <br />
        APJ AbdulKalam Technological University In The Year Of 2022. Iam A FullStack Web Developer.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>
      <p></p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listening to Music
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
