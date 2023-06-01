import React from "react";
import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    childer: PropTypes.node
};

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl border border-white py-[13px] text-center w-full ${disabled && "opacity-25"} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
