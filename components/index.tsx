export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        .btn {
          width: 100%;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          background: #4F46E5;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-transform: uppercase;
          max-width: 300px;
        }
        .btn:hover { 
          opacity: 0.9; 
        }
      `}</style>
      <button className="btn">{children}</button>
    </>
  );
}