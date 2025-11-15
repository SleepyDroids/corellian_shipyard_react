export async function getAllStarships() {
  try {
    const allShips = [];

    const response = await fetch("https://swapi.dev/api/starships");
    const data = await response.json();
    console.log(data.next);

    data.results.map((ship) => allShips.push(ship));

    while (data.next) {
      const res = await fetch(data.next);
      const nextData = await res.json();
      nextData.results.map((ship) => allShips.push(ship));
      data.next = nextData.next;
    }
    return allShips;
  } catch (e) {
    console.error(e);
  }
}
