---
sidebar_position: 1
---

# Overview

Through the OntoUML Metamodel, the OntoUML should be seen as a [FAIR](https://www.go-fair.org/fair-principles/) language by design, which means that it incorporates into the metamodel the principles of **F**indability, **I**nteroperability, **A**ccessibility, and **R**eusability, all relevant principles for ontologies as artifacts in special in a web context.

![](diagrams/Element%20Diagram%20-%20OntoumlElement.png)

In OntoUML, all elements that bear an identifier instantiate [`OntoumlElement`](./../definitions#OntoumlElement). Besides an `id`, these elements also have the properties `created` and `modified` of type date. All elements within a single ontology are aggregated in  [`Project`](./../definitions#Project) element (except for projects themselves). Moreover, every instance of `OntoumlElement` can be organized as part of either the abstract syntax (i.e., [`ModelElement`](./../definitions#ModelElement)) or the concrete syntax (i.e., [`Diagram`](./../definitions#Diagram), [`View`](./../definitions#View), or [`Shape`](./../definitions#Shape)) of the language.

![](diagrams/Element%20Diagram%20-%20NamedElement.png)

In addition to an identifier, instances of [`NamedElement`](./../definitions#NamedElement) (i.e., diagrams, model elements, and projects) can also have descriptive information like `name`, `alternativeNames`, `description`, and `editorialNotes`, all of which are multilingual properties of type [`LanguageString`](./../definitions#LanguageString). The datatype [`Resource`](./../definitions#Resource) is used whenever a reference to an external resource is necessary, either through a `name` or a `URI`. This is the case for the properties `creators` and `contributors`, for instance.

![](diagrams/Element%20Diagram%20-%20Project.png)

Instances of [`Project`](./../definitions#Project) not only aggregate the entire ontology (i.e., the elements of both concrete and abstract syntaxes), they also have the metadata relevant for the entire ontology (e.g., `theme` and `publisher`). The `namespace` property also support the definition of a prefix for the IDs of all other elements that are not already formed as a URI.

## Abstract Syntax

![](diagrams/Element%20Diagram%20-%20ModelElement.png)

All elements that have are explicitly represented in an OntoUML diagram specialize [`ModelElement`](./../definitions#ModelElement): `Package`, `Class`, `BinaryRelation`, `NaryRelation`, `Property`, `Literal`, `Generalization`, `GeneralizationSet`, `Note`, and `Link`. This representation is done through specific type of `View` for each type of `ModelElement`. In addition, a `ModelElement` can also be the `owner` of a `Diagram`.

![](diagrams/Element%20Diagram%20-%20Class.png)



## Concrete Syntax


