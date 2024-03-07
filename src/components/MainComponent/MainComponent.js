import React from "react";
import classes from "./MainComponent.module.css";
import Condition from "../../images/Condition";
import YesRight from "../../images/YesRight";
import NoLeft from "../../images/NoLeft";

import { LeftRight } from "../../images/LeftRight";
import Yes from "../../images/Yes";
import NoRight from "../../images/NoRight";

import RightMiddle from "../../images/RightMiddle";
import LongYes from "../../images/LongYes";
import LongNoLeft from "../../images/LongNoLeft";

const MainComponent = ({
  header,

  step1,
  step2a,
  step2b,
  step3a,
  step3b,
  step3c,

  step4a,
  step4b,
  step4c,
  step4d,
  step5a,
  step5b,
  step6a,
  step6b,
  step6c,
  step6d,
  arrowColor,
  data,
}) => {
  return (
    <div
      className="min-h-screen flex flex-col gap-20 items-center  w-full py-20"
      style={{ background: "var(--mainBg) " }}
    >
      <div className={classes.headingContainer}>
        <h3
          className={classes.subHeading}
          style={{ "--color": header.subHeadingColor }}
        >
          {header.subHeading}
        </h3>
        <h1
          className={classes.heading}
          style={{ "--color": header.headingColor }}
        >
          {header.heading}
        </h1>
      </div>
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <div className={[classes.condition, classes.step1].join(" ")}>
            {" "}
            <Condition bg={step1.bg} />
            <p className={[classes.label, classes.conditionLabel].join(" ")}>
              {step1.label}
            </p>{" "}
            <div className={classes.noLeft}>
              <NoLeft color={arrowColor} />
            </div>
            <div className={classes.yesRight}>
              <YesRight color={arrowColor} />
            </div>
          </div>
          <div className={classes.step2Container}>
            <div
              className={[classes.box, classes.step2a].join(" ")}
              style={{ "--bg": step2a.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step2a.color }}>
                {step2a.label}
              </h2>
            </div>
            <div className={classes.condition}>
              {" "}
              <Condition bg={step2b.bg} />
              <p
                className={[classes.label, classes.conditionLabel].join(" ")}
                style={{ "--color": step2b.color }}
              >
                {step2b.label}
              </p>{" "}
              <div className={classes.noRight}>
                {" "}
                <NoRight color={arrowColor} />
              </div>
            </div>
          </div>
          <div className={classes.step3Container}>
            <div className={classes.step3abContainer}>
              <div
                className={[classes.box, classes.step3a].join(" ")}
                style={{ "--bg": step3a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3a.color }}
                >
                  {step3a.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step3b].join(" ")}
                style={{ "--bg": step3b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3b.color }}
                >
                  {step3b.label}
                </h2>
              </div>
              <div className={classes.leftRight}>
                <LeftRight color={arrowColor} />
              </div>
            </div>
            <div className={classes.step3bcContainer}>
              <div
                className={[classes.box, classes.step3c].join(" ")}
                style={{ "--bg": step3c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3c.color }}
                >
                  {step3c.label}
                </h2>
                <div className={classes.rightMiddle}>
                  <RightMiddle color={arrowColor} />
                </div>
              </div>{" "}
            </div>
          </div>
          <div className={classes.step4Container}>
            <div className={classes.condition}>
              {" "}
              <Condition bg={step4a.bg} />
              <p
                className={[classes.label, classes.conditionLabel].join(" ")}
                style={{ "--color": step4a.color }}
              >
                {step4a.label}
              </p>{" "}
              {/* <div className={classes.noRight}>
                {" "}
                <NoRight color={arrowColor} />
              </div>{" "} */}
              <div className={classes.longYes}>
                {/* <Yes color={arrowColor} /> */}
                <LongYes color={arrowColor} />
              </div>
              <div className={classes.longNoLeft}>
                <LongNoLeft color={arrowColor} />
              </div>
            </div>
            <div className={classes.step4bc}>
              <div
                className={[classes.box, classes.step4b].join(" ")}
                style={{ "--bg": step4b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4b.color }}
                >
                  {step4b.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step4c].join(" ")}
                style={{ "--bg": step4c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step4c.color }}
                >
                  {step4c.label}
                </h2>
              </div>
            </div>
          </div>
          <div className={classes.step5Container}>
            <div
              className={[classes.box, classes.step5a].join(" ")}
              style={{ "--bg": step5a.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step5a.color }}>
                {step5a.label}
              </h2>
            </div>{" "}
            <div
              className={[classes.box, classes.step5b].join(" ")}
              style={{ "--bg": step5b.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step5b.color }}>
                {step5b.label}
              </h2>
              <div className={classes.yes}>
                <Yes color={arrowColor} />
              </div>
            </div>
          </div>
          <div className={classes.step6Container}>
            <div className={classes.step6abContainer}>
              <div
                className={[classes.box, classes.step6a].join(" ")}
                style={{ "--bg": step6a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step6a.color }}
                >
                  {step6a.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step6b].join(" ")}
                style={{ "--bg": step6b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step6b.color }}
                >
                  {step6b.label}
                </h2>
              </div>{" "}
              <div className={classes.rightMiddle}>
                <RightMiddle color={arrowColor} />
              </div>
            </div>
            <div className={classes.step6cdContainer}>
              <div
                className={[classes.box, classes.step6c].join(" ")}
                style={{ "--bg": step6c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step6c.color }}
                >
                  {step6c.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step6d].join(" ")}
                style={{ "--bg": step6d.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step6d.color }}
                >
                  {step6d.label}
                </h2>
              </div>{" "}
              <div className={classes.rightMiddle}>
                <RightMiddle color={arrowColor} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.allData}>
          {data.map((el, i) => (
            <div
              className={classes.infoContainer}
              style={{ "--bg": el.bg }}
              key={i}
            >
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {" "}
                {el.info}
              </p>
              <h2
                className={classes.title}
                style={{ "--color": el.titleColor }}
              >
                {" "}
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
