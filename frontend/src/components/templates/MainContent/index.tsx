import './styles.scss';

interface MainContentProps {
    children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
    return (
        <>
            {
                <div className="main-content">
                    {children}
                </div>
            }
        </>
    )
}