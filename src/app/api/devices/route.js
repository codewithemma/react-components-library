import { connectDB } from "@/utils/connect";
import { phones } from "@/utils/dummyJson";
import PhoneModel from "@/models/phone";
import { NextResponse } from "next/server";
export const GET = async (req) => {
  await connectDB();
  try {
    await PhoneModel.deleteMany({});
    const phoneData = new PhoneModel();
    phoneData.phones = phones;
    await phoneData.save();
    return new NextResponse(JSON.stringify(phoneData), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
};
