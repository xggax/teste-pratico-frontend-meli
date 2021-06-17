import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Button } from '../../../../components/atoms/Button';

describe('Button Search Component', () => {
    it('Button renders correctly with children', () => {
        render(
            <Button>Pesquisar</Button>
        )

        expect(screen.getByText('Pesquisar')).toBeInTheDocument();
    })

    it('Button is receiving search button class', () => {
        render(
            <Button>Pesquisar</Button>
        )

        expect(screen.getByText('Pesquisar')).toHaveClass('search-button');
    })
})