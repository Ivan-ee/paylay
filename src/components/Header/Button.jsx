import React, {forwardRef} from "react";

export const Button = forwardRef(({text, href,}, ref) => {
    return (
        <div className="button regular_h4" ref={ref}>
            <a href={href}>{text}</a>
        </div>
    );
})

