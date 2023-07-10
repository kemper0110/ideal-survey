import {localizeType} from "../model/utils.tsx";
import {BiSolidTrash} from 'react-icons/bi';
// import {AiFillCopy} from 'react-icons/ai';
import {GiLogicGateOr} from 'react-icons/gi';
import {useQuestions} from "./ConstructorStore.ts";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import QuestionEditModal from "./QuestionEditModal.tsx";
import {useState} from "react";

const QuestionView = ({question}: { question: IQuestion }) => {
    const remove = useQuestions(state => state.remove)
    const move = useQuestions(state => state.move)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div
            className={'group px-12 py-4 flex justify-between transition-shadow z-0 hover:z-10 hover:shadow-[0px_3px_20px_5px_rgba(0,0,0,0.1)]'}
            onClick={() => {
                setModalOpen(true)
            }}
        >
            {
                modalOpen ? <QuestionEditModal
                    requestClose={() => {
                        setModalOpen(false)
                    }} question={question}
                /> : null
            }
            <div className={'flex flex-col gap-y-2'}>
                <div className={'font-semibold text-lg'}>
                    {question.label}
                </div>
                <div className={'text-sm'}>
                    {localizeType(question)}
                </div>
            </div>
            <div className={'flex gap-5 group-hover:visible transition-shadow invisible items-center text-slate-400'}>
                <button className={'hover:text-slate-700 transition-colors'} onClick={e => {
                    e.stopPropagation()
                    remove(question.id)
                }}>
                    <BiSolidTrash size={20}/>
                </button>
                {/*<button className={'hover:text-slate-700 transition-colors'}>*/}
                {/*    <AiFillCopy size={20}/>*/}
                {/*</button>*/}
                <button className={'hover:text-slate-700 transition-colors'} onClick={e => {
                    e.stopPropagation()
                }}>
                    <GiLogicGateOr size={24} className={'hover:text-slate-700 transition-colors'}/>
                </button>
                <button className={'hover:text-slate-700 transition-colors'} onClick={e => {
                    e.stopPropagation()
                    move(question.id, -1)
                }}>
                    <FaArrowUp size={20}/>
                </button>
                <button className={'hover:text-slate-700 transition-colors'} onClick={e => {
                    e.stopPropagation()
                    move(question.id, +1)
                }}>
                    <FaArrowDown size={20}/>
                </button>
            </div>
        </div>
    );
};

export default QuestionView;