import {heroes} from '../data/heros';
const getHeroByName = (name: string = '') => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return [];
    const heroesList = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
    return heroesList;
}
export{
    getHeroByName
}