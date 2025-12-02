export async function getAllStarships() {
  try {
    // initialize allShips variable to an empty array
    const allShips = [];

    const response = await fetch("https://swapi.dev/api/starships");
    const data = await response.json();
    // console.log(data.next);

    // get the first few starships and then push each ship into the allShips array
    data.results.map((ship) => allShips.push(ship));

    while (data.next) {
      // while they're still pages of additional data, keep fetching those pages
      // .next refers to the next page as the starships data is paginated 
      const res = await fetch(data.next);
      const nextData = await res.json();
      // push each individual ship from these pages into the allShips array 
      nextData.results.map((ship) => allShips.push(ship));
      // repeat the process
      data.next = nextData.next;
    }
    // return the allShips array, now with every starship from every page
    return allShips;
  } catch (e) {
    console.error(e);
  }
}
