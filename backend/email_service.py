# ========================================
# Email Service Module
# Handles sending emails via SMTP
# ========================================

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import (
    SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD,
    SMTP_FROM_EMAIL, SMTP_USE_TLS
)


def send_researcher_credentials(email, username, password):
    """
    Send researcher credentials to their email upon registration.
    
    Args:
        email (str): Recipient email address
        username (str): Researcher username
        password (str): Researcher password (plain text)
        
    Returns:
        dict: Success status and message
    """
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = 'Welcome to Environmental DBMS - Your Researcher Account'
        msg['From'] = SMTP_FROM_EMAIL
        msg['To'] = email
        
        # Create email body
        text_content = f"""
Welcome to the Federated Environmental Intelligence Platform!

Your researcher account has been successfully created.

Login Credentials:
------------------
Username: {username}
Password: {password}

Enjoy exploring via the federated platform!
For changing your credentials or for contact support, please reach out to the admin.

Important: Please keep your credentials secure.

Best regards,
FEIP Team
"""
        
        html_content = f"""
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }}
        .header {{
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }}
        .content {{
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
        }}
        .credentials {{
            background-color: #fff;
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #4CAF50;
        }}
        .credentials strong {{
            display: inline-block;
            width: 100px;
        }}
        .footer {{
            text-align: center;
            padding: 15px;
            color: #777;
            font-size: 12px;
        }}
        .warning {{
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            padding: 10px;
            margin-top: 15px;
            border-radius: 3px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Welcome to Environmental DBMS!</h2>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>Your researcher account has been successfully created. You can now access the Environmental Data Management System and start querying data from multiple databases.</p>
            
            <div class="credentials">
                <h3>Your Login Credentials:</h3>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
            
            <div class="warning">
                <strong>Important:</strong> Please keep your credentials secure.
            </div>
            
            <p>You can access the system at: <a href="http://localhost:5000">http://localhost:5000</a></p>
        </div>
        <div class="footer">
            <p>Environmental Data Management System<br>
            This is an automated message. Please do not reply to this email.</p>
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
        if SMTP_USE_TLS:
            # Use TLS (most common - Gmail, Outlook, etc.)
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
        else:
            # Use SSL
            server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(SMTP_FROM_EMAIL, email, msg.as_string())
        server.quit()
        
        return {
            'success': True,
            'message': f'Credentials sent to {email}'
        }
        
    except smtplib.SMTPAuthenticationError:
        return {
            'success': False,
            'message': 'Email authentication failed. Please check SMTP credentials.'
        }
    except smtplib.SMTPException as e:
        return {
            'success': False,
            'message': f'Failed to send email: {str(e)}'
        }
    except Exception as e:
        return {
            'success': False,
            'message': f'Email service error: {str(e)}'
        }
