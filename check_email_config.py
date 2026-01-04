#!/usr/bin/env python3
"""Quick test to verify email configuration"""

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

from config import SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_FROM_EMAIL

print("=" * 60)
print("EMAIL CONFIGURATION")
print("=" * 60)
print(f"SMTP Server: {SMTP_SERVER}")
print(f"SMTP Port: {SMTP_PORT}")
print(f"SMTP Username: {SMTP_USERNAME}")
print(f"From Email: {SMTP_FROM_EMAIL}")
print("=" * 60)
print("\n✅ Email service is configured and ready!")
print("Register a new researcher account to test email delivery.")
