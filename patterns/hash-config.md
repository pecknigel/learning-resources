---
layout: default
title: Hash Config
permalink: /patterns/hash-config
---

{% include_relative _back.md %}

{% include page-status.html statusLevel='working-draft' %}

# Hash Config

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

```javascript
const options = {
  exStringKey: ‘Example String’,
  exSwitchKey: true
};

function getOption(key) {
  if(options[key]) return options[key];
  throw new Error(`Unrecognised option: ${key}`);
}

// Or just use them directly

function doSomething() {
  if (options.exSwitchKey) {
    // Go left
  } else {
    // Go right
  }
  return `Processed ${options.exStringKey}`;
}
```

**TS code needs checking and improving, just a rough start.**

```typescript

type Options = {
  exDataKey: string;
  exSwitchKey: boolean;
};

class Processing {
  private options: Options = {
    exDataKey: 'Example String',
    exSwitchKey: true
  };
  
  private static getOption(key: any): any {
    if(this.options[key]) {
      return this.options[key];
    }
    throw new Error(`Unrecognised option: ${key}`);
  }
} 
```

## Example Implementation

## References

- [Hash table](https://en.m.wikipedia.org/wiki/Hash_table)

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

## Associated Patterns

- [Declarative Case Sets](/patterns/declarative-case-sets)
- Declarative Set Processing
- Config Based Processing

Planned entries are listed but not linked.
