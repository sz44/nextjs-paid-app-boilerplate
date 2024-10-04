"use client"

import { useState } from "react";

export default function PkgSelector() {
    const [pkgType, setPkgType] = useState("one");
    return (
        <div>
            <div className="*:p-4 *:m-4 border">
                <button onClick={()=>setPkgType("one")}>one</button>
                <button onClick={()=>setPkgType("two")}>two</button>
                <button onClick={()=>setPkgType("three")}>three</button>
            </div>
            <p className="border">{pkgType}</p>
        </div>
    )
}