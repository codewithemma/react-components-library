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
      <PdfUploader />
      {/* this is an example */}
      {/* <Invoice /> */}
    </main>
  );
}
