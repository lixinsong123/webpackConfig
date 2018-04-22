
import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import "font-awesome/css/font-awesome.css";
import style from "./common/style/main.scss";
ReactDOM.render(
    <div>
        <img src={require("./common/img/gilr1.png")}/>
        <span className="fa fa-rocket"></span>
        <div className={style.ot}>React</div>
        <div>Hello </div>
        <div>Hello </div>
    </div>,
    document.getElementById("root")
);