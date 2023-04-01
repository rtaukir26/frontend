import ReactStars from "react-rating-stars-component";

const RatingStar = ({value}) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    activeColor: "#ffc107",
    size: window.innerWidth < 600 ? 20 : 25,
    // value: 0,
    value: value,
    isHalf: true,
  };
  
  return (
    <div>
      
      {/* <ReactStars
    
        starRatedColor="gold"
        starHoverColor="goldenrod"
        starDimension="20px"
        starSpacing="2px"
          rating={values[ratingField]}
         numberOfStars={5}
         changeRating={rating => setFieldValue(ratingField, rating)}
         name={ratingField}
      /> */}
      {/* <ReactStars {...options} value={product.rating.rate} />  */}
      <ReactStars {...options} /> 
    </div>
  );
};

export default RatingStar;