import React from "react";
import { accessUrl } from "../config";
export default function Login() {
    return (
        <div className="py-10 text-center">
            <h1 className="text-4xl font-bold mb-1">
                Welcome to my Spotify-clon
            </h1>
            <p className="text-text-dimmed mb-10">
                Please sign in to use the app
            </p>
            <a
                href={accessUrl}
                className="py-1 px-5 font-semibold bg-primary rounded-md text-xl"
            >
                Sign in
            </a>
        </div>
    );
}
