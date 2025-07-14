Update asset descriptor(you can change only owner so far)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "update_asset",
  "params": {
    "asset_descriptor": {
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped ABC",
      "hidden_supply": false,
      "meta_info": "{ \"some_arbitrary_field_name\": \"some arbitrary value\"}",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "owner_eth_pub_key": "",
      "ticker": "ZABC",
      "total_max_supply": 1000000000000000000
    },
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d"
  }
}
```
### Request description: 
```
    "asset_descriptor": Descriptor that holds all information about asset that need to be updated (only owner could be updated)
      "current_supply": Currently emitted supply for the given asset (ignored for REGISTER operation).
      "decimal_point": Decimal point.
      "full_name": Full name of the asset.
      "hidden_supply": This field is reserved for future use and will be documented later.
      "meta_info": Any other information associated with the asset, by default in a json format.
      "owner": Owner's key, used only for EMIT and UPDATE validation, can be changed by transferring asset ownership.
      "owner_eth_pub_key": [Optional] Owner's key in the case when ETH signature is used.
      "ticker": Ticker associated with the asset.
      "total_max_supply": Maximum possible supply for a given asset, cannot be changed after deployment.
    "asset_id": Id of the asset to update

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "tx_id": Id of transaction that carries asset registration command, asset would be registered as soon as transaction got confirmed

```
<sub>Auto-doc built with: 2.1.8.415[f287916]</sub>