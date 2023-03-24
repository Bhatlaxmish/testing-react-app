import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('greeting component',()=>{
test("renders hello world",()=>{/* you can use any text there  */
// arrange
render(<Greeting/>);
// assert
const hello=screen.getBytext('helloworld',{exact:true});
expect(hello).toBeInTheDocument();


});
test('renders good to see you if button was not clicked',()=>{
    render(<Greeting/>);
    const goodtoseyou=screen.getByText('good to see you',{exact:false});
    expect(goodtoseyou).toBeInTheDocument();
});
test(' not  changed button was  clicked',()=>{
    render(<Greeting/>);
    const buttonelement=screen.getByRole('button');
    userEvent.click(buttonelement);
    const goodtoseyou=screen.getByText('changed');
    expect(goodtoseyou).toBeInTheDocument();
});

})

/* arrange act assert  */