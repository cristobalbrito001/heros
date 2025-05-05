import { heroes } from "../data/heros";

const getHeroByPublisher = (publisher: string) => {
    const validPublishers = ["DC Comics", "Marvel Comics"];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} is not valid`);
    }
    
    return heroes.filter((hero) => hero.publisher === publisher);
}
export{
    getHeroByPublisher
}