const QuestionEditModal = ({question, requestClose}: {
    question: IQuestion
    requestClose: () => void
}) => {
    const cb = (dialog: HTMLDialogElement) => {
        if(dialog)
            dialog.showModal()
    }
    return (
        <dialog
            ref={cb}
            className={'border-2 border-solid rounded-lg flex flex-auto'}
        >
            <QuestionEditSide question={question} requestClose={requestClose}/>
            <QuestionPreviewSide question={question}/>
        </dialog>
    );
};

// create edit for each question
const QuestionEditSide = ({question, requestClose}: {
    question: IQuestion
    requestClose: () => void
}) => {
    return (
        <div className={'w-4/10'}>
            <button className={'border border-black border-dashed'}
                    onClick={e => {
                        e.stopPropagation()
                        requestClose()
                    }}
            >
                CLose
            </button>
        </div>
    )
}
const QuestionPreviewSide = ({question}: {
    question: IQuestion
}) => {
    return (
        <div className={'w-6/10'}>

        </div>
    )
}

export default QuestionEditModal;