import Image from "next/dist/client/image";
import mail from "../assets/image/mail.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-top" style={{ background: "#4d7f9e" }}>
        <div className="container row">
          <div className="col-md-9 p-4 ">
            <h3
              className="text-center fw-bold mb-4 border-start ps-4 text-end py-1 border-5 border-warning"
              style={{ width: "60px" }}
            >
              BRANCHES
            </h3>
            <div className="row text-break text-justify">
              <div className="col-md-4  p-3">
                <h5 className="mb-3">
                  <span className="text-warning fw-semibold">
                    FURNITURE WORLD
                  </span>
                  <br />
                  <i className="fw-normal fs-6 text-light"> (Hyderabad)</i>
                </h5>
                <div className=" d-flex flex-column justify-content-evenly lh-sm text-light">
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-geo-alt-fill fs-4"></i>
                    <p className="w-75">
                      Plot no: 1 Journalist colony, Road Number 3, Banjarahills,
                      Hyderabad, Telangana - 500034.
                    </p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-telephone-outbound-fill fs-5"></i>
                    <p className="w-75">040-23351222 /+91 9701362951</p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-envelope-paper-fill fs-5"></i>
                    <p className="w-75 d-inline">
                      banjara@furnitureworldindia.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <h5 className="mb-3">
                  <span className="text-warning fw-semibold">
                    FURNITURE WORLD
                  </span>
                  <br />
                  <i className="fw-normal fs-6 text-light">(SECUNDERABAD)</i>
                </h5>
                <div className="d-flex flex-column align-items-start lh-sm text-light">
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-geo-alt-fill fs-4"></i>
                    <p className=" w-75">
                      Paradise Circle, M.G Road, Hyderabad, Telangana - 500003.
                    </p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-telephone-outbound-fill fs-5"></i>
                    <p className="w-75">040-27897952 /+91 7674063222</p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-envelope-paper-fill fs-5"></i>
                    <p className="w-75">mgroad@furnitureworldindia.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3 ">
                <h5 className=" mb-3">
                  <span className="text-warning fw-semibold">
                    FURNITURE WORLD
                  </span>
                  <br />
                  <i className="fw-normal fs-6 text-light"> (Vizag)</i>
                </h5>
                <div className="d-flex flex-column justify-content-between lh-sm text-light">
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-geo-alt-fill fs-4"></i>
                    <p className=" w-75">
                      Waltair Main Road, Opp. to Green Park Hotel,
                      Visakhapatnam, Andhra Pradesh - 530002.
                    </p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-telephone-outbound-fill fs-5"></i>
                    <p className="w-75">0891-2714369 /+91 9701362950</p>
                  </div>
                  <div className="d-flex align-items-start justify-content-evenly ">
                    <i className="bi bi-envelope-paper-fill fs-5"></i>
                    <p className="w-75">banjara@furnitureworldindia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-4">
            <div className=" d-flex align-items-center justify-content-evenly">
              <div className="me-2">
                <h5 className="fw-bold border-start ps-4 text-end py-1 border-5 border-warning">
                  SUBSCRIBE
                </h5>
              </div>
              <Image src={mail} alt="MailBox" width={80} height={80} />
            </div>

            <div>
              <p className="  text-light  text-center  fs-6 w-75 mx-auto">
                Get notified for our new product and offers{" "}
              </p>
              <form className="bg-light shadow-sm p-3">
                <div className="d-flex">
                  <input
                    className="form-control me-2 rounded-0 border-0 shadow-sm "
                    type="text"
                    placeholder="Firstname"
                  />
                  <input
                    className="form-control rounded-0 border-0 shadow-sm"
                    type="text"
                    placeholder="Lastname"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-0 border-0 my-2 shadow-sm"
                  placeholder="Email"
                />
                <button className="btn btn-danger rounded-0 fw-semibold mt-2 shadow-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom w-100 fw-semibold bg-light pt-3">
        <div className="container d-flex justify-content-between">
          <p> &copy;2017 FURNITURE WORLD</p>
          <p>Terms &amp; Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
