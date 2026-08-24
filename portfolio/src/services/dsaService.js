const CODEFORCES_API = "https://codeforces.com/api";

export const getCodeforcesUser = async (handle) => {
  const response = await fetch(
    `${CODEFORCES_API}/user.info?handles=${handle}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Codeforces user");
  }

  const data = await response.json();

  if (data.status !== "OK" || !data.result?.length) {
    throw new Error("Codeforces user not found");
  }

  return data.result[0];
};

export const getCodeforcesSubmissions = async (handle) => {
  const response = await fetch(
    `${CODEFORCES_API}/user.status?handle=${handle}&from=1&count=1000`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Codeforces submissions");
  }

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error("Failed to fetch submissions");
  }

  return data.result;
};


