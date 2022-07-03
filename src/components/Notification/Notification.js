
import { notification } from "antd";
import {useSelector } from 'react-redux'

const Notification = (type,messageTitle,placement) => {
    const { message } = useSelector((state) => state.auth);
    notification[type]({
        className: 'notification-class',
        message: messageTitle,
        description: message,
        placement,
      });
  return (
    <div></div>
  )
}

export default Notification