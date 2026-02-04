#!/usr/bin/env python
"""Comprehensive test for LLM query generation"""

import sys
sys.path.insert(0, 'backend')

from backend.llm_query import LLMQueryConverter

converter = LLMQueryConverter()

test_queries = [
    "Which regions are most at environmental risk? (high temp + endangered species + high pollution)",
    "Show me all regions with their climate data",
    "What is the average CO2 level by region?",
    "Find regions with high biodiversity and their temperature",
    "Which regions have the most endangered species?"
]

if converter.is_available():
    print("✓ LLM is available\n")
    print("=" * 80)
    
    for i, query in enumerate(test_queries, 1):
        print(f"\n[TEST {i}] {query}")
        print("-" * 80)
        
        result = converter.convert(query)
        
        print(f"Confidence: {result['confidence']}")
        if result.get('validation_issues'):
            print(f"⚠️  Validation Issues Fixed: {result['validation_issues']}")
        print(f"\nSQL Query:")
        print(result['sql'][:150] + "..." if len(result['sql']) > 150 else result['sql'])
        
else:
    print("✗ LLM not available")
