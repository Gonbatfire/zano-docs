Return list of assets registered in Zano blockchain

URL: `http:://127.0.0.1:11211/json_rpc`

### Request:

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_assets_list",
  "params": {
    "count": 100,
    "offset": 0
  }
}
```

### Request description:

```
    "count": Number of items to recieve
    "offset": Offset for the item to start copying

```

### Response:

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "assets": [{
      "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped ABC",
      "hidden_supply": false,
      "meta_info": "Stable and private",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "ticker": "ZABC",
      "total_max_supply": 1000000000000000000
    }],
    "status": "OK"
  }
}
```

### Response description:

```
    "assets": List of assets registered in Zano blockchain
      "asset_id": Asset ID
      "current_supply": Currently emitted supply for the given asset (ignored for REGISTER operation).
      "decimal_point": Decimal point.
      "full_name": Full name of the asset.
      "hidden_supply": This field is reserved for future use and will be documented later.
      "meta_info": Any other information associated with the asset in free form.
      "owner": Owner's key, used only for EMIT and UPDATE validation, can be changed by transferring asset ownership.
      "ticker": Ticker associated with the asset.
      "total_max_supply": Maximum possible supply for a given asset, cannot be changed after deployment.
    "status": Status code of operation, OK if success

```
