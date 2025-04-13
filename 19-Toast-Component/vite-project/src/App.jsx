import "./App.css";
import useNotification from "./hooks/useNotification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");
  return (
    <div className="app">
      {NotificationComponent}
      <div className="toasts">
        <div>
          <button
            className="toast success"
            onClick={() =>
              triggerNotification({
                type: "success",
                message: "This is a success message!",
                duration: 6000,
                animation: "fadeIn",
              })
            }
          >
            Success
          </button>
          <button
            className="toast info"
            onClick={() =>
              triggerNotification({
                type: "info",
                message: "This is a info message!",
                duration: 6000,
                animation: "pop",
              })
            }
          >
            Info
          </button>
        </div>
        <div>
          <button
            className="toast warning"
            onClick={() =>
              triggerNotification({
                type: "warning",
                message: "This is a warning message!",
                duration: 6000,
                animation: "pop",
              })
            }
          >
            Warning
          </button>
          <button
            className="toast error"
            onClick={() =>
              triggerNotification({
                type: "error",
                message: "This is a error message!",
                duration: 6000,
                animation: "pop",
              })
            }
          >
            Error
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
