export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Barbarossa',
                author: 'V. Pikul',
                price: 32,
                coverImage: 'https://img3.labirint.ru/rc/69b5eb271d5dcf61b1a4b384fb1d599e/220x340/books65/649689/cover.jpg?1564120142'
            },
            {
                id: 2,
                title: 'Favorit',
                author: 'V. Pikul',
                price: 32,
                coverImage: 'https://s1.livelib.ru/boocover/1000470596/200/0202/boocover.jpg'
            }
        ];
    }
};