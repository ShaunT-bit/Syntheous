import React from "react";

interface ButtonProps extends React.PropsWithChildren {
    url?: string; // Optional URL to make the button a link
    onClick?: () => void; // Optional onClick handler for button actions
}

export const Button = ({ url, onClick, children }: ButtonProps) => {
    const baseClasses =
        "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#071a21] to-[#204646] shadow-[0px_0px_12px_#00a362]";

    const innerContent = (
        <>
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(7,26,33,.7)_inset] rounded-lg"></div>
            </div>
            <span>{children}</span>
        </>
    );

    return url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={baseClasses}>
            {innerContent}
        </a>
    ) : (
        <button onClick={onClick} className={baseClasses}>
            {innerContent}
        </button>
    );
};
