import aiohttp


class BotDetector:
    def __init__(
        self, token: str, base_url: str = "https://www.osrsbotdetector.com/api"
    ):
        self.base_url = base_url
        self.session = aiohttp.ClientSession()
        self.token = token

    async def get_prediction(self, name: str):
        url = f"{self.base_url}/v1/prediction?name={name}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_xp_change(self, player_id: str):
        url = f"{self.base_url}/v1/hiscore/XPChange?token={self.token}&player_id={player_id}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_highscore_latest(self, player_id: str):
        url = f"{self.base_url}/v1/hiscore/Latest?token={self.token}&player_id={player_id}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data

    async def get_player(self, player_name: str):
        url = f"{self.base_url}/v1/player?token={self.token}&player_name={player_name}"
        async with self.session.get(url) as response:
            data = await response.json()
            return data
    
    async def get_project_stats(self):
        url = f"{self.base_url}/site/dashboard/projectstats"
        async with self.session.get(url) as response:
            data = await response.json()
            return data