// enum QuestionType {
//     OneVariant = 'OneVariant',
//     MultiVariant = 'MultiVariant',
//     Number = "Number",
//     Text = "Text",
//     ShortAnswer = "ShortAnswer",
//     LongAnswer = "LongAnswer"
// }


interface Typed {
    type: string
}
function isTyped(object: any): object is Typed {
    return 'type' in object
}

interface Labeled {
    label: string
}
function isLabeled(object: any): object is Labeled {
    return "label" in object
}

interface Identified {
    id: string
}
function isUnique(object: any): object is Identified {
    return "id" in object
}

interface IQuestion extends Typed, Labeled, Identified {

}
function isQuestion(object: any): object is IQuestion {
    return isTyped(object) && isLabeled(object)
}

interface Varianted {
    variants: string[]
}
function isVarianted(object: any): object is Varianted{
    return "variants" in object
}

interface OneVariant extends Labeled, Varianted, Typed {
    type: "OneVariant"
}

interface MultiVariant extends Labeled, Varianted, Typed {
    type: "MultiVariant"
}

interface NumberValue extends Labeled, Typed {
    type: "Number"
}

interface JustText extends Labeled, Typed {
    type: "Text"
}

interface ShortAnswer extends Labeled, Typed {
    type: "ShortAnswer"
}

interface LongAnswer extends Labeled, Typed {
    type: "LongAnswer"
}

interface BooleanAnswer extends Labeled, Typed {
    type: "Boolean"
}