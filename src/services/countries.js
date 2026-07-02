export async function getCountries() {
  const response = await fetch("/public/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
}