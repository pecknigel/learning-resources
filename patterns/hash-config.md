---
layout: default
title: Hash Config
permalink: /patterns/hash-config
---

{% include_relative _back.md %}

{% include page-status.html statusLevel='rough-draft' %}

# Hash Config

**This is partially started after copying the template. Check back soon. Dec 2, 2024.**

This is a pattern to declaratively recording config information and having it available by key with fast retrieval.

Other patterns build on this.

It makes case processing declarative which simplifies management and makes it less error-prone.

It decouples configuration from logic.

## Technical Specification

- Declare keys for each config option.
- Use a hash table to facilitate retrieval.

## Code Signals

Config information is distributed throughout the code.

## Rationale & Anti-Patterns

Leverage declarative statements for updates and maintenance.

## When to Reach for It

### Warnings

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

This highly complex example from Angular is littered with this pattern throughout the processing that is being done of command line compilation and configuration options.    
[angular/packages/compiler-cli/src/perform_compile.ts at 0675a243f4c397acdc0b0f0251c5ef09100e05d2 · angular/angular · GitHub](https://github.com/angular/angular/blob/0675a243f4c397acdc0b0f0251c5ef09100e05d2/packages/compiler-cli/src/perform_compile.ts)

Links are to specific points in time in case code is changed later. Please share other examples where you find them so they can be added here.

## Tags

These are used for classification of the software pattern library as it grows.

- Declarative Config
- Option Sets
- Data Structures
- DRY
- Decision Making

## Comments

Another data structure could be used for config lookup equally effectively. There are many variations on this kind of approach. Other pattern entries are being worked on to demonstrate that.

The basic idea is to separate processing details from processing logic where the process needs to be done in different yet similar ways, so it can be abstracted and result in less code that shows the logic involved rather than details of the cases.

## Associated Patterns

- Hash Config
- Declarative Set Processing
- Config Based Processing

Planned entries are listed but not linked.
