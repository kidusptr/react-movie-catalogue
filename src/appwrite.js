const ProjectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DatabaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CollectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const updateSearchCount = (searchTerm) => {
  console.log(ProjectID, DatabaseID, CollectionID);
};
