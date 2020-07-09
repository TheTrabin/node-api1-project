/** @format */

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const Inhabitant = (props) => {
    console.log("From Inhabitants: props: ", props)
    const { push } = useHistory();

    const FetchUser = () => {

    }
    const getNewList = () => {
        axios
          .get("http://localhost:5000/api/users")
          .then(res => 
            props.setIssueList(res.data)
            )
          .catch(err => console.log(err.response));
      };
};

export default Inhabitant;
