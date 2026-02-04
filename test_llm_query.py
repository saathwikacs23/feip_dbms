#!/usr/bin/env python
"""Test the problematic LLM query"""

import sys
sys.path.insert(0, 'backend')

from backend.llm_query import LLMQueryConverter

converter = LLMQueryConverter()

if converter.is_available():
    print("✓ LLM is available\n")
    
    # Test the problematic query
    query = "Which regions are most at environmental risk? (high temp + endangered species + high pollution)"
    
    print(f"Testing query: {query}\n")
    result = converter.convert(query)
    
    print(f"Method: {result['method']}")
    print(f"Interpretation: {result['interpretation']}")
    print(f"Confidence: {result['confidence']}")
    if result.get('validation_issues'):
        print(f"Validation Issues Fixed: {result['validation_issues']}")
    print(f"\nGenerated SQL:")
    print(result['sql'])
else:
    print("✗ LLM not available")
