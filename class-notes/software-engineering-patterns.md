---
layout: default
title: Software Engineering Patterns
permalink: /class-notes/patterns
heading: Software Engineering Patterns
---

# Software Engineering Patterns

This is an informal and original collection of design patterns that can be used to engineer software.

**This is published as it is written.**

Informal in the sense that not all may be formally recognisable as patterns. They’re useful approaches to achieving goals with software. There may be crossover and duplication between parts of patterns where it is useful to lay them out in that way.

Original in the sense that they have been named as seems appropriate and not written or organised with any existing system in mind.

References and collaborators will be cited.

All in the spirit of learning and improving as software engineers. Comments welcome and encouraged. GitHub Discussions coming soon.

It’s all a work in progress and intentionally creative and original in order to encourage innovation and useful points of view that haven’t previously been covered.

Of course, much of the material will be covered elsewhere in one form or another. It’s based on experience and what comes up while working with students.

## Declarative Case Sets

Tags: Processing, Option Sets

Declare sets for processing cases. Abstract a processing interface keyed off the sets.

Use a [hash table](https://en.m.wikipedia.org/wiki/Hash_table) to facilitate set lookup.

### Rationale & Anti-Patterns

Using a hash table there is no conditional, which is found in anti-patterns to this.

Decouple processing logic from associated cases.

Leverage declarative statements for updates and maintenance.

### Example Code

```typescript
type CaseKey = 'example' | 'example2' | '...';

type CaseSet<CaseOptions> = {
  [CaseKey]: CaseOptions
};

type CaseOptions = {
  exDataKey: string;
  exSwitchKey: boolean;
};

const caseSets: CaseSet<CaseOptions> = {
  example: {
    exDataKey: 'Example String',
    exSwitchKey: true
  },
  example2: {
    exDataKey: 'Another Example String',
    exSwitchKey: false
  }
};

class CaseProcessing {
  public static processCase(key: CaseKey, data: any): any {
    const caseOptions = this.getCaseOptions(key);
    // TODO: Process data based on caseOptions
  }
  
  private static getCaseOptions(key: CaseKey): CaseData {
    if(caseSets[key]) {
      return caseSets[key];
    }
    throw new Error(`Unrecognised CaseKey: ${key}`);
  }
} 
```
