// import { connectDB } from "@/utils/connect";
// import { phones } from "@/utils/dummyJson";
// import PhoneModel from "@/models/phone";
// import { NextResponse } from "next/server";
// export const GET = async (req) => {
//   await connectDB();
//   try {
//     await PhoneModel.deleteMany({});
//     const phoneData = new PhoneModel();
//     phoneData.phones = phones;
//     await phoneData.save();
//     return new NextResponse(JSON.stringify(phoneData), { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new NextResponse(JSON.stringify(error.message), { status: 500 });
//   }
// };
import { connectDB } from "@/utils/connect";
import { phones } from "@/utils/dummyJson";
import PhoneModel from "@/models/phone";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();

  try {
    const batchSize = 1000; // Define your batch size
    let deletedCount;

    // Batch deletion process
    do {
      const ids = await PhoneModel.find({}, { _id: 1 }).limit(batchSize).lean();
      const idList = ids.map((doc) => doc._id);

      if (idList.length === 0) break;

      const result = await PhoneModel.deleteMany({ _id: { $in: idList } });
      deletedCount = result.deletedCount;
      console.log(`Deleted ${deletedCount} documents`);
    } while (deletedCount === batchSize); // Continue deleting while the batch size is met

    // Once deletions are done, proceed with insertion
    const phoneData = new PhoneModel();
    phoneData.phones = phones;
    await phoneData.save();

    return new NextResponse(JSON.stringify(phoneData), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
};
