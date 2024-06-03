"use client";
import React from "react";
import styles from "./Timeline.module.css";
import Image from "next/image";

const Timeline = () => {
  const timelineSteps = [
    {
      status: "Pick up",
      description: "Your device is ready for pickup",
      state: "completed",
      img: ["/assets/dot.svg", "/assets/dot1.svg"],
    },
    {
      status: "Arrived",
      description: "Your device has arrived for repair",
      state: "completed",
      img: ["/assets/dot.svg", "/assets/dot1.svg"],
    },
    {
      status: "Undergoing repair",
      description: "Your device is currently under repair",
      state: "completed",
      img: ["/assets/dot.svg", "/assets/dot1.svg"],
    },
    {
      status: "Repair successful",
      description: "Your device has been repaired successfully",
      state: "current",
      img: ["/assets/dot.svg", "/assets/dot1.svg"],
    },
    {
      status: "Drop off",
      description: "Your device is on its way to you",
      state: "current",
      img: ["/assets/dot.svg", "/assets/dot1.svg"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <p>Device: iphone 15</p>
      </div>
      <div className={styles.timeline}>
        {timelineSteps?.map((item, id) => {
          const isLast = id === timelineSteps.length - 1;
          return (
            <div key={id} className={styles.times}>
              <div>
                <Image
                  src={item.state === "completed" ? item.img[0] : item.img[1]}
                  alt="dot"
                  width={16}
                  height={16}
                  priority
                  className={styles.dot}
                />
              </div>
              <div
                className={`${
                  item.state === "completed"
                    ? styles.times_child
                    : styles.times_child2
                } ${isLast ? styles.no_border : ""}`}
              >
                <span>{item.status}</span>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
