---
layout: layout.njk
title: Thematic index to the Boxer literature
---

# A thematic index to the Boxer literature

This partisan guide is prepared by Antranig Basman, and all editorial remarks are his unless otherwise noted.

## Boxer's Design

### A Principled Design for an Integrated Computational Environment

[A Principled Design for an Integrated Computational Environment](<../papers/A Principled Design for an Integrated Computational Environment - ACM HCI (diSessa, 1985).pdf>),
a core paper (ACM HCI, 1985) motivating many of Boxer's core design choices, particularly its structural (dynamic) scoping model.

#### Key concepts introduced

***Detuning*** &mdash; general structures underly the computational environment that are broadly applicable, less highly tuned
to any specific function, and always available for use. Weighs against the surface use of *types* as seen in all
static and many dynamic programming languages.

***diffused functionality*** &mdash; Instead of having any one construct serve a particular goal, several constructs can be involved.
For example, the use of names for both documentation and reference. Together with detuning, tends towards a system design with
structural parsimony, with fewer, more easily learnable primitives.

***shallow structuring*** &mdash; anything the novice is likely to need to use or modify must be near the surface of the environment.

Argues for a language/system to be closer to its ***surrogate model*** - a simple, mechanical model from which its behaviour
can be simulated and predicted. Some compromises with a *functional model* are necessary.

Warns against the extremes of the ***hacker bug*** and ***formalist bug*** of providing too many or too few primitives to structure
a system, respectively.

Sets out Boxer's ***naive realism*** (what the user thinks they see is the computational system itself rather than a
multiply-filtered view or one dominated by side effects) and *structural metaphor* (spatial organisation has a strong
semantic content):

#### Telling examples of Boxer's collapse of function:

> In particular, it will become apparent how two-dimensional configurations with
containment representing hierarchy can subsume an important core structure
to things like program and calling structure, hierarchical data, and file
systems.

An interesting projected capability for Boxer, under the heading of *time modularity*, is the ability to save and
restore named versions of any box.

> This use of box structure duplicates much of the functionality of one of the
most successful aspects of the Smalltalk programming environment, the
Browser, allowing leisurely perusal of the system.

> A named data box in a library is a variable, data waiting to be referenced.
Thus, we have collapsed the two structures of literal reference and variable
into one

Describes Boxer's ***stepper*** (currently not functioning) as an embodiment of its surrogate model:

> However, the advance in Boxer is that the mode of inspection is identical to the concrete mode even beginners use to inspect any
part of the system, and the meaning of what one sees is a direct embodiment of
the fundamental dynamic surrogate of the system.

#### Scoping

Section 3.3 on scoping contains the core arguments justifying Boxer's scoping model (named "dynamic"), presenting four telling arguments against
the use of traditional, lexical scoping, of which to me (AB) the most telling is

> What may be the most important criticism is that lexical scoping simply
does not have as simple a surrogate model as dynamic scoping

Conclusion makes it clear that the scoping model is a direct consequence of the copy-and-execute model and that, barring
strange contortions, a choice for lexical scoping would imply abandoning it.



## LaDDER model

![Ladder](../images/LaDDER.jpg){width="512" title="Layered Distributed Development of Educational Resources (from diSessa et al, 2003)" style="float: right"}

First published in 2003's [Issues in Component Computing: A Synthetic Review? (diSessa et al, 2003)](<../papers/Issues in Component Computing, A Synthetic Review - ILE (diSessa, Azevedo, Parnafes, 2003).pdf>),
the LaDDER (Layered Distributed Development of Educational Resources) model describes a pyramidal structure
for organising communities of participants with different technical competences. 

> The core goal of the model is to empower levels of participants with less technological expertise, 
especially teachers and students, to solve as many of their own problems as possible.

The LaDDER model appears in abbreviated form as Idea Five of [Five Powerful Ideas About Technology and Education (diSessa, 2016)](<../papers/Five Powerful Ideas About Technology and Education (diSessa, 2016).pdf>).

## Supporting Learners as Users

An exchange between Mark Guzdial and Andy diSessa in the pages of 1999's Journal of Computer Documentation.

[Supporting Learners as Users (Guzdial, 1999)](<../papers/Supporting Learners as Users - JCD (Guzdial, 1999).pdf>) - Mark's original article,
setting out the requirements software supporting learners - 

> But sometimes, the user's goal is not the same as the explicit task that the
software was designed for.

[How Should Students Learn (diSessa, 1999)](<../papers/How Should Students Learn - JCD (diSessa, 1999).pdf>) - Andy's response,
developing the notion of the "committed learner" and how software for learners should support this model, in addition
to other elements of the hierarchy of needs.

## Boxer Theses

Academic theses that have been written with Boxer as a focus:

[Bochser, An Integrated Scheme Programming System](<../theses/Bochser, An Integrated Scheme Programming System (Eisenberg, MIT MSc, 1985).pdf>) -
Mike Eisenberg, an MIT Master's Thesis of 1985. Mike retrofits many of Boxer's "naive realism" mechanisms onto a traditional
programming language, Scheme, in order to realise as many as possible of the benefits of this materialisation without
sacrificing traditional evaluation semantics. Concludes with some highly interesting discussion on the ergonomics of
driving language semantics from its visual interface or vice versa &mdash; following Alan Kay's 1984 observation that whilst
the user interface had come to be the first part of a system for typical user systems, that programming languages
had resisted this trend.

> The BOCHSER system which is the subject of this report is unfortunately still an instance of
the "interface following the language" phenomenon &mdash; the point of the system is to take an existing
language and supply the most informative and powerful possible interface to it. 

[Design of a Graphics Subsystem for Boxer](<../theses/Design of a Graphics Subsystem for Boxer (Roschelle, MIT BSc, 1985).pdf>) -
Jeremy Roschelle, an MIT Bachelor's Thesis of 1985.


[Boxer, The Programming Language](<../theses/Boxer, The Programming Language (Klotz, MIT BSc, 1989).pdf>) - Leigh Klotz, an MIT Bachelor's
Thesis of 1989.

[Visualising Number](<../theses/Visualising Number (Declan O'Reilly, London PhD, 1995).pdf>) - Declan O'Reilly, a London
University PhD thesis of 1995.

[Construction of Meanings In and For a Stochastic Domain of Abstraction](<../theses/Construction of Meanings In and For a Stochastic Domain of Abstraction (Pratt, London PhD, 1998).pdf>) - David
Pratt, a London University PhD thesis of 1998.

[Real-Time Programming and the Big Ideas of Computational Literacy](<../theses/Real-Time Programming and the Big Ideas of Computational Literacy (Hancock, MIT PhD, 2003).pdf>) -
Chris Hancock, an MIT PhD thesis of 2003.
