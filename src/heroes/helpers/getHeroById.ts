import {heroes} from '../data/heros';
const getHeroById = (id: string) => {
    return heroes.find(hero => hero.id === id) || null;
}
export {
    getHeroById
}