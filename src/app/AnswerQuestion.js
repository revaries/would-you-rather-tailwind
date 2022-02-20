function AnswerQuestion() {
    return (
        <div className="my-5 space-y-6">
            <h1 className="text-xl">Would you Rather...</h1>
            <form action="" className="space-y-4">
                <div className="" id="optionA">
                    <input type="radio" name="optionA" id="optionA" />
                    <label htmlFor="optionA" className="mx-2">Option A</label>
                </div>
                <div className="" id="optionA">
                    <input type="radio" name="optionB" id="optionB" />
                    <label htmlFor="optionB" className="mx-2">Option B</label>
                </div>
                <input type="submit" value="submit" className="bg-indigo-500 text-center text-white px-5 py-3 w-full rounded my-5" />
            </form>
        </div>
    )
}

export default AnswerQuestion;