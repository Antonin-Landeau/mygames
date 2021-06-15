import React,{FunctionComponent, useState} from 'react'
import { search } from '../Api/RAWG_VG_Services'

const Searchbar:FunctionComponent = () => {
    const [value, setValue] = useState('');
    const [res , setRes] = useState([]);


    /**
     * Reset les chanmps du formulaire
     */
    const resetField = () => {
        setValue('');
    }

    /**
     * récupère les données du formulaire, appel le service de recherche de l'API RAWG
     * passe en props les données 
     * puis reset les champs
     * @param e input du formulaire
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
        e.preventDefault();
        const data = await search(value);
        console.log(data.results);
        resetField();
    }

    const onChange = (e:React.FormEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={onChange} type="text" placeholder="Search"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar
