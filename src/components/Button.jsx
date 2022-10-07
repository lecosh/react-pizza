import classNames from "classnames"

export function Button({ onClick, className, outline, children }){
    return(
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button-outline': outline,
            })}
        >
            {children}
        </button>
    )
}