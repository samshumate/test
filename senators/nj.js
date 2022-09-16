const express = require("express");
const axios = require("axios");

const type = "sens";
const state = "NJ";

module.exports = async (req, res) => {
    let getReps = async () => {
        let response = await axios(`https://whoismyrepresentative.com/getall_${type}_bystate.php?state=${state}&output=json`);
        return response;
    };
    let govReps = await getReps();
    res.send(govReps.data.results);
};