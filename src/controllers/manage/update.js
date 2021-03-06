import axios from "axios";
import { getIdToken } from "../../firebase";

const API = process.env.REACT_APP_API;

export const userUpdateMatch = async match => {
  try {
    const token = await getIdToken();

    console.log(match._id);
    const update = await axios.put(`${API}/user/match/${match._id}`, match, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};
export const userCreateMatch = async match => {
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/match}`, match, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};
export const userCreateWrestler = async wrestler => {
  console.log(wrestler);
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/wrestler`, wrestler, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};

export const userCreateTournament = async tournament => {
  console.log(tournament);
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/tournament`, tournament, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};

export const userCreateType = async type => {
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/type`, type, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};

export const userCreatePosition = async type => {
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/position`, type, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};
export const userCreateTeam = async type => {
  try {
    const token = await getIdToken();

    const update = await axios.put(`${API}/user/team`, type, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};
export const userCreateTakedown = async type => {
  try {
    const token = await getIdToken();
    const update = await axios.put(`${API}/user/takedown`, type, {
      headers: { authorization: `Bearer ${token}` },
    });
    return update;
  } catch (e) {
    return e;
  }
};
