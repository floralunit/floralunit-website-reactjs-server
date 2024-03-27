import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv'

dotenv.config();
const PORT = 8080;
const app = express();
const access_token = process.env.ACCESS_TOKEN;
const my_vk_id = 283385573;
const vk_api = 'api.vk.com/method/';


app.use(cors());
const corsOptions = {
    origin: '*',
};

// #region VKMyPhotoAPI
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

// #endregion

// #region EgyptianAPI

app.get('/pharaohs/abydoscanon', (req, res) => {
    const dataPath = './jsons/abydos.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/pharaohs/saqqaracanon', (req, res) => {
    const dataPath = './jsons/saqqara.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/glyphs/all', (req, res) => {
    const dataPath = './jsons/glyphs.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/categoriums/all', (req, res) => {
    const dataPath = './jsons/categoriums.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/gods/all', (req, res) => {
    const dataPath = './jsons/gods.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/phonograms/all', (req, res) => {
    const dataPath = './jsons/phonograms.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

app.get('/test', (req, res) => {
    const dataPath = './jsons/phonograms.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

// #endregion

// #region ArtistPhotos
const raver_house_id = -150736684;

app.get('/getCainPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=281266443&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getCrim3sPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=259673260&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getSummerOfHazePhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=253592274&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getRadostMojaPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=253144787&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getIc3peakPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=252998550&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getWhiteRingPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=245489648&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/getCrystalCastlesPhotos', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const frogsPhotosRequestEndpoint = `https://${vk_api}photos.get/?access_token=${access_token}&owner_id=${raver_house_id}&album_id=247564875&extended=1&count=300&fields=last_seen&v=5.95`;
    const response = await fetch(frogsPhotosRequestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

// #endregion

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});