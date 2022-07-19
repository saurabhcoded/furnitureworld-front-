import Image from "next/dist/client/image";
import sofa from "../../assets/sofa.jpg";
import bed from "../../assets/bed.jpg";
import recliner from "../../assets/recliner.jpg";
import kitchen from "../../assets/kitchen.jpg";
import wardrobe from "../../assets/wardrobe.jpg";
import dining from "../../assets/dining.jpg";
import chair from "../../assets/chair.jpg";
import styles from "../../styles/Product.module.css";

const Categories = () => {
  return (
    <div className="container p-5">
      <h2
        className="fw-bold text-center mb-5  border-bottom d-inline-block py-1 border-5 border-warning"
        style={{ width: "70px" }}
      >
        EXPERTISE
      </h2>

      <div className="row">
        <div className="col-md-6">
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={sofa}></Image>
            <div className={styles.productOverlay}>
              <h1>SOFA</h1>
              <p className="text-end" style={{ marginTop: "-20px" }}>
                Get Relaxed
              </p>
            </div>
          </div>
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={bed}></Image>
            <div
              className={styles.productOverlay}
              style={{ color: "darkgray" }}
            >
              <h1>BED</h1>
              <p className="text-end" style={{ marginTop: "-20px" }}>
                Get Sleep
              </p>
            </div>
          </div>
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={dining}></Image>
            <div className={styles.productOverlay}>
              <h1>Dinings</h1>
              <p className="text-end" style={{ marginTop: "0px" }}>
                Get Foody
              </p>
            </div>
          </div>
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={chair}></Image>
            <div
              className={styles.productOverlay}
              style={{ color: "darkgray" }}
            >
              <h1>Accesories</h1>
              <p className="text-end" style={{ marginTop: "0px" }}>
                Of all type
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={recliner}></Image>
            <div className={styles.productOverlay}>
              <h1>Recliner</h1>
              <p className="text-end" style={{ marginTop: "0px" }}>
                In various varieties
              </p>
            </div>
          </div>
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={kitchen}></Image>
            <div className={styles.productOverlay} style={{ color: "white" }}>
              <h1>Kitchen</h1>
              <p className="text-end" style={{ marginTop: "0px" }}>
                Cutomized
              </p>
            </div>
          </div>
          <div className={styles.productContainer}>
            <Image className={styles.productImage} src={wardrobe}></Image>
            <div className={styles.productOverlay}>
              <h1>Wardrobe</h1>
              <p className="text-end" style={{ marginTop: "0px" }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
