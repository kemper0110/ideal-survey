import QuestionVariant from "./QuestionVariant.tsx";

const QuestionPickerSide = () => {
    return (
        <aside className={'flex-auto w-1/4'}>
            <QuestionVariant typed={{type: "OneVariant"}}/>
            <QuestionVariant typed={{type: "MultiVariant"}}/>
            <QuestionVariant typed={{type: "Number"}}/>
            <QuestionVariant typed={{type: "Text"}}/>
            <QuestionVariant typed={{type: "Boolean"}}/>
            <QuestionVariant typed={{type: "LongAnswer"}}/>
            <QuestionVariant typed={{type: "ShortAnswer"}}/>
        </aside>
    );
};

export default QuestionPickerSide;