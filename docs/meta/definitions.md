---
sidebar_position: 2
---

# Definitions

## `ModelElement` {#ModelElement}

## `Diagram` {#Diagram}

## `View` {#View}

## `Shape` {#Shape}

## `NamedElement` {#NamedElement}

An OntoUML element that can be assigned a name and other descriptive information.

- **`alternativeNames`:** Determines alternative names of the named element using an array of language strings. Alternative names are not translations of the named element, but indeed alternatives or synonyms to the main one.

- **`contributors`:** Identifies the agents who contributed to the development of the named element.

- **`creators`:** Identifies the agents who contributed to the creation of the named element.

- **`description`:** Determines a free-text account of the named element using language string.

- **`editorialNotes`:** Determines general notes about the named element using an array of language strings. Editorial notes are typically notes on the development process and must not be confused with descriptions.

- **`name`:** Determines the name of the named element using language string.


## `OntoumlElement` {#OntoumlElement}

An identified element of an OntoUML ontology according to the OntoUML Metamodel, which includes projects, model elements, diagrams, views, and shapes.

- **`created`:** Determines when the element was created using a string in one of the following formats: year, year-month, date, or date-time.

- **`id`:** Determines the unique identifier for an OntoUML element in an ontology using a non-empty string.

- **`modified`:** Determines when the element was modified using a string in one of the following formats: year, year-month, date, or date-time.

- **`project`:** Identifies the project element that the element is a part of. Inverse of [`elements`](#Project).


## `Project` {#Project}

A named element that serves as the container of an entire OntoUML ontology, including the elements of both the abstract syntax (i.e., model elements) and the concrete syntax (i.e., diagrams, view, and shapes).

- **`elements`:** Contains the OntoUML elements that are part of the project.

- **`root`:** Identifies the root package of a project (the package containing all other model elements of the project) if present.

- **`publisher`:** Identifies the agent responsible for making the project available. The publisher does not need to have created or contributed to the resource.

- **`designedForTasks`:** Identifies goals that motivated the development of the project. The OntoUML/UFO Catalog Metadata Vocabulary (OCMV) provides a set of goals that be reused as recurrent modeling goals:

  - `ocmv:ConceptualClarification`: The project was created as the result of an ontological analysis of a concept, language, or domain of interest that sought to conceptually clarify and untangle complex notions and relations.

  - `ocmv:DataPublication`: The project was created to support the publication of some datasets. For instance, in the case of a conceptual model used to generate an OWL vocabulary to publish tabular data as linked open data on the web.

  - `ocmv:DecisionSupportSystem`: The project was created during the development of a decision support system.

  - `ocmv:Example`: The project was created to demonstrate how OntoUML can be used to solve a certain modeling challenge, to support an experiment involving OntoUML, or to exemplify how a generic model can be reused in more concrete scenarios.

  - `ocmv:InformationRetrieval`: The project was created to support the design of an information retrieval system.

  - `ocmv:Interoperability`: The project was created to support data integration, vocabulary alignment, or the interoperability of software systems.

  - `ocmv:LanguageEngineering`: The project was created for the design of a domain-specific modeling language.

  - `ocmv:Learning`: The project was created so that its authors could learn UFO and OntoUML. This usually applies to models developed by students as part of their course assignments.

  - `ocmv:SoftwareEngineering`: The project was created during the development of an information system. For instance, in the case of a conceptual model used to generate a relational database.

- **`license`:** Identifies a legal document under which the project is made available, e.g., "CC BY 4.0" <https://creativecommons.org/licenses/by/4.0/>.

- **`accessRights`:** Identifies a document or a text concerning who and how the project can be accessed. E.g., the document <http://publications.europa.eu/resource/authority/access-right/PUBLIC> informs that something is "publicly accessible by everyone."

- **`themes`:** Identifies the central themes of the project according to a theme taxonomy. In the OntoUML/UFO Catalog Metadata Vocabulary (OCMV), for example, the theme of a project must be a concept from the Library of Congress Classification (LCC), such as, "Class S - Agriculture" or "Class T - Technology.""

- **`contexts`:** Identifies the contexts in which the project was developed. The OntoUML/UFO Catalog Metadata Vocabulary (OCMV) provides a set of recurrent modeling contexts:

  - `ocmv:Research`: The project was developed as part of a research project. This usually implies that the project was featured in a scientific publication.

  - `ocmv:Industry`: The project was developed for a public or private organization.

  - `ocmv:Classroom`: The project was developed within the context of a course on conceptual modeling, most likely as a course assignment.

- **`ontologyTypes`:** Identifies the classifications of the project according to its scope. The OntoUML/UFO Catalog Metadata Vocabulary (OCMV) provides a set of recurrent modeling scopes based on the work of Roussey et al. (2011):

  - `ocmv:Core`: An ontology that grasps the central concepts and relations of a given domain, possibly integrating several domain ontologies and being applicable in multiple scenarios. E.g., UFO-S, a commitment-based ontology of services, can be considered a core ontology because it applies to services in multiple domains, such as medical, financial, and legal services.

  - `ocmv:Domain`: An ontology that describes how a community conceptualizes a phenomenon of interest. In general, a domain ontology formally characterizes a much narrower domain than a core ontology does. E.g., OntoBio is a domain ontology of biodiversity.

  - `ocmv:Application`: An ontology that specializes a domain ontology where there could be no consensus or knowledge sharing. It represents the particular model of a domain according to a  single viewpoint of a user or a developer.

- **`representationStyle`:** Identifies the representation style adopted in the project between "OntoUML Style" and "UFO Style":

  - `ocmv:OntoumlStyle`: Characterizes a project that contains at least one class, relation, or property using a valid OntoUML stereotype.

  - `ocmv:UfoStyle`: Characterizes a project that contains at least one class or relation from UFO without an OntoUML stereotype.

- **`namespace`:** Determines the namespace for all OntoUML elements in the project using a string in URI format. When present, the namespace appended with the id of any element in the project should form a globally unique resolvable URI for identification in the web as a FAIR Digital Object.

- **`landingPages`:** Identifies the web pages where one can access the project. E.g., <https://www.model-a-platform.com> is the landing page of the Digital Platform Ontology.

- **`sources`:** Identifies resources that contain, present, or significantly influenced the development of the project. We recommend the use of persistent and resolvable identifiers to refer to these resources, such as the Digital Object Identifier (DOI) or DBLP''s URI, such as, <https://doi.org/10.3233/AO-150150>, or <https://dblp.org/rec/journals/ao/Morales-Ramirez15>.

- **`bibliographicCitations`:** Determines bibliographic references for the project using language strings. E.g., "Weigand, H., Johannesson, P., & Andersson, B. (2021). An artifact ontology for design science research. Data & Knowledge Engineering, 133".

- **`keywords`:** Determines the domains (partially) described by the project using language strings. E.g., the User Feedback Ontology is described with the keywords "online user feedback", "software engineering", and "requirements engineering".

- **`acronyms`:** Determines the acronyms one can use to refer to the project using strings. E.g., "RDBS-O", "COVER", "ROT".

- **`languages`:** Determines the languages in which the lexical labels of the project are written using strings. This field should use values listed in the IANA Language Sub Tag Registry, such as, "en" and "pt".


## `LanguageString` {#LanguageString}

Determines an object where the key-value pairs represent, respectively, an IANA language tag and a string carrying the textual information in that language.

Examples include `{ "en": "My Resource" }` and `{ "pt-BR": "Meu Recurso" }`.

The empty key can be used to represent a string in an unknown language, as in `{ "": "Unknown Language Value" }`.


## `Resource` {#Resource}

An object that represents a reference to a resource by its name and its URI allowing references to resources in the semantic web.

- **`name`** Determines the name of the resource using a language string..

- **`URI`** Determines the Uniform Resource Identifier (URI) of the resource using a string.
