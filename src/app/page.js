import ImgUploader from "@/components/imgUploader/ImgUploader";
import PdfUploader from "@/components/pdfUploader/PdfUploader";
import QrCodeGenerator from "@/components/qrCodeGenerator/QrCodeGenerator";

export default function Home() {
  {
    /* import component to test in browser */
  }
  return (
    <main>
      {/* added a new device component */}
      {/* <QrCodeGenerator /> */}
      {/* this is the pdf component */}
      <ImgUploader />
      {/* this is an example */}
      {/* <Invoice /> */}
    </main>
  );
}
