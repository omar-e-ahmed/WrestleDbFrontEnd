// import queryString from "query-string";
import axios from "axios";
import firebase from "firebase";
import { getIdToken } from "../firebase";

const API = "http://localhost:5000";

// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

export const getMatchByWrestlerId = id => {
  try {
    const data = axios.get(`${API}/match/wrestler/list/${id}`, {});
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWrestlerById = id => {
  try {
    const data = axios.get(`${API}/wrestler/${id}`, {});
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMatches = sortBy => {
  return axios
    .get(`${API}/matches?sortBy=${sortBy}&order=desc&limit=6`)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getTournaments = () => {
  return axios
    .get(`${API}/tournament`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log(err));
};
export const getWrestlersList = () => {
  return axios
    .get(`${API}/wrestlers`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getStatCategories = () => {
  return fetch(`${API}/stat/categories`, {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const list = params => {
  //   const query = queryString.stringify(params);
  const query = "";
  console.log("query", query);
  return fetch(`${API}/products/search?${query}`, {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getMatch = matchId => {
  return axios
    .get(`${API}/match/${matchId}`)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//////Getting Matches By/////////////
export const getMatchByWrestler = async (wrestlerId, filters, skip, limit) => {
  try {
    let skipNum = 0;
    if (skip > 0) {
      skipNum = skip * 20;
    }
    const data = axios.get(`${API}/match/wrestler/${wrestlerId}`, {
      params: { filters, skip: skipNum },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMatchByTournament = async (id, filters, skip, limit) => {
  try {
    let skipNum = 0;
    if (skip > 0) {
      skipNum = skip * 20;
    }
    const data = axios.get(`${API}/match/tournament/${id}`, {
      params: { filters, skip: skipNum },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
///added await hopefully doesnt break
export const getMatchByTeam = async (team, filters, skip, limit) => {
  try {
    let skipNum = 0;
    if (skip > 0) {
      skipNum = skip * 20;
    }
    const data = axios.get(`${API}/matches/team/${team}`, {
      params: { filters, skip: skipNum },
    });
    console.log(filters);
    return data;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////////////
export const listRelated = wrestlerId => {
  return fetch(`${API}/match/${wrestlerId}`)
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
/////////////////////////////////

/////////Get top stats///////////
//////////////////////////////////

export const getGeneralStats = async () => {
  try {
    const data = axios.get(`${API}/stats/general`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const individualProfileStats = async id => {
  try {
    console.log(id);
    const data = axios.get(`${API}/stats/wrestler/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////////
///Techniques////
export const getAllTechniques = async (
  wrestlerId,
  filters,
  skip
  // limit,
) => {
  try {
    let skipNum = 0;
    if (skip > 0) {
      skipNum = skip * 20;
    }
    const token = await getIdToken();
    const data = axios.get(`${API}/techniques/all`, {
      params: { filters, skip: skipNum },

      headers: { authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Patch
export const updateMatch = async match => {
  try {
    console.log(match._id);
    const update = await axios.put(`${API}/match/${match._id}`, match);
    console.log(update);
  } catch (e) {
    console.log("wwhwhwhwhwh");
    console.log(e);
  }
};

export const createWrestler = async wrestler => {
  console.log(wrestler);
  try {
    const update = await axios.put(`${API}/wrestler`, wrestler);
    console.log(update);
  } catch (e) {
    console.log("THERE was an error");
    console.log(e);
  }
};

export const createTournament = async tournament => {
  console.log(tournament);
  try {
    const update = await axios.put(`${API}/tournament`, tournament);
    console.log(update);
  } catch (e) {
    console.log("THERE was an error");
    console.log(e);
  }
};
