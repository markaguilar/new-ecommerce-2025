import React from "react";

const ErrorMessages = ({ message }: { message: string }) => {
  return (
    <div className="h-2">
      <span className="text-red text-sm">{message}</span>
    </div>
  );
};

export default ErrorMessages;
