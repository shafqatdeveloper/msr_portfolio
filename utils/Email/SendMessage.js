import nodemailer from "nodemailer";

export const sendMessage = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: options.email,
    to: "mshafqat.developer@gmail.com",
    subject: "MSR Portfolio",
    text: `
    My Name is : ${options.name}\n
    My Email is : ${options.email}\n
    My Query is : ${options.message}
    `,
  };
  await transporter.sendMail(mailOptions);
};
