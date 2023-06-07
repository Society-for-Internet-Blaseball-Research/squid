# Usage
[squid.sibr.dev](https://squid.sibr.dev) is a small site that allows you to create blaseball takeover messages. This is done through http queries. Your first quiery is prepended with a `?`, the following ones with an `&`. Text must be [URL Encoded](https://www.urlencoder.io/). For example: `http://localhost:8000/?type=lootcrates&text=this%20is%20an%20example`

To set the entity, use the query `type`. See [The List Below](#types) for avalible types.
To set the text, use the query `text`. This must be [URL Encoded](https://www.urlencoder.io/).

# Types
## Blinky
- chef
- fedora
- default
- sunglasses
- 3d
- 2d
- wave

## Coin
- coin
- scattered
- melting
  
## Peanut
- shelled-one
- shelled-two
- tutorial

## Microphone
- microphone
- microphone-tweet

## Reader
- reader

## Lōotcrates
- lootcrates

## Namerifeht
- namerifeht
- namerifeht-ball

## Misc
- ballclark