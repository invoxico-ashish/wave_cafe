import React, { useState } from "react";
export function handlePath(path) {
    const [state, setState] = useState('')
    const actPath = path;
    return setState(actPath);
}