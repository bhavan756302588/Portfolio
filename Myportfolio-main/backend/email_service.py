import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

logger = logging.getLogger(__name__)

def send_contact_email(name: str, email: str, message: str) -> bool:
    """
    Send contact form email using Gmail SMTP
    """
    try:
        # Get email configuration from environment
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        email_from = os.environ.get('EMAIL_FROM')
        email_to = os.environ.get('EMAIL_TO')

        # Validate configuration
        if not all([smtp_user, smtp_password, email_from, email_to]):
            logger.error("Email configuration is incomplete")
            return False

        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Portfolio Contact: {name}'
        msg['From'] = email_from
        msg['To'] = email_to
        msg['Reply-To'] = email

        # Create email body
        text_content = f"""
New Contact Form Submission

Name: {name}
Email: {email}

Message:
{message}

---
Sent from Portfolio Contact Form
        """

        # Prepare message with line breaks for HTML
        message_html = message.replace('\n', '<br>')
        
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 10px 0;">
                            <strong style="color: #2563eb;">Name:</strong> {name}
                        </p>
                        <p style="margin: 10px 0;">
                            <strong style="color: #2563eb;">Email:</strong> 
                            <a href="mailto:{email}" style="color: #2563eb; text-decoration: none;">{email}</a>
                        </p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <strong style="color: #2563eb;">Message:</strong>
                        <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px;">
                            {message_html}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #64748b; font-size: 12px;">
                        Sent from Portfolio Contact Form
                    </div>
                </div>
            </body>
        </html>
        """

        # Attach both plain text and HTML versions
        part1 = MIMEText(text_content, 'plain')
        part2 = MIMEText(html_content, 'html')
        msg.attach(part1)
        msg.attach(part2)

        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        logger.info(f"Email sent successfully to {email_to} from {email}")
        return True

    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False
