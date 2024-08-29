import Img from "@/models/image";
import { cloudinary } from "@/utils/cloudinary";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const images = await Img.find({});
    return new NextResponse(JSON.stringify(images), {
      status: 500,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req) => {
  try {
    const { img } = await req.json();

    if (!img) {
      return new NextResponse(JSON.stringify({ message: "No file provided" }), {
        status: 400,
      });
    }

    await connectDB();

    const uploadResponse = await cloudinary.uploader.upload(img, {
      upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
    });

    const imgUrl = uploadResponse.secure_url;
    console.log("img url:", imgUrl);

    const newImg = new Img({
      url: imgUrl,
    });

    await newImg.save();

    return new NextResponse(
      JSON.stringify({ message: "Uploaded successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};
