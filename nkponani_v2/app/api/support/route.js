const nodemailer = require("nodemailer");

export const POST = async (request) => {
    
    
    const { email, subject, message } = await request.json();
  
    try {

        const transporter = nodemailer.createTransport({
            port: 25,
            host: "yt.nkna.com",
            auth: {
            user: "aham@nobus.io",
            pass: "dbfkwbko",
            },
            secure: false, // tls requires this set to false
            tls: true,
        });
    
        const mailData = {
            from: "aham@nobus.io",
            to: "support@nobus.io",
            subject: `Message from ${email}: ${subject}`,
            text: message,
            html: `<div><p>${message}</p> </div><p>Sent from:
            ${email}</p> `,
        };
       
        transporter.sendMail(mailData, (err, info) => {
        
            if (err) {
                
                return new Response(JSON.stringify({
                error: `Message not sent: ${err.address}`,
                }), { status: 500 })
            } else {
                return new Response(JSON.stringify({
                success: `Message delivered to ${info.accepted}`,
                }), { status: 201 })
            }
            });

        return new Response(JSON.stringify(mailData), { status: 201 })
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
 
    
    
 
  
}