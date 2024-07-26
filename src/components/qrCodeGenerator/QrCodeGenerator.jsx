import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  // this is a simple component that generates a QR code, just input value

  const value = "https://www.github.com/codewithemma";
  return (
    <div
      style={{
        height: "auto",
        margin: "50px auto",
        maxWidth: "500px",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCodeGenerator;
