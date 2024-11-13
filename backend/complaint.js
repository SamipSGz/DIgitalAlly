const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 1000;

app.use(cors());
app.use(express.json());

require('dotenv').config();

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another SMTP provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // or app password if using Gmail
    }
});

// Endpoint to handle complaint letter generation and email sending
app.post('/send-complaint', (req) => {
    const {complaint_letter} = req.body;

    // Email options
    const mailOptions = {
        from: 'samipgh444@gmail.com',
        to: 'samipcodes@gmail.com, bashyalrubika@gmail.com',
        subject: 'Complaint Letter',
        text: complaint_letter
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
