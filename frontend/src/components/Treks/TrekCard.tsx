import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import { trekDetails } from "./trekSource";
import Link from "next/link";

const TrekCard = () => {
  return (
    <>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {trekDetails.map((details, index) => (
          <div
            key={index}
            className="col">
            <div className="card-group">
              <div
                className="card p-0 mb-5 border-0 shadow rounded">
                <Image
                  src={details.image}
                  alt=""
                  width={500}
                  height={200}
                  objectFit="cover"
                />
                <div
                  className="rounded-bottom"
                  style={{ backgroundColor: "#12314a" }}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <h3 className="primaryColor h5">{details.days}</h3>
                        <p className="whiteColor">Duration</p>
                      </div>
                      <div className="">
                        <h3 className="primaryColor h5">{details.group}</h3>
                        <p className="whiteColor">Group Size</p>
                      </div>
                      <div className="">
                        <h3 className="primaryColor h5">{details.difficulty}</h3>
                        <p className="whiteColor">Difficulty</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------- */}
                <div className="card-body p-3">
                  <h4 className="mainColor pt-3   h4 fw-bold">{details.title}</h4>
                  <p className="mainColor pt-3 lh-lg  card-text">{details.Details}</p>
                  <div className="col">
                    <h6 className="primaryColor h6 ">
                      <GrMapLocation
                        style={{ fontSize: "20px" }}
                        className="primaryColor me-4"
                      />
                      {details.location}
                    </h6>
                    <button className="btn " style={{color:"white"}}>
                      <Link
                        href={`/trek/${details.id}`}
                        className="link">
                        View Detail
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrekCard;
