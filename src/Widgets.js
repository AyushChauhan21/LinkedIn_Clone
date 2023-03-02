import React from "react";
import "./Widgets.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle("FireBase is Live ! ", " Dev Tools - 9099 Readers")}
            {newsArticle("NASA new video Clip", "Space news - 55043 Readers")}
            {newsArticle("React.JS, HTML,CSS", "Dev Tools - 8869 Readers")}
            {newsArticle("Is Redux too Good ?", "Dev Tools - 4767 Readers")}
            {newsArticle("Tesla hits new Highs", "Cars & Auto - 7521 Readers")}
            {newsArticle("Bitcoin Breaks $71k !!", "Crypto - 97112 Readers")}
            {newsArticle("Ayush Designed this Website !! ", "Top news - 65043 Readers")}
        </div>
    );
}
export default Widgets;
