import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form>
        <input name="to" placeholder="To" type="email" />
        <input name="subject" placeholder="Subject" type="text" />
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
