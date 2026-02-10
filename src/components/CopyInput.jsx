import { useState } from "react";
import PopupContext from "./PopupContext";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setError(true);
      setCopied(false);
      setTimeout(() => setError(false), 2500);
      return;
    }

    navigator.clipboard.writeText(trimmedValue).then(() => setCopied(true));
    setTimeout(() => setCopied(false), 6500);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (error) {
            setError(false);
          }
        }}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContext copied={copied} error={error} />
    </div>
  );
};

export default CopyInput;
