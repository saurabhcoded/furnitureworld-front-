import Image from "next/dist/client/image";
import reviewImg from "../../assets/image/review.jpg";
const SingleReview = () => {
  return (
    <div
      className="container d-sm-flex justify-content-center align-items-center  bg-light  py-5 my-auto rounded-4 "
      style={{ maxWidth: "700px" }}
    >
      <div
        className="px-3 py-1 border-start border-3 border-warning"
        style={{ maxWidth: "500px", textAlign: "justify" }}
      >
        <p className="text-muted fs-6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet rem
          pariatur animi perferendis est ut reprehenderit vel ipsa, iure
          consequuntur. Atque repellat explicabo illum pariatur?
        </p>
        <h4 className="fw-bold lh-1">John Doe</h4>
        <p>New Delhi, India</p>
      </div>
      <div>
        <Image
          src={reviewImg}
          className="rounded-circle border border-5 border-white"
          width="120px"
          height="120px"
        ></Image>
      </div>
    </div>
  );
};

export default SingleReview;
