import { Client, Databases } from "appwrite";
const ProjectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DatabaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CollectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const Endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(Endpoint).setProject(ProjectID);

const database = new Databases(client);
export const updateSearchCount = (searchTerm) => {
  console.log(ProjectID, DatabaseID, CollectionID);
};
