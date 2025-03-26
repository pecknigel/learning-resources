---
layout: default
title: Declarative Options
permalink: /patterns/declarative-options
---

{% include_relative _back.md %}

You’re reading our [Software Patterns](/patterns) collection. It features useful patterns for learning to write software.

{% include page-status.html statusLevel='working-draft' %}

# Declarative Sets

This is a pattern to provide a single processing interface able to complete processing based on a set of options.

This pattern can be used in cases where there is repeated code around the same theme, in order to reduce it to a single interface.

It makes case processing configurable which simplifies management and makes it less error-prone.

It decouples configuration from logic.

Other patterns build on this pattern.

## Technical Specification

- Define options for processing.
- Abstract a processing interface based on the options.

## Code Signals 

-

## Rationale & Anti-Patterns

Decouple processing logic from options for that process.

Leverage a clearly defined interface for updates and maintenance.

## When to Reach for It

-

### Warnings

-

## Example Code

```javascript
// Function-Based JavaScript Example

```

**TS code needs checking and improving, just a rough start.**

```typescript
// Class-Based TypeScript Example

type ProcessingOptions = {
  exDataKey: string;
  exSwitchKey: boolean;
};

class Processing {
  public static process(options: ProcessingOptions, data: any): any {
    // TODO: Process data based on options
  }
}

Processing.process({
  exDataKey: ‘Example String’,
  exSwitchKey: true
}, data);
```

## Example Implementation

-

## Attribution

If you make use of this pattern, please consider adding an attribution to your code or elsewhere.

Here are some suggestions...

```javascript
// https://library.peckn.net/patterns/declarative-options
```

```javascript
// Based on the "Declarative Options" Pattern:
// https://library.peckn.net/patterns/declarative-options
```

```javascript
/*
 * ###############################################################
 *   An implementation of the "Declarative Options" pattern from
 *                  the Software Pattern Library
 * ###############################################################
   https://library.peckn.net/patterns/declarative-options
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
- Data Structures
- DRY
- Decision Making

## Comments

Another data structure could be used for option lookup equally effectively. There are many variations on this kind of approach. Other pattern entries are being worked on to demonstrate that.

The basic idea is to separate processing details from processing logic where the process needs to be done in different yet similar ways, so it can be abstracted and result in less code that shows the logic involved rather than details of the options.

## References

- [Hash table](https://en.m.wikipedia.org/wiki/Hash_table)

## Associated Patterns

- [Declarative Case Sets](/patterns/declarative-case-sets)
- [Hash Config](/patterns/hash-config)

Planned entries are listed but not linked.

{% include_relative _back.md %}
