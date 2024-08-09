import ListContainer from './ListContainer';
import { SearchProvider } from '../Contexts/SearchContext';
import { ItemsProvider } from '../Contexts/ItemsContext';

export default function List() {

    return (
           <SearchProvider>
            <ItemsProvider>
                <ListContainer/>
            </ItemsProvider>
            </SearchProvider>
        
    )
}

//le paso al funcion filter items al contexto como un objeto json
