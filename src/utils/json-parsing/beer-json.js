export const beersList = (beers) => {
    let beersList = [];
    beers.forEach(beer => {
        let beerObject = {
            'id':beer.id,
            'styleId':beer.styleId,
            'img':(beer['labels']) ? beer['labels']['medium'] : "https://deanhume.github.io/beer/images/brewerydb-logo.png", 
            'categoryId':beer.style.categoryId,
            'name':beer.name,
            "abv":parseFloat(beer.abv),
        };
        beersList.push(beerObject);
    });

    return beersList;
}