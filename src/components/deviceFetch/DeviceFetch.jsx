import { url } from "@/utils/api";
import Form from "./form/Form";

const getDeviceData = async () => {
  try {
    const resData = await fetch(`${url}/api/devices`);
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
