import React, { useState } from "react";
import Notification from "../components/Notification";
import "../components/Notification.css";

const useNotification = ({ position = "bottom-left" }) => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (notificationProps) => {
    const toastId = Math.random() * 10 + 1;
    setNotifications((pvs) => [...pvs, { id: toastId, ...notificationProps }]);
    setTimeout(() => {
      setNotifications((pvs) => pvs.filter((not) => toastId !== not.id));
    }, notificationProps.duration);
  };

  const handleClose = (idx) => {
    setNotifications((pvs) => {
      const updatedNot = [...notifications];
      updatedNot.splice(idx, 1);
      return updatedNot;
    });
  };

  const NotificationComponent = (
    <div className={`notification-cont ${position} ${position.split("-")[0]}`}>
      {notifications.map((not, idx) => (
        <Notification key={not.id} {...not} onClose={() => handleClose(idx)} />
      ))}
    </div>
  );
  return { NotificationComponent, triggerNotification };
};

export default useNotification;
