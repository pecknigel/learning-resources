---
layout: default
title: Declarative Case Sets
permalink: /patterns/declarative-case-sets
heading: Declarative Case Sets
---

**This is being published as it is written.**

# Declarative Case Sets

Tags: Processing, Option Sets

Declare sets for processing cases. Abstract a processing interface keyed off the sets.

Use a [hash table](https://en.m.wikipedia.org/wiki/Hash_table) to facilitate set lookup.

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
