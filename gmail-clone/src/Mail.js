import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import "./Mail.css";
import { useNavigate } from "react-router-dom";

function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>THIS WORKS</h2>
          <LabelImportantIcon className="mail_important" />
          <p>sleekychuks@gmail.com</p>
          <p className="mail_time">Thu, 24 Dec 2020 22:04:03 GMT</p>
        </div>
        <div className="mail_message">
          <p>Omg how cool</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
