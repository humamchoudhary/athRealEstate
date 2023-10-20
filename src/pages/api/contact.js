import emailjs from "@emailjs/browser";
var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const uemail = body.email;
  const fileno = body.fileno;
  console.log(uemail, fileno);
  emailjs.send(
    "service_ab115xi",
    "template_oa9z9kc",
    {
      from_email: uemail,
      fileno: fileno,
    },
    "3m5zvAEoGBZRSR7sJ"
  );
  res.status(200).json({ name: "John Doe" });
}
