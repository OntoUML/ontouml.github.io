---
sidebar_position: 1
hide_table_of_contents: true
---

# Projects

Every OntoUML element can be created from a constructor that can receive a partial object as references for its creation

```js
import { Project } from 'ontouml-js';

// creates an OntoUML projects
const project = new Project({ name: 'My Project' });
```

Projects contain an instance of Package dubbed model that contains all model elements in the project Container elements, e.g., projects and packages, also serve as factories for their contents

```js
// creates a "model" Package
const model = project.createModel({ name: 'Model a.k.a. Root Package' }); 
```

Instead of partial objects, "factory" methods receive more suitable lists of arguments to facilitating populating elements

```js
const person = model.createKind('Person');
const school = model.createKind('School');
const date = model.createDatatype('Date');
const enrollment = model.createRelator('Enrollment');
const studiesAt = model.createMaterialRelation(person, school, 'studies at');

model.createMediationRelation(enrollment, person);
model.createMediationRelation(enrollment, school);
```

Containers also include methods to easily support retrieving their contents

```js
// returns all contained attributes
model.getAllAttributes(); 
// returns all contained classes
model.getAllClasses(); 
// returns all contained generalizations
model.getAllGeneralizations(); 
```

Any element can be easily serialized into JSON, and properly serialized elements can be deserialized just as easily

```js
import { serializationUtils } from 'ontouml-js';

const projectSerialization = JSON.stringify(project);
const projectCopy = serializationUtils.parse(projectSerialization);
```



