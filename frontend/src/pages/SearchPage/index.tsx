import { useItems } from "../../hooks/useItems";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { ProductList } from "./ProductList";
import { Breadcrumbs } from "../../components/molecules/Breadcrumbs";
import { Header } from "../../components/organisms/Header";

export function SearchPage() {
    const { categories } = useItems();

    return (
        <MainTemplate
            Breadcrumbs={<Breadcrumbs categories={categories} />}
            Header={<Header />}
        >
            <ProductList />
        </MainTemplate>
    )
}