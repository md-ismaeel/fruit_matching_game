import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    return (
        <div className="w-full h-screen grid items-center text-red-600 text-3xl text-center capitalize">
            {error && (
                <>
                    Error: {error.status || "Unknown!! "}
                    {error.statusText || "An unexpected error occurred!!"}
                </>)
            }
        </div>
    );
}
