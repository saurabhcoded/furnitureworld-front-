import styles from "../styles/Social.module.css";
import Link from "next/link";
const Social = () => {
  return (
    <div className={styles.linksContainer}>
      <Link href="/">
        <a
          className={`${styles.link} ${styles.singleLinkl}`}
          style={{ background: "#395498", borderTopLeftRadius: "10px" }}
        >
          <i class="bi bi-facebook fs-3 me-2"></i> Facebook
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link} style={{ background: "#f22f9d" }}>
          <i class="bi bi-instagram fs-3 me-2"></i> Instagram
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link} style={{ background: "red" }}>
          <i class="bi bi-youtube fs-3"></i> YouTube
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link} style={{ background: "#48c757" }}>
          <i class="bi bi-whatsapp fs-3 me-2"></i> Whatsapp
        </a>
      </Link>
      <Link href="/">
        <a
          className={styles.link}
          style={{
            background: "royalblue",
            borderBottomLeftRadius: "10px",
            padding: "5px 13px",
          }}
        >
          <i class="bi bi-telephone-fill fs-3"></i> Contact
        </a>
      </Link>
    </div>
  );
};

export default Social;
