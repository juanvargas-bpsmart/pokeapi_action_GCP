async function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase().trim();
  const card = document.getElementById("pokemonCard");
  const errorMessage = document.getElementById("errorMessage");

  if (!input) {
    errorMessage.textContent = "Por favor escribe un nombre o número.";
    return;
  }

  try {
    errorMessage.textContent = "";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!response.ok) {
      throw new Error("No encontrado");
    }

    const data = await response.json();

    document.getElementById("pokemonName").textContent = data.name.toUpperCase();
    document.getElementById("pokemonImage").src = data.sprites.front_default;
    document.getElementById("pokemonType").textContent = data.types.map(t => t.type.name).join(", ");
    document.getElementById("pokemonHeight").textContent = data.height;
    document.getElementById("pokemonWeight").textContent = data.weight;

    const statsList = document.getElementById("pokemonStats");
    statsList.innerHTML = "";

    data.stats.forEach(stat => {
      const li = document.createElement("li");
      li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
      statsList.appendChild(li);
    });

    card.classList.remove("hidden");

  } catch (error) {
    card.classList.add("hidden");
    errorMessage.textContent = "Pokémon no encontrado 😢";
  }
}