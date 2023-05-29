import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(
    function TextInput({
                           type = 'text',
                           className = '',
                           value,
                           defaultValue,
                           variant,
                           isFocused = false,
                            placeholder,
                            isError,
                           ...props}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}`
            }
            placeholder={placeholder}
            ref={input}
        />
    );
});
