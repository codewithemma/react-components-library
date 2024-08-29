"use client";
import { useEffect, useState } from "react";
import FileBase from "react-file-base64";

// you'll need to install cloudinary and react file base 64 for this to work

const ImgUploader = () => {
  const [file, setFile] = useState("");
  const [imgFiles, setImgFiles] = useState([]);

  useEffect(() => {
    fetchImgFiles();
  }, []);

  const fetchImgFiles = async () => {
    try {
      const res = await fetch("/api/imgUpload");
      const imgUrl = await res.json();
      setImgFiles(imgUrl);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const handleFileDone = (file) => {
    setFile({ img: file.base64 });
  };

  const handleUpload = async () => {
    const res = await fetch("/api/imgUpload", {
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

  const downloadImg = async (url) => {
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
      <h3>Uploaded IMGs</h3>
      <ul>
        {imgFiles.map((img) => (
          <li key={img._id}>
            <a href={img.url} target="_blank" rel="noopener noreferrer">
              {img.url}
            </a>
            <button onClick={() => downloadImg(img.url)}>Download PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImgUploader;
