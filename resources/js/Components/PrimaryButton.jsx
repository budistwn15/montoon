import React from "react";
import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default function PrimaryButton({ type = "button", className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center w-full ${disabled && "opacity-40"} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
