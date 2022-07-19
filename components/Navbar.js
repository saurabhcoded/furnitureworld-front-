import logo from "../assets/image/funiture-world-logo.png";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container py-3 ">
        <Link href="/">
          <Image src={logo} alt="Furniture-world" width={140} height={30} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <Link aria-current="page" href="#">
                <a className={styles.navLink}>HOME</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" href="/">
                <a className={styles.navLink}>PRODUCTS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" href="#">
                <a className={styles.navLink}>BLOG</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" href="#">
                <a className={styles.navLink}>CONTACT US</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex shadow-sm " role="search">
            <input
              className="form-control bg-secondary bg-opacity-25 rounded-0 border-0 rounded-start"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-danger rounded-0 rounded-end"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
