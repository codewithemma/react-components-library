"use client";
// To use this component, you'll need to run the following command:
// npm install html2canvas jspdf
import styles from "./Invoice.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const Invoice = () => {
  const pdfRef = useRef();
  const downloadInvoice = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Mobosure_invoice.pdf");
    });
  };
  const invoice_details = [
    {
      billed_to: {
        name: "Fabari Agbora",
        address: "2, Ade Idowu Strt, Mafoluku, Oshodi, Port Harcourt",
      },
      invoice: {
        id: "#640999",
        date: "Mon 22nd March, 2024",
        due_date: "Mon 27th March, 2024",
      },
    },
  ];
  const invoice_data1 = [
    {
      subTotal: 1000,
      discount: 1000,
      grandTotal: 3000,
    },
  ];
  const invoice_data = [
    {
      quantity: 1,
      description: "Replace Screen",
      unitPrice: 4300,
      amount: 4300,
    },
    {
      quantity: 1,
      description: "Replace Battery",
      unitPrice: 4300,
      amount: 4300,
    },
    { quantity: 1, description: "Repair Cost", unitPrice: 4300, amount: 4300 },
  ];

  return (
    <>
      {" "}
      <div className={styles.container} ref={pdfRef}>
        <div className={styles.invoice}>
          <div className={styles.invoice_company}>
            <p>INVOICE</p>
            <p>Mobosure repair service</p>
          </div>
          <div className={styles.invoice_brand}>
            <p>codewithemma</p>
          </div>
        </div>
        <div className={styles.invoice_details}>
          <p className={styles.bill}>Billed To:</p>
          {invoice_details.map((user_info, id) => {
            return (
              <div key={id} className={styles.invoice_detail}>
                <div className={styles.invoice_userinfo}>
                  <p>{user_info.billed_to.name}</p>
                  <p>{user_info.billed_to.address}</p>
                </div>
                <div className={styles.invoice_phonedetails}>
                  <p>
                    Invoice: <span>{user_info.invoice.id}</span>
                  </p>
                  <p>
                    Date: <span> {user_info.invoice.date}</span>
                  </p>
                  <p>
                    Due Date: <span>{user_info.invoice.due_date}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.invoice_table}>
          <div className={styles.table_header}>
            <p>QUANTITY</p>
            <p>DESCRIPTION</p>
            <p>UNIT PRICE</p>
            <p>AMOUNT</p>
          </div>
          <div>
            {invoice_data.map((data, id) => {
              return (
                <>
                  <div className={styles.table} key={id}>
                    <p>{data.quantity}</p>
                    <p>{data.description}</p>
                    <p>&#8358; {data.unitPrice}</p>
                    <p>&#8358;{data.amount}</p>
                  </div>
                </>
              );
            })}
            {invoice_data1.map((data, id) => (
              <div key={id} className={styles.total}>
                <div className={styles.total_child}>
                  <div className={styles.inn}>
                    <div className={styles.sub}>
                      <p>Subtotal</p>
                      <p>Discount</p>
                    </div>
                    <div className={styles.amt}>
                      <p>&#8358; {data.subTotal}</p>
                      <p>&#8358; {data.discount}</p>
                    </div>
                  </div>
                  <div className={styles.total_child}>
                    <div className={styles.inn1}>
                      <div className={styles.sub}>
                        <p>Grand Total</p>
                      </div>
                      <div className={styles.amt}>
                        <p>&#8358;{data.grandTotal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button onClick={downloadInvoice}>download</button>
      </div>
    </>
  );
};

export default Invoice;
