import React from "react";
import Image from "next/dist/client/image";
import ella from "../../assets/image/ella.png";
import maayas from "../../assets/image/maayas.png";
import slinga from "../../assets/image/slinga.png";
import sofaRepublic from "../../assets/image/sofa-republic.png";
import threesixty from "../../assets/image/threesixty.png";

const AssociatedBrands = () => {
  return (
    <div className="py-5 bg-light">
      <h3 className="fw-bold text-center mb-5">
        <span
          className="border-start ps-4 border-5 border-warning"
          style={{
            width: "20px",
          }}
        >
          ASSOCIATED
        </span>{" "}
        BRANDS
      </h3>
      <div>
        <div className="m-auto" style={{ maxWidth: "600px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Image src={ella}></Image>
            </div>
            <div>
              <Image src={maayas}></Image>
            </div>
            <div>
              <Image src={slinga}></Image>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5 w-75 m-auto">
            <div>
              <Image src={sofaRepublic}></Image>
            </div>
            <div>
              <Image src={threesixty}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociatedBrands;
