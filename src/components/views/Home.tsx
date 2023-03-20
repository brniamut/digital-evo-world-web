import { FC } from 'react';
import Image from 'next/image';
import planet from '../../images/planet.svg';
import stars from '../../images/stars.svg';
import { Title } from '@/components/Title';
import { raleway } from '@/fonts';

export const Home: FC = () => {
  return (
    <div className="page">
      <div className="stars">
        <Image src={stars} fill alt="stars" style={{ objectFit: 'cover' }} />
      </div>
      <div className="container">
        <div className="planet-container">
          <Image src={planet} fill alt="planet" />
        </div>
        <Title>DIGITAL EVO WORLD</Title>
        <p className={`${raleway.className} coming-soon`}>Coming soon...</p>
      </div>

      <style jsx>
        {`
          .page {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(
              center center,
              circle,
              rgba(140, 30, 255, 0.15),
              rgba(242, 34, 255, 0.15)
            );
          }

          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .page :global(.title) {
            position: absolute;
            top: clamp(30px, 7vw, 135px);
            display: block;
            text-align: center;
            flex: 0 0 100%;
          }

          .page :global(.button) {
            position: absolute;
            bottom: clamp(60px, 20vw, 200px);
            display: block;
          }

          .coming-soon {
            position: absolute;
            bottom: clamp(60px, 20vw, 250px);
            display: block;
            margin: 0;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            line-height: 1.3;
            font-size: 22px;
            color: #f222ff;
          }

          .container {
            position: relative;
            margin: 0 auto;
            height: 100vh;
            flex: 0 1 1920px;
            max-height: 1248px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .planet-container {
            flex: 0 0 40%;
          }
        `}
      </style>
    </div>
  );
};
