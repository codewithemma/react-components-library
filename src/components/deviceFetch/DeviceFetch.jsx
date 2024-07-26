import { url } from "@/utils/api";
import Form from "./form/Form";
import { connectDB } from "@/utils/connect";
import phoneModel from "@/models/phone";

const DeviceFetch = async () => {
  await connectDB();
  
  const phone = await phoneModel.find({});
  return <Form deviceDetails={JSON.parse(JSON.stringify(phone[0]))} />;
};

export default DeviceFetch;
