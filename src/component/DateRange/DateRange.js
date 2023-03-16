// import axios from "axios";
// import { useState, useEffect } from "react";

// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

// const DateRange = () => {
//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   console.log("res", products);
//   useEffect(() => {
//     axios
//       .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
//       .then((response) => {
//         setProducts(response.data);
//         setAllProducts(response.data);
//       });
//   }, []);

//   const handleSelect = (date) => {
//     let filtered = allProducts.filter((product) => {
//       let productDate = new Date(product["createdAt"]);
//       console.log("res date", productDate);
//       return (
//         productDate >= date.selection.startDate &&
//         productDate <= date.selection.endDate
//       );
//     });
//     setStartDate(date.selection.startDate);
//     setEndDate(date.selection.endDate);
//     setProducts(filtered);
//   };

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   return (
//     <div>
//       <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Product</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => {
//             let date = new Date(product["createdAt"]);
//             return (
//               <tr>
//                 <td>{product["id"]}</td>
//                 <td>{product["name"]}</td>
//                 <td>{date.toLocaleDateString()}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DateRange;

// import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function DateRange() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
      });
  }, []);

  const handleSelect = (date) => {
    let filtered = allProducts.filter((product) => {
      let productDate = new Date(product["createdAt"]).toLocaleDateString();
      return (
        productDate >= date.selection.startDate.toLocaleDateString() &&
        productDate <= date.selection.endDate.toLocaleDateString()
      );
    });
    // console.log("productDate", filtered);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div className="App">
      <header className="App-header">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              let date = new Date(product["createdAt"]);
              return (
                <tr>
                  <td>{product["id"]}</td>
                  <td>{product["name"]}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default DateRange;
