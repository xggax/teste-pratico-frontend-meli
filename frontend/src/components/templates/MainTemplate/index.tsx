import { MainContent } from '../MainContent';

interface MainTemplateProps {
    children: React.ReactNode;
    Header?: React.ReactNode;
    Breadcrumbs?: React.ReactNode;
}

export function MainTemplate({ children, Header, Breadcrumbs }: MainTemplateProps) {
    return (
        <>
            { Header ?? Header}
            { Breadcrumbs ?? Breadcrumbs}
            <MainContent children={children} />
        </>
    )
}