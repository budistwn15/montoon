import PropTypes from "prop-types";

SecondaryButton.propTypes = {
    type: PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node
}
export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl border border-white py-[13px] text-center w-full ${
                    disabled && 'opacity-25'
                } ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
