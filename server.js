import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import config from './config.json' assert {type: "json"};

const PORT = 5000;
const app = express();
const access_token = config.token;
const my_vk_id = 283385573;
const vk_api = 'api.vk.com/method/';


app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000","http://localhost:3001","https://localhost:3000","https://localhost:3001"],
};

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/getMyPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const myPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${my_vk_id}&album_id=303362130&extended=1&count=200&fields=last_seen&v=5.95`;
    const response = await fetch(myPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getFilmPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const group_vk = -208015038;
    const filmPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${group_vk}&album_id=288012648&extended=1&count=200&fields=last_seen&v=5.95`;
    const response = await fetch(filmPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getLofiPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const group_vk = -221727683;
    const lofiPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${group_vk}&album_id=297433825&extended=1&count=200&fields=last_seen&v=5.95`;
    const response = await fetch(lofiPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getFrogsPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${my_vk_id}&album_id=303399382&extended=1&count=200&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getCatsPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const catsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${my_vk_id}&album_id=303399417&extended=1&count=200&fields=last_seen&v=5.95`;
    const response = await fetch(catsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});