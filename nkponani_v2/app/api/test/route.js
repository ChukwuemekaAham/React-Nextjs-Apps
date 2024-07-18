export const POST = async (request) => {

    const { email, subject, message } = await request.json();

    try {
        
        const mailData = {
            from: "yhd@nobus.io",
            to: "nnnd@nobus.io",
            subject: `Message from ${email}: ${subject}`,
            text: message,
            html: `<div><p>${message}</p> </div><p>Sent from:
            ${email}</p> `,
        };
        return new Response(JSON.stringify(mailData), { status: 201 })
    } catch (error) {
        return new Response("Failed", { status: 500 });
    }
 
  
}