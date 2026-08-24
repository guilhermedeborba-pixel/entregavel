"use client"
import { useState, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  mask?: string;
}

export default function Input({ label, mask, type = "text", value: propValue, onChange: propOnChange, ...props }: InputProps) {
  const [internalValue, setInternalValue] = useState("");

  const value = propValue !== undefined ? propValue : internalValue;

  const aplicarMascara = (val: string) => {
    val = val.replace(/\D/g, "");
    if (val.length <= 11) {
      val = val.replace(/^(\d{2})(\d)/g, "($1) $2");
      val = val.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return val;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (propOnChange) {
      propOnChange(e);
    } else {
      const novoValor = mask ? aplicarMascara(e.target.value) : e.target.value;
      setInternalValue(novoValor);
    }
  }

  const estaPreenchido = String(value).length > 0;
  const placeholderMask = mask === "telefone" ? "(__) _____-____" : "";

  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <style>{`
        .input-container { position: relative; width: 100%; }
        .input-material {
          width: 100%;
          padding: 16px 12px 8px 12px;
          border: 1px solid #9CA3AF;
          border-radius: 4px;
          background: white;
          font-size: 14px;
          outline: none;
          font-family: monospace;
        }
        .input-material:focus {
          border: 2px solid #2196F3;
          padding: 15px 11px 7px 11px;
        }
        .input-label {
          position: absolute;
          left: 12px;
          top: 12px;
          color: #6B7280;
          font-size: 14px;
          transition: all 0.2s ease;
          pointer-events: none;
          background: white;
          padding: 0 4px;
        }
        .input-material:focus + .input-label,
        .input-label.floated {
          top: -8px;
          font-size: 12px;
          color: #2196F3;
        }
        .input-material::placeholder {
          color: #9CA3AF;
        }
      `}</style>

      <div className="input-container">
        <input
          {...props}
          type={type}
          className="input-material"
          value={value}
          onChange={handleChange}
          placeholder={placeholderMask}
        />
        <label className={`input-label ${estaPreenchido ? "floated" : ""}`}>
          {label}
        </label>
      </div>
    </div>
  );
}