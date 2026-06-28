import './Container.scss'

interface ContainerProps {
    children : React.ReactNode;
    className?: string;
}

function Container({children, className} : ContainerProps) {
    console.log({
    className,
    children
});
    return(
        <div className={`container ${className?? ""}`}>
            {children}
        </div>
    );
}

export default Container;