---
sidebar_position: 1
hide_table_of_contents: true
---

# OntoUML to gUFO

OntoUML JS packages provides a transformation to gUFO, a lightweight implementation of the Unified Foundational Ontology (UFO) suitable for Semantic Web OWL 2 DL applications. You can find a complete documentation about gUFO [here](https://nemo-ufes.github.io/gufo/).

## Getting Start

```js
import { Project, Ontouml2Gufo } from 'ontouml-js';

const project = new Project();
const model = project.createModel();

model.createKind('Person', { id: '123' });

const options = {
  baseIri: 'http://example.com#',
  basePrefix: 'ex',
  format: 'N-Triple',
  uriFormatBy: 'id',
  createObjectProperty: true,
  createInverses: false,
  prefixPackages: false,
  customPackageMapping: {
    University: {
      prefix: 'uni',
      uri: 'http://university.org/'
    }
  }
};

const ontouml2gufo = new Ontouml2Gufo(model, options);

ontouml2gufo.transform();

console.log(ontouml2gufo.getOwlCode());
```



