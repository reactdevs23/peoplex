import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ logo, pattern, arrow, initialPage, data }) => {
  return (
    <>
      <div
        className={classes.mainWrapper}
        style={{ background: initialPage.bg }}
      >
        {" "}
        <div className={[classes.wrapper, classes.initialPage].join(" ")}>
          <div className={classes.header}>
            <img src={logo} alt="#" className={classes.logo} />{" "}
            <div className={classes.pattern}>{pattern}</div>
            {/* <img src={pattern} alt="#" className={classes.pattern} /> */}
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.boxCircle}>
              <div className={classes.box}></div>
              <div className={classes.circle}></div>
            </div>
            <p className={classes.heading}>{initialPage.heading}</p>
          </div>
          <img src={arrow} alt="#" className={classes.arrow} />
        </div>{" "}
      </div>
      {data.map((el, i) => (
        <React.Fragment key={i}>
          {(i + 1) % 2 === 0 ? (
            <div className={classes.mainWrapper} style={{ background: el.bg }}>
              <div
                className={[
                  classes.wrapper,
                  classes.otherPages,
                  classes[`wrapper${i + 1}`],
                  classes.even,
                ].join(" ")}
              >
                <div className={classes.header}>
                  <img src={logo} alt="#" className={classes.logo} />{" "}
                  {el.pattern && (
                    <div className={classes.pattern}>{el.pattern}</div>
                  )}
                </div>
                <ul className={classes.listContainer}>
                  {" "}
                  <div className={classes.line}></div>
                  {el.list.map((list, i) => (
                    <li className={classes.list} key={i}>
                      {list}
                    </li>
                  ))}{" "}
                </ul>
                <div className={classes.container}>
                  <div className={classes.leftSide}>
                    <div className={classes.infoWrapper}>
                      <div className={classes.infoContainer}>
                        {" "}
                        <div className={classes.boxCircle}>
                          <div className={classes.box}></div>
                          <div className={classes.circle}></div>
                        </div>
                        <p className={classes.heading}>{el.heading}</p>
                      </div>
                    </div>
                  </div>
                  <h2
                    className={classes.id}
                    style={{
                      "--image-url": `url(${el.idBg})`,
                    }}
                  >
                    {i + 1}
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.mainWrapper} style={{ background: el.bg }}>
              <div
                className={[
                  classes.wrapper,
                  classes.otherPages,
                  classes[`wrapper${i + 1}`],
                  classes.odd,
                ].join(" ")}
              >
                <div className={classes.container}>
                  <div className={classes.leftSide}>
                    <div className={classes.header}>
                      <img src={logo} alt="#" className={classes.logo} />{" "}
                    </div>{" "}
                    <div className={classes.infoWrapper}>
                      <div className={classes.infoContainer}>
                        {" "}
                        <div className={classes.boxCircle}>
                          <div className={classes.box}></div>
                          <div className={classes.circle}></div>
                        </div>
                        <p className={classes.heading}>{el.heading}</p>
                      </div>
                    </div>
                  </div>
                  <h2
                    className={classes.id}
                    style={{
                      "--image-url": `url(${el.idBg})`,
                    }}
                  >
                    {i + 1}
                  </h2>
                </div>
                <ul className={classes.listContainer}>
                  {" "}
                  <div className={classes.line}></div>
                  {el.list.map((list, i) => (
                    <li className={classes.list} key={i}>
                      {list}
                    </li>
                  ))}{" "}
                </ul>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default MainComponent;
