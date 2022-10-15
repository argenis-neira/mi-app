import React from "react";
import axios from 'axios';

const About = () => {

    let state = {
        file: null
    }

    const handleFile = (e) => {
        let file = e.target.files[0];
        state.file = file;
    }

    const handleUpload = (e) => {
        let file = state.file;
        let formdata = new FormData();
        if (file) {
            console.log(typeof file);
            formdata.append('file', file);
            formdata.append('filename', "documento");

            axios({
                url: "http://localhost:1337/api/v1/uploadFile",
                method: "POST",
                data: formdata
            }).then((res) => {
                console.log(res);
            }).then((err) => {
                console.log(err);
            })
        }

    }

    const fromPC = (e) => {
        axios({
            url: "http://localhost:1337/api/v1/findFile",
            method: "POST",

        }).then((res) => {
            console.log(res);
        }).then((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>
                Get Appointed Test
            </h1>
            <form>
                <div>
                    <label>Select File</label>
                    <input type="file" name="file" onChange={(e) => handleFile(e)}></input>
                </div>
                <button type="button" onClick={(e) => handleUpload(e)}>Upload</button>
            </form>
            <form>
                <button type="button" onClick={(e) => fromPC(e)}>From PC</button>
            </form>
        </div >
    );
};

export default About;