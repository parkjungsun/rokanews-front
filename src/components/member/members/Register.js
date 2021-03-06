import React, { useState } from "react";

import writeImg from "../../../image/write.png";
import groupImg from "../../../image/group.png";
import penImg from "../../../image/pen.png";
import delImg from "../../../image/delete.png";
import { Link } from "react-router-dom";

function Register() {
    const [mode, setMode] = useState(true);

    if(mode) {
        return (
            <div className="add_toolbox">
                <div className="add_item" onClick={() => setMode(false)}>
                    <img className="item_img" src={penImg} alt="penImg"/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="add_toolbox">
                <div className="add_item_box">
                    <div className="add_item_description">
                        <p>그룹 가입하기</p>
                    </div>
                    <Link to="/group/register" className="add_item">
                        <img className="item_img"  src={groupImg} alt="groupImg"/>
                    </Link>
                </div>
                <div className="add_item_box">
                    <div className="add_item_description">
                        <p>새 그룹 생성</p>
                    </div>
                    <Link to="/group/create" className="add_item">
                        <img className="item_img" src={writeImg} alt="writeImg"/>
                    </Link>
                </div>
                <div className="add_item_box">
                    <div className="add_item_description">
                        <p>취소</p>
                    </div>
                    <div className="add_item" onClick={() => setMode(true)}>
                        <img className="item_img" src={delImg} alt="delImg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
