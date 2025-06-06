import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import open from "open";

dotenv.config();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("views"));
app.use(express.json());

app.get("/", (req, res) => {
  const authUrl = `https://webexapis.com/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=${process.env.REDIRECT_URI}&scope=spark:all&state=abc123`;
  res.redirect(authUrl);
});

app.get("/callback", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "callback.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/devices", async (req, res) => {
  console.log("Fetching devices...");
  try {
    const response = await fetch("https://webexapis.com/v1/devices", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BOT_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        res.json(data.items);
      });
  } catch (err) {
    console.error("Error fetching devices:", err);
    res.status(500).send("Failed to fetch devices");
  }
});

app.post("/start-meeting", async (req, res) => {
  console.log("request body:", req.body);
  const { selectedSip } = req.body;

  if (!selectedSip)
    return res.status(400).json({ error: "SIP address is required" });

  const payload = {
    jwt: {
      sub: "farend",
      flow: {
        id: "sip-no-knock",
        data: [
          {
            uri: selectedSip,
          },
        ],
      },
    },
    aud: "a4d886b0-979f-4e2c-a958-3e8c14605e51",
    numGuest: 1,
    numHost: 2,
    provideShortUrls: true,
    verticalType: "gen",
    loginUrlForHost: false,
    jweAlg: "PBES2-HS512+A256KW",
    saltLength: 8,
    iterations: 1000,
    enc: "A256GCM",
    jwsAlg: "HS512",
  };

  try {
    const response = await fetch(
      "https://mtg-broker-a.wbx2.com/api/v2/joseencrypt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BOT_TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    res.status(response.status).json(result);
  } catch (err) {
    console.error("Error starting meeting:", err);
    res.status(500).json({ error: "Failed to start meeting" });
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
