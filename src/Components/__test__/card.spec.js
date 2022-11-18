import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CarCard from '../CarCard';

describe(
  "Card car", () => {
    it(
        "Seharusnya, tetsting ini mengembalikan html card image", () => {
            render(<CarCard carName="test" carType="1" img="0.png" rentPrice="rp.2000,00" desc="lorem" opt="1" cpty="2" carYear="2010"></CarCard>);
            const htmlBlank = screen.getByText(/test/i);
            expect(htmlBlank).toBeInTheDocument();
        }
    )
  }
);