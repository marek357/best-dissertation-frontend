import axios from "axios";

const buildPrivateAnnotatorClient = (baseURL) => {
  const config = {
    baseURL: baseURL,
    useAuth: false,
    validateStatus: (status) => 200 <= status < 300,
  };
  const client = axios.create(config);
  return client;
};

const testingURL = "http://localhost:8000/api";
const deploymentURL = "https://mt.annopedia.marekmasiak.tech/api";
const testing = false;

export const client = buildPrivateAnnotatorClient(
  testing ? testingURL : deploymentURL
);
