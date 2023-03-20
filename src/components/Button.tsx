import { FC } from 'react';
import { raleway } from '@/fonts';

interface ButtonProps {
  children: string;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={`${raleway.className} button`}>
      <p className="visual">{children}</p>
      <span className="blur">{children}</span>

      <style jsx>{`
        .button {
          border: none;
          margin: 0;
          padding: 0;
          position: relative;
        }

        .visual,
        .blur {
          display: block;
          margin: 0;
          border: 2px solid #f222ff;
          border-radius: 28px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          line-height: 1.3;
          font-size: 13px;
          padding: 18px 20px;
          color: #f222ff;
          cursor: pointer;
          transition: 0.15s ease-in-out background-color,
            0.15s ease-in-out color;
        }

        .blur {
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(4px);
          opacity: 0.3;
          transition: 0.15s ease-in-out opacity, 0.15s ease-in-out filter;
        }

        .button:hover .visual {
          background-color: #f222ff;
          color: white;
        }

        .button:hover .blur {
          opacity: 0.6;
          filter: blur(20px);
        }
      `}</style>
    </button>
  );
};
