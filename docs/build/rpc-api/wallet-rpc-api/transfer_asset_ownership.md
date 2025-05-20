Transfer asset ownership to a new public key.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "transfer_asset_ownership",
  "params": {
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "new_owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
    "new_owner_eth_pub_key": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a84d"
  }
}
```
### Request description: 
```
    "asset_id": The ID of the asset, owned by the wallet, that is to be transferred to someone else.
    "new_owner": Public key of the new owner. Standard Ed25519 public key, 32 bytes.
    "new_owner_eth_pub_key": Public key of the new owner. ECDSA public key, 33 bytes. Either new_owner or new_owner_eth_pub_key must be specified.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "status": Status of the call
    "tx_id": Id of the transaction that carries asset transfer ownership operation

```
<sub>Auto-doc built with: 2.1.6.404[bafae7b]</sub>