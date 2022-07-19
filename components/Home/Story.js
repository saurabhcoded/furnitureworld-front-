import Image from "next/image";
import about from "../../assets/about.jpg";
const Story = () => {
  return (
    <div className="About container-fluid">
      <div className="container">
        <div className="row justify-content-end align-items-start">
          <div className="col-md-6">
            <Image src={about} className="aboutImg "></Image>
          </div>
          <div className="col-md-5">
            <h2
              className="fw-bold  mb-3 ms-auto border-bottom text-end py-1 border-5 border-warning"
              style={{ width: "50px", direction: "rtl" }}
            >
              STORY
            </h2>
            <p
              className=" ms-auto fs-6 lh-sm"
              style={{ textAlign: "justify", direction: "rtl" }}
            >
              Furniture World. A great tale that began in 1957. So, that mostly
              summarizes our stalwart presence in the furniture industry that
              has gone through several tests and trails of time. From providing
              top end furniture products to promising and satisfying services,
              Furniture World has progressed substantially in growth and
              satisfying our customers. We provide an array of diverse which set
              the standards and raised the bar in our competitive world.
            </p>
            <button
              className="btn  ms-auto d-block fw-bold text-white mt-4 shadow-sm px-4 py-2"
              style={{ background: "#fca120" }}
            >
              know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
