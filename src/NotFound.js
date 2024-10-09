import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  return (
      <div>
         <h1>Something went wrong!</h1>
         <p>hello world</p>
          {console.log("Error message")}
            {error ? (
                <p>{error.message || "An unknown error occurred."}</p>
            ) : (
                <p>No error details available.</p>
            )}
        </div> 
    );
  };