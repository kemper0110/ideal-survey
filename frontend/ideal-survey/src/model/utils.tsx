type RussianType = string

export function localizeType(object: Typed): RussianType {
    switch (object.type) {
        case "OneVariant":
            return 'Один вариант'
        case "MultiVariant":
            return 'Несколько вариантов'
        case "Number":
            return 'Число'
        case "Text":
            return 'Текст без вопроса'
        case "Boolean":
            return 'Да/Нет'
        case "LongAnswer":
            return 'Длинный текст'
        case "ShortAnswer":
            return 'Короткий текст'
        default:
            return "???"
    }
}