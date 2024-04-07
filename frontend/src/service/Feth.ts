const API_URL = import.meta.env.API_URL || "http://localhost:3000";

export const getAllEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`);
  return response.json();
};
