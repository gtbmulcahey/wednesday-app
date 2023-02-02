import { Link } from "react-router-dom"
//import "./css/Footer.css";

export const Footer = () => {
    return (
      <footer>
        <div>
          <nav>
            <Link color="primary" to="/about">About</Link>
          </nav>
        </div>
      </footer>
    )
  }
  