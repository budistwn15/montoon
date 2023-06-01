import React from "react";
import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    childer: PropTypes.node
};

export default function PrimaryButton({ className = '', processing, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center w-full ${processing && "opacity-40"} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
