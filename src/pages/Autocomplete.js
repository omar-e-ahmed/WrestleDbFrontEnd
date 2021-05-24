import React, { useState, useEffect } from "react";
import { userAutocompleteTeam } from "../controllers/manage/team";
import { Grid, TextField } from "@material-ui/core";

const AutoComplete = ({ searchFunction, name, setFunction }) => {
  const [suggestion, setSuggestion] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestionArray, setSuggestionArray] = useState([""]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onSearchchange = () => {
    try {
      //   setSearch(e.target.value);
      const fetch = async () => {
        const data = await searchFunction(search);
        setSuggestionArray(data);
        console.log(suggestionArray);
      };
      fetch();
      console.log(suggestion);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onSearchchange();
  }, [search]);
  const suggSeleted = value => {
    setSearch(value);
    setSuggestion([]);
  };

  const renderResults = () => {
    try {
      if (suggestionArray.length === 0) {
        return null;
      }
      return (
        isOpen && (
          <Grid className='px-1'>
            <p className='d-flex flex-row'>
              <i>results:</i>
            </p>
            <ul
              className='justify-content-center'
              style={{ listStyleType: "none", paddingLeft: 0, border: "1px" }}
            >
              {suggestionArray.map(item => (
                <li
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={() => {
                    setFunction(item.id);
                    setSearch(item.title);
                    setIsOpen(false);
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Grid>
        )
      );
    } catch (error) {}
  };

  return (
    <Grid
      direction='column'
      className='d-flex'
      container
      className='pl-3 pr-4 pt-2'
    >
      <Grid className='pt-4'>
        <div>
          <TextField
            id='outlined-helperText'
            label={name}
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            helperText={name}
          />
          {/* <input
            value={search}
            // placeholder={`Search by ${searchTopic}`}
            onChange={e => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            style={{
              padding: "5px",

              marginTop: "10px",
              width: "100%",
            }}
          /> */}
          {renderResults()}
        </div>
        {/* <Selector options={[""]} label={"Weight Class"} /> */}
      </Grid>
    </Grid>
  );
};

export default AutoComplete;
