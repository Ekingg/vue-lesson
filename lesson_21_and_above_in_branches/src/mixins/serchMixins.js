//mixins used to externalize popular blocks(functionality) in code

export default {
  computed: {
    filteredPlanets: function () {
      return this.planets.filter((planet) => {
        return planet.description.toLowerCase().match(this.searchPlanet.toLowerCase()) ||
          planet.name.toLowerCase().match(this.searchPlanet.toLowerCase());
      })
    }
  }
}
