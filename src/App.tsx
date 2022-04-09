import { ReactComponent as Banner } from '@src/assets/banner.svg';

/**
 * @name App
 * @component
 * @description
 * Componente responsável pela aplicação inteira.
 */
function App(): JSX.Element {
    return (
        <>
            <h1>Boilerplate React</h1>
            <Banner />
        </>
    );
}

export default App;
