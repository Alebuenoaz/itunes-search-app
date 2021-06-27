import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import SongCards from '../components/SongCards'

describe('iTunes API', () => {
    test('Check if the data are correctly fetched', async () => {
        const {getByText} = render(<SongCards/>);

        const track = await waitForElement(
            () => getByText('Album: Eagles Greatest Hits, Vol. 2')
        );
        expect(track).toBeInTheDocument();
    });
});