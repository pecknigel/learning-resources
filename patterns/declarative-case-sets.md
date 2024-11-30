---
layout: default
title: Declarative Case Sets
permalink: /patterns/declarative-case-sets
heading: Declarative Case Sets
---

{% include_relative _back.md %}

**This is being published as it is written. November/December 2024.**

# Declarative Case Sets

This is a pattern to provide config information for data processing as keyed sets.

A single processing interface is provided to handle multiple distinct cases around the same options.

This pattern can be used in cases where there is repeated code around the same theme, in order to reduce it to a single interface.

It makes case processing declarative which simplifies management and makes it less error-prone.

It decouples processing configuration from logic.

## Tags

These are used for classification of the software pattern library as it grows.

- Declarative Config
- Option Sets
- Data Structures
- DRY
- Decision Making

## Technical Specification

- Declare sets for processing cases.
- Abstract a processing interface keyed off the sets.
- Use a hash table to facilitate set lookup.

## Rationale & Anti-Patterns

Using a hash table there is no conditional, which is found in anti-patterns to this.

Decouple processing logic from associated cases.

Leverage declarative statements for updates and maintenance.

## Example Code

```typescript
type CaseKey = 'example' | 'example2' | '...';

type CaseSet<CaseOptions> = {
  [CaseKey]: CaseOptions
};

type CaseOptions = {
  exDataKey: string;
  exSwitchKey: boolean;
};

class CaseProcessing {
  private static caseSets: CaseSet<CaseOptions> = {
    example: {
      exDataKey: 'Example String',
      exSwitchKey: true
    },
    example2: {
      exDataKey: 'Another Example String',
      exSwitchKey: false
    }
  };
  
  public static processCase(key: CaseKey, data: any): any {
    const caseOptions = this.getCaseOptions(key);
    // TODO: Process data based on caseOptions
  }
  
  private static getCaseOptions(key: CaseKey): CaseData {
    if(this.caseSets[key]) {
      return this.caseSets[key];
    }
    throw new Error(`Unrecognised CaseKey: ${key}`);
  }
} 
```

## Example Implementation

## References

- [Hash table](https://en.m.wikipedia.org/wiki/Hash_table)