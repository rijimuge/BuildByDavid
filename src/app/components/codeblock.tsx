import React from 'react';

// Props include the code content and any additional styling if needed
const CodeBlock = ({ code }: {code: string}) => {
  return (
    <pre className={`overflow-x-auto border-l-4 border-orange-500 bg-gray-700 p-4 font-mono text-sm`}>
      {code.trim().split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </pre>
  );
};

export default CodeBlock;