import { Client, Databases, Query, ID } from "appwrite";
const ProjectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DatabaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CollectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const Endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(Endpoint).setProject(ProjectID);

const database = new Databases(client);
export const updateSearchCount = async (searchTerm, movie) => {
  console.log(ProjectID, DatabaseID, CollectionID);

  try {
    const result = await database.listDocuments(DatabaseID, CollectionID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const document = result.documents[0];
      await database.updateDocument(DatabaseID, CollectionID, document.$id, {
        count: document.count + 1,
      });
    } else {
      await database.createDocument(DatabaseID, CollectionID, ID.unique(), {
        searchTerm: searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
