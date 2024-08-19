// api fetching helper
export const apiData = async (url) => {
    const response = await fetch(url);
    return await response.json();
}