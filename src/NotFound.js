import { useRouteError } from "react-router-dom";

export const NotFound = () => {
    const error = useRouteError();
    console.log("Error object:", error);

    return (
        <div>
            <h1>Something went wrong!</h1>
            {error ? (
                <p>{error.message || "An unknown error occurred."}</p>
            ) : (
                <p>No error details available.</p>
            )}
        </div>
    );
};
