import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // For now, just log the message (you can add email service later)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Add email service integration here
    // Examples: SendGrid, Resend, Nodemailer, etc.

    res.status(200).json({ 
      message: 'Message sent successfully',
      success: true 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to send message',
      success: false 
    });
  }
}