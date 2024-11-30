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

A single processing interface is able to handle multiple distinct cases around the same options.

This pattern can be used in cases where there is repeated code around the same theme, in order to reduce it to a single interface.

It makes case processing declarative which simplifies management and makes it less error-prone.

It decouples configuration from logic for a defined process.

## Technical Specification

- Declare sets for processing cases.
- Abstract a processing interface keyed off the sets.
- Use a hash table to facilitate set lookup.

## Rationale & Anti-Patterns

Using a hash table there is no conditional, which is found in anti-patterns to this.

Decouple processing logic from associated cases.

Leverage declarative statements for updates and maintenance.

## When to Reach for It

### Warnings

Don’t use this if the cases are not aligned and highly cohesive. Unless there is significant crossover another pattern will likely be more appropriate. A signal for this is where the processing code becomes long and case-based. The processing logic should be tight with variance handled by the case configuration which can then be plugged in to the processing logic without a high level of complexity.

## Example Code

**Needs checking and likely wrong in places.**

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

## Open Source Examples

Examples found in established open source projects.

From Next.js. See the `packages` object and the following for loop. Lines 29 to 31. It’s a partial implementation of the pattern described here.    
[next.js/scripts/unpack-next.cjs at c90e03d9d35db87d286d13b22e8268f42a5259eb · vercel/next.js · GitHub](https://github.com/vercel/next.js/blob/c90e03d9d35db87d286d13b22e8268f42a5259eb/scripts/unpack-next.cjs)

Please share them where you find them so they can be linked here.

## Tags

These are used for classification of the software pattern library as it grows.

- Declarative Config
- Option Sets
- Data Structures
- DRY
- Decision Making

## Comments

Another data structure could be used for config lookup equally effectively. 

## Associated Patterns

- Hash Config (needs writing)
- Declarative Set Processing (needs writing)
