import { useEffect, useState } from 'react';
import { Books } from '../interfaces/books';
import Http from '../utils/http';

function useGetDataBooks(route: any) {
    
    const [bookDataDetail, setBookDataDetail] = useState<Books>();
    const [booksByGenre, setBooksByGenre] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await Http.instance.get('http://127.0.0.1:3000/books')
            const booksByGenre = response.filter((query: Books) => {
                return query.genre.includes(route.params.genre)
            })
            console.log('route.params: ', route.params);
            setBookDataDetail({ ...route.params });
            setBooksByGenre(booksByGenre);
        })();
    }, [route.params]);

    return {
        bookDataDetail,
        booksByGenre,
    }
}

export default useGetDataBooks;
