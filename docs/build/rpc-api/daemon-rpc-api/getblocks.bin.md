NO DESCRIPTION

URL: ```http:://127.0.0.1:11211/getblocks.bin```
### Request: 
```json
{
  "minimum_height": 0
}
```
### Request description: 
```
  "minimum_height": The minimum height of the returning buch of blocks.

```
### Response: 
```json
{
  "blocks": [{
    "block": ""
  }],
  "current_hardfork": 4,
  "current_height": 2555000,
  "start_height": 2000000,
  "status": "OK"
}
```
### Response description: 
```
  "blocks": Bunch of blocks
  "current_hardfork": Current hardfork, used for wallet <-> version verification
  "current_height": Current height of the blockchain.
  "start_height": Starting height of the resulting bunch of blocks.
  "status": Status of the call.

```
<sub>Auto-doc built with: 2.1.8.415[f287916]</sub>