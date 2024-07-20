import React, {forwardRef} from "react";

export const Button = forwardRef(({text, href,}, ref) => {
    return (
        <div className="button regular_h4" ref={ref}>
            <a href={href}>{text}</a>
        </div>
    );
})


// export const Button = forwardRef(({children, href, style}, ref) => {
//     return (
//         <div className={`button ${style}`} ref={ref}>
//             <a href={href} className="button-text">
//                 {children}
//             </a>
//         </div>
//     );
// });
