export default async function handler(req, res) {
  if (req.method === "POST") {
    // Simulate extracting data from the request body
    const { name, email, message } = req.body;

    // Log the form data to the console (for testing purposes)
    console.log("Form Data Received:", { name, email, message });

    // Simulate a successful response
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } else {
    // If the method is not POST, return a 405 Method Not Allowed error
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
