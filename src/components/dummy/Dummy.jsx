import Image from "next/image";
import styles from "./Dummy.module.css";

const Dummy = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "20px" }}>
      <div
        style={{
          width: "100%",
          height: "500px",
          position: "relative",
          backgroundImage: `url(/assets/wallhaven8.png)`,
          // backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.753)",
            height: "150px",
            bottom: "0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            veniam, delectus vitae quisquam, hic dolores repellat incidunt non
            neque, dolore in? Sit, magnam! Obcaecati fugit assumenda veniam
            tempore voluptatem doloribus?
          </p>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          asperiores maxime minima?
        </p>
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Image
            src="/assets/wallhaven8.png"
            fill
            alt="edd"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw 700px"
          />
        </div>
      </div>
    </div>
  );
};

export default Dummy;
