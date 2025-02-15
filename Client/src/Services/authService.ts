import { AxiosError } from "axios";
import API from "./api";
import { formType, SavedIssueType } from "./types";

const endPoints = {
  login: "/auth/local/",
  logout: "logout",
  register: "/auth/local/register",
  fetchIssues: "/issues",
  createIssue: "/issues",
  editIssue: "/issues/",
  getIssueById: "/issues/",
  deleteIssue: "/issues/",
  fetchSavedIssues: "/savedissues",
  createSavedIssues: "/savedissues",
  deleteSavedIssue: "/savedissues/",
};
export const login = async (identifier: string, password: string) => {
  try {
    const response = await API.post(
      endPoints.login,
      {
        identifier: identifier,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error :", error);
    console.error(
      "error logging in:",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await API.post(
      endPoints.register,
      {
        username,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error: ", error);
    console.error(
      "error register",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
};

export const getIssues = async () => {
  try {
    const response = await API.get(endPoints.fetchIssues);
    return response.data.data;
  } catch (error) {
    console.error(
      "error fetching data",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const createIssue = async (issueData:formType) => {
  try {
    const response = await API.post(endPoints.createIssue, {
      data: issueData,
    });
    return response.data;
  } catch (error) {
    console.error(
      "error creating issue",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const editIssue = async (issueId: string, updatedData:formType) => {
  try {
    const response = await API.put(endPoints.editIssue + `${issueId}`, {
      data: updatedData,
    });
    return response.data;
  } catch (error) {
    console.error(
      "error updating issue",
      (error as AxiosError).response?.data || (error as Error).message

    );
    throw error;
  }
};

export const getIssueById = async (issueId: string) => {
  try {
    const response = await API.get(endPoints.getIssueById + `${issueId}`);
    return response.data;
  } catch (error) {
    console.error(
      "error in get issue",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const deleteIssue = async (issueId: string) => {
  try {
    const response = await API.delete(endPoints.deleteIssue + `${issueId}`);
    return response;
  } catch (error) {
    console.error(
      "error delete issue",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const getSavedIssues = async () => {
  try {
    const response = await API.get(endPoints.fetchSavedIssues);
    return response.data.data;
  } catch (error) {
    console.error(
      "error fetching data",
      (error as AxiosError).response?.data || (error as Error).message
    );

    throw error;
  }
};

export const deleteSavedIssue = async (issueId: string) => {
  try {
    const response = await API.delete(
      endPoints.deleteSavedIssue + `${issueId}`
    );
    return response;
  } catch (error) {
    console.error(
      "error delete issue",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};

export const createSavedIssue = async (issueData: SavedIssueType) => {
  try {
    const response = await API.post(endPoints.createSavedIssues, {
      data: issueData,
    });
    return response.data;
  } catch (error) {
    console.error(
      "error creating saved issue",
      (error as AxiosError).response?.data || (error as Error).message
    );
    throw error;
  }
};
