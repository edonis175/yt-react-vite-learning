import { createPortal } from "react-dom";

const PopupContext = ({ copied, error }) => {
  return createPortal(
    <section>
      {(copied || error) && (
        <div
          style={{
            position: "absolute",
            top: "1.8rem",
            backgroundColor: error ? "#e53935" : "#4caf50",
            color: "white",
            padding: "12px 16px",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: "1000",
            animation: "slideDown 0.3s ease-in-out",
          }}
        >
          {error ? "Please enter text to copy" : "Copied To Clipboard"}
        </div>
      )}
    </section>,
    document.querySelector("#popup-content"),
  );
};

export default PopupContext;
