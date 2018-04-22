import "font-awesome/css/font-awesome.css";
import style from "./common/style/main.scss";
import React from "react";
const Bar =function (props){
    return (
        <div>
            <img src={require("./common/img/gilr1.png")}/>
            <span className="fa fa-rocket"></span>
            <div className={style.ot}>React</div>
            <div>Hello </div>
            <button />
    </div>
    )
}

export default Bar;