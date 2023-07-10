import {localizeType} from "../model/utils.tsx";
import {useQuestions} from "./ConstructorStore.ts";
import {nanoid} from "nanoid";

const QuestionVariant = ({typed}: { typed: Typed }) => {
    const push = useQuestions(state => state.push)
    return (
        <div
            className={'flex gap-3 p-3 items-center align-middle rounded-lg border border-transparent hover:bg-white hover:border-black/5 hover:shadow-xl shadow-stone-700'}
            onClick={() => {
                push({
                    id: nanoid(),
                    type: typed.type,
                    label: localizeType(typed)
                })
            }}
        >
            {localizeType(typed)}
        </div>
    );
};

export default QuestionVariant;