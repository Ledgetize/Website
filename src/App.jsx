import styles from "./style";

import {
  Navbar,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  Caracteristicas,
} from "./components";
import Contact from "./Components/Contact";
import Carteras from "./Components/Carteras";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} my-14`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Caracteristicas />
        <Carteras />
        <CardDeal />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
