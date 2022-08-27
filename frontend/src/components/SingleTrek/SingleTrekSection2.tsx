import styles from "../../styles/scss/singleTrek/SingleTrekSection2.module.scss";

const SingleTrekSection2 = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row px-2 gap-5">
            <div className="col">
              <p className={`${styles.para} lh-lg `}>
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.Lorem ipsum dolor sit amet consectetur
                adipiscing elitsed do eiusmod tempor incididunt utlabore et
                dolore magna aliqua. Utenim ad minim veniam quis nostrud
                exercitation ullamco laboris nisi ut aliquipo.
              </p>
            </div>
            <div className="col">
              {/* <div className="col"  > */}
              <div className="col">
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Mountains
                  <span className="fw-normal">
                    ...............................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>
                    Monte Bianco
                  </span>
                </li>
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Address
                  <span className="fw-normal">
                    ....................................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>
                    Monte Veneto Italy
                  </span>
                </li>
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Altitude
                  <span className="fw-normal">
                    ....................................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>1900 m</span>
                </li>
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Area
                  <span className="fw-normal">
                    ...........................................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>582.45 m2</span>
                </li>
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Refuges
                  <span className="fw-normal">
                    ....................................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>17</span>
                </li>
                <li className={`${styles.li} h6 pb-2 fw-bold`}>
                  Facilities
                  <span className="fw-normal">
                    ....................................................................................
                  </span>
                  <span className={`${styles.liEnd} fw-normal`}>All types</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrekSection2;
