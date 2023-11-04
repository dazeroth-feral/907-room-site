export const getTRList = async () => {
    const response = await fetch("http://localhost:3000/api/trashRemoverList");
    const result = await response.json();

    return result;
}