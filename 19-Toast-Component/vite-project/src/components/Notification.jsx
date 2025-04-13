import React from "react";

const Notification = ({
  type = "info",
  message = "",
  onClose = () => {},
  animation = "popup",
}) => {
  const animations = {
    fade: "fadeIn",
    pop: "popup",
    slide: "slideIn",
  };

  // A11y
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`notification ${type} ${animations[animation]}`}
      // A11y
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex="-1"
      ref={notificationRef}
    >
      {message}{" "}
      <span onClick={onClose} className="close">
        ❌
      </span>{" "}
    </div>
  );
};

export default Notification;
