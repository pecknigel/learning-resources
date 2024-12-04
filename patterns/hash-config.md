---
layout: default
title: Hash Config
permalink: /patterns/hash-config
---

{% include_relative _back.md %}

{% include page-status.html statusLevel='working-draft' %}

You’re browsing our [Software Pattern Library](/patterns) collection. It features useful patterns for writing software, to help with learning web development and software engineering.

# Hash Config

This is a pattern for declaratively recording config information and having it available by key with fast retrieval.

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

-

### Warnings

-

## Example Code

```javascript
// Function-Based JavaScript Example

const options = {
  exStringKey: 'Example String',
  exSwitchKey: true
};

// Provide a getter function to access the options
function getOption(key) {
  if(options[key]) return options[key];
  throw new Error(`Unrecognised option: ${key}`);
}

// Or just use them directly...
function doSomething() {
  if (options.exSwitchKey) {
    // Go left
  } else {
    // Go right
  }
  return `Processed ${options.exStringKey}`;
}
```

**TS code needs checking and improving, just a rough start. Not using key properly for types.**

```typescript
// Class-Based TypeScript Example

type Options = {
  exDataKey: string;
  exSwitchKey: boolean;
};

class Processing {
  private options: Options = {
    exDataKey: 'Example String',
    exSwitchKey: true
  };

  // Provide a get method to access the options
  private static getOption(key: any): any {
    if(this.options[key]) return this.options[key];
    throw new Error(`Unrecognised option: ${key}`);
  }

  // Or just use them directly...
  private doSomething() {
    if (this.options.exSwitchKey) {
      // Go left
    } else {
      // Go right
    }
    return `Processed ${this.options.exDataKey}`;
  }
} 
```

## Example Implementation

-

## Attribution

If you make use of this pattern, please consider adding an attribution to your code or elsewhere.

Here are some suggestions...

```javascript
// https://docs.prescriptionfree.academy/patterns/hash-config
```

```javascript
// Based on the "Hash Config" Pattern:
// https://docs.prescriptionfree.academy/patterns/hash-config
```

```javascript
/*
 * ########################################################
 *   An implementation of the "Hash Config" pattern from
 * the Prescription Free Academy's Software Pattern Library
 * ########################################################
   https://docs.prescriptionfree.academy/patterns/hash-config
 * ########################################################
 */
```

## Open Source Examples

Examples found in established open source projects.

-

Links are to specific points in time in case code is changed later. Please share other examples where you find them so they can be added here.

## Tags

These are used for classification of the software pattern library as it grows.

- Declarative Config
- Data Structures
- DRY
- Decision Making

## Comments

Another data structure could be used for option lookup equally effectively.

This enables centralising options so they are decoupled from the logic and can be readily changed and controlled from a centralised location.

## References

- [Hash table](https://en.m.wikipedia.org/wiki/Hash_table)

## Associated Patterns

- [Declarative Case Sets](/patterns/declarative-case-sets)
- Declarative Set Processing
- Config Based Processing

Planned entries are listed but not linked.
