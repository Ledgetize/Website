import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.section}>
    <div className="flex flex-col items-center w-full ">
      <h2 className={`${styles.heading2} text-center text-gradient mb-10`}>
        Empieza de forma sencilla
      </h2>
      <div className="text-white flex gap-16">
        <div className="m-10 text-center">
          <h2 className="font-poppins text-3xl leading-[30px] text-gradient uppercase mb-2">
            01
          </h2>
          <p className={`${styles.paragraph}`}>
            Importa <br />
            las transacciones.
          </p>
        </div>
        <div className="rotate-90 border-[1px] border-white mb-16 " />
        <div className="m-10 text-center">
          <h2 className="font-poppins text-3xl leading-[30px] text-gradient uppercase mb-2">
            02
          </h2>
          <p className={`${styles.paragraph}`}>
            Previsualiza las
            <br />
            ganancias de
            <br /> capital.
          </p>
        </div>
        <div className="rotate-90 border-[1px] border-white mb-16" />
        <div className="m-10 text-center">
          <h2 className="font-poppins text-3xl leading-[30px] text-gradient uppercase mb-2">
            03
          </h2>
          <p className={`${styles.paragraph}`}>
            Descarga informes
            <br />
            fiscales.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
