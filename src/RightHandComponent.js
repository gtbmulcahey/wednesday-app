import Main from "./Main";
import { Footer } from "./Footer";

export const RightHandComponent = ({ message }) => {
    return (
      <>
        <p style={{ backgroundColor: 'red' }}>Right!{message}</p>
        <Main name="Wednesday" />
        <Footer />
      </>
    );
  }