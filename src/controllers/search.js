import axios from "axios";
const API = process.env.REACT_APP_API;

export const AutocompleteMatch = async query => {
  try {
    if (query.length > 0) {
      var url = `${API}/autosearch/match/${query}`;
      const fetch = await axios.get(url);
      const data = await fetch.data;
      console.log(data);

      return data;
      //console.log(this.state.suggestion);
      //console.log(resdata);
      //return resdata;
    }
  } catch (e) {
    console.log(e);
  }
};

export const AutocompleteWrestler = async query => {
  console.log(query);

  try {
    if (query.length > 0) {
      console.log(query);
      var url = `${API}/autosearch/wrestler/${query}`;
      const fetch = await axios.get(url);
      const data = await fetch.data;
      console.log(data);

      return data;
      //console.log(this.state.suggestion);
      //console.log(resdata);
      //return resdata;
    }
  } catch (e) {
    console.log(e);
  }
};

export const AutocompleteTeam = async query => {
  try {
    if (query.length > 0) {
      var url = `${API}/autosearch/team/${query}`;
      const fetch = await axios.get(url);
      const data = await fetch.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const AutocompleteTournament = async query => {
  try {
    if (query.length > 0) {
      var url = `${API}/autosearch/tournament/${query}`;
      const fetch = await axios.get(url);
      const data = await fetch.data;
      return data;
      //console.log(this.state.suggestion);
      //console.log(resdata);
      //return resdata;
    }
  } catch (e) {
    console.log(e);
  }
};
