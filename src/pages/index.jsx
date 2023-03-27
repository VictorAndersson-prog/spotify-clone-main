import React from "react";
import Sidebar from "@/components/Sidebar";
export default function index() {
    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-1 overflow-y-auto p-2">
                <Sidebar />
                <main className="h-full flex-1 ">main</main>
            </div>
            <footer className="h-[59px]">player</footer>
        </div>
    );
}
