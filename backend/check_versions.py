import os
import sys
try:
    import groq
    import httpx
    print(f"Groq version: {groq.__version__}")
    print(f"HTTPX version: {httpx.__version__}")
    
    from groq import Groq
    
    # Try to instantiate
    client = Groq(api_key="dummy")
    print("Groq instantiation successful")
    
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
