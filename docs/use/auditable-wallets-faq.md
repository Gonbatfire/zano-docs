---
sidebar_position: 5
---

# Auditable wallets FAQ

### What is an auditable wallet?

Auditable is the type of wallet that allows 3rd party to see the balance and transaction history without permission to spend it or interact in any other way.

### How can I tell if wallet is auditable

It's a wallet with an address in a special format that starts with "aZx", for instance: aZxawNXAuekCXcnzutthLaPZQxAyaofb59FpzNBSCQb7iT7D1nsaxdTCvK4Xhn6nfuRpqDiNjeUNx2J9KWfTXHmDWNQ85v2bpbi

### What is the purpose of auditable wallets?

Having an auditable wallet, you can allow someone to watch your balance and transaction history without giving him/her the right to spend your funds.

### Can I get an auditable address for my existing normal wallet?

No. You need to create a new auditable wallet and transfer your coins into it.

### How can I create an auditable wallet?

Using simplewallet CLI application:

```
>simplewallet.exe --generate-new-auditable-wallet my_auditable_wallet_x
Zano_testnet wallet v1.1.7.96[3e463b0]
password: ***
Generated new AUDITABLE wallet: aZxb9v1DFtaK6Z4bW7UUuaZcmq7MZBzz875eZ5N3vSRa2vWz9wBVE3vVKFGNH8414TTjhiwPz7PTV5ttuZP7GsdDQeWbewpmMaX
view key: 3dd8fd870c694818194c1e7a095a51e2e65486e212baca77fce4157f39287f05
tracking seed:
aZxb9v1DFtaK6Z4bW7UUuaZcmq7MZBzz875eZ5N3vSRa2vWz9wBVE3vVKFGNH8414TTjhiwPz7PTV5ttuZP7GsdDQeWbewpmMaX:3dd8fd870c694818194c1e7a095a51e2e65486e212baca77fce4157f39287f05:1595429852
**********************************************************************
Your wallet has been generated.
**********************************************************************
```

### Using an auditable wallet, how can I give someone the ability to track my balance and transaction history?

You should obtain a **tracking seed** for your auditable wallet and give it to someone you'd like to be able to track your wallet. At the moment, it can only be done by using `tracking_seed` command in simplewallet:

```
>simplewallet.exe --wallet-file my_auditable_wallet_x
Zano_testnet wallet v1.1.7.96[3e463b0]
password: ***
Opened auditable wallet: aZxb9v1DFtaK6Z4bW7UUuaZcmq7MZBzz875eZ5N3vSRa2vWz9wBVE3vVKFGNH8414TTjhiwPz7PTV5ttuZP7GsdDQeWbewpmMaX
Starting refresh...
Refresh done, blocks received: 0
balance: 0.000000000000, unlocked balance: 0.000000000000
**********************************************************************
Use "help" command to see the list of available commands.
**********************************************************************
[Zano wallet aZxb9v]: tracking_seed
Auditable watch-only tracking seed for this wallet is:
aZxb9v1DFtaK6Z4bW7UUuaZcmq7MZBzz875eZ5N3vSRa2vWz9wBVE3vVKFGNH8414TTjhiwPz7PTV5ttuZP7GsdDQeWbewpmMaX:3dd8fd870c694818194c1e7a095a51e2e65486e212baca77fce4157f39287f05:1595429852
Anyone having this tracking seed is able to watch your balance and transaction history, but unable to spend coins.
```

Tracking seed technically is an auditable address, secret view key and a creation timestamp combined with a colon:
aZxawNXAuekCXcnzutthLaPZQxAyaofb59FpzNBSCQb7iT7D1nsaxdTCvK4Xhn6nfuRpqDiNjeUNx2J9KWfTXHmDWNQ85v2bpbi:1be5866b6fda704c0c4a08f9c79c774911fda72dcd8cc8c7ca31bc1a6fda4d0b:1593998615

### I got a tracking seed. How can I track the wallet it is bound to?

You need to restore a wallet using the tracking key the same way you restore a regular wallet using a seed. It could be done in simplewallet:

```
>simplewallet.exe --restore-wallet=wallet-name
Zano_testnet wallet v1.1.7.96[3e463b0]
password: ***
please, enter wallet seed phrase or an auditable wallet's tracking seed: ***
Tracking wallet restored: aZxb9v1DFtaK6Z4bW7UUuaZcmq7MZBzz875eZ5N3vSRa2vWz9wBVE3vVKFGNH8414TTjhiwPz7PTV5ttuZP7GsdDQeWbewpmMaX
**********************************************************************
Your wallet has been restored.
To start synchronizing with the daemon use "refresh" command.
Use "help" command to see the list of available commands.
Always use "exit" command when closing simplewallet to save
current session's state. Otherwise, you will possibly need to synchronize
your wallet again. Your wallet keys is NOT under risk anyway.
**********************************************************************
```

Or in GUI wallet:

![alt auditable-wallets-gui-wallet](../../static/img/use/auditable-wallets-faq/auditable-wallets-gui-wallet.png "auditable-wallets-gui-wallet")

### Are there any restrictions of using auditable wallets?

Only one: you cannot use mixins when you send coins from an auditable wallet.

**_Obsolete_**<br/>
The following limitations were effective until hardfork 2:

1. An alias cannot be assigned to an auditable address.
2. When sending coins from an auditable address the sender address is always hidden.
3. When sending coins to an auditable address the receiver address is always hidden. Once the blockchain passed hardfork 2 these limitations were removed.

### Can I use integrated addresses with the auditable feature?

Yes. An integrated address for an auditable wallet can be generated as usual. Such addresses will have "aiZ" prefix.

### Can I mine PoS with my auditable wallet?

Yes, you can. Also, you can use a corresponding watch-only wallet to monitor your balance without the risk of leaking your spend key. The only tradeoff is you can not use mixins but only directly spend coins from your auditable wallet.
