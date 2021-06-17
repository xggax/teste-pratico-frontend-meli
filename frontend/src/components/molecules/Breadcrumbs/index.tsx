import './styles.scss';

interface BreadcrumbsProps {
    categories: string[];
}

export function Breadcrumbs({ categories }: BreadcrumbsProps) {

    return (
        <section className='breadcrumbs'>
            <ul>
                {categories.map((category, index) => {
                    return <li key={index}>{category}</li>
                })}
            </ul>
        </section>
    );
}