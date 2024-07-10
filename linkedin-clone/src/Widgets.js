import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon className="MuiSvgIcon-root" />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Simple React is back", "Top news - 9999 readers")}
      {newsArticle("Coronavirus: Nigeria updates", "Top news - 425 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 243 readers")}
      {newsArticle("Is Redux too good", "Code - 149 readers")}
      {newsArticle(
        "Jofinger digital launches course",
        "Top news - 7483 readers"
      )}
    </div>
  );
}

export default Widgets;
