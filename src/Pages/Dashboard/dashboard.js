import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useBook } from "../../Context/bookContext";

const Dashboard = () => {
  const { setSearch, bookData, handleSubmit } = useBook();

  // useEffect(()=>{
  //   async(() =>{

  //   })
  // }, [search])
  return (
    <div>
      <Navbar />
      <section className="sections search">
        <form method="POST" className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite book</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button className="btn search-btn">Search</button> */}
          </div>
        </form>
      </section>

      <section className="section">
        <h2 className="section-title">Books</h2>
        <div className="cocktails-center">
          {bookData.map((item) => {
            let thumbnail =
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail;
            let amount =
              item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            const { id } = item;
            return (
              <>
                {thumbnail && (
                  <article className="cocktail">
                    <div className="img-container">
                      <img src={thumbnail} alt="abc" />
                    </div>
                    <div className="cocktail-footer">
                      <h3>{item.volumeInfo.title}</h3>
                      <h4>{item.volumeInfo.subtitle}</h4>
                      {amount !== undefined ? (
                        <p>Rs. {amount}</p>
                      ) : (
                        <p>{item.volumeInfo.publisher}</p>
                      )}
                      <Link
                        to={`details/${id}`}
                        className="btn btn-primary btn-details"
                      >
                        details
                      </Link>
                    </div>
                  </article>
                )}
              </>
            );
          })}

          {/* <article className="cocktail">
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcghhqDa3FSXr7LjMrczXDkX9_5Ut4Y6uWrA&usqp=CAU"
                alt="abc"
              />
            </div>
            <div className="cocktail-footer">
              <h3>abc</h3>
              <h4>def</h4>
              <p>qwertyuiopasdfg</p>
              <Link to="/details" className="btn btn-primary btn-details">
                details
              </Link>
            </div>
          </article> */}
          {/* <article className="cocktail">
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcghhqDa3FSXr7LjMrczXDkX9_5Ut4Y6uWrA&usqp=CAU"
                alt="abc"
              />
            </div>
            <div className="cocktail-footer">
              <h3>abc</h3>
              <h4>def</h4>
              <p>qwertyuiopasdfg</p>
              <Link to="/details" className="btn btn-primary btn-details">
                details
              </Link>
            </div>
          </article> */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
