import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import './Products.css'
import left from "../images/arrow-left.svg";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row main-head">
          <div className="col-9 main-inner-1" style={{ width: "60%", margin: "auto" }}>
            <h1 className="display-3 text-center" style={{fontSize: '3rem'}}>DISCOVER OUR PRODUCTS</h1>
            <h4 className="display-9 text-center mb-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhonous
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.{" "}
            </h4>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <p style={{fontWeight: '700'}}>3425 ITEMS</p>
              <p onClick={() => setShow(!show)}>
                <img
                  src={left}
                  alt="error"
                  style={{ transform: "rotate(180deg)" }}
                />{" "}
                {show ? "SHOW FILTERS" : "HIDE FILTER"}
              </p>
            </div>
            <div>
              <select className="rec-select" name="RECOMMENDED" id="">
                <option value="">RECOMMENDED</option>
                <option value="">NEWEST FIRST</option>
                <option value="">POPULAR</option>
                <option value="">PRICE : HIGH TO LOW</option>
                <option value="">PRICE : LOW TO HIGH</option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{ border: "0px solid black", display: "flex", gap: "20px" }}
        >
          <div
            className="sidebar-filter"
            style={{
              border: "0px solid black",
              display: show ? "none" : "block",
            }}
          >
            <div style={{ border: "0px solid black" }}>
              <div className="custom-checkbox" style={{ display: "flex", gap: "10px"}}>
                <input type="checkbox" />
                <label>CUSTOMIZEABLE</label>
              </div>

              <div
                className="custom-box"
                style={{
                  display: "flex",
                  alignContent: 'center',
                  gap: '10px',
                  padding: "10px 0",
                  cursor: "pointer",
                }}
                onClick={handleToggle}
              >
                <p>IDEAL FOR</p>
                <img
                  src={left}
                  alt="error"
                  style={{
                    paddingLeft: '10px',
                    paddingBottom: '18  px',
                    transform: collapsed ? "rotate(90deg)" : "rotate(270deg)",
                  }}
                />
              </div>
              {collapsed ? (
                <div
                style={{
                  // display: "flex",
                  // border: "1px solid black",
                  // justifyContent: "center",
                  // gap: "20px",
                }}
                >
                  <div  style={{
                    display: "flex",
                    border: "0px solid black",
                    justifyContent: "center",
                    gap: "20px",
                  }}>
                    <input
                      style={{
                        border: "1px solid yellow",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                      type="checkbox"
                    />
                    <p style={{ border: "0px solid red", marginTop: "10px" }}>
                      Men
                    </p>
                  </div>

                  <div  style={{
                    display: "flex",
                    border: "0px solid black",
                    justifyContent: "center",
                    gap: "20px",
                  }}>
                    <input
                      style={{
                        border: "0px solid yellow",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                      type="checkbox"
                    />
                    <p style={{ border: "0px solid red", marginTop: "10px" }}>
                      Men
                    </p>
                  </div>

                  <div  style={{
                    display: "flex",
                    border: "0px solid black",
                    justifyContent: "center",
                    gap: "20px",
                  }}>
                    <input
                      style={{
                        border: "1px solid yellow",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                      type="checkbox"
                    />
                    <p style={{ border: "0px solid red", marginTop: "10px" }}>
                      Men
                    </p>
                  </div>
                </div>
              ) : null}
              {/* <div style={{ display: "flex", marginBottom: "20px" }}>
                <p style={{ gap: "80px" }}>
                  {" "}
                  <span>IDEAL FOR</span>{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div> */}
              <div
                style={{ display: "flex", gap: "80px", marginBottom: "20px" }}
              >
                <p>
                  OCCASION{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "90px", marginBottom: "20px" }}
              >
                <p>
                  WORK{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <p>
                  FABRIC{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "90px", marginBottom: "20px" }}
              >
                <p>
                  SEGMENT{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "90px", marginBottom: "20px" }}
              >
                <p>
                  SUITABLE FOR{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "80px", marginBottom: "20px" }}
              >
                <p>
                  RAW MATERIAL{" "}
                  <img
                    src={left}
                    alt="error"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <div>
                    <p>All</p>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div style={{ fontWeight: "bold" }}>NEW PRODUCT</div>
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
