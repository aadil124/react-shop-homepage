import React from "react";
import data from "../data.json";

const Section = ({ actionMethod }) => {
  const printStars = (starCount) => {
    const tempArray = [];
    for (let count = 1; count <= starCount; count++) {
      tempArray.push(<div className="bi-star-fill"></div>);
    }
    return tempArray;
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((card, index) => (
            <div className="col mb-5" key={index}>
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  {card.sale === "sale" ? <span>Sale</span> : null}
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{card.itemType}</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      {card.starCount ? printStars(card.starCount) : null}
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      {card.price.oldPrice}
                    </span>
                    {card.price.newPrice}
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {card.buttonName === "Add to cart" ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={actionMethod}
                      >
                        {card.buttonName}
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto">
                        {card.buttonName}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
