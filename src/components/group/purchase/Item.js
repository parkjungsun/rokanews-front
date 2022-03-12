import React from "react";

import delImg from "../../../image/delete.png";

function Item({iname, iprice, iquantity, removeItemBox}) {
  return (
    <div className="all_center pur_sum" onClick={() => removeItemBox({
        itemName: iname,
        price: iprice,
        quantity: iquantity,
      })}>
      <div className="pur_one">
        <span>{iname}</span>
      </div>
      <div className="pur_two">
        <span>{iquantity.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>
      <div className="pur_three">
        <span>{iprice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
      </div>
      <img src={delImg} alt="" className="del_img" />
    </div>
  );
}

export default Item;
