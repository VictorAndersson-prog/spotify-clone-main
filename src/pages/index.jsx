import React from "react";

export default function index() {
    return (
        <div className="flex h-screen flex-col bg-red-500">
            <div className="flex flex-1 p-2">
                <aside className="w-full max-w-xs bg-orange-500">sidebar</aside>
                <main className="h-full flex-1 bg-lime-500">main</main>
            </div>
            <footer className="bg-green-500">player</footer>
        </div>
    );
}
