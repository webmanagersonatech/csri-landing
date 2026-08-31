// lib/api.ts

export const API_BASE_URL = "https://sonacsri.com/backend/api";

const CRM_API_URL = "https://crm-backend-1-td96.onrender.com/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjQzNjE5OWIxNGU3ZjgzNWUxODk5YyIsInJvbGUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJ2aW5vQHlvcG1haWwuY29tIiwiaWF0IjoxNzY0NjYyNDI0LCJleHAiOjE3NjQ3NDg4MjR9.BPqDchO2aphnKP2XFEOZcRYKXXmxXdoTBS9PfwXAIfM";


// 🔥 POST
export async function postData(endpoint: string, data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    return { status: "error", message: "Something went wrong" };
  }
}



// 🔥 GET (with Token) — CRM Leads Fetch
export async function getLeads() {
  try {
    const response = await fetch(`${CRM_API_URL}/leads`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch leads");

    return await response.json();
  } catch (error) {
    console.error("GET ERROR:", error);
    return null;
  }
}
