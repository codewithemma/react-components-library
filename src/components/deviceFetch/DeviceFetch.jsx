import Form from "./form/Form";

const getDeviceData = async (category) => {
  try {
    const resData = await fetch(
      `https://api.techspecs.io/v4/all/brands?category=${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    const deviceData = await resData.json();
    return deviceData;
  } catch (error) {
    console.log(error);
  }
};

const DeviceFetch = async () => {
  const data = await getDeviceData("Laptops");
  // console.log(data);
  return <Form deviceDetails={data} />;
};

export default DeviceFetch;
