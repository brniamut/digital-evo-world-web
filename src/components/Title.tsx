import { FC } from 'react';
import { oneThinLine } from '@/fonts';

export const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <div className="title">
      <span className={`${oneThinLine.className} blur-3`}>{children}</span>
      <span className={`${oneThinLine.className} blur-2`}>{children}</span>
      <span className={`${oneThinLine.className} blur-1`}>{children}</span>
      <span className={`${oneThinLine.className} blur`}>{children}</span>
      <h1 className={`${oneThinLine.className} text`}>{children}</h1>
      <style jsx>{`
        @keyframes flickerAnimation {
          0% {
            opacity: initial;
          }

          1% {
            opacity: 0.2;
          }

          2% {
            opacity: initial;
          }

          100% {
            opacity: initial;
          }
        }

        .title {
          position: relative;
        }

        .text,
        .blur,
        .blur-1,
        .blur-2,
        .blur-3 {
          white-space: nowrap;
          text-align: center;
          display: block;
          font-size: clamp(40px, 5vw, 98px);
          margin: 0;
          letter-spacing: 0.04em;
        }

        .blur,
        .blur-1,
        .blur-2,
        .blur-3 {
          position: absolute;
        }

        .text {
          color: #f222ff;
        }

        .blur {
          color: #f222ff;
          filter: blur(2px);
          opacity: 0.8;
        }

        .blur-1 {
          filter: blur(3px);
          color: #8c1eff;
          transform: translateY(5px) scale(0.99);
          opacity: 0.7;
          animation: flickerAnimation 8s infinite;
        }

        .blur-2 {
          filter: blur(5px);
          color: #ff2975;
          transform: translateY(8px) scale(0.97);
          opacity: 0.6;
          animation: flickerAnimation 8s infinite;
          animation-delay: 0.05s;
        }

        .blur-3 {
          filter: blur(8px);
          color: #ffd319;
          transform: translateY(12px) scale(0.94);
          opacity: 0.5;
          animation: flickerAnimation 8s infinite;
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};
