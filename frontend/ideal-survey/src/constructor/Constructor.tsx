import QuestionPickerSide from "./QuestionPickerSide.tsx";
import QuestionList from "./QuestionList.tsx";

const Constructor = () => {
    return (
        <main className={'flex gap-8 py-5 px-3'}>
            <QuestionPickerSide/>
            <QuestionList/>
        </main>
    );
};

export default Constructor;