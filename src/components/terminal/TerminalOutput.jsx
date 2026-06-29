function TerminalOutput({ history }) {
  return (
    <div className="flex-1 overflow-y-auto p-5 font-mono text-sm text-green-400">

      {history.map((item, index) => (
        <div key={index} className="mb-6">

          {item.command && (
            <p className="mb-2 text-cyan-400">
              PS C:\Users\Visitor&gt; {item.command}
            </p>
          )}

          <h3 className="mb-2 font-bold text-white">
            {item.title}
          </h3>

          {item.output.map((line, i) => (
            <p
              key={i}
              className="leading-7 text-zinc-300"
            >
              {line}
            </p>
          ))}

        </div>
      ))}

    </div>
  );
}

export default TerminalOutput;