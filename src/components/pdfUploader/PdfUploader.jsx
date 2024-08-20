"use client";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";

// you'll need to install cloudinary and react file base 64 for this to work

const PdfUploader = () => {
  const [file, setFile] = useState("");
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetchPdfFiles();
  }, []);

  const fetchPdfFiles = async () => {
    try {
      const res = await fetch("/api/pdfUpload");
      const pdfUrl = await res.json();
      setPdfFiles(pdfUrl);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const handleFileDone = (file) => {
    setFile({ pdf: file.base64 });
  };

  const handleUpload = async () => {
    const res = await fetch("/api/pdfUpload", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(file),
    });
    const resData = await res.json();

    if (!res.ok) {
      alert(resData.message);
    }
    alert(resData.message);
  };

  const downloadPdf = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "file.pdf"); // Specify the desired filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to download the file:", error);
    }
  };

  return (
    <div>
      <FileBase
        type="file"
        multiple={false}
        onDone={handleFileDone}
        value={file}
      />
      <button onClick={handleUpload}>upload</button>
      <h3>Uploaded PDFs</h3>
      <ul>
        {pdfFiles.map((pdf) => (
          <li key={pdf._id}>
            <a href={pdf.url} target="_blank" rel="noopener noreferrer">
              {pdf.url}
            </a>
            <button onClick={() => downloadPdf(pdf.url)}>Download PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfUploader;
