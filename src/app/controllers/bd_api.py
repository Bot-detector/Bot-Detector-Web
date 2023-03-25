import aiohttp


class BotDetector:
    def __init__(self, base_url: str = "https://www.osrsbotdetector.com/api"):
        self.base_url = base_url
        self.session = aiohttp.ClientSession()

    async def get_prediction(self, name: str):
        url = f"{self.base_url}/v1/prediction?name={name}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_xp_change(self, token: str, player_id: str):
        url = f"{self.base_url}/v1/hiscore/XPChange?token={token}&player_id={player_id}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_highscore_latest(self, token: str, player_id: str):
        url = f"{self.base_url}/v1/hiscore/Latest?token={token}&player_id={player_id}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_player(self, token: str, player_name: str):
        url = f"{self.base_url}/v1/player?token={token}&player_name={player_name}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data