import Form from "./form/Form";

const getDeviceData = async () => {
  try {
    const resData = await fetch(`http://localhost:3000/api/devices`);
    const deviceData = await resData.json();
    return deviceData;
  } catch (error) {
    console.log(error);
  }
};

const DeviceFetch = async () => {
  const data = await getDeviceData();
  return <Form deviceDetails={data} />;
};

export default DeviceFetch;
