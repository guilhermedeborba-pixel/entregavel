import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (


    
    <>
      <style>{`
        .btn {
          width: 100%;
          padding: 12px 24px;
          border-radius: 6px;
          border: 1px solid #C7D2FE;
          background: white;
          color: #4F46E5;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn:hover { 
          background: #F5F3FF;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.15);





        }
        .btn:active {
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.4);
          transform: scale(0.99);


        }
      `}</style>
      <button className="btn" {...props}>
        {children}


        
      </button>
    </>
  );
}