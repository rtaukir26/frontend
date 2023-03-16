import React, { useEffect, useState } from "react";
import "./pagination.scss";
import ecusData from "../jsonDummyData/dummyData.json";

const Pagination = () => {
  // const myDummyData = [
  //   [
  //     {
  //       ecuName: "BCM",
  //       ecuStatus: "Active",
  //       ecuDescription: "This is active ecu",
  //     },
  //   ],
  //   [
  //     {
  //       ecuName: "ABS",
  //       ecuStatus: "Active",
  //       ecuDescription: "This is active ecu",
  //     },
  //   ],
  //   [
  //     {
  //       ecuName: "ENGINE",
  //       ecuStatus: "In active",
  //       ecuDescription: "This is In active ecu",
  //     },
  //   ],
  //   [
  //     {
  //       ecuName: "PDS",
  //       ecuStatus: "Fault",
  //       ecuDescription: "This is Fault ecu",
  //     },
  //   ],
  // ];

  const [ecus, setEcus] = useState([]);
  const [ecusDummyParams, setEcusDummyParams] = useState([]);
  const [dtcParams, setDtcParams] = useState([]);
  // console.log("ecus", dtcParams);
  useEffect(() => {
    let newEcusData = ecusData?.allEcusName;
    setEcus(
      newEcusData.map((item) => {
        if (item.ecuName === "BCM") {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      })
    );

    setEcusDummyParams(ecusData?.myDummyData);
  }, []);

  useEffect(() => {
    let newEcusParams = ecusData?.myDummyData;
    let newEcusData = ecusData?.allEcusName;

    if (dtcParams.length === 0) {
      setDtcParams([
        newEcusParams
          .map((item) => {
            return item.filter((elem) => elem.ecuName === "BCM");
          })
          .filter((item) => item.length > 0),
      ]);
      setEcus(
        newEcusData.map((item) => {
          if (item.ecuName === "BCM") {
            return { ...item, selected: true };
          } else {
            return { ...item, selected: false };
          }
        })
      );
    }
  }, [dtcParams]);

  //===change handler===
  const changeHandler = (e, ecu, i) => {
    if (e.target.checked) {
      // ==ecuNames checkboxes
      setEcus(
        ecus.filter((item) => {
          if (item.ecuName === ecu.ecuName) {
            item.selected = true;
          }
          return item;
        })
      );
      // ==dtc params
      let dtcParamss = ecusDummyParams
        ?.map((item) => {
          return item.filter((elem) => elem.ecuName === ecu.ecuName);
        })
        .filter((item2) => item2.length > 0);
      setDtcParams((pre) => {
        return [...pre, dtcParamss];
      });
    } else {
      // ==checkbox false
      setEcus(
        ecus.filter((item) => {
          if (item.ecuName === ecu.ecuName) {
            item.selected = false;
          }
          return item;
        })
      );
      // ==dtc params remove

      setDtcParams(
        dtcParams
          ?.map((item) => {
            return item
              .map((elem) => {
                return elem.filter((item2) => item2.ecuName !== ecu.ecuName);
              })
              .filter((item) => item.length > 0);
          })
          .filter((item) => item.length > 0)
      );
    }
  };
  const a = [
    [{ age: 4, name: "yaman" }],
    [{ age: 5, name: "ani" }],
    [{ age: 2, name: "ani" }],
    [{ age: 3, name: "yaman" }],
  ];
  // const b = [
  //   ["u1", "u2"],
  //   ["u3", "u4"],
  //   ["u2", "u1"],
  //   ["u5", "u6"],
  // ];
  useEffect(() => {
    // let uniqueData2=a.filter((item, pos, self) => self.findIndex(v => v.name === item.name) === pos);
  
    // let str=[]
    // let filterArray=[]
    // let result=[]
    // a.forEach(val=>{
    //   str.push(JSON.stringify(val.sort()))
    // })
    // filterArray=str.filter((val,i)=>{
    //   return str.indexOf(val)===i
    // })
    // filterArray.forEach((val)=>{
    //   result.push(JSON.parse(val))
    // })
    // let str=[]
    // let filterArray=[]
    // let result=[]
    // b.forEach(val=>{
    //   str.push(JSON.stringify(val.sort()))
    // })
    // filterArray=str.filter((val,i)=>{
    //   return str.indexOf(val)===i
    // })
    // filterArray.forEach((val)=>{
    //   result.push(JSON.parse(val))
    // })

    // let uniqueData = a.filter((item, i) => {
    //   return item.filter((elem) => elem.name !== a.map(item2));
    // });
    // let uniqueData = [...new Set(b.map((item) => item.map((elm) => elm)))];

    // console.log("uniqueData", result);
  }, []);

  return (
    <div className="pagination_main_sec">
      <div className="pagination_body">
        <ul>
          {ecus?.map((item, i) => (
            <div key={i}>
              <div key={i}>
                <li>
                  <input
                    type="checkbox"
                    value={item.ecuName}
                    checked={item.selected}
                    id={item.ecuName}
                    onChange={(e) => changeHandler(e, item, i)}
                  />
                  {item.ecuName}
                </li>
              </div>
            </div>
          ))}
        </ul>
        {/*========== dtc parameters========== */}
        <div className="dtc_parameters_div">
          <div>Parameters</div>
          <div>
            {dtcParams?.map((item, i) => {
              return item.map((elm, i) => {
                return elm.map((elem, i) => {
                  return (
                    <div key={i}>
                      <p>{elem.ecuName}</p>
                      <p>{elem.ecuDescription}</p>
                    </div>
                  );
                });
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
