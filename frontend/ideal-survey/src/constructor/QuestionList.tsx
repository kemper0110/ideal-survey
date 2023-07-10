import {useQuestions} from "./ConstructorStore.ts";
import QuestionView from "./QuestionView.tsx";

const QuestionList = () => {
    const questions = useQuestions(state => state.questions)
    return (
        <section className={'bg-white flex-auto w-3/4 border-t-4 border-t-slate-400 shadow-2xl divide-y-2 pb-24'}>
            {
                questions.map(q => <QuestionView key={q.id} question={q}/>)
            }
        </section>
    );
};

export default QuestionList;