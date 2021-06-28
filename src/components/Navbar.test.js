import { render } from '@testing-library/react';
import Navbar from "./Navbar"

test("Render a Card Correctly", () => {
    const component = render(<Navbar/>)
    component.getByText('iTunes Search App')
})