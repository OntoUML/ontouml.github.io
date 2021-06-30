---
sidebar_position: 1
hide_table_of_contents: true
---

# Installation

## Introduction

The `ontouml-js` project exists to meet the needs of developers in implementing OntoUML-based solution as services. This TypeScript module comprises a library designed to support the development of any OntoUML solution for OaaS, including an extensive API for model creation and manipulation, as well as serialization and de-serialization functionality. The `ontouml-js` currently supports the `ontouml-server` and all services currently provided by it. 

## Getting Start

```
// npm users
npm install ontouml-js --save

// yarn users
yarn add ontouml-js
```

## Usage

This package is designed to support manipulating OntoUML models and their serialization into `ontouml-schema` compliant JSON files.

```js
import { Project, serializationUtils } from 'ontouml-js';

// Every OntoUML element can be created from a constructor that can receive a partial object as references for its creation
const project = new Project({ name: 'My Project' }); // creates an OntoUML projects

// Projects contain an instance of Package  dubbed model that contains all model elements in the project
// Container elements, e.g., projects and packages, also serve as factories for their contents
const model = project.createModel({ name: 'Model a.k.a. Root Package' }); // creates a "model" Package

// Instead of partial objects, "factory" methods receive more suitable lists of arguments to facilitating populating elements
const person = model.createKind('Person');
const school = model.createKind('School');
const date = model.createDatatype('Date');
const enrollment = model.createRelator('Enrollment');
const studiesAt = model.createMaterialRelation(person, school, 'studies at');

model.createMediationRelation(enrollment, person);
model.createMediationRelation(enrollment, school);

// our API is constantly updated to include helpful methods to facilitate building OntoUML models
studiesAt.getTargetEnd().name = 'school';
studiesAt.getTargetEnd().setCardinalityToMany();
studiesAt.getSourceEnd().name = 'student';
studiesAt.getSourceEnd().cardinality = '1..*';

enrollment.createAttribute(date, 'enrollment date');

// Containers also include methods to easily support retrieving their contents
model.getAllAttributes(); // returns all contained attributes
model.getAllClasses(); // returns all contained classes
model.getAllGeneralizations(); // returns all contained generalizations

// Any element can be easily serialized into JSON, and properly serialized elements can be deserialized just as easily
const projectSerialization = JSON.stringify(project);
const projectCopy = serializationUtils.parse(projectSerialization);
```
