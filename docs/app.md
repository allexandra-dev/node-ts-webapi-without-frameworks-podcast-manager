# Podcast Manager

## Descrição

Um app ao estilo Netflix, onde centralizar diferentes episódios de podcasts separados por categorias.

## Domínio

Podcasts em formato de vídeo.

## Features

- Listar episódios de podcasts em sessões de categorias
  - Categorias disponíveis: saúde, bodybuilder, mentalidade, humor
- Filtrar episódios por nome de podcast

## Implementação

### Feature: Listar episódios por categorias

**Endpoint:** `GET /episodes`

**Response:**

```json
[
  {
    "podcastName": "flow",
    "episode": "ANSU FATI - Flow #618",
    "videoId": "ciAt3vwsdj4",
    "cover": "https://i.ytimg.com/vi/ciAt3vwsdj4/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=ciAt3vwsdj4&list=PLWieWKZeFoVRmUNn9KA2dVpQswo19QkwQ&index=1",
    "categories": ["saúde", "humor", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "MAURO RAMOS [DUBLADOR DO SHREK] - Flow #616",
    "videoId": "w90kxrYhu24",
    "cover": "https://i.ytimg.com/vi/w90kxrYhu24/hqdefault.jpg",
    "link": "https://youtu.be/w90kxrYhu24?list=PLWieWKZeFoVRmUNn9KA2dVpQswo19QkwQ",
    "categories": ["humor", "dublador"]
  }
]
```

**Observações sobre o Response:**
- `cover`: URL simplificada da imagem de capa
- `link`: URL de acesso ao vídeo do YouTube
- `categories`: Array com categorias associadas ao episódio

### Feature: Filtrar episódios por nome de podcast

**Endpoint:** `GET /episodes?podcastName={name}`

**Descrição:** Retorna lista de episódios filtrados pelo nome do podcast enviado como parâmetro. 