const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';


app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, telefono, design, development, message, presupuesto_250_500, presupuesto_500_1000, presupuesto_1000_3000, presupuesto_3000_10000 } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "webexestudio@gmail.com", // Reemplaza con tu correo
      pass: "pnff kfyo zsve aeqf",  // Reemplaza con tu contraseña
    },
  });

  const mailOptions = {
    from: email, // Reemplaza con tu correo
    to: 'jamdev0101@gmail.com',
    subject: `Tienes un nuevo mensaje de: ${name}`,
    text: `
        Nombre: ${name}\n
        Email: ${email}\n
        Teléfono: ${telefono}\n
        Mensaje: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  });