function ProgressBar({ votes, totalVotes }) {
    const widthPercentage = votes / totalVotes
  const styleWidth = {
    width: `${(widthPercentage ? widthPercentage : 0) * 100}%`,
  };
  return (
    <div className="w-full px-0.5 flex space-x-1">
      <div className="flex-1 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-indigo-300 h-4 rounded-full"
          style={styleWidth}
        ></div>
      </div>
      <div className="font-sans font-extralight h-4 leading-4">
        {votes} of {totalVotes} votes   
      </div>
    </div>
  );
}

export default ProgressBar;
