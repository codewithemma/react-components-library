import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { brand } = params;
  console.log("brand", brand);
  try {
    const where = encodeURIComponent(
      JSON.stringify({
        Brand: brand,
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Cellphonedataset_Dataset_Cell_Phones_Model_Brand?limit=105&order=Model&keys=Brand,Model&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "ryTJhMwC9TaHQMnvqY6KeJuqFiHmfWQhtWeQ2Auv",
          "X-Parse-REST-API-Key": "mzW6G7VF57et4K7MZf3PlhSG63cgSFuyU5AyeETo",
        },
      }
    );
    const data = await response.json();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(
      { message: "Something went wrong" },
      { status: 200 }
    );
  }
};
