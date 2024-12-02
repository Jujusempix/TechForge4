abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.indexOf(item) === -1) {
      this.favorites.push(item);
    }
    this.favorites.sort();
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}

class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.indexOf(item) === -1) {
      this.favorites.unshift(item);
    }
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}

const movieManager = new MoviesFavoriteManager();
const bookManager = new BooksFavoriteManager();

movieManager.addFavorite("Viagem de Chihiro");
movieManager.addFavorite("Meu amigo Totoro");
movieManager.addFavorite("Viagem de Chihiro");
bookManager.addFavorite("Boa Noite Punpun");
bookManager.addFavorite("A menina do outro lado");
bookManager.addFavorite("Boa Noite Punpun");

console.log("Filmes favoritos:", movieManager.getFavorites());
console.log("Livros favoritos:", bookManager.getFavorites());
