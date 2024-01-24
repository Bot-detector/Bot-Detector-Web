from typing import List

import aiohttp
from pydantic import BaseModel


class Campaign(BaseModel):
    id: str
    type: str
    attributes: dict
    relationships: dict


class CampaignsResponse(BaseModel):
    data: List[Campaign]


class Member(BaseModel):
    id: str
    type: str
    attributes: dict
    relationships: dict


class MembersResponse(BaseModel):
    data: List[Member]


class Patreon:
    def __init__(
        self,
        client_id: str,
        client_secret: str,
        base_url: str = "https://www.patreon.com/api/oauth2/v2",
    ):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = base_url
        self.session = aiohttp.ClientSession()
        self.access_token = None
        self.headers = None

    async def _client_authenticate(self):
        # Step 1: Exchange your client credentials for an access token
        data = {
            "grant_type": "client_credentials",
            "client_id": self.client_id,
            "client_secret": self.client_secret,
            "scope": "identity campaigns",
        }
        token_url = f"{self.base_url}/oauth2/token"
        async with self.session.post(token_url, data=data) as resp:
            token_data = await resp.json()
            self.access_token = token_data["access_token"]
            self.headers = {"Authorization": f"Bearer {self.access_token}"}

    async def _get_headers(self):
        # Check if we are authenticated
        if not self.headers:
            await self._client_authenticate()

        return self.headers

    async def get_campaigns(self) -> CampaignsResponse:
        headers = await self._get_headers()

        url = f"{self.base_url}/campaigns"
        async with self.session.get(url, headers=headers) as resp:
            data = await resp.json()
            return CampaignsResponse(**data)

    async def get_members(self, campaign_id: str) -> MembersResponse:
        headers = await self._get_headers()

        url = f"{self.base_url}/campaigns/{campaign_id}/members"
        async with self.session.get(url, headers=headers) as resp:
            data = await resp.json()
            return MembersResponse(**data)

    async def get_member(self, member_id: str) -> Member:
        headers = await self._get_headers()

        url = f"{self.base_url}/members/{member_id}"
        async with self.session.get(url, headers=headers) as resp:
            data = await resp.json()
            return Member(**data)

    async def get_identity(self):
        headers = await self._get_headers()

        url = f"{self.base_url}/identity"
        async with self.session.get(url, headers=headers) as resp:
            return await resp.json()
