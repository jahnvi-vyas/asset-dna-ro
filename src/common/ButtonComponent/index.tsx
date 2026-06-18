interface Props {
    title: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const ButtonComponent = ({
    title,
    onClick,
    type = 'button'
}: Props) => {
    return (
        <button
            type={type}
            className="submit-btn"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default ButtonComponent;