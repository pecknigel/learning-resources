---
layout: default
title: Declarative Case Sets
permalink: /patterns/declarative-case-sets
---

{% include_relative _back.md %}

You’re reading our [Software Patterns](/patterns) collection. It features useful patterns for learning to write software.

{% include page-status.html statusLevel='working-draft' %}

# Declarative Case Sets

This is a pattern to provide options for processing as keyed sets.

A single processing interface is able to handle multiple distinct cases around the same options.

This pattern can be used in cases where there is repeated code around the same theme, in order to reduce it to a single interface.

It makes case processing declarative which simplifies management and makes it less error-prone.

It decouples configuration from logic.

## Technical Specification

- Declare sets for processing cases.
- Abstract a processing interface keyed off the sets.
- Use a hash table to facilitate set lookup.

## Code Signals 

-

## Rationale & Anti-Patterns

Using a hash table there is no conditional, which is found in anti-patterns to this.

Decouple processing logic from associated cases.

Leverage declarative statements for updates and maintenance.

## When to Reach for It

-

### Warnings

Don’t use this if the cases are not aligned and highly cohesive. Unless there is significant crossover another pattern will likely be more appropriate. A signal for this is where the processing code becomes long and case-based. The processing logic should be tight with variance handled by the case configuration which can then be plugged in to the processing logic without a high level of complexity.

## Example Code

```javascript
// Function-Based JavaScript Example

```

**TS code needs checking and improving, just a rough start.**

```typescript
// Class-Based TypeScript Example

type CaseKey = 'example' | 'example2' | '...';

type CaseOptions = {
  exDataKey: string;
  exSwitchKey: boolean;
};

type CaseSet<CaseOptions> = {
  [CaseKey]: CaseOptions
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

CaseProcessing.processCase('example', data);
CaseProcessing.processCase(‘example2’, data);
```

## Example Implementation

-

## Attribution

If you make use of this pattern, please consider adding an attribution to your code or elsewhere.

Here are some suggestions...

```javascript
// https://library.peckn.net/patterns/declarative-case-sets
```

```javascript
// Based on the "Declarative Case Sets" Pattern:
// https://library.peckn.net/patterns/declarative-case-sets
```

```javascript
/*
 * ###############################################################
 *   An implementation of the "Declarative Options" pattern from
 *                  the Software Pattern Library
 * ###############################################################
   https://library.peckn.net/patterns/declarative-case-sets
 * ###############################################################
 */
```

## Open Source Examples

Examples found in established open source projects.

From Next.js. See the `packages` object and the following for loop. Lines 19 to 31. It’s a partial implementation of the pattern described here.    
[GitHub vercel/next.js at 5259eb](https://github.com/vercel/next.js/blob/c90e03d9d35db87d286d13b22e8268f42a5259eb/scripts/unpack-next.cjs)

This highly complex example from Angular is littered with this pattern throughout the processing that is being done of command line compilation and configuration options.    
[GitHub angular/angular at 0e05d2](https://github.com/angular/angular/blob/0675a243f4c397acdc0b0f0251c5ef09100e05d2/packages/compiler-cli/src/perform_compile.ts)

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

## References

- [Hash table](https://en.m.wikipedia.org/wiki/Hash_table)

## Associated Patterns

- [Declarative Options](/pattern/declarative-options)
- [Hash Config](/patterns/hash-config)

Planned entries are listed but not linked.

{% include_relative _back.md %}
