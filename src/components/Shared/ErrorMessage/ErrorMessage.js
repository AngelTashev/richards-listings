const ErrorMessage = ({children}) => {
    if (!children) return null;

    return (
        <div className="error-message">{children}</div>
    );
}

export default ErrorMessage;