let teams = {
  "SK Telecom T1": [
    '0e08ed12-bb8f-4b65-a633-2d5d675a9b5c',
    'd4a1045c-39e2-47fb-a8cc-c1a86df190cf',
    '88e2ed86-f760-47da-b47a-0e70d8aac1c8',
    'cb5d79e6-1fb6-4e37-a967-8364d702bb38',
    '392e8e33-f9a6-4d60-9cdc-33a228f46b90',
    '8193f2b2-95bf-4e7a-b1c1-8f547fb4091d'
  ],
  "TSM": [
    '39f065d6-874d-4131-91ae-8df0c4f13d7a',
    'e816894d-8075-4637-b961-01111437866c',
    'fb582b38-2c46-452c-8118-ab906b22b052',
    'b033a54c-6b6b-409a-98c7-fceacb23167c',
    'e6460db7-b16b-4873-9084-d02492db75e5',
    '0dae40a2-fdcb-4539-9c39-376c545438fb'
  ],
  "Counter Logic Gaming": [
    'bfaec680-01c8-40c4-b34e-222bdfe65570',
    '09bfba35-98f6-4e52-8811-fe1a374783c5',
    '1c88c40d-5970-43b0-8543-fd77b1b500d3',
    '11e2508f-0003-45d0-a41b-7b586c9731d8',
    'b053512c-9434-444a-ba30-c5dca778ee97',
    'dbc12b7c-020e-4cb6-8d08-1f8b2b7806be'
  ],
  "ahq e-Sports Club": [
    'af491644-d6c4-4915-a6f1-37704fe5165c',
    'dbb0d5fd-56d8-4b50-83fb-83fbbf4a3113',
    '951378e6-c4c5-433c-9850-bc6a0e74bd02',
    '00fd6df4-a971-48a8-92f8-133a8646db45',
    '904b50c0-604a-4911-8247-25a1c3978adc',
    'ced5338b-efe5-4c74-ad07-b4bad6de3f0b'
  ],
  "H2K": [
    '35764a04-34b0-481c-b6be-8f52a2abf03e',
    '904b50c0-604a-4911-8247-25a1c3978adc',
    'bc1913c8-6111-4544-a124-c2c76cbdd115',
    '5a98dfee-0c8d-480b-bd67-65acff4c5f11',
    '951378e6-c4c5-433c-9850-bc6a0e74bd02',
    '49ddef58-8052-49d6-9bc7-5a00bb4033ab'
  ],
  "Splyce": [
    'b033a54c-6b6b-409a-98c7-fceacb23167c',
    'e122450a-2774-406a-b095-a3fe5bc910c2',
    'e816894d-8075-4637-b961-01111437866c',
    'a19c5d24-c11a-4446-88e3-f37219e67eb8',
    '43480a99-1baa-4b8f-bc11-7873418daee8',
    '67d039e7-1b49-47d7-a020-b4968fb6376d'
  ],
  "Flash Wolves": [
    '24263e01-a118-4574-9f00-4f4c0daaa6a0',
    '555aa59d-ee07-4145-9b5d-146c58d70465',
    'ff0e5f58-2687-468a-ad5d-f73247280acc',
    '392e8e33-f9a6-4d60-9cdc-33a228f46b90',
    'd4e8a6d4-3501-45d2-b893-4e571801da2f',
    'd4a1045c-39e2-47fb-a8cc-c1a86df190cf'
  ],
  "G2 Esports": [
    'd7684c22-eb65-40bb-8248-f6b72bd88757',
    '737e179c-dfee-4934-bdd1-75620e630194',
    'c0cc8029-c5dd-480e-8c5d-4b1c996d524f',
    '94b9b917-88a6-4d29-8aee-b6cd1d7a80cf',
    '11e2508f-0003-45d0-a41b-7b586c9731d8',
    'dbc12b7c-020e-4cb6-8d08-1f8b2b7806be'
  ],
  "ROX Tigers": [
    '94b9b917-88a6-4d29-8aee-b6cd1d7a80cf',
    'f1ab850f-1cce-4274-88f2-8a6e18e2a405',
    '1c88c40d-5970-43b0-8543-fd77b1b500d3',
    'd7684c22-eb65-40bb-8248-f6b72bd88757',
    'ad07142b-4bfc-4753-8411-71c694aa0f13',
    '09bfba35-98f6-4e52-8811-fe1a374783c5'
  ],
  "Royal Never Give Up": [
    '9b3deba6-be73-4077-850f-ff21531670b5',
    'a19c5d24-c11a-4446-88e3-f37219e67eb8',
    'e6460db7-b16b-4873-9084-d02492db75e5',
    '0dae40a2-fdcb-4539-9c39-376c545438fb',
    'e122450a-2774-406a-b095-a3fe5bc910c2',
    '9d6b5008-e7f8-483e-b89d-14ecb3a91c97'
  ],
  "Edward Gaming": [
    '00fd6df4-a971-48a8-92f8-133a8646db45',
    'f18a5626-740f-4ba3-8712-679dfb0428c5',
    '6ad101aa-7881-48af-b1aa-17635ea80980',
    'ced5338b-efe5-4c74-ad07-b4bad6de3f0b',
    'bc1913c8-6111-4544-a124-c2c76cbdd115',
    '49ddef58-8052-49d6-9bc7-5a00bb4033ab'
  ],
  "INTZ e-Sports": [
    'f18a5626-740f-4ba3-8712-679dfb0428c5',
    '35764a04-34b0-481c-b6be-8f52a2abf03e',
    'af491644-d6c4-4915-a6f1-37704fe5165c',
    '6ad101aa-7881-48af-b1aa-17635ea80980',
    '5a98dfee-0c8d-480b-bd67-65acff4c5f11',
    'dbb0d5fd-56d8-4b50-83fb-83fbbf4a3113'
  ],
  "Samsung Galaxy": [
    '43480a99-1baa-4b8f-bc11-7873418daee8',
    '9d6b5008-e7f8-483e-b89d-14ecb3a91c97',
    '67d039e7-1b49-47d7-a020-b4968fb6376d',
    '39f065d6-874d-4131-91ae-8df0c4f13d7a',
    '9b3deba6-be73-4077-850f-ff21531670b5',
    'fb582b38-2c46-452c-8118-ab906b22b052'
  ],
  "I May": [
    '0e08ed12-bb8f-4b65-a633-2d5d675a9b5c',
    '6b9ca60d-d3e1-4c9b-9fe7-22526651b354',
    '24263e01-a118-4574-9f00-4f4c0daaa6a0',
    '8193f2b2-95bf-4e7a-b1c1-8f547fb4091d',
    '6d16682f-82e2-47f7-8e57-3ad9ccccadc8',
    'd4e8a6d4-3501-45d2-b893-4e571801da2f'
  ],
  "Albus NoX Luna":[
    'bfaec680-01c8-40c4-b34e-222bdfe65570',
    'ad07142b-4bfc-4753-8411-71c694aa0f13',
    'b053512c-9434-444a-ba30-c5dca778ee97',
    'c0cc8029-c5dd-480e-8c5d-4b1c996d524f',
    '737e179c-dfee-4934-bdd1-75620e630194',
    'f1ab850f-1cce-4274-88f2-8a6e18e2a405'
  ],
  "Cloud9 ": [
    'ff0e5f58-2687-468a-ad5d-f73247280acc',
    '88e2ed86-f760-47da-b47a-0e70d8aac1c8',
    'cb5d79e6-1fb6-4e37-a967-8364d702bb38',
    '6d16682f-82e2-47f7-8e57-3ad9ccccadc8',
    '555aa59d-ee07-4145-9b5d-146c58d70465',
    '6b9ca60d-d3e1-4c9b-9fe7-22526651b354'
  ]
}

module.exports = teams
