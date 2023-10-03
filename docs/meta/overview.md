---
sidebar_position: 1
---

<!-- # Overview

Originally defined as a profile of UML, OntoUML is an ontology-driven conceptual modeling language that provides modelers with constructs (e.g., classes and associations) well-defined according to the [Unified Foundational Ontology (UFO)](https://nemo.inf.ufes.br/en/projetos/ufo/).

In this webpage, you will find the complete documentation of the [OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel), a project that provides the reference for every implementation of the OntoUML language (e.g., language syntaxes, serializations, software libraries).

This documentation is structured into two parts:

- User guide: a guide for OntoUML developers to understand the metamodel in its uses and structure.
- Technical documentation: a technical list of definitions for all metamodel elements. -->

# Overview

Through the OntoUML Metamodel, the OntoUML should be seen as a [FAIR](https://www.go-fair.org/fair-principles/) language by design, which means that it incorporates into the metamodel the principles of **F**indability, **I**nteroperability, **A**ccessibility, and **R**eusability, all relevant principles for ontologies as artifacts in special in a web context.

![](../diagrams/Element%20Diagram%20-%20OntoumlElement.png)

In OntoUML, all elements that bear an identifier instantiate [`OntoumlElement`](./../../definitions#OntoumlElement). Besides an `id`, these elements also have the properties `created` and `modified` of type date. All elements within a single ontology are aggregated in  [`Project`](./../../definitions#Project) element (except for projects themselves). Moreover, every instance of `OntoumlElement` can be organized as part of either the abstract syntax (i.e., [`ModelElement`](./../../definitions#ModelElement)) or the concrete syntax (i.e., [`Diagram`](./../../definitions#Diagram), [`View`](./../../definitions#View), or [`Shape`](./../../definitions#Shape)) of the language.

![](../diagrams/Element%20Diagram%20-%20NamedElement.png)

In addition to an identifier, instances of [`NamedElement`](./../../definitions#NamedElement) (i.e., diagrams, model elements, and projects) can also have descriptive information like `name`, `alternativeNames`, `description`, and `editorialNotes`, all of which are multilingual properties of type [`LanguageString`](./../../definitions#LanguageString). The datatype [`Resource`](./../../definitions#Resource) is used whenever a reference to an external resource is necessary, either through a `name` or a `URI`. This is the case for the properties `creators` and `contributors`, for instance.

![](../diagrams/Element%20Diagram%20-%20Project.png)

Instances of [`Project`](./../../definitions#Project) not only aggregate the entire ontology (i.e., the elements of both concrete and abstract syntaxes), they also have the metadata relevant for the entire ontology (e.g., `theme` and `publisher`). The `namespace` property also support the definition of a prefix for the IDs of all other elements that are not already formed as a URI.

![](../diagrams/Element%20Diagram%20-%20ModelElement.png)


## Abstract Syntax



## Concrete Syntax


