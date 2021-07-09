---
sidebar_position: 3
hide_table_of_contents: true
---

# Classes

Classes are the main elements in the application. They describe the structure of a system. Every class must have a name and a stereotype that classifies the element in terms of its identity. An identity principle is a sort of function we use to distinguish two individuals (i.e. instances of some specific class). Let’s use the simplest example of all: the identity principle of sets. Two sets, A and B, are the same if, and only if, they have the same elements. Therefore, if A = {1,2} and B = {2,3} then A != B. So the identity of a set is defined by its members. Changing a member of a set changes the identity of the set.

Some classes have the characteristic of providing identity principles for their instances. They are stereotype as: «Kind», «Collective», «Quantity», «Relator», «Mode» and «Quantity».

Some other classes don’t provide identity principle for their instances, but they all share a common one. They are stereotyped as: «Subkind», «Role» and «Phase».

Some other classes don’t provide identity and their instances follow different identity principles. They are stereotyped as: «RoleMixin», «Mixin» and «Category».

Here is how we create classes with `ontouml-js`:

```js
import { Project } from 'ontouml-js';

const project = new Project({ name: 'My Project' });

const model = project.createModel({ name: 'Model a.k.a. Root Package' }); 

// Classes that providing identity principles for their instances
const person = model.createKind('Person');
const fleet = model.createCollective('Fleet');
const sand = model.createQuantity('Sand');
const marriage = model.createRelator('Marriage');
const intention = model.createMode('Intention');

// Classes that don’t provide identity principle for their instances, but they all share a common one
const musician = model.createRole('Musician');
const broken = model.createPhase('Broken');
const bulldog = model.createSubkind('Bulldog');

// Classes that don’t provide identity and their instances follow different identity principles
const agent = model.createCategory('Agent');
const insurable = model.createMixin('Insurable');
const customer = model.createRoleMixin('Customer');
```
