function CreateQuestion()
{
    return (
        <div className="border my-5 p-5 space-y-8 rounded">
            <div className="border-b border-indigo-200 rounded bg-indigo-300 py-6 text-center text-white">
                <h1>Complete the Question</h1>
            </div>
            <p className="px-2">Would you rather .... </p>
            <form action="submit px-3 space-y-5">
                <div className="flex flex-col space-y-5">
                    <input type="text" name="optionA" id="optionA" placeholder="Enter Option A" className="py-3 px-3 border rounded" />
                    <input type="text" name="optionB" id="optionB" placeholder="Enter Option B" className="py-3 px-3 border rounded" />
                </div>
                <input type="submit" value="create" className="bg-indigo-500 text-center text-white px-5 py-3 w-full rounded my-5" />
            </form>
        </div>
    )
}

export default CreateQuestion;