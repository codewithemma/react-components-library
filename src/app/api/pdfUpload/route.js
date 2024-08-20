import Pdf from "@/models/pdf";
import { cloudinary } from "@/utils/cloudinary";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const pdfs = await Pdf.find({});
    return new NextResponse(JSON.stringify(pdfs), {
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
    const { pdf } = await req.json();

    if (!pdf) {
      return new NextResponse(JSON.stringify({ message: "No file provided" }), {
        status: 500,
      });
    }

    await connectDB();

    const uploadResponse = await cloudinary.uploader.upload(pdf, {
      upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
      resource_type: "raw",
    });

    const pdfUrl = uploadResponse.secure_url;
    console.log("pdf url:", pdfUrl);

    const newPdf = new Pdf({
      url: pdfUrl,
    });

    await newPdf.save();

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
