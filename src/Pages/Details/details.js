import React, { useEffect } from "react";
import "./details.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBook } from "../../Context/bookContext";

const Details = () => {
  const { bookId } = useParams();
  // const [bookItem, setBookItem] = useState();
  const { bookData } = useBook();

  const getProduct = (products, productId) =>
    products.find((product) => {
      return product.id === productId;
    });

  const item = getProduct(bookData, bookId);

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
  // useEffect(() => {
  //   product();
  // }, [bookItem]);

  useEffect(() => {
    console.log(item);
  });
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {item && <h2 className="section-title">{item.volumeInfo.title}</h2>}
      {item && (
        <div className="drink">
          <img src={thumbnail} alt="abc"></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">Title :</span>
              {item.volumeInfo.title}
            </p>
            <p>
              <span className="drink-data">Subtitle :</span>
              {item.volumeInfo.subtitle}
            </p>
            <p>
              <span className="drink-data">Publisher :</span>
              {item.volumeInfo.publisher}
            </p>
            {amount && (
              <p>
                <span className="drink-data">Amount :</span> {amount}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
